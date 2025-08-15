// pages/adult-day-care.js
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
  FaFileInvoiceDollar,
  FaMedkit,
} from 'react-icons/fa'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Stat = ({ icon, text }) => (
  <div className="flex items-center gap-3 rounded-xl bg-white/80 px-3 py-2 shadow-sm ring-1 ring-gray-100">
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
      {icon}
    </span>
    <span className="text-sm text-gray-700">{text}</span>
  </div>
)

const Bullet = ({ children }) => (
  <li className="flex items-start gap-2 text-gray-700">
    <FaCheckCircle className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
    <span>{children}</span>
  </li>
)

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="text-center">
    {eyebrow ? (
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 px-3 py-1 text-xs font-medium text-yellow-900 shadow-md ring-1 ring-yellow-500/50">
          {eyebrow}
        </span>
      </div>
    ) : null}
    <h2 className="mt-3 text-3xl font-semibold text-gray-900">{title}</h2>
    {description ? <p className="mx-auto mt-2 max-w-3xl text-gray-700">{description}</p> : null}
  </div>
)

function Card({ title, icon, children, className = '' }) {
  return (
    <div
      className={`rounded-2xl bg-white/80 p-6 shadow-[0_14px_40px_-20px_rgba(16,185,129,0.35)] ring-1 ring-emerald-900/5 backdrop-blur ${className}`}
    >
      {title || icon ? (
        <div className="mb-4 flex items-center gap-3">
          {icon ? (
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
              {icon}
            </span>
          ) : null}
          {title ? <h3 className="text-lg font-semibold text-gray-900">{title}</h3> : null}
        </div>
      ) : null}
      {children}
    </div>
  )
}

