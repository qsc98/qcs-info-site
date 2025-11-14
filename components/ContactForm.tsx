import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from 'react-icons/fa'

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().optional(),
  service: z.enum(['adhc', 'transportation', 'inHome', 'notSure']).optional().or(z.literal('')),
  bestTime: z.enum(['morning', 'afternoon', 'evening']).optional().or(z.literal('')),
  message: z.string().max(1000, 'Message is too long').optional().or(z.literal('')),
  consent: z.boolean().refine((val) => val === true, { message: 'Consent is required' }),
})

type FormData = z.infer<typeof schema>

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      bestTime: '',
      message: '',
      consent: false,
    },
  })

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
    setSubmitted(true)
    reset()
    // You can hook this into Netlify Forms, Formspree, or an API
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* First & Last Name */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700">First Name</label>
          <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
            <FaUser className="text-slate-400" />
            <input
              type="text"
              placeholder="First Name"
              {...register('firstName')}
              className="w-full border-0 focus:outline-none"
            />
          </div>
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">Last Name</label>
          <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
            <FaUser className="text-slate-400" />
            <input
              type="text"
              placeholder="Last Name"
              {...register('lastName')}
              className="w-full border-0 focus:outline-none"
            />
          </div>
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="text-sm font-medium text-slate-700">Email</label>
        <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
          <FaEnvelope className="text-slate-400" />
          <input
            type="email"
            placeholder="Email"
            {...register('email')}
            className="w-full border-0 focus:outline-none"
          />
        </div>
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="text-sm font-medium text-slate-700">Phone (optional)</label>
        <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
          <FaPhone className="text-slate-400" />
          <input
            type="tel"
            placeholder="Phone"
            {...register('phone')}
            className="w-full border-0 focus:outline-none"
          />
        </div>
      </div>

      {/* Service Interest */}
      <div>
        <p className="text-sm font-medium text-slate-700">How can we help? (optional)</p>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {[
            { label: 'Adult Day Health Care', value: 'adhc' },
            { label: 'Transportation', value: 'transportation' },
            { label: 'In-Home Care', value: 'inHome' },
            { label: 'Not sure yet', value: 'notSure' },
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
            >
              <input type="radio" value={option.value} {...register('service')} className="radio" />
              {option.label}
            </label>
          ))}
        </div>
      </div>

      {/* Best Time to Call */}
      <div>
        <p className="text-sm font-medium text-slate-700">Best time to call (optional)</p>
        <div className="mt-2 flex flex-wrap gap-3 text-sm">
          {[
            { label: 'Morning', value: 'morning' },
            { label: 'Afternoon', value: 'afternoon' },
            { label: 'Evening', value: 'evening' },
          ].map((slot) => (
            <label
              key={slot.value}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1"
            >
              <input type="radio" value={slot.value} {...register('bestTime')} className="radio" />
              {slot.label}
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="text-sm font-medium text-slate-700">Message (optional)</label>
        <div className="mt-1 flex items-start gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
          <FaCommentDots className="mt-1 text-slate-400" />
          <textarea
            {...register('message')}
            className="w-full grow border-0 focus:outline-none"
            rows={4}
            placeholder="Share any details you’d like"
          />
        </div>
      </div>
      {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}

      {/* Consent */}
      <label className="flex items-start gap-3 text-sm text-slate-600">
        <input
          type="checkbox"
          {...register('consent')}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-[#116768] focus:ring-[#116768]"
        />
        <span>
          I agree to be contacted by QCS about services and understand this form is not for
          emergency or medical advice.
        </span>
      </label>
      {errors.consent && <p className="text-xs text-red-500">{errors.consent.message}</p>}
      {/* Best time note */}
      <p className="text-xs text-slate-500">
        Please don’t include personal health information (PHI) in this form.
      </p>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full rounded-xl bg-[#116768] px-6 py-3 font-semibold text-white shadow-[0_8px_20px_rgba(17,103,104,0.3)] transition hover:bg-[#0d5556] focus:outline-none focus:ring-2 focus:ring-[#116768]/50"
      >
        Send Message
      </button>

      {submitted && (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          Thanks—your request is in. We’ll call you within 1–2 business days (usually sooner). Need
          help now? Call{' '}
          <a href="tel:+1502XXXXXXX" className="font-semibold underline">
            (502) XXX-XXXX
          </a>
          .
        </div>
      )}
    </form>
  )
}

export default ContactForm
