import { useRouter } from 'next/router'
import Image from 'next/image'
import Footer from '../components/Layout/Footer'
import {
  FaArrowLeft,
  FaCheckCircle,
  FaShieldAlt,
  FaHeartbeat,
  FaClock,
  FaMapMarkerAlt,
  FaBed,
  FaHandsHelping,
  FaSyringe,
  FaBroom,
} from 'react-icons/fa'

const InHomeCarePage = () => {
  const router = useRouter()
  const sectionId = router.query.from || 'in-home-care'

  return (
    <>
      <div className="mx-auto mb-24 max-w-screen-xl px-8 xl:px-16">
        {/* Sticky Back Button (glassy) */}
        <div className="sticky top-4 z-50 flex justify-start">
          <button
            onClick={() => router.push(`/#${sectionId}`)}
            className="inline-flex items-center gap-2 rounded-md bg-white/80 px-4 py-2 text-sm font-semibold text-black-600 shadow-lg backdrop-blur transition hover:bg-white-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <FaArrowLeft /> Services Overview
          </button>
        </div>

        {/* Hero Banner (constrained like Adult page) */}
        <section className="relative mt-10 overflow-hidden rounded-2xl border border-gray-500 shadow-lg">
          <div className="mx-auto my-8 max-w-lg">
            <Image
              src="/assets/Image-placeholder.png"
              alt="In‑Home Care"
              width={800}
              height={500}
              className="rounded-lg shadow"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black-700/80 via-black-700/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <h1 className="text-3xl font-bold text-white-500 sm:text-4xl">In‑Home Care</h1>
            <p className="mt-3 max-w-3xl text-white-500/90">
              Compassionate help at home—personal care, daily living support, and companionship—so
              loved ones can remain safe and independent where they’re most comfortable.
            </p>
          </div>
        </section>

        {/* Quick Facts strip */}
        <section className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-gray-500 bg-white-500 p-4 shadow md:grid-cols-4">
          <div className="flex items-center gap-3">
            <FaClock className="h-5 w-5 text-green-600" />
            <span className="text-sm text-black-500">Hourly • Overnight • 24/7</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="h-5 w-5 text-green-600" />
            <span className="text-sm text-black-500">In your home (Louisville area)</span>
          </div>
          <div className="flex items-center gap-3">
            <FaShieldAlt className="h-5 w-5 text-green-600" />
            <span className="text-sm text-black-500">Background‑checked caregivers</span>
          </div>
          <div className="flex items-center gap-3">
            <FaHeartbeat className="h-5 w-5 text-green-600" />
            <span className="text-sm text-black-500">Care plans tailored to needs</span>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold text-green-500">What We Offer</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-500 bg-white-500 p-6 shadow">
              <div className="mb-3 flex items-center gap-3">
                <FaHandsHelping className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-black-600">Personal Care & ADLs</h3>
              </div>
              <ul className="space-y-2">
                {[
                  'Bathing, grooming, dressing',
                  'Toileting & continence support',
                  'Safe transfers & mobility',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-black-500">
                    <FaCheckCircle className="mt-0.5 h-4 w-4 text-green-600" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-500 bg-white-500 p-6 shadow">
              <div className="mb-3 flex items-center gap-3">
                <FaSyringe className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-black-600">Wellness Support</h3>
              </div>
              <ul className="space-y-2">
                {[
                  'Medication reminders & tracking',
                  'Vitals and symptom check‑ins',
                  'Coordination with family & providers',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-black-500">
                    <FaCheckCircle className="mt-0.5 h-4 w-4 text-green-600" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-500 bg-white-500 p-6 shadow md:col-span-2">
              <div className="mb-3 flex items-center gap-3">
                <FaBroom className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-black-600">Home Help & Companionship</h3>
              </div>
              <p className="text-black-500">
                Light housekeeping, laundry, meal prep, errands, appointment escorts, and meaningful
                companionship—so each day feels safer, cleaner, and more connected.
              </p>
            </div>
          </div>
        </section>

        {/* Scheduling Options */}
        <section className="mt-12 rounded-xl border border-gray-500 bg-white-500 p-6 shadow">
          <h2 className="mb-3 text-2xl font-semibold text-green-500">Flexible Scheduling</h2>
          <p className="text-black-500">
            Choose the support that fits: a few hours a week, overnight relief, or continuous 24/7
            care. We’ll build a plan around your routines and budget.
          </p>
        </section>

        {/* Respite & Overnight */}
        <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-500 bg-white-500 p-6 shadow">
            <div className="mb-2 flex items-center gap-3">
              <FaBed className="h-5 w-5 text-green-600" />
              <h3 className="text-lg font-semibold text-black-600">Overnight & Live‑In Care</h3>
            </div>
            <p className="text-black-500">
              Nighttime supervision, assistance with repositioning, toileting, and safety
              monitoring—so everyone can rest easier.
            </p>
          </div>
          <div className="rounded-xl border border-gray-500 bg-white-500 p-6 shadow">
            <div className="mb-2 flex items-center gap-3">
              <FaHandsHelping className="h-5 w-5 text-green-600" />
              <h3 className="text-lg font-semibold text-black-600">Family Respite</h3>
            </div>
            <p className="text-black-500">
              Temporary coverage so primary caregivers can work, handle errands, or take a
              well‑deserved break.
            </p>
          </div>
        </section>

        {/* Soft CTA */}
        <section className="mt-12 rounded-2xl border border-gray-500 bg-gradient-to-r from-green-600 to-green-500 p-6 text-white-500 shadow">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">Let’s build your care plan</h3>
              <p className="text-white-500/90">
                Tell us what you need—hours, tasks, budget—and we’ll propose options.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+1-000-000-0000"
                className="rounded-md bg-white-500 px-4 py-2 text-sm font-semibold text-black-600 shadow transition hover:shadow-md"
              >
                Call Now
              </a>
              <a
                href="#contact"
                className="rounded-md border border-white-500/80 px-4 py-2 text-sm font-semibold text-white-500 transition hover:bg-white-500 hover:text-black-600"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </>
  )
}

export default InHomeCarePage
