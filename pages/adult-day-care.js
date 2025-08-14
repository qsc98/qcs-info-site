import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Footer from '../components/Layout/Footer'
import {
  FaArrowLeft,
  FaUserFriends,
  FaHeartbeat,
  FaUtensils,
  FaShieldAlt,
  FaCheckCircle,
  FaWheelchair,
  FaClock,
  FaMapMarkerAlt,
  FaSmileBeam,
  FaHandsHelping,
  FaWalking,
} from 'react-icons/fa'

// Small reusable stat chip
const Stat = ({ icon, text }) => (
  <div className="flex items-center gap-3 rounded-xl bg-white/80 px-3 py-2 shadow-sm ring-1 ring-gray-100">
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
      {icon}
    </span>
    <span className="text-sm text-gray-700">{text}</span>
  </div>
)

// Bullet point with icon
const Bullet = ({ children }) => (
  <li className="flex items-start gap-2 text-gray-700">
    <FaCheckCircle className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
    <span>{children}</span>
  </li>
)

// Card component
function Card({ title, icon, children, className = '' }) {
  return (
    <div className={`rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-gray-100 backdrop-blur ${className}`}>
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
          {icon}
        </span>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      {children}
    </div>
  )
}

export default function AdultDayCarePage() {
  const router = useRouter()
  const sectionId = router.query.from || 'adult-day-care'

  return (
    <>
      <div className="mx-auto mb-24 mt-6 max-w-screen-xl px-4 sm:px-6 lg:px-10">
        {/* Back button */}
        <div className="sticky top-4 z-50 flex justify-start">
          <button
            onClick={() => router.push(`/#${sectionId}`)}
            className="inline-flex items-center gap-2 rounded-xl bg-white/80 px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg backdrop-blur ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <FaArrowLeft /> Services Overview
          </button>
        </div>

        {/* Hero */}
        <section className="relative mt-8 overflow-hidden rounded-[28px] ring-1 ring-emerald-900/10 shadow-[0_20px_60px_-25px_rgba(16,185,129,0.35)]">
          <div className="relative aspect-[16/8] w-full sm:aspect-[16/6]">
            <Image
              src="/assets/image-placeholder.png"
              alt="Adult Day Care Center"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-end">
            <div className="p-6 sm:p-10">
              <div className="flex justify-center sm:justify-start">
                <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 px-3 py-1 text-xs font-medium text-yellow-900 shadow-md ring-1 ring-yellow-500/50">
                  Premium Adult Day Health Care
                </span>
              </div>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Adult Day Care Services
              </h1>
              <p className="mt-3 max-w-3xl text-white/90">
                More than just daytime supervision — our Adult Day Care program blends health
                services, social engagement, and compassionate support to enhance quality of life
                for seniors and peace of mind for families.
              </p>
            </div>
          </div>
        </section>

        {/* Quick facts */}
        <section className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat icon={<FaClock />} text="Mon–Sat, 7 AM – 7 PM" />
          <Stat icon={<FaMapMarkerAlt />} text="811 Mt Holly Rd, Fairdale" />
          <Stat icon={<FaWheelchair />} text="Accessible Facility & Transport" />
          <Stat icon={<FaShieldAlt />} text="Licensed, Trained Staff" />
        </section>

        {/* What is Adult Day Care */}
        <section className="mt-14">
          <h2 className="mb-4 text-center text-3xl font-semibold text-gray-900">What is Adult Day Care?</h2>
          <p className="mx-auto max-w-4xl text-center text-gray-700">
            Adult Day Care provides a safe, structured, and supportive environment during daytime
            hours for older adults or adults with disabilities. It’s designed to promote independence,
            prevent isolation, and offer enriching activities — all while giving family caregivers a
            much-needed break.
          </p>
        </section>

        {/* Who it’s for */}
        <section className="mt-14">
          <h2 className="mb-4 text-center text-3xl font-semibold text-gray-900">Who is it For?</h2>
          <p className="mx-auto max-w-4xl text-center text-gray-700 mb-8">
            Our Adult Day Care program is ideal for:
          </p>
          <ul className="mx-auto max-w-2xl space-y-2 text-gray-700">
            <Bullet>Adults 55+ who would benefit from socialization and activities</Bullet>
            <Bullet>Individuals with mild cognitive impairment or early-stage dementia</Bullet>
            <Bullet>Those recovering from illness or surgery who need supervised care</Bullet>
            <Bullet>Adults with physical limitations who require assistance with daily activities</Bullet>
            <Bullet>Family caregivers who need respite during the day</Bullet>
          </ul>
        </section>

        {/* Benefits for seniors */}
        <section className="mt-14">
          <h2 className="mb-4 text-center text-3xl font-semibold text-gray-900">Benefits for Seniors</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Card title="Social Engagement" icon={<FaUserFriends />}>
              Build friendships, join group activities, and prevent loneliness.
            </Card>
            <Card title="Health & Wellness" icon={<FaHeartbeat />}>
              Enjoy daily exercise, mental stimulation, and healthy meals.
            </Card>
            <Card title="Safety & Support" icon={<FaShieldAlt />}>
              Supervised environment with trained staff ready to assist.
            </Card>
          </div>
        </section>

        {/* Benefits for families */}
        <section className="mt-14">
          <h2 className="mb-4 text-center text-3xl font-semibold text-gray-900">Benefits for Families</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Card title="Peace of Mind" icon={<FaSmileBeam />}>
              Know your loved one is safe, engaged, and cared for each day.
            </Card>
            <Card title="Time for Yourself" icon={<FaHandsHelping />}>
              Use daytime hours for work, errands, or personal time.
            </Card>
            <Card title="Care Partnership" icon={<FaWalking />}>
              We work with you to align on care goals and health updates.
            </Card>
          </div>
        </section>

        {/* How it works */}
        <section className="mt-14">
          <h2 className="mb-4 text-center text-3xl font-semibold text-gray-900">How It Works</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Card title="Morning Arrival">
              Check-in, light breakfast, and social time to start the day.
            </Card>
            <Card title="Midday Activities">
              Group programs, wellness exercises, and a nutritious lunch.
            </Card>
            <Card title="Afternoon Wrap-Up">
              Relaxation, music, and assisted departures with updates for families.
            </Card>
          </div>
        </section>

        {/* Services */}
        <section className="mt-14">
          <h2 className="mb-4 text-center text-3xl font-semibold text-gray-900">Our Services & Programs</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card title="Social & Cognitive" icon={<FaUserFriends />}>
              <ul className="space-y-2">
                <Bullet>Arts & crafts, games, and group discussions</Bullet>
                <Bullet>Music therapy and storytelling</Bullet>
                <Bullet>Memory care support activities</Bullet>
              </ul>
            </Card>
            <Card title="Wellness & Care" icon={<FaHeartbeat />}>
              <ul className="space-y-2">
                <Bullet>Light exercise & mobility assistance</Bullet>
                <Bullet>Medication reminders & vitals monitoring</Bullet>
                <Bullet>Trained, compassionate care team</Bullet>
              </ul>
            </Card>
          </div>
        </section>

        {/* Safety */}
        <section className="mt-14">
          <h2 className="mb-4 text-center text-3xl font-semibold text-gray-900">Health & Safety Standards</h2>
          <p className="mx-auto max-w-4xl text-center text-gray-700">
            Our facility meets or exceeds all state licensing requirements. Safety features include
            secure entry, fall-prevention measures, emergency response protocols, and strict hygiene
            practices.
          </p>
        </section>

        {/* Transportation */}
        <section className="mt-14">
          <Card title="Transportation Available" icon={<FaWheelchair />}>
            <p className="text-gray-700">
              Wheelchair-accessible vehicles and trained drivers provide safe, convenient travel
              within our service area.
            </p>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="mb-6 text-center text-3xl font-semibold text-gray-900">Frequently Asked Questions</h2>
          <div className="mx-auto max-w-4xl divide-y divide-gray-200 rounded-2xl border border-gray-100 bg-white">
            {[
              {
                q: 'Is Adult Day Care covered by insurance or Medicaid?',
                a: 'Coverage varies by state and policy. We can help check eligibility and guide you through payment options.',
              },
              {
                q: 'Can I visit during the day?',
                a: 'Yes — we encourage family involvement and visits.',
              },
              {
                q: 'Do you provide meals?',
                a: 'Yes — nutritious breakfast, lunch, and snacks are provided daily.',
              },
              {
                q: 'What is the staff-to-participant ratio?',
                a: 'We maintain small group sizes to ensure personalized attention and safety.',
              },
            ].map((item, idx) => (
              <details key={idx} className="group open:bg-gray-50">
                <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-left">
                  <span className="font-medium text-gray-900">{item.q}</span>
                  <span className="ml-4 text-sm text-gray-500 group-open:hidden">+</span>
                  <span className="ml-4 text-sm text-gray-500 group-open:inline">−</span>
                </summary>
                <div className="px-5 pb-5 text-gray-700">{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 rounded-[28px] bg-gradient-to-r from-emerald-700 to-emerald-600 p-6 text-white shadow-lg">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">Schedule Your Visit Today</h3>
              <p className="text-white/90">See for yourself how our program can benefit your loved one.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="tel:+1-000-000-0000"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow hover:-translate-y-0.5 hover:shadow-lg"
              >
                Call Now
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/80 bg-transparent px-5 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-white hover:text-gray-900"
              >
                Contact Us
              </a>
            </div>
            
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
