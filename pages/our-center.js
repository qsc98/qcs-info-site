import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  FaArrowLeft,
  FaHeart,
  FaShieldAlt,
  FaUtensils,
  FaMusic,
  FaDumbbell,
  FaBusAlt,
  FaComments,
  FaMapMarkedAlt,
  FaClock,
  FaWheelchair,
  FaPhoneAlt,
  FaMedkit,
  FaHandsHelping,
  FaUserNurse,
} from 'react-icons/fa'
import Footer from '../components/Layout/Footer'
import GallerySection from '../components/OurCenterGallery'

const OurCenter = () => {
  const router = useRouter()

  return (
    <>
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
        <div className="absolute -top-32 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-200 via-emerald-100 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 right-1/2 h-80 w-[32rem] translate-x-1/3 rounded-full bg-gradient-to-tr from-amber-100 via-white to-transparent blur-3xl" />
      </div>

      {/* Page Container */}
      <div className="mx-auto mb-24 mt-6 max-w-screen-xl px-4 sm:px-6 lg:px-10">
        {/* Back Button */}
        <div className="sticky top-4 z-50 mb-6 flex justify-start">
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-lg ring-1 ring-emerald-600/60 transition hover:-translate-y-0.5 hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <FaArrowLeft aria-hidden /> Back to Main Page
          </button>
        </div>

        {/* Hero */}
        <section className="grid items-center gap-10 rounded-[28px] bg-white/70 p-6 shadow-[0_10px_40px_-15px_rgba(16,185,129,0.3)] ring-1 ring-emerald-900/5 backdrop-blur sm:grid-cols-2 sm:p-12">
          <div>
            <div className="flex justify-center sm:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/60 bg-yellow-300 px-3 py-1 text-xs font-medium text-yellow-900 shadow-sm">
                Premium Adult Day Health Care
              </span>
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              A Warm, Safe, and Joyful Place for Your Loved Ones
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-700">
              Every detail of our center is designed for comfort, dignity, and connection—so
              participants feel at home and families feel confident and supported.
            </p>

            {/* Trust strip */}
            <div className="mt-8 grid w-full grid-cols-2 gap-4 text-sm text-gray-700 sm:max-w-md">
              <div className="rounded-xl bg-white/70 p-3 shadow ring-1 ring-gray-100">
                <div className="flex items-center gap-2 font-medium text-gray-900">
                  <FaUserNurse className="text-emerald-600" /> Caring Professionals
                </div>
                <p className="mt-1 text-gray-600">Attentive, trained staff you can trust.</p>
              </div>
              <div className="rounded-xl bg-white/70 p-3 shadow ring-1 ring-gray-100">
                <div className="flex items-center gap-2 font-medium text-gray-900">
                  <FaShieldAlt className="text-emerald-600" /> Safety First
                </div>
                <p className="mt-1 text-gray-600">Monitored, accessible environment.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-700 px-6 py-3 text-white shadow-lg ring-1 ring-emerald-600/60 transition hover:-translate-y-0.5 hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 sm:w-auto"
              >
                Schedule a Tour
              </Link>
              <a
                href="#visit"
                className="inline-flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-300 sm:w-auto"
              >
                See Location & Hours
              </a>
            </div>
          </div>

          <div className="relative aspect-[3/3] w-full overflow-hidden rounded-[22px] ring-1 ring-emerald-900/10">
            <Image
              src="/assets/Image-placeholder.png"
              alt="Bright, welcoming common area in our center"
              fill
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-white/40" />
          </div>
        </section>

        {/* Why Families Choose Us */}
        <section className="mt-20">
          <h2 className="mb-4 text-center text-3xl font-semibold text-gray-900">
            Why Families Choose Our Center
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-gray-700">
            We combine compassionate care with enriching activities in a safe, beautiful space.
            Here’s what you can expect every day.
          </p>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FaShieldAlt className="text-xl" />,
                title: 'Safety First',
                desc: 'Monitored environment, fall prevention, and secure check‑in/out procedures.',
              },
              {
                icon: <FaHeart className="text-xl" />,
                title: 'Compassionate Care',
                desc: 'Attentive staff who treat each participant with dignity, patience, and kindness.',
              },
              {
                icon: <FaUtensils className="text-xl" />,
                title: 'Nutritious Meals',
                desc: 'Balanced meals and snacks with hydration support throughout the day.',
              },
              {
                icon: <FaMusic className="text-xl" />,
                title: 'Enrichment & Fun',
                desc: 'Music, arts & crafts, memory games, gentle movement, and social time.',
              },
              {
                icon: <FaDumbbell className="text-xl" />,
                title: 'Wellness Activities',
                desc: 'Chair yoga, guided stretching, and light fitness to support mobility.',
              },
              {
                icon: <FaBusAlt className="text-xl" />,
                title: 'Transportation Options',
                desc: 'Ask about ride support to make arrivals and departures easy for families.',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl bg-white p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(16,185,129,0.35)]"
              >
                <div className="absolute inset-x-0 -top-px mx-auto h-px w-4/5 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 group-hover:bg-emerald-100">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* A Day at Our Center */}
        <section className="mt-20 rounded-[28px] bg-white/70 p-6 ring-1 ring-emerald-900/5 backdrop-blur sm:p-10">
          <h2 className="mb-8 text-center text-3xl font-semibold text-gray-900">
            A Day at Our Center
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                time: '7:00–9:00 AM',
                title: 'Warm Welcome',
                text: 'Friendly check‑in, light breakfast, and social time.',
              },
              {
                time: '9:00–2:00 PM',
                title: 'Activities & Lunch',
                text: 'Group activities, wellness sessions, and a nutritious lunch.',
              },
              {
                time: '2:00–7:00 PM',
                title: 'Wind Down & Departures',
                text: 'Quiet time, music, and assisted departures with updates for families.',
              },
            ].map((b, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-0.5"
              >
                <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700">
                  <FaClock aria-hidden />
                  {b.time}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">{b.title}</h3>
                <p className="mt-2 text-gray-600">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        <GallerySection />

        {/* Accessibility & Amenities */}
        <section className="mt-20">
          <h2 className="mb-6 text-center text-3xl font-semibold text-gray-900">
            Thoughtful Amenities & Accessibility
          </h2>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { icon: <FaWheelchair />, text: 'Wheelchair‑friendly layout & entrances' },
              { icon: <FaMapMarkedAlt />, text: 'Clearly marked spaces and rest areas' },
              { icon: <FaShieldAlt />, text: 'Secure, monitored facility' },
              { icon: <FaHeart />, text: 'Quiet room for rest and comfort' },
            ].map((a, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                  <span aria-hidden className="text-base">
                    {a.icon}
                  </span>
                </div>
                <p className="text-gray-700">{a.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Visit Us */}
        <section
          id="visit"
          className="mt-20 rounded-[28px] bg-gradient-to-br from-white to-emerald-50 p-6 ring-1 ring-emerald-900/10 sm:p-10"
        >
          <h2 className="mb-2 text-center text-3xl font-semibold text-gray-900">Visit Us</h2>
          <p className="text-center text-gray-700">811 Mt Holly Rd, Fairdale, KY 40118</p>
          <p className="mt-1 text-center text-gray-600">Open Monday – Saturday, 7 AM – 7 PM</p>

          <div className="mt-6">
            <iframe
              title="Google Map to our center"
              className="h-72 w-full rounded-2xl border"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.9570945952433!2d-85.76777598467997!3d38.101059779704754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690a13eb7b6d61%3A0xa6a2aa35a4d7c4ec!2s811%20Mt%20Holly%20Rd%2C%20Fairdale%2C%20KY%2040118!5e0!3m2!1sen!2sus!4v1629860414313!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>

          {/* Premium contact bar */}
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-white/80 p-5 shadow ring-1 ring-emerald-900/10">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                  <FaMedkit />
                </div>
                <p className="text-sm text-gray-700">
                  Have a unique care question?{' '}
                  <span className="font-medium text-gray-900">Talk with our team.</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-2 text-white shadow-sm ring-1 ring-emerald-600/60 transition hover:bg-emerald-800"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+1-000-000-0000"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2 text-gray-800 shadow-sm transition hover:border-gray-300"
                >
                  <FaPhoneAlt /> Call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20">
          <h2 className="mb-6 text-center text-3xl font-semibold text-gray-900">FAQ</h2>
          <div className="mx-auto max-w-6xl rounded-2xl border border-amber-200/60 bg-white shadow-[0_10px_30px_-18px_rgba(245,158,11,0.4)]">
            <div className="grid grid-cols-1 divide-y divide-amber-200/60 md:grid-cols-2 md:divide-x md:divide-y-0">
              {[
                {
                  q: 'Do you offer trial days?',
                  a: 'Yes. We can arrange a half-day or full-day visit so participants can experience our programs before enrolling.',
                },
                {
                  q: 'What level of care do you provide?',
                  a: 'Support with activities of daily living, medication reminders per policy, wellness programming, and coordination with families and providers to align on care needs.',
                },
                {
                  q: 'How do I get started?',
                  a: 'Schedule a tour, meet our team, and we’ll guide you through a simple enrollment process including assessments, preferences, and care coordination.',
                },
                {
                  q: 'Do you accommodate special diets or allergies?',
                  a: 'Absolutely. We tailor meals to dietary needs and carefully manage allergies.',
                },
                {
                  q: 'Is transportation available?',
                  a: 'Yes—ask about our transportation options and partner services for convenient drop-off and pick-up.',
                },
                {
                  q: 'What about memory care needs?',
                  a: 'We provide structured routines, gentle redirection, and engaging cognitive activities in a secure, supportive environment.',
                },
                {
                  q: 'Do you accept Medicaid or other programs?',
                  a: 'We can discuss available funding options and program eligibility during your tour.',
                },
                {
                  q: 'How are medications handled?',
                  a: 'Our trained staff follow strict medication reminder and documentation procedures aligned with policy and state guidelines.',
                },
                {
                  q: 'What is your staffing like?',
                  a: 'Attentive ratios, ongoing training, and supervision by experienced leadership to maintain safety and quality.',
                },
                {
                  q: 'What if my loved one needs help with the restroom?',
                  a: 'Discreet, respectful assistance is provided as needed, with privacy and dignity as top priorities.',
                },
                {
                  q: 'What activities do you offer?',
                  a: 'Music, arts & crafts, chair fitness, games, social groups, and quiet spaces for rest or reading.',
                },
                {
                  q: 'What are the hours and scheduling options?',
                  a: 'We’re open Monday–Saturday, 7 AM–7 PM, with flexible attendance plans.',
                },
              ].map((item, idx) => (
                <details
                  key={idx}
                  className="group border-b border-amber-200/60 last:border-b-0 open:bg-amber-50/40"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left">
                    <span className="font-medium text-gray-900">{item.q}</span>
                    <span className="ml-4 rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-800 group-open:hidden">
                      Show
                    </span>
                    <span className="ml-4 hidden rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-800 group-open:inline">
                      Hide
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-gray-700">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default OurCenter
