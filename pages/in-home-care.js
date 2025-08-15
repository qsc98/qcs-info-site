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
  FaClipboardList,
  FaUserShield,
  FaCarSide,
  FaPhoneAlt,
  FaFileInvoiceDollar,
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
export default function InHomeCarePage() {
  const router = useRouter()
  const sectionId = router.query.from || 'in-home-care'

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
              In‑Home Care
            </h1>
            <p className="mt-4 max-w-xl text-center text-gray-700 sm:text-left">
              Age in place with dignity. Our trained, vetted caregivers provide personal care,
              mobility support, light housekeeping, medication reminders, and meaningful
              companionship—so life at home stays safe, comfortable, and connected.
            </p>

            {/* Trust Strip */}
            <div className="mt-8 grid grid-cols-1 gap-4 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-gray-100 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                  <FaUserShield className="text-lg" />
                </span>
                <span className="text-sm font-medium text-gray-800">Certified Caregivers</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-700 ring-1 ring-amber-200">
                  <FaClipboardList className="text-lg" />
                </span>
                <span className="text-sm font-medium text-gray-800">Custom care plans</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-200">
                  <FaCarSide className="text-lg" />
                </span>
                <span className="text-sm font-medium text-gray-800">Flexible scheduling</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
              <a
                href="#plans"
                className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-700 px-6 py-3 text-white shadow-lg ring-1 ring-emerald-600/60 transition hover:-translate-y-0.5 hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 sm:w-auto"
              >
                Explore Care Plans
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
            <DotLottieReact src="/assets/HomeCare.lottie" autoplay />
          </div>
        </section>

        {/* QUICK FACTS */}
        <section className="mt-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat icon={<FaClock />} text="Hourly • Overnight • 24/7" />
            <Stat icon={<FaMapMarkerAlt />} text="Louisville metro & nearby" />
            <Stat icon={<FaShieldAlt />} text="Caregivers vetted & trained" />
            <Stat icon={<FaHeartbeat />} text="Care plans tailored to needs" />
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="Personalized Support"
            title="What We Offer at Home"
            description="Hands-on help with daily living, health-aware routines, and a clean, safe environment—delivered with dignity and respect."
          />
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card title="Personal Care & ADLs" icon={<FaHandsHelping />}>
              <ul className="space-y-2">
                <Bullet>Bathing, grooming, and dressing</Bullet>
                <Bullet>Toileting & continence support</Bullet>
                <Bullet>Safe transfers & mobility assistance</Bullet>
              </ul>
            </Card>
            <Card title="Wellness Support" icon={<FaSyringe />}>
              <ul className="space-y-2">
                <Bullet>Medication reminders & tracking</Bullet>
                <Bullet>Vitals/symptom check-ins as requested</Bullet>
                <Bullet>Coordination with family & providers</Bullet>
              </ul>
            </Card>
            <Card title="Home Help" icon={<FaBroom />}>
              <ul className="space-y-2">
                <Bullet>Light housekeeping & laundry</Bullet>
                <Bullet>Meal prep & grocery support</Bullet>
                <Bullet>Errands & appointment escorts</Bullet>
              </ul>
            </Card>
            <Card title="Companionship" icon={<FaHeartbeat />}>
              <ul className="space-y-2">
                <Bullet>Engaging conversation</Bullet>
                <Bullet>Shared activities & hobbies</Bullet>
                <Bullet>Emotional support & presence</Bullet>
              </ul>
            </Card>
          </div>
        </section>

        {/* FLEXIBLE SCHEDULING */}
        <section id="plans" className="mt-14 scroll-mt-28">
          <SectionHeading
            title="Flexible Scheduling Options"
            description="Choose the support that fits: a few hours a week, overnight relief, or continuous 24/7 care. We’ll build around your routines and budget."
          />
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
            <Card title="Hourly Visits" icon={<FaClock />}>
              Ideal for morning/evening routines, meals, or transportation blocks.
            </Card>
            <Card title="Overnight & Live‑In" icon={<FaBed />}>
              Nighttime supervision, repositioning, toileting, and safety monitoring.
            </Card>
            <Card title="Respite Coverage" icon={<FaHandsHelping />}>
              Temporary relief so primary caregivers can rest and recharge.
            </Card>
          </div>
        </section>

        {/* SAFETY & QUALITY */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="Your Home, Your Peace of Mind"
            title="Safety, Training & Oversight"
            description="Clear standards guide every visit. From background checks to care notes, we keep you informed and in control."
          />
          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-3 inline-flex items-center gap-2 text-gray-900">
                <FaUserShield className="text-emerald-600" />
                <span className="font-semibold">Vetted Caregivers</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <Bullet>Background checks & references</Bullet>
                <Bullet>Skills verification & onboarding</Bullet>
                <Bullet>Ongoing supervision & feedback</Bullet>
              </ul>
            </div>

            <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-3 inline-flex items-center gap-2 text-gray-900">
                <FaClipboardList className="text-emerald-600" />
                <span className="font-semibold">Care Plans</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <Bullet>Customized tasks & schedules</Bullet>
                <Bullet>Clear goals & preferences</Bullet>
                <Bullet>Visit notes & family updates</Bullet>
              </ul>
            </div>

            <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-3 inline-flex items-center gap-2 text-gray-900">
                <FaShieldAlt className="text-emerald-600" />
                <span className="font-semibold">Home Safety</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <Bullet>Fall‑prevention minded routines</Bullet>
                <Bullet>Safe transfers & equipment use</Bullet>
                <Bullet>Emergency procedures & escalation</Bullet>
              </ul>
            </div>

            <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-3 inline-flex items-center gap-2 text-gray-900">
                <FaHeartbeat className="text-emerald-600" />
                <span className="font-semibold">Dignity & Respect</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <Bullet>Privacy, consent, and choice</Bullet>
                <Bullet>Culture‑aware, person‑first care</Bullet>
                <Bullet>Kindness & companionship</Bullet>
              </ul>
            </div>
          </div>
        </section>

        {/* COSTS & FUNDING */}
        <section id="costs" className="mt-14 scroll-mt-28">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 px-3 py-1 text-xs font-medium text-yellow-900 shadow-md ring-1 ring-yellow-500/50">
              Transparent & Supportive
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-gray-900">Costs & Funding Options</h2>
            <p className="mx-auto mt-2 max-w-3xl text-gray-700">
              We’ll provide a clear estimate based on hours and tasks, then help you explore
              programs that may offset out‑of‑pocket costs.
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
                    ['Private Pay', 'Hourly and live‑in rates with flexible scheduling.'],
                    [
                      'Medicaid Waivers',
                      'Availability varies; we’ll help check eligibility and paperwork.',
                    ],
                    [
                      'Long‑Term Care Insurance',
                      'Many LTC policies reimburse in‑home care; we assist with claims.',
                    ],
                    [
                      'VA Benefits',
                      'Some programs subsidize in‑home support for eligible veterans/spouses.',
                    ],
                    [
                      'Local Grants/Programs',
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
                <Bullet>Review needs & schedule for a clear estimate</Bullet>
                <Bullet>Verify Medicaid waiver, VA, or LTC eligibility</Bullet>
                <Bullet>Provide supporting letters/invoices & assist with claims</Bullet>
                <Bullet>Confirm a start date once funding is in place</Bullet>
              </ul>
              <p className="mt-3 text-xs text-emerald-900/70">
                Note: Program eligibility and coverage vary by policy and location.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16" id="faq">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="mx-auto mt-6 max-w-6xl overflow-hidden rounded-2xl border border-amber-200/60 bg-white shadow-[0_10px_30px_-18px_rgba(245,158,11,0.35)]">
            <div className="grid grid-cols-1 divide-y divide-amber-200/60 md:grid-cols-2 md:divide-x md:divide-y-0">
              {[
                {
                  q: 'How do you match a caregiver to our needs?',
                  a: 'We review your care plan, preferences, language/culture needs, and schedule—then match skills and personality. We adjust quickly if it’s not a fit.',
                },
                {
                  q: 'Can you help with mobility and transfers?',
                  a: 'Yes. Our team is trained in safe transfers, ambulation, and fall‑prevention minded routines.',
                },
                {
                  q: 'Do you provide medication administration?',
                  a: 'We provide reminders and tracking per policy. If administration is needed, we’ll discuss options during your assessment.',
                },
                {
                  q: 'What areas do you serve?',
                  a: 'We cover Louisville metro and nearby communities. We’ll confirm your address and scheduling windows during intake.',
                },
                {
                  q: 'Are caregivers insured and supervised?',
                  a: 'Yes—caregivers are insured, supervised, and receive ongoing training. We maintain visit notes and can share updates with family.',
                },
                {
                  q: 'How quickly can services start?',
                  a: 'Often within days of the assessment and finalized schedule—timing varies by hours requested.',
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
              <h3 className="text-xl font-semibold">Let’s build your care plan</h3>
              <p className="text-white/90">
                Tell us your needs—hours, tasks, budget—and we’ll propose options.
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
