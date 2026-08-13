'use client'

import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { AlertCircle, Loader2, Send } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  estimatedQuantity: string
  deploymentUrgency: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const INITIAL_DATA: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  estimatedQuantity: '',
  deploymentUrgency: '',
  message: '',
}

type Option = { value: string; label: string }

const SERVICE_OPTIONS: Option[] = [
  { value: 'basic-recycling', label: 'Basic Recycling' },
  { value: 'data-destruction-services', label: 'Certified Data Destruction' },
  { value: 'it-asset-disposition', label: 'IT Asset Disposition' },
  { value: 'data-center-decommissioning', label: 'Data Center Decommissioning' },
  { value: 'lease-return', label: 'Lease Return' },
  { value: 'sales-inquiry', label: 'Sales Inquiry' },
  { value: 'others', label: 'Others' },
]

const QUANTITY_OPTIONS: Option[] = [
  { value: '1-9-units-standard-secure-pickup', label: '1-9 Units (Standard Secure Pickup)' },
  {
    value: '10-49-units-priority-asset-recovery-tier',
    label: '10-49 Units (Priority Asset Recovery Tier)',
  },
  { value: '50-100-units-enterprise-volume', label: '50-100 Units (Enterprise Volume)' },
  {
    value: '100-plus-units-full-office-or-data-center-cleanout',
    label: '100+ / Full Office or Data Center Cleanout',
  },
]

const URGENCY_OPTIONS: Option[] = [
  { value: 'asap-urgent-within-48-72-hours', label: 'ASAP / Urgent — Within 48-72 Hours' },
  { value: 'standard-within-1-2-weeks', label: 'Standard — Within 1-2 Weeks' },
  { value: 'planning-phase-over-2-weeks', label: 'Planning Phase — Over 2 Weeks' },
  {
    value: 'recurring-partnership-we-need-regular-pickup',
    label: 'Recurring Partnership — Monthly / Quarterly',
  },
]

const labelFor = (options: Option[], value: string) =>
  options.find((o) => o.value === value)?.label ?? value

const baseInput =
  'w-full rounded-md bg-white dark:bg-dark-secondary text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 border transition-all duration-200 outline-none px-3.5 py-2.5 text-sm focus:border-green-400 dark:focus:border-green-500'

const inputBorder = (hasError?: boolean) =>
  hasError
    ? 'border-red-400 dark:border-red-500/70 focus:border-red-400'
    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'

const labelClass =
  'block text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2'

