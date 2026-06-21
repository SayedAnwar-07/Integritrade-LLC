'use client'

import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import {
  User,
  MapPin,
  ClipboardList,
  ChevronRight,
  ChevronLeft,
  Send,
  AlertCircle,
  Loader2,
} from 'lucide-react'
import AddressAutocomplete from '@/components/contact/AddressAutocomplete'

// ─── TYPES ──────────────────────────────────────────────────────────────────
interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  address: string
  address2: string
  city: string
  state: string
  zip: string
  preferredDate: string
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
  address: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
  preferredDate: '',
  estimatedQuantity: '',
  deploymentUrgency: '',
  message: '',
}

// ─── OPTIONS (value = stored/email slug, label = shown to user) ───────────────
type Option = { value: string; label: string }

const SERVICE_OPTIONS: Option[] = [
  { value: 'basic-recycling', label: 'Basic Recycling' },
  { value: 'certified-data-destruction', label: 'Certified Data Destruction' },
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

const STEPS = [
  { id: 0, label: 'Contact', icon: User },
  { id: 1, label: 'Location', icon: MapPin },
  { id: 2, label: 'Details', icon: ClipboardList },
] as const

// ─── SHARED STYLES ────────────────────────────────────────────────────────────
const baseInput =
  'w-full rounded-md bg-white dark:bg-dark-secondary text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 border transition-all duration-200 outline-none px-3.5 py-2.5 text-sm focus:border-green-400 dark:focus:border-green-500'

const inputBorder = (hasError?: boolean) =>
  hasError
    ? 'border-red-400 dark:border-red-500/70 focus:ring-red-100 dark:focus:ring-red-900/40 focus:border-red-400'
    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'

const labelClass =
  'block text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2'

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function RequestPickupForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormData>(INITIAL_DATA)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Auto-resizing message textarea
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const resizeMessage = () => {
    const el = messageRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }
  useEffect(() => {
    resizeMessage()
  }, [data.message, step])

  const update = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
    // Clear the field's error as the user corrects it
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  // ─── VALIDATION ─────────────────────────────────────────────────────────────
  const validateStep = (current: number): FormErrors => {
    const e: FormErrors = {}

    if (current === 0) {
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
    }

    if (current === 1) {
      if (!data.address.trim()) e.address = 'Street address is required.'
      if (!data.city.trim()) e.city = 'City is required.'
      if (!data.state.trim()) e.state = 'State is required.'
      if (!data.zip.trim()) {
        e.zip = 'ZIP code is required.'
      } else if (!/^\d{4,10}$/.test(data.zip.trim())) {
        e.zip = 'Please enter a valid ZIP code.'
      }
    }

    if (current === 2) {
      if (!data.service) e.service = 'Please select a service.'
      if (!data.estimatedQuantity) e.estimatedQuantity = 'Please select an estimated quantity.'
      if (!data.deploymentUrgency) e.deploymentUrgency = 'Please select a deployment urgency.'
    }

    return e
  }

  const handleNext = () => {
    const e = validateStep(step)
    setErrors(e)
    if (Object.keys(e).length === 0) setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }

  const handleBack = () => {
    setErrors({})
    setStep((s) => Math.max(s - 1, 0))
  }

  const resetForm = () => {
    setData(INITIAL_DATA)
    setErrors({})
    setStep(0)
  }

  // ─── SUBMIT (EmailJS) ─────────────────────────────────────────────────────────
const handleSubmit = async () => {
  const e = validateStep(2)
  setErrors(e)
  if (Object.keys(e).length > 0) return

  const serviceId = process.env.NEXT_PUBLIC_BOOKING_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_BOOKING_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_BOOKING_EMAILJS_PUBLIC_KEY
  const makeWebhookUrl = process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL

  const templateParams = {
    name: data.name,
    company: data.company || 'N/A',
    email: data.email,
    phone: data.phone,
    address: data.address,
    address2: data.address2 || 'N/A',
    city: data.city,
    state: data.state,
    zip: data.zip,
    service: labelFor(SERVICE_OPTIONS, data.service),
    estimatedQuantity: labelFor(QUANTITY_OPTIONS, data.estimatedQuantity),
    deploymentUrgency: labelFor(URGENCY_OPTIONS, data.deploymentUrgency),
    message: data.message || 'No additional message',
    time: new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }),
  }

  console.log('=== FORM DATA ===')
  console.log(data)

  console.log('=== TEMPLATE PARAMS ===')
  console.log(templateParams)

  const sendMakeAlert = async (errorMessage: string) => {
    if (!makeWebhookUrl) {
      console.error('Missing NEXT_PUBLIC_MAKE_WEBHOOK_URL')
      return
    }

    const payload = {
      alertType: 'EmailJS Failure',
      source: 'Integritrade Service Booking Form',
      error: errorMessage,
      submittedAt: templateParams.time,
      ...templateParams,
    }

    console.log('=== WEBHOOK PAYLOAD ===')
    console.log(JSON.stringify(payload, null, 2))

    try {
      const response = await fetch(makeWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      console.log('Webhook status:', response.status)
      console.log('Webhook ok:', response.ok)
    } catch (webhookError) {
      console.error('Make webhook alert failed:', webhookError)
    }
  }

  if (!serviceId || !templateId || !publicKey) {
    console.error('Missing EmailJS env vars. Restart the dev server after editing .env.')
    await sendMakeAlert('Missing EmailJS environment variables')
    toast.error('Failed to send message. Please try again.')
    return
  }

  setIsSubmitting(true)

  try {
    console.log('Sending EmailJS request...')

    const result = await emailjs.send(serviceId, templateId, templateParams, {
      publicKey,
    })

    console.log('=== EMAILJS RESULT ===')
    console.log(result)

    if (result.status === 200) {
      toast.success('Submission successful. Our team will respond soon.')
      resetForm()
    } else {
      await sendMakeAlert(`EmailJS returned non-200 status: ${result.status}`)
      toast.error('Failed to send message. Please try again.')
    }
  } catch (err) {
    console.error('=== EMAILJS ERROR ===')
    console.error(err)

    await sendMakeAlert(err instanceof Error ? err.message : String(err))

    toast.error('Failed to send message. Please try again.')
  } finally {
    setIsSubmitting(false)
  }
}

  // ─── HELPERS ──────────────────────────────────────────────────────────────────
  const inputClass = (field: keyof FormData) => `${baseInput} ${inputBorder(!!errors[field])}`

  const ErrorMsg = ({ field }: { field: keyof FormData }) =>
    errors[field] ? (
      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-500">
        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
        {errors[field]}
      </p>
    ) : null

  // ─── FORM ─────────────────────────────────────────────────────────────────────
  return (
    <div>

      {/* Stepper */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          {STEPS.map((s, i) => {
            const Icon = s.icon
            const active = i === step
            const complete = i < step
            return (
              <div key={s.id} className="flex flex-1 items-center last:flex-none">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition ${
                      active || complete
                        ? 'border-green-600 bg-green-600 text-white'
                        : 'border-gray-300 bg-white text-gray-400 dark:border-gray-700 dark:bg-dark'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium ${
                      active || complete
                        ? 'text-gray-900 dark:text-white'
                        : 'text-gray-400 dark:text-gray-500'
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={`mx-2 h-px flex-1 transition ${
                      complete ? 'bg-green-600' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  />
                )}
              </div>
            )
          })}
        </div>
        {/* Progress bar */}
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
          <div
            className="h-full rounded-full bg-green-600 transition-all duration-300"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* ─── STEP 1: CONTACT ─── */}
      {step === 0 && (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={data.name}
              onChange={(e) => update('name', e.target.value)}
              placeholder="Full Name"
              className={inputClass('name')}
            />
            <ErrorMsg field="name" />
          </div>

          <div>
            <label htmlFor="company" className={labelClass}>
              Company Name
            </label>
            <input
              id="company"
              type="text"
              value={data.company}
              onChange={(e) => update('company', e.target.value)}
              placeholder="Company Name (optional)"
              className={inputClass('company')}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => update('email', e.target.value)}
              placeholder="Email Address"
              className={inputClass('email')}
            />
            <ErrorMsg field="email" />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={data.phone}
              onChange={(e) => update('phone', e.target.value)}
              placeholder="Phone Number"
              className={inputClass('phone')}
            />
            <ErrorMsg field="phone" />
          </div>
        </div>
      )}

      {/* ─── STEP 2: LOCATION ─── */}
      {step === 1 && (
        <div className="mt-8 space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="address" className={labelClass}>
                Street Address <span className="text-red-500">*</span>
              </label>
              <AddressAutocomplete
                id="address"
                value={data.address}
                onChange={(v) => update('address', v)}
                onSelect={(s) => {
                  // Auto-fill the whole location step from the picked address.
                  // Functional setState in `update` means these merge cleanly.
                  update('address', s.street_line)
                  update('address2', s.secondary)
                  update('city', s.city)
                  update('state', s.state)
                  update('zip', s.zipcode)
                }}
                placeholder="Start typing your address…"
                inputClassName={inputClass('address')}
                aria-invalid={!!errors.address}
              />
              <ErrorMsg field="address" />
            </div>

            <div>
              <label htmlFor="address2" className={labelClass}>
                Address Line 2
              </label>
              <input
                id="address2"
                type="text"
                value={data.address2}
                onChange={(e) => update('address2', e.target.value)}
                placeholder="Apartment, suite, building, floor (optional)"
                className={inputClass('address2')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div>
              <label htmlFor="city" className={labelClass}>
                City <span className="text-red-500">*</span>
              </label>
              <input
                id="city"
                type="text"
                value={data.city}
                onChange={(e) => update('city', e.target.value)}
                placeholder="City"
                className={inputClass('city')}
              />
              <ErrorMsg field="city" />
            </div>

            <div>
              <label htmlFor="state" className={labelClass}>
                State <span className="text-red-500">*</span>
              </label>
              <input
                id="state"
                type="text"
                value={data.state}
                onChange={(e) => update('state', e.target.value)}
                placeholder="State"
                className={inputClass('state')}
              />
              <ErrorMsg field="state" />
            </div>

            <div>
              <label htmlFor="zip" className={labelClass}>
                ZIP Code <span className="text-red-500">*</span>
              </label>
              <input
                id="zip"
                type="text"
                inputMode="numeric"
                value={data.zip}
                onChange={(e) => update('zip', e.target.value)}
                placeholder="Zip Code"
                className={inputClass('zip')}
              />
              <ErrorMsg field="zip" />
            </div>
          </div>
        </div>
      )}

      {/* ─── STEP 3: DETAILS ─── */}
      {step === 2 && (
        <div className="mt-8 space-y-5">
          <div>
            <label htmlFor="service" className={labelClass}>
              Service Interest <span className="text-red-500">*</span>
            </label>
            <Select value={data.service} onValueChange={(v) => update('service', v)}>
              <SelectTrigger id="service" className={inputClass('service')}>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="dark:bg-dark-secondary dark:text-gray-100 border-gray-200 dark:border-gray-700">
                {SERVICE_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value} className="whitespace-normal py-2.5">
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <ErrorMsg field="service" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="estimatedQuantity" className={labelClass}>
                Estimated Quantity <span className="text-red-500">*</span>
              </label>
              <Select
                value={data.estimatedQuantity}
                onValueChange={(v) => update('estimatedQuantity', v)}
              >
                <SelectTrigger id="estimatedQuantity" className={inputClass('estimatedQuantity')}>
                  <SelectValue placeholder="Select quantity" />
                </SelectTrigger>
                <SelectContent className="dark:bg-dark-secondary dark:text-gray-100 border-gray-200 dark:border-gray-700">
                  {QUANTITY_OPTIONS.map((opt) => (
                    <SelectItem
                      key={opt.value}
                      value={opt.value}
                      className="whitespace-normal py-2.5"
                    >
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <ErrorMsg field="estimatedQuantity" />
            </div>

            <div>
              <label htmlFor="deploymentUrgency" className={labelClass}>
                Deployment Urgency <span className="text-red-500">*</span>
              </label>
              <Select
                value={data.deploymentUrgency}
                onValueChange={(v) => update('deploymentUrgency', v)}
              >
                <SelectTrigger id="deploymentUrgency" className={inputClass('deploymentUrgency')}>
                  <SelectValue placeholder="Select urgency" />
                </SelectTrigger>
                <SelectContent className="w-[var(--radix-select-trigger-width)] dark:bg-dark-secondary dark:text-gray-100 border-gray-200 dark:border-gray-700">
                  {URGENCY_OPTIONS.map((opt) => (
                    <SelectItem
                      key={opt.value}
                      value={opt.value}
                      className="whitespace-normal py-2.5"
                    >
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <ErrorMsg field="deploymentUrgency" />
            </div>
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              ref={messageRef}
              rows={4}
              value={data.message}
              onChange={(e) => update('message', e.target.value)}
              onInput={resizeMessage}
              placeholder="Tell us anything else about your request (optional)"
              className={`${inputClass('message')} resize-none overflow-hidden`}
            />
            <p className="mt-1 text-xs text-gray-400">{data.message.length} characters</p>
          </div>
        </div>
      )}

      {/* ─── NAVIGATION ─── */}
      <div className="mt-8 flex items-center justify-between">
        {step > 0 ? (
          <button
            type="button"
            onClick={handleBack}
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-50 dark:border-gray-700 dark:bg-dark dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>
        ) : (
          <span />
        )}

        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-2 rounded-md bg-green-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
          >
            Continue
            <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-md bg-green-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Submit Service Request
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  )
}