'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '../ui/button'
import {
  Loader2,
  User,
  Mail,
  Phone,
  Building2,
  Send,
} from 'lucide-react'
import toast from 'react-hot-toast'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

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

export default function BookingForm() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState<FormData>({
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
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email is invalid'
    if (!form.phone.trim()) newErrors.phone = 'Phone is required'
    if (!form.service) newErrors.service = 'Service is required'
    if (!form.address.trim()) newErrors.address = 'Address is required'
    if (!form.city.trim()) newErrors.city = 'City is required'
    if (!form.state.trim()) newErrors.state = 'State is required'
    if (!form.zip.trim()) newErrors.zip = 'Zip code is required'
    if (!form.estimatedQuantity) newErrors.estimatedQuantity = 'Estimated quantity is required'
    if (!form.deploymentUrgency) newErrors.deploymentUrgency = 'Deployment urgency is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const formatText = (value: string) =>
  value
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setLoading(true)
    setSubmitStatus('idle')

    try {
      emailjs.init(process.env.NEXT_PUBLIC_BOOKING_EMAILJS_PUBLIC_KEY!)

      const templateParams = {
        reply_to: form.email,
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        address: form.address,
        address2: form.address2,
        city: form.city,
        state: form.state,
        zip: form.zip,
        service: formatText(form.service),
        estimatedQuantity: formatText(form.estimatedQuantity),
        deploymentUrgency: formatText(form.deploymentUrgency),
        message: form.message,
        time: new Date().toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      }

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_BOOKING_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_BOOKING_EMAILJS_TEMPLATE_ID!,
        templateParams
      )

      if (result.status === 200) {
        toast.success('Submission successful. Our team will respond soon.')
        setSubmitStatus('success')
        setForm({
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
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
      setSubmitStatus('error')
    } finally {
      setLoading(false)
    }
  }

  // Shared input styling — used by every <input> & <textarea> below.
  const baseInput =
    'w-full rounded-md bg-white dark:bg-[#013242]/60 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 border transition-all duration-200 outline-none px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800/60 focus:border-blue-400 dark:focus:border-blue-500'
  const inputBorder = (hasError?: boolean) =>
    hasError
      ? 'border-red-400 dark:border-red-500/70 focus:ring-red-100 dark:focus:ring-red-900/40 focus:border-red-400'
      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'

  // Section wrapper — gives the form its corporate "card" feel.
  const Section = ({
    step,
    icon: Icon,
    title,
    subtitle,
    children,
  }: {
    step: string
    icon: React.ElementType
    title: string
    subtitle: string
    children: React.ReactNode
  }) => (
    <section className="relative rounded-xl backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4 px-5 sm:px-6 pt-5 pb-4 border-b border-gray-100 dark:border-gray-700/50">
        <div className="relative flex-shrink-0">
          <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-[#013242] dark:to-[#024257] border border-blue-100 dark:border-blue-900/40 flex items-center justify-center">
            <Icon className="h-5 w-5 text-blue-600 dark:text-blue-300" strokeWidth={2} />
          </div>
          <span className="absolute -top-1.5 -right-1.5 text-[10px] font-bold tracking-wide bg-blue-600 text-white rounded-full h-5 min-w-5 px-1.5 flex items-center justify-center shadow-sm">
            {step}
          </span>
        </div>
        <div className="min-w-0">
          <h3 className="text-[15px] font-semibold text-gray-900 dark:text-gray-50 leading-tight">
            {title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{subtitle}</p>
        </div>
      </div>
      <div className="px-5 sm:px-6 py-5 space-y-4">{children}</div>
    </section>
  )

  // Reusable field-label component
  const FieldLabel = ({
    htmlFor,
    children,
    required,
  }: {
    htmlFor?: string
    children: React.ReactNode
    required?: boolean
  }) => (
    <label
      htmlFor={htmlFor}
      className="block text-xs font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300 mb-4 pl-2"
    >
      {children}
      {required && <span className="text-blue-600 dark:text-blue-400 ml-0.5">*</span>}
    </label>
  )

  const ErrorText = ({ msg }: { msg?: string }) =>
    msg ? (
      <p className="text-red-500 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1">
        <span className="h-1 w-1 rounded-full bg-red-500" />
        {msg}
      </p>
    ) : null

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <FieldLabel htmlFor="name" required>
              Full Name
            </FieldLabel>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                value={form.name}
                onChange={handleChange}
                className={`${baseInput} ${inputBorder(!!errors.name)}`}
              />
            </div>
            <ErrorText msg={errors.name} />
          </div>

          <div>
            <FieldLabel htmlFor="company">Company Name</FieldLabel>
            <div>
             
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter your company name"
                value={form.company}
                onChange={handleChange}
                className={`${baseInput} ${inputBorder(false)}`}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <FieldLabel htmlFor="email" required>
              Email Address
            </FieldLabel>
            <div>
              
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
                value={form.email}
                onChange={handleChange}
                className={`${baseInput} ${inputBorder(!!errors.email)}`}
              />
            </div>
            <ErrorText msg={errors.email} />
          </div>

          <div>
            <FieldLabel htmlFor="phone" required>
              Phone Number
            </FieldLabel>
            <div>
              
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                required
                value={form.phone}
                onChange={handleChange}
                className={`${baseInput} ${inputBorder(!!errors.phone)}`}
              />
            </div>
            <ErrorText msg={errors.phone} />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <FieldLabel htmlFor="address" required>
                Street Address
              </FieldLabel>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your street address"
                required
                value={form.address}
                onChange={handleChange}
                className={`${baseInput} ${inputBorder(!!errors.address)}`}
              />
              <ErrorText msg={errors.address} />
            </div>
            <div>
              <FieldLabel htmlFor="address2">
                Address Line 2
              </FieldLabel>
              <input
                type="text"
                id="address2"
                name="address2"
                placeholder="Apartment, suite, building, floor (optional)"
                value={form.address2}
                onChange={handleChange}
                className={`${baseInput} ${inputBorder(false)}`}
              />
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <FieldLabel htmlFor="city" required>
              City
            </FieldLabel>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter your city name"
              required
              value={form.city}
              onChange={handleChange}
              className={`${baseInput} ${inputBorder(!!errors.city)}`}
            />
            <ErrorText msg={errors.city} />
          </div>

          <div>
            <FieldLabel htmlFor="state" required>
              State
            </FieldLabel>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="Enter your state"
              required
              value={form.state}
              onChange={handleChange}
              className={`${baseInput} ${inputBorder(!!errors.state)}`}
            />
            <ErrorText msg={errors.state} />
          </div>

          <div>
            <FieldLabel htmlFor="zip" required>
              Zip Code
            </FieldLabel>
            <input
              type="text"
              id="zip"
              name="zip"
              placeholder="Enter your zip code"
              required
              value={form.zip}
              onChange={handleChange}
              className={`${baseInput} ${inputBorder(!!errors.zip)}`}
            />
            <ErrorText msg={errors.zip} />
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <FieldLabel required>Service Interest</FieldLabel>
          <Select
            value={form.service}
            onValueChange={(value) => {
              setForm((prev) => ({ ...prev, service: value }))
              if (errors.service) setErrors((prev) => ({ ...prev, service: '' }))
            }}
          >
            <SelectTrigger
              className={`${baseInput} ${inputBorder(!!errors.service)} h-auto py-2.5 [&>span]:text-left`}
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="dark:bg-[#013242] dark:text-gray-100 border-gray-200 dark:border-gray-700">
              <SelectItem className="whitespace-normal py-2.5" value="basic-recycling">
                Basic Recycling
              </SelectItem>
              <SelectItem className="whitespace-normal py-2.5" value="certified-data-destruction">
                Certified Data Destruction
              </SelectItem>
              <SelectItem className="whitespace-normal py-2.5" value="it-asset-disposition">
                IT Asset Disposition
              </SelectItem>
              <SelectItem className="whitespace-normal py-2.5" value="data-center-decommissioning">
                Data Center Decommissioning
              </SelectItem>
              <SelectItem className="whitespace-normal py-2.5" value="lease-return">
                Lease Return
              </SelectItem>
              <SelectItem className="whitespace-normal py-2.5" value="sales-inquiry">
                Sales Inquiry
              </SelectItem>
              <SelectItem className="whitespace-normal py-2.5" value="others">
                Others
              </SelectItem>
            </SelectContent>
          </Select>
          <ErrorText msg={errors.service} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Estimated Quantity */}
          <div>
            <FieldLabel required>
              <span className="inline-flex items-center gap-1.5">
                Estimated Quantity
              </span>
            </FieldLabel>
            <Select
              value={form.estimatedQuantity}
              onValueChange={(value) => {
                setForm((prev) => ({ ...prev, estimatedQuantity: value }))
                if (errors.estimatedQuantity)
                  setErrors((prev) => ({ ...prev, estimatedQuantity: '' }))
              }}
            >
              <SelectTrigger
                className={`${baseInput} ${inputBorder(!!errors.estimatedQuantity)} h-auto py-2.5 [&>span]:text-left`}
              >
                <SelectValue placeholder="Select quantity range" />
              </SelectTrigger>
              <SelectContent className="dark:bg-[#013242] dark:text-gray-100 border-gray-200 dark:border-gray-700">
                <SelectItem className="whitespace-normal py-2.5" value="1-9-units-standard-secure-pickup">
                  1-9 Units (Standard Secure Pickup)
                </SelectItem>
                <SelectItem className="whitespace-normal py-2.5" value="10-49-units-priority-asset-recovery-tier">
                  10-49 Units (Priority Asset Recovery Tier)
                </SelectItem>
                <SelectItem className="whitespace-normal py-2.5" value="50-100-units-enterprise-volume">
                  50-100 Units (Enterprise Volume)
                </SelectItem>
                <SelectItem className="whitespace-normal py-2.5" value="100-plus-units-full-office-or-data-center-cleanout">
                  100+ / Full Office or Data Center Cleanout
                </SelectItem>
              </SelectContent>
            </Select>
            <ErrorText msg={errors.estimatedQuantity} />
          </div>

          {/* Deployment Urgency */}
          <div>
            <FieldLabel required>
              <span className="inline-flex items-center gap-1.5">
                Deployment Urgency
              </span>
            </FieldLabel>
            <Select
              value={form.deploymentUrgency}
              onValueChange={(value) => {
                setForm((prev) => ({ ...prev, deploymentUrgency: value }))
                if (errors.deploymentUrgency)
                  setErrors((prev) => ({ ...prev, deploymentUrgency: '' }))
              }}
            >
              <SelectTrigger
                className={`${baseInput} ${inputBorder(!!errors.deploymentUrgency)} h-auto py-2.5 [&>span]:text-left`}
              >
                <SelectValue placeholder="Select urgency level" />
              </SelectTrigger>
              <SelectContent className="w-[var(--radix-select-trigger-width)] dark:bg-[#013242] dark:text-gray-100 border-gray-200 dark:border-gray-700">
                <SelectItem value="asap-urgent-within-48-72-hours" className="whitespace-normal py-2.5">
                  ASAP / Urgent — Within 48-72 Hours
                </SelectItem>
                <SelectItem value="standard-within-1-2-weeks" className="whitespace-normal py-2.5">
                  Standard — Within 1-2 Weeks
                </SelectItem>
                <SelectItem value="planning-phase-over-2-weeks" className="whitespace-normal py-2.5">
                  Planning Phase — Over 2 Weeks
                </SelectItem>
                <SelectItem
                  value="recurring-partnership-we-need-regular-pickup"
                  className="whitespace-normal py-2.5"
                >
                  Recurring Partnership — Monthly / Quarterly
                </SelectItem>
              </SelectContent>
            </Select>
            <ErrorText msg={errors.deploymentUrgency} />
          </div>
        </div>

        <div>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Type your message"
            value={form.message}
            onChange={handleChange}
            className={`${baseInput} ${inputBorder(false)} resize-none`}
          />
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1.5">
            {form.message.length} characters
          </p>
        </div>


      {/* ─── Submit ─── */}
      <div className="pt-2">
        <Button
          type="submit"
          disabled={loading}
          className="group w-full rounded-md btn-bg btn-hover-bg text-white font-semibold py-3 text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 disabled:translate-y-0 click-feel"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin h-4 w-4" />
              <span>Submitting request…</span>
            </>
          ) : (
            <>
              <span>Submit Service Request</span>
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </Button>

      </div>
    </form>
  )
}