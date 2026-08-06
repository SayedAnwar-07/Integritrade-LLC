'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { AlertCircle, Loader2, Send } from 'lucide-react'

type Fields = {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

const INITIAL: Fields = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
}

const SERVICE_OPTIONS = [
  { value: '', label: 'Select a service (optional)' },
  { value: 'Basic Recycling', label: 'Basic Recycling' },
  { value: 'Certified Data Destruction', label: 'Certified Data Destruction' },
  { value: 'IT Asset Disposition', label: 'IT Asset Disposition' },
  { value: 'Data Center Decommissioning', label: 'Data Center Decommissioning' },
  { value: 'IT Equipment Buyback', label: 'IT Equipment Buyback' },
  { value: 'Other', label: 'Other / Not sure' },
]

const baseInput =
  'w-full rounded-md bg-white dark:bg-dark-secondary text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 border transition-all duration-200 outline-none px-3.5 py-2.5 text-sm focus:border-green-400 dark:focus:border-green-500'

const inputBorder = (hasError?: boolean) =>
  hasError
    ? 'border-red-400 dark:border-red-500/70 focus:border-red-400'
    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'

const labelClass =
  'block text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2'

export default function ConsultationForm({ industry }: { industry?: string }) {
  const [data, setData] = useState<Fields>(INITIAL)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const set = (field: keyof Fields, value: string) => {
    setData((d) => ({ ...d, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const validate = () => {
    const e: Partial<Record<keyof Fields, string>> = {}
    if (!data.name.trim()) e.name = 'Name is required'
    if (!data.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e.email = 'Enter a valid email'
    if (!data.message.trim()) e.message = 'Tell us a bit about your needs'
    return e
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

    if (!serviceId || !templateId || !publicKey) {
      toast.error(
        'The form is temporarily unavailable. Please email info@integritradellc.com.'
      )
      return
    }

    const submittedAt = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    })
    const requestId = `ITR-${Date.now().toString().slice(-6)}`
    const sourceLabel = industry
      ? `Free Consultation — ${industry}`
      : 'Free Consultation'

    // Reuses the existing booking EmailJS template; booking-only fields are N/A.
    const templateParams = {
      name: data.name,
      company: data.company || 'N/A',
      email: data.email,
      phone: data.phone || 'N/A',
      address: 'N/A',
      pickupAddress: 'N/A',
      address2: 'N/A',
      city: 'N/A',
      state: 'N/A',
      zip: 'N/A',
      service: data.service || 'Free consultation (unspecified)',
      estimatedQuantity: 'N/A',
      deploymentUrgency: 'N/A',
      estimatedEquipment: 'N/A',
      message: `[${sourceLabel}] ${data.message}`,
      requestId,
      date: submittedAt,
      time: submittedAt,
      reply_to: data.email,
      from_name: data.name,
      from_email: data.email,
      to_email: data.email,
    }

    setIsSubmitting(true)
    try {
      const result = await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      })
      if (result.status === 200) {
        toast.success('Thanks! Our team will reach out within one business day.')
        setData(INITIAL)
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } catch (err) {
      if (makeWebhookUrl) {
        try {
          await fetch(makeWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              alertType: 'EmailJS Failure',
              source: sourceLabel,
              error: err instanceof Error ? err.message : String(err),
              submittedAt,
              data,
            }),
          })
        } catch {
          /* best-effort */
        }
      }
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const Err = ({ field }: { field: keyof Fields }) =>
    errors[field] ? (
      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-500">
        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
        {errors[field]}
      </p>
    ) : null

  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-dark-secondary p-6 shadow-sm">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
        Free Consultation
      </p>
      <h3 className="font-serif text-2xl font-semibold leading-tight text-gray-900 dark:text-white">
        Contact Us for a Free Consultation
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        Tell us about your retired IT assets and our team will respond within one
        business day.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        <div>
          <label className={labelClass}>Full Name</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => set('name', e.target.value)}
            placeholder="Jane Doe"
            className={`${baseInput} ${inputBorder(!!errors.name)}`}
          />
          <Err field="name" />
        </div>

        <div>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => set('email', e.target.value)}
            placeholder="jane@company.com"
            className={`${baseInput} ${inputBorder(!!errors.email)}`}
          />
          <Err field="email" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Phone</label>
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => set('phone', e.target.value)}
              placeholder="(559) 000-0000"
              className={`${baseInput} ${inputBorder(false)}`}
            />
          </div>
          <div>
            <label className={labelClass}>Company</label>
            <input
              type="text"
              value={data.company}
              onChange={(e) => set('company', e.target.value)}
              placeholder="Company"
              className={`${baseInput} ${inputBorder(false)}`}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Service of Interest</label>
          <select
            value={data.service}
            onChange={(e) => set('service', e.target.value)}
            className={`${baseInput} ${inputBorder(false)}`}
          >
            {SERVICE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Message</label>
          <textarea
            value={data.message}
            onChange={(e) => set('message', e.target.value)}
            rows={4}
            placeholder="What do you need help with?"
            className={`${baseInput} ${inputBorder(!!errors.message)} resize-none`}
          />
          <Err field="message" />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[hsl(var(--brand-primary-hover))] hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" /> Request Consultation
            </>
          )}
        </button>

        <p className="text-center text-[11px] text-gray-400 dark:text-gray-500">
          We&apos;ll never share your information.
        </p>
      </form>
    </div>
  )
}
