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
  service: z.enum(['adhc', 'transportation', 'inHome', 'notSure'], {
    required_error: 'Please choose a service',
  }),
  bestTime: z.enum(['morning', 'afternoon', 'evening'], {
    required_error: 'Choose your preferred call time',
  }),
  message: z
    .string()
    .max(1000, 'Message is too long')
    .optional()
    .or(z.literal('')),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Consent is required' }),
  }),
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
  })

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
    setSubmitted(true)
    reset()
    // You can hook this into Netlify Forms, Formspree, or an API
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {submitted && (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          Thanks—your request is in. We’ll call you within 1–2 business days (usually sooner). Need help now?
          Call <a href="tel:+1502XXXXXXX" className="font-semibold underline">(502) XXX-XXXX</a>.
        </div>
      )}
      {/* First & Last Name */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="input input-bordered flex items-center gap-2">
          <FaUser />
          <input type="text" placeholder="First Name" {...register('firstName')} className="grow" />
        </label>
        {errors.firstName && <p className="text-error text-sm">{errors.firstName.message}</p>}

        <label className="input input-bordered flex items-center gap-2">
          <FaUser />
          <input type="text" placeholder="Last Name" {...register('lastName')} className="grow" />
        </label>
        {errors.lastName && <p className="text-error text-sm">{errors.lastName.message}</p>}
      </div>

      {/* Email */}
      <label className="input input-bordered flex items-center gap-2">
        <FaEnvelope />
        <input type="email" placeholder="Email" {...register('email')} className="grow" />
      </label>
      {errors.email && <p className="text-error text-sm">{errors.email.message}</p>}

      {/* Phone */}
      <label className="input input-bordered flex items-center gap-2">
        <FaPhone />
        <input type="tel" placeholder="Phone (optional)" {...register('phone')} className="grow" />
      </label>

      {/* Service Interest */}
      <div>
        <p className="text-sm font-medium text-slate-700">How can we help?</p>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {[
            { label: 'Adult Day Health Care', value: 'adhc' },
            { label: 'Transportation', value: 'transportation' },
            { label: 'In-Home Care', value: 'inHome' },
            { label: 'Not sure yet', value: 'notSure' },
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm">
              <input type="radio" value={option.value} {...register('service')} className="radio" />
              {option.label}
            </label>
          ))}
        </div>
        {errors.service && <p className="text-error text-sm">{errors.service.message}</p>}
      </div>

      {/* Best Time to Call */}
      <div>
        <p className="text-sm font-medium text-slate-700">Best time to call</p>
        <div className="mt-2 flex flex-wrap gap-3 text-sm">
          {[
            { label: 'Morning', value: 'morning' },
            { label: 'Afternoon', value: 'afternoon' },
            { label: 'Evening', value: 'evening' },
          ].map((slot) => (
            <label key={slot.value} className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1">
              <input type="radio" value={slot.value} {...register('bestTime')} className="radio" />
              {slot.label}
            </label>
          ))}
        </div>
        {errors.bestTime && <p className="text-error text-sm">{errors.bestTime.message}</p>}
      </div>

      {/* Message */}
      <label className="textarea flex items-start gap-2 border">
        <FaCommentDots className="mt-1" />
        <textarea
          {...register('message')}
          className="w-full grow"
          rows={4}
          placeholder="Message (optional)"
        />
      </label>
      {errors.message && <p className="text-error text-sm">{errors.message.message}</p>}

      {/* Checkbox */}
      <label className="mt-4 flex items-start gap-3 text-sm text-slate-600">
        <input type="checkbox" className="checkbox mt-1 border border-gray-300" {...register('consent')} />
        <span>
          Please don’t include personal health information (PHI) in this form. We’ll call you to discuss details.
        </span>
      </label>
      {errors.consent && <p className="text-error text-sm">{errors.consent.message}</p>}

      {/* Best time note */}
      <p className="text-xs text-slate-500">
        Expect a callback within 1–2 business days. For urgent needs call us directly at (502) XXX-XXXX.
      </p>

      {/* Submit Button */}
      <button
        type="submit"
        className="hover:shadow-green w-full border border-green-500 bg-white-500 px-5 py-2 font-medium capitalize tracking-wide text-green-500 outline-none transition-all hover:bg-green-500 hover:text-white-500 sm:px-8"
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
