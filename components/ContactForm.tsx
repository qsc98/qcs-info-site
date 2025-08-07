import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from 'react-icons/fa'

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
})

type FormData = z.infer<typeof schema>

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
    // You can hook this into Netlify Forms, Formspree, or an API
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

      {/* Message */}
      <label className="textarea flex items-start gap-2 border">
        <FaCommentDots className="mt-1" />
        <textarea {...register('message')} className="w-full grow" rows={4} placeholder="Message" />
      </label>
      {errors.message && <p className="text-error text-sm">{errors.message.message}</p>}

      {/* Checkbox */}
      <label className="mt-4 flex items-center gap-2">
        <input type="checkbox" className="checkbox border-gray-300 border" required />
        <span className="text-sm">
          I agree with{' '}
          <a href="#" className="font-medium italic">
            privacy &amp; data policy
          </a>
        </span>
      </label>

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