/* ---------- Page ---------- */
export default function AdultDayCarePage() {
  const router = useRouter()
  const sectionId = router.query.from || 'adult-day-care'

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
        <div className="absolute -top-36 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-200 via-emerald-100 to-transparent blur-3xl" />
        <div className="absolute -bottom-36 right-1/2 h-80 w-[32rem] translate-x-1/3 rounded-full bg-gradient-to-tr from-amber-100 via-white to-transparent blur-3xl" />
      </div>

      <div className="mx-auto mb-24 mt-6 max-w-screen-xl px-4 sm:px-6 lg:px-10">
        {/* Back button */}
        <div className="sticky top-4 z-50 flex justify-start">
          <button
            onClick={() => router.push(`/#${sectionId}`)}
            className="inline-flex items-center gap-2 rounded-xl bg-white/80 px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg ring-1 ring-gray-200 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <FaArrowLeft /> Services Overview
          </button>
        </div>

        {/* HERO */}
        <section className="mt-6 grid items-center gap-8 rounded-3xl bg-gradient-to-b from-emerald-50 to-white p-6 shadow-sm sm:grid-cols-2 sm:p-10">
          {/* Text column */}
          <div>
            <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-left sm:text-5xl">
              Adult Day Care Services
            </h1>
            <p className="mt-4 max-w-xl text-center text-gray-700 sm:text-left">
              Our adult day care program is designed to support older adults in a safe, structured,
              and enriching environment during daytime hours. We provide supervised care with
              personalized activities—memory games, gentle exercise, social connection, and creative
              engagement—so seniors thrive while caregivers get dependable respite.
            </p>

            {/* Trust Strip */}
            <div className="mt-8 grid grid-cols-1 gap-4 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-gray-100 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                  <FaShieldAlt className="text-lg" />
                </span>
                <span className="text-sm font-medium text-gray-800">Licensed Care Team</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-700 ring-1 ring-amber-200">
                  <FaUserFriends className="text-lg" />
                </span>
                <span className="text-sm font-medium text-gray-800">Enriching Daily Programs</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-200">
                  <FaWheelchair className="text-lg" />
                </span>
                <span className="text-sm font-medium text-gray-800">Accessible Transportation</span>
              </div>
            </div>

            {/* CTAs (stack on mobile, inline on sm+) */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
              <a
                href="#costs"
                className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-700 px-6 py-3 text-white shadow-lg ring-1 ring-emerald-600/60 transition hover:-translate-y-0.5 hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 sm:w-auto"
              >
                See Costs & Funding
              </a>
              <a
                href="#faq"
                className="inline-flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-300 sm:w-auto"
              >
                Read FAQs
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="relative aspect-[3/3] w-full overflow-hidden rounded-2xl shadow-xl">
            <DotLottieReact src="/assets/AdultDayCare.lottie" autoplay />
          </div>
        </section>

        {/* QUICK FACTS */}
        <section className="mt-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat icon={<FaClock />} text="Mon–Sat, 7 AM – 7 PM" />
            <Stat icon={<FaMapMarkerAlt />} text="811 Mt Holly Rd, Fairdale" />
            <Stat icon={<FaWheelchair />} text="Accessible facility & transport" />
            <Stat icon={<FaShieldAlt />} text="Licensed & trained staff" />
          </div>
        </section>

        {/* WHAT IS ADC */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="Understanding Adult Day Care"
            title="What Is Adult Day Care?"
            description="Adult Day Care blends engaging activities, supervised support, and health‑aware routines in a community setting. It keeps seniors active and connected during the day, and gives families reliable respite."
          />
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            <Card title="Social & Purposeful">
              Meaningful routines, friends, and activities that make each day feel structured and
              enjoyable.
            </Card>
            <Card title="Health‑Aware">
              Gentle exercise, brain‑stimulating games, hydration, and nutritious meals/snacks.
            </Card>
            <Card title="Caregiver Respite">
              Daytime coverage so families can work, rest, or run errands with peace of mind.
            </Card>
          </div>
        </section>

        {/* WHO IS IT FOR */}
        <section className="mt-14">
          <SectionHeading
            title="Who Is It For?"
            description="Ideal for older adults who would benefit from social connection, gentle assistance, and a safe routine — and for families who want daytime support."
          />
          <ul className="mx-auto mt-6 max-w-3xl space-y-2">
            <Bullet>Adults 55+ seeking companionship and structured activities</Bullet>
            <Bullet>Those with mild cognitive impairment or early‑stage dementia</Bullet>
            <Bullet>People with mobility challenges needing light assistance</Bullet>
            <Bullet>
              Individuals recovering after hospitalization/illness who need supervised days
            </Bullet>
            <Bullet>Family caregivers who need dependable weekday or Saturday respite</Bullet>
          </ul>
        </section>

        {/* BENEFITS */}
        <section className="mt-14">
          <SectionHeading title="Benefits for Seniors & Families" />
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="Connection & Joy" icon={<FaUserFriends />}>
              Friendships, conversation, and group activities reduce isolation and lift mood.
            </Card>
            <Card title="Cognitive Engagement" icon={<FaHeartbeat />}>
              Memory games, music, and creative tasks support attention and recall.
            </Card>
            <Card title="Mobility & Energy" icon={<FaWalking />}>
              Chair fitness, stretch sessions, and safe movement help maintain function.
            </Card>
            <Card title="Nutrition & Hydration" icon={<FaUtensils />}>
              Balanced meals/snacks and hydration support during the day.
            </Card>
            <Card title="Safety & Supervision" icon={<FaShieldAlt />}>
              Trained staff, secure environment, and fall‑prevention minded spaces.
            </Card>
            <Card title="Caregiver Relief" icon={<FaHandsHelping />}>
              Time to work, rest, and handle life — with daily updates as needed.
            </Card>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-14">
          <SectionHeading title="How It Works (A Typical Day)" />
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
            <Card title="7:00–9:00 AM • Arrival">
              Warm welcome, light breakfast, and social time to start the day gently.
            </Card>
            <Card title="9:00 AM–2:00 PM • Programs">
              Group activities, cognitive games, music/art, chair fitness, and lunch.
            </Card>
            <Card title="2:00–7:00 PM • Wind‑Down">
              Quiet time, music, and assisted departures — with notes for families.
            </Card>
          </div>
        </section>

        {/* SERVICES */}
        <section className="mt-14">
          <SectionHeading title="Our Services & Programs" />
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            <Card title="Social & Cognitive" icon={<FaUserFriends />}>
              <ul className="space-y-2">
                <Bullet>Arts & crafts, music, and group games</Bullet>
                <Bullet>Conversation circles and reminiscence</Bullet>
                <Bullet>Memory support activities</Bullet>
              </ul>
            </Card>
            <Card title="Wellness & Care" icon={<FaHeartbeat />}>
              <ul className="space-y-2">
                <Bullet>Light exercise & mobility assistance</Bullet>
                <Bullet>Medication reminders (per policy) & wellness checks</Bullet>
                <Bullet>Comfortable, monitored spaces</Bullet>
              </ul>
            </Card>
            <Card title="Nutritious Meals" icon={<FaUtensils />}>
              <ul className="space-y-2">
                <Bullet>Wholesome breakfasts, lunches, and snacks</Bullet>
                <Bullet>Special dietary accommodations upon request</Bullet>
                <Bullet>Balanced menus reviewed for nutritional value</Bullet>
              </ul>
            </Card>
            <Card icon={<FaWheelchair />} title="Door-to-Door Convenience">
              <p className="text-gray-700">
                We offer wheelchair-accessible, round-trip transportation for eligible clients
                within our service area — operated by friendly, trained drivers. Ask us about routes
                and timing.
              </p>
            </Card>
          </div>
        </section>

        {/* SAFETY — Four Compact Cards */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="Your Loved One’s Well‑Being Comes First"
            title="Health & Safety Standards"
            description="Clear protocols, trained people, and a purpose‑built environment — all working together to keep every day safe and comfortable."
          />

          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-3 inline-flex items-center gap-2 text-gray-900">
                <FaMedkit className="text-emerald-600" />
                <span className="font-semibold">Licensed & Trained</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <Bullet>Licensed Adult Day Health Care center</Bullet>
                <Bullet>CPR/First Aid & dementia‑aware training</Bullet>
                <Bullet>Annual competencies & refreshers</Bullet>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-3 inline-flex items-center gap-2 text-gray-900">
                <FaShieldAlt className="text-emerald-600" />
                <span className="font-semibold">Secure Environment</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <Bullet>Check‑in/out, visitor logs, and ID badges</Bullet>
                <Bullet>Monitored common areas; clear wayfinding</Bullet>
                <Bullet>Fall‑reduction layout and rest areas</Bullet>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-3 inline-flex items-center gap-2 text-gray-900">
                <FaHeartbeat className="text-emerald-600" />
                <span className="font-semibold">Health & Hygiene</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <Bullet>Scheduled cleaning & sanitizing</Bullet>
                <Bullet>Hydration support; meal safety practices</Bullet>
                <Bullet>Medication reminders; wellness checks</Bullet>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-3 inline-flex items-center gap-2 text-gray-900">
                <FaShieldAlt className="text-emerald-600" />
                <span className="font-semibold">Emergency Ready</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <Bullet>Written procedures & regular drills</Bullet>
                <Bullet>Incident reporting with family updates</Bullet>
                <Bullet>Care plans aligned with providers</Bullet>
              </ul>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-gray-600">
            Questions about our protocols? We’re happy to walk you through our checklist during your
            tour.
          </p>
        </section>

        {/* Costs (compact table format) */}
        <section id="costs" className="mt-14 scroll-mt-28">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 px-3 py-1 text-xs font-medium text-yellow-900 shadow-md ring-1 ring-yellow-500/50">
              Transparent & Supportive
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-gray-900">Costs & Funding Options</h2>
            <p className="mx-auto mt-2 max-w-3xl text-gray-700">
              We’ll help you understand pricing, verify eligibility, and explore programs that may
              offset out‑of‑pocket costs.
            </p>
          </div>

          <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Methods */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white/70 lg:col-span-2">
              <table className="w-full text-left text-sm">
                <thead className="bg-emerald-50/70 text-gray-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Method</th>
                    <th className="px-4 py-3 font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Private Pay', 'Clear daily/half‑day rates with flexible scheduling.'],
                    [
                      'Medicaid Waivers',
                      'Availability varies by state; we’ll help check eligibility and documentation.',
                    ],
                    [
                      'Long‑Term Care Insurance',
                      'Many LTC policies reimburse adult day services; we assist with verification and claims.',
                    ],
                    [
                      'Veterans Benefits',
                      'VA programs (incl. Aid & Attendance) may subsidize for eligible veterans/spouses.',
                    ],
                    [
                      'Sliding‑Scale / Local Grants',
                      'When available, we’ll connect you to community assistance.',
                    ],
                  ].map(([m, d]) => (
                    <tr key={m} className="align-top">
                      <td className="px-4 py-3 font-medium text-gray-900">{m}</td>
                      <td className="px-4 py-3 text-gray-700">{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* How we help */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5">
              <h3 className="inline-flex items-center gap-2 text-lg font-semibold text-emerald-900">
                <FaFileInvoiceDollar className="text-emerald-700" /> How We Help
              </h3>
              <ul className="mt-3 space-y-2">
                <Bullet>Review needs/schedule for a clear estimate</Bullet>
                <Bullet>Check Medicaid waiver, VA, or LTC eligibility</Bullet>
                <Bullet>Provide letters/invoices & assist with claims</Bullet>
                <Bullet>Confirm a start date once funding is in place</Bullet>
              </ul>
              <p className="mt-3 text-xs text-emerald-900/70">
                Note: Program eligibility and coverage vary by policy and location.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ (two-column on md+) */}
        <section className="mt-16" id="faq">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="mx-auto mt-6 max-w-6xl overflow-hidden rounded-2xl border border-amber-200/60 bg-white shadow-[0_10px_30px_-18px_rgba(245,158,11,0.35)]">
            <div className="grid grid-cols-1 divide-y divide-amber-200/60 md:grid-cols-2 md:divide-x md:divide-y-0">
              {[
                {
                  q: 'Who is eligible for Adult Day Care?',
                  a: 'Adults who benefit from supervision, social engagement, or assistance with daily activities — including those with mild cognitive or mobility challenges.',
                },
                {
                  q: 'What happens on a typical day?',
                  a: 'A warm welcome and breakfast, group activities and wellness, lunch and social time, then a calm wrap‑up with departures and optional family updates.',
                },
                {
                  q: 'Do you accommodate special diets or allergies?',
                  a: 'Yes. We provide diabetic‑friendly, low‑sodium, and texture‑modified options and carefully manage allergies.',
                },
                {
                  q: 'Is transportation available?',
                  a: 'Yes. We offer wheelchair‑accessible rides within our service area; we’ll confirm routes and timing during your tour.',
                },
                {
                  q: 'How are medications handled?',
                  a: 'Per policy and state guidelines, our trained team provides medication reminders and documents administration per your care plan.',
                },
                {
                  q: 'What are the costs and funding options?',
                  a: 'We’ll provide transparent rates and help you explore Medicaid waivers, VA benefits, LTC insurance, and any local assistance.',
                },
              ].map((item, idx) => (
                <details key={idx} className="group open:bg-amber-50/40">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left">
                    <span className="font-medium text-gray-900">{item.q}</span>
                    <span className="ml-4 rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-800 group-open:hidden">
                      Show
                    </span>
                    <span className="ml-4 hidden rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-800 group-open:inline">
                      Hide
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-14 rounded-[28px] bg-gradient-to-r from-emerald-700 to-emerald-600 p-6 text-white shadow-[0_20px_50px_-25px_rgba(16,185,129,0.5)] ring-1 ring-emerald-600/60">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">Ready to see if we’re a fit?</h3>
              <p className="text-white/90">
                Schedule a tour and we’ll tailor a plan for your loved one.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="tel:+1-000-000-0000"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow md:min-w-[130px]"
              >
                Call Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/80 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-gray-900 md:min-w-[130px]"
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