export default function RequestPickupForm() {
  const [data, setData] = useState<FormData>(INITIAL_DATA)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const messageRef = useRef<HTMLTextAreaElement>(null)

  const resizeMessage = () => {
    const el = messageRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }

  useEffect(() => {
    resizeMessage()
  }, [data.message])

  const update = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))

    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  const validate = (): FormErrors => {
    const e: FormErrors = {}

    if (!data.name.trim()) e.name = 'Full name is required.'

    if (!data.email.trim()) {
      e.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      e.email = 'Please enter a valid email address.'
    }

    if (!data.phone.trim()) {
      e.phone = 'Phone number is required.'
    } else if (!/^[\d\s()+-]{7,}$/.test(data.phone.trim())) {
      e.phone = 'Please enter a valid phone number.'
    }

    if (!data.service) e.service = 'Please select a service.'

    return e
  }

  const resetForm = () => {
    setData(INITIAL_DATA)
    setErrors({})
  }

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()

    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return

    const serviceId = process.env.NEXT_PUBLIC_BOOKING_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_BOOKING_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_BOOKING_EMAILJS_PUBLIC_KEY
    const makeWebhookUrl = process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL

    const submittedAt = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    })

    const requestId = `ITR-${Date.now().toString().slice(-6)}`

    const selectedService = labelFor(SERVICE_OPTIONS, data.service)
    const selectedQuantity = data.estimatedQuantity
      ? labelFor(QUANTITY_OPTIONS, data.estimatedQuantity)
      : 'Not specified'
    const selectedUrgency = data.deploymentUrgency
      ? labelFor(URGENCY_OPTIONS, data.deploymentUrgency)
      : 'Not specified'

    // Address fields are retained as N/A so the existing EmailJS template,
    // which still references them, keeps rendering correctly.
    const templateParams = {
      name: data.name,
      company: data.company || 'N/A',
      email: data.email,
      phone: data.phone,

      address: 'N/A',
      pickupAddress: 'Not collected — team will confirm on follow-up',
      address2: 'N/A',
      city: 'N/A',
      state: 'N/A',
      zip: 'N/A',

      service: selectedService,
      estimatedQuantity: selectedQuantity,
      deploymentUrgency: selectedUrgency,
      estimatedEquipment: selectedQuantity,

      message: data.message || 'No additional message',

      requestId,
      date: submittedAt,
      time: submittedAt,
      reply_to: data.email,
      from_name: data.name,
      from_email: data.email,
      to_email: data.email,
    }

    const sendMakeAlert = async (errorMessage: string) => {
      if (!makeWebhookUrl) return

      const payload = {
        alertType: 'EmailJS Failure',
        source: 'Integritrade Service Booking Form',
        error: errorMessage,
        submittedAt,
        ...templateParams,
      }

      try {
        await fetch(makeWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } catch (webhookError) {
        console.error('Make webhook alert failed:', webhookError)
      }
    }

    if (!serviceId || !templateId || !publicKey) {
      await sendMakeAlert('Missing EmailJS environment variables')
      toast.error('Failed to send message. Please try again.')
      return
    }

    setIsSubmitting(true)

    try {
      const result = await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      })

      if (result.status === 200) {
        toast.success('Submission successful. Our team will respond soon.')
        resetForm()
      } else {
        await sendMakeAlert(`EmailJS returned non-200 status: ${result.status}`)
        toast.error('Failed to send message. Please try again.')
      }
    } catch (err) {
      await sendMakeAlert(err instanceof Error ? err.message : String(err))
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const Err = ({ field }: { field: keyof FormData }) =>
    errors[field] ? (
      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-500">
        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
        {errors[field]}
      </p>
    ) : null

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name + Email */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Jane Doe"
            className={`${baseInput} ${inputBorder(!!errors.name)}`}
          />
          <Err field="name" />
        </div>

        <div>
          <label className={labelClass}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="jane@company.com"
            className={`${baseInput} ${inputBorder(!!errors.email)}`}
          />
          <Err field="email" />
        </div>
      </div>

      {/* Phone + Company */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="(555) 555-5555"
            className={`${baseInput} ${inputBorder(!!errors.phone)}`}
          />
          <Err field="phone" />
        </div>

        <div>
          <label className={labelClass}>Company</label>
          <input
            type="text"
            value={data.company}
            onChange={(e) => update('company', e.target.value)}
            placeholder="Company name"
            className={`${baseInput} ${inputBorder(false)}`}
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label className={labelClass}>
          Service Needed <span className="text-red-500">*</span>
        </label>
        <select
          value={data.service}
          onChange={(e) => update('service', e.target.value)}
          className={`${baseInput} ${inputBorder(!!errors.service)}`}
        >
          <option value="">Select a service</option>
          {SERVICE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <Err field="service" />
      </div>

      {/* Quantity + Timeline — optional, so nobody stalls on them */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Estimated Quantity</label>
          <select
            value={data.estimatedQuantity}
            onChange={(e) => update('estimatedQuantity', e.target.value)}
            className={`${baseInput} ${inputBorder(false)}`}
          >
            <option value="">Not sure yet</option>
            {QUANTITY_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Timeline</label>
          <select
            value={data.deploymentUrgency}
            onChange={(e) => update('deploymentUrgency', e.target.value)}
            className={`${baseInput} ${inputBorder(false)}`}
          >
            <option value="">Not sure yet</option>
            {URGENCY_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>Message</label>
        <textarea
          ref={messageRef}
          value={data.message}
          onChange={(e) => update('message', e.target.value)}
          rows={4}
          placeholder="Describe the equipment you need retired, approximate volume, and the site location."
          className={`${baseInput} ${inputBorder(false)} resize-none overflow-hidden`}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[hsl(var(--brand-primary-hover))] hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Request Free Consultation
          </>
        )}
      </button>
    </form>
  )
}
