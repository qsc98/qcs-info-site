// pages/medical-transportation.js
import { useRouter } from 'next/router'
import Footer from '../components/Layout/Footer'
import {
  FaArrowLeft,
  FaCheckCircle,
  FaWheelchair,
  FaShieldAlt,
  FaClock,
  FaMapMarkerAlt,
  FaRoute,
  FaUserNurse,
  FaPhoneAlt,
  FaIdCard,
  FaClipboardList,
} from 'react-icons/fa'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

/* ---------- UI Atoms (shared look/feel) ---------- */
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
export default function MedicalTransportationPage() {
  const router = useRouter()
  const sectionId = router.query.from || 'medical-transportation'

  return (
    <>
      {/* Ambient gradient background */}
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
              Medical Transportation
            </h1>
            <p className="mt-4 max-w-xl text-center text-gray-700 sm:text-left">
              Safe, on‑time rides for healthcare visits and essential errands. Our
              wheelchair‑accessible vehicles and trained drivers get you there comfortably—with
              assistance from door to door.
            </p>

            {/* Trust Strip */}
            <div className="mt-8 grid grid-cols-1 gap-4 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-gray-100 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                  <FaWheelchair className="text-lg" />
                </span>
                <span className="text-sm font-medium text-gray-800">Accessible fleet</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-700 ring-1 ring-amber-200">
                  <FaUserNurse className="text-lg" />
                </span>
                <span className="text-sm font-medium text-gray-800">
                  Drivers trained for senior care
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-200">
                  <FaShieldAlt className="text-lg" />
                </span>
                <span className="text-sm font-medium text-gray-800">Insured & vetted</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
              <a
                href="#coverage"
                className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-700 px-6 py-3 text-white shadow-lg ring-1 ring-emerald-600/60 transition hover:-translate-y-0.5 hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 sm:w-auto"
              >
                See Where We Go
              </a>
              <a
                href="#booking"
                className="inline-flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-300 sm:w-auto"
              >
                How to Book
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="relative aspect-[3/3] w-full overflow-hidden rounded-2xl shadow-xl">
            <DotLottieReact src="/assets/Transportation.lottie" autoplay />
          </div>
        </section>

        {/* QUICK FACTS */}
        <section className="mt-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat icon={<FaClock />} text="Advance booking: 24 hours" />
            <Stat icon={<FaMapMarkerAlt />} text="Louisville metro & nearby" />
            <Stat icon={<FaWheelchair />} text="Wheelchair‑accessible vehicles" />
            <Stat icon={<FaShieldAlt />} text="Trained, insured drivers" />
          </div>
        </section>

        {/* WHERE WE TAKE YOU */}
        <section id="coverage" className="mt-14">
          <SectionHeading
            eyebrow="Door‑to‑Door Convenience"
            title="Where We Take You"
            description="From routine appointments to essential errands, we plan routes that fit your schedule."
          />
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            <Card title="Appointments & Treatments" icon={<FaRoute />}>
              <ul className="space-y-2">
                <Bullet>Primary & specialist visits</Bullet>
                <Bullet>Dialysis & infusion centers</Bullet>
                <Bullet>Physical / occupational therapy</Bullet>
              </ul>
            </Card>
            <Card title="Errands & Essentials" icon={<FaRoute />}>
              <ul className="space-y-2">
                <Bullet>Pharmacies & labs</Bullet>
                <Bullet>Adult day center drop‑off</Bullet>
                <Bullet>Hospital discharge pickup</Bullet>
              </ul>
            </Card>
          </div>
        </section>

        {/* SAFETY & ACCESSIBILITY — compact 4 cards */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="Ride with Confidence"
            title="Safety & Accessibility"
            description="Clear protocols, well‑equipped vehicles, and compassionate assistance at every step."
          />
          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-3 inline-flex items-center gap-2 text-gray-900">
                <FaUserNurse className="text-emerald-600" />
                <span className="font-semibold">Senior‑Aware Training</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <Bullet>Assistance to door & safe transfers</Bullet>
                <Bullet>Respectful communication & pace</Bullet>
                <Bullet>Care notes upon request</Bullet>
              </ul>
            </div>

            <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-3 inline-flex items-center gap-2 text-gray-900">
                <FaWheelchair className="text-emerald-600" />
                <span className="font-semibold">Accessible Vehicles</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <Bullet>Wheelchair lifts & secure restraints</Bullet>
                <Bullet>Space for assistive devices</Bullet>
                <Bullet>One companion rides free</Bullet>
              </ul>
            </div>

            <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-3 inline-flex items-center gap-2 text-gray-900">
                <FaClipboardList className="text-emerald-600" />
                <span className="font-semibold">Clear Procedures</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <Bullet>Route & timing confirmation</Bullet>
                <Bullet>Curb‑to‑curb or door‑through‑door</Bullet>
                <Bullet>Wait & return available</Bullet>
              </ul>
            </div>

            <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-3 inline-flex items-center gap-2 text-gray-900">
                <FaIdCard className="text-emerald-600" />
                <span className="font-semibold">Vetted & Insured</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <Bullet>Background checks & driving records</Bullet>
                <Bullet>Commercial insurance maintained</Bullet>
                <Bullet>Regular vehicle inspections</Bullet>
              </ul>
            </div>
          </div>
        </section>

        {/* HOW TO BOOK — responsive stepper/timeline */}
        <section id="booking" className="mt-14 scroll-mt-28">
          <SectionHeading
            eyebrow="Simple & Clear"
            title="How to Book"
            description="Follow these three steps. Same‑day rides may be limited; we recommend booking at least 24 hours in advance."
          />

          {/* Horizontal connector (md+) */}
          <div className="relative mx-auto mt-8 max-w-5xl">
            <div className="absolute left-6 right-6 top-6 hidden h-0.5 bg-emerald-200 md:block lg:left-12 lg:right-12" />
            <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Step 1 */}
              <li className="relative">
                <div className="flex items-start gap-4 md:flex-col md:items-center">
                  <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-700 shadow ring-2 ring-emerald-300">
                    <span className="text-base font-bold">1</span>
                  </div>
                  <div className="text-left md:mt-3 md:text-center">
                    <h3 className="inline-flex items-center gap-2 text-base font-semibold text-gray-900">
                      <FaPhoneAlt className="text-emerald-600" /> Call or Request
                    </h3>
                    <p className="mt-1 text-gray-700">
                      Tell us your pickup window, destination, and whether you need a round trip.
                    </p>
                  </div>
                </div>
              </li>

              {/* Step 2 */}
              <li className="relative">
                <div className="flex items-start gap-4 md:flex-col md:items-center">
                  <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-700 shadow ring-2 ring-emerald-300">
                    <span className="text-base font-bold">2</span>
                  </div>
                  <div className="text-left md:mt-3 md:text-center">
                    <h3 className="inline-flex items-center gap-2 text-base font-semibold text-gray-900">
                      <FaWheelchair className="text-emerald-600" /> Share Mobility Needs
                    </h3>
                    <p className="mt-1 text-gray-700">
                      Wheelchair or walker? Assistance to door? Companion riding along? We’ll plan
                      for it.
                    </p>
                  </div>
                </div>
              </li>

              {/* Step 3 */}
              <li className="relative">
                <div className="flex items-start gap-4 md:flex-col md:items-center">
                  <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-700 shadow ring-2 ring-emerald-300">
                    <span className="text-base font-bold">3</span>
                  </div>
                  <div className="text-left md:mt-3 md:text-center">
                    <h3 className="inline-flex items-center gap-2 text-base font-semibold text-gray-900">
                      <FaClipboardList className="text-emerald-600" /> Confirm Details
                    </h3>
                    <p className="mt-1 text-gray-700">
                      We’ll confirm pickup time, driver, vehicle access, and any wait‑and‑return
                      needs.
                    </p>
                  </div>
                </div>
              </li>
            </ol>

            {/* Handy tips card */}
            <div className="mt-10 flex justify-center">
              <div className="w-full max-w-3xl rounded-2xl bg-emerald-50/60 p-6 shadow-sm ring-1 ring-emerald-100">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  {/* Icon */}
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200">
                    <FaClipboardList className="text-2xl" />
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">What to Have Ready</h4>
                    <ul className="mt-3 space-y-2 text-gray-700">
                      <Bullet>
                        Pickup & drop-off addresses (include entrance details if needed)
                      </Bullet>
                      <Bullet>Appointment time & contact at destination</Bullet>
                      <Bullet>
                        Mobility/assistance needs (wheelchair, walker, door-through-door help)
                      </Bullet>
                      <Bullet>Name of companion if riding along</Bullet>
                    </ul>

                    {/* New: Special Requests */}
                    <div className="mt-5 border-t border-emerald-200 pt-4">
                      <h5 className="font-medium text-gray-900">Special Requests</h5>
                      <p className="mt-1 text-sm text-gray-700">
                        Let us know if you’d prefer a driver who speaks your language, is familiar
                        with your cultural needs, or if you’ve had a great experience with a
                        specific driver before. We’ll do our best to accommodate these requests
                        whenever possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-14 rounded-[28px] bg-gradient-to-r from-emerald-700 to-emerald-600 p-6 text-white shadow-[0_20px_50px_-25px_rgba(16,185,129,0.5)] ring-1 ring-emerald-600/60">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">Need a ride to your appointment?</h3>
              <p className="text-white/90">
                Book in advance and we’ll handle the rest—safely and on time.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="tel:+1-000-000-0000"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow md:min-w-[130px]"
              >
                <FaPhoneAlt className="mr-2" /> Call Now
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
