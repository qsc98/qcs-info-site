// pages/adult-day-care.js
import React from 'react'
import { useRouter } from 'next/router'
import Footer from '../components/Layout/Footer'
import PrimaryCta from '../components/misc/PrimaryCta'
import SectionEyebrow from '../components/misc/SectionEyebrow'
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
  FaHandsHelping,
  FaWalking,
  FaFileInvoiceDollar,
  FaMedkit,
} from 'react-icons/fa'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const quickStats = [
  { icon: FaClock, label: 'Hours', value: 'Mon–Sat • 7 AM – 7 PM' },
  { icon: FaMapMarkerAlt, label: 'Location', value: '811 Mt Holly Rd, Fairdale' },
  { icon: FaWheelchair, label: 'Access', value: 'Wheelchair‑friendly + transport' },
  { icon: FaShieldAlt, label: 'Staffing', value: 'Licensed & trained team' },
]

const InfoStat = ({ icon: Icon, label, value }) => (
  <div className="rounded-2xl border border-white/80 bg-white/80 p-4 text-left shadow-[0_10px_25px_rgba(15,34,71,0.08)] backdrop-blur">
    <div className="flex items-center gap-3">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 bg-navy text-white">
        <Icon />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
        <p className="font-jakarta text-base text-navy">{value}</p>
      </div>
    </div>
  </div>
)

const Bullet = ({ children }) => (
  <li className="flex items-start gap-2 text-slate-700">
    <FaCheckCircle className="mt-0.5 h-4 w-4 flex-none text-[#116768]" />
    <span>{children}</span>
  </li>
)

const SectionHeading = ({ eyebrow, title, description, eyebrowTone = 'navy' }) => (
  <div className="text-center">
    {eyebrow ? (
      <div className="flex justify-center">
        <SectionEyebrow tone={eyebrowTone}>{eyebrow}</SectionEyebrow>
      </div>
    ) : null}
    <h2 className="mt-3 font-jakarta text-3xl font-semibold text-navy sm:text-4xl">{title}</h2>
    {description ? (
      <p className="mx-auto mt-2 max-w-3xl text-base text-slate-600 sm:text-lg">{description}</p>
    ) : null}
  </div>
)

function Card({ title, icon, children, className = '' }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-white/25 bg-[url('/assets/background-card.jpg')] bg-cover bg-center bg-no-repeat p-[1px] ${className}`}
    >
      <div className="h-full rounded-[28px] bg-white/85 p-6 shadow-[0_20px_35px_-28px_rgba(15,34,71,0.65)] backdrop-blur-sm transition group-hover:-translate-y-1">
        {title || icon ? (
          <div className="mb-4 flex items-center gap-3">
            {icon ? (
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-white shadow-[0_12px_24px_rgba(15,34,71,0.25)]">
                {icon}
              </span>
            ) : null}
            {title ? <h3 className="text-lg font-semibold text-navy">{title}</h3> : null}
          </div>
        ) : null}
        {children}
      </div>
    </article>
  )
}

/* ---------- Page ---------- */
export default function AdultDayCarePage() {
  const router = useRouter()
  const sectionId = router.query.from || 'adult-day-care'

  return (
    <>
      <div className="mx-auto mb-24 mt-6 max-w-screen-xl px-4 sm:px-6 lg:px-10">
        <div className="sticky top-4 z-50 flex justify-start">
          <button
            onClick={() => router.push(`/#${sectionId}`)}
            className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold text-navy shadow-lg shadow-[rgba(17,103,104,0.08)] ring-1 ring-slate-100 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#116768]/50"
          >
            <FaArrowLeft /> Services Overview
          </button>
        </div>

        <div className="mt-6 space-y-16 sm:space-y-20 lg:space-y-24">
          <section className="relative section-shell overflow-hidden px-6 py-10 sm:px-12">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: "url('/assets/background.jpg')" }}
              aria-hidden="true"
            />
            <div className="relative grid items-start gap-10 sm:grid-cols-[1.1fr,0.9fr]">
              <div className="text-center sm:text-left">
                <SectionEyebrow className="mb-6">Adult Day Care</SectionEyebrow>
                <h1 className="font-jakarta text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
                  Safe, Structured Days with Heart
                </h1>
                <p className="mt-4 text-base text-slate-600 sm:text-lg">
                  Our program blends meaningful connection, wellness routines, and hands-on support
                  so older adults thrive while caregivers gain dependable respite.
                </p>

                <div className="mt-6 block sm:hidden">
                  <div className="relative aspect-[3/3] w-full overflow-hidden rounded-3xl bg-white/30 backdrop-blur">
                    <DotLottieReact src="/assets/AdultDayCare.lottie" autoplay style={{ opacity: 0.85 }} />
                    <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/40" />
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
                  {[
                    { icon: FaShieldAlt, label: 'Licensed Care Team' },
                    { icon: FaUserFriends, label: 'Enriching Daily Programs' },
                    { icon: FaWheelchair, label: 'Accessible Transportation' },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-slate-100 bg-white/85 p-4 shadow-[0_10px_25px_rgba(15,34,71,0.08)] backdrop-blur"
                    >
                      <div className="flex items-center gap-3 font-medium text-navy">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white">
                          <Icon />
                        </span>
                        {label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
                  <PrimaryCta href="#costs" className="w-full justify-center sm:w-auto">
                    See Costs & Funding
                  </PrimaryCta>
                  <PrimaryCta href="#faq" className="w-full justify-center sm:w-auto">
                    Read FAQs
                  </PrimaryCta>
                </div>
              </div>

              <div className="relative hidden aspect-[3/3] w-full overflow-hidden rounded-3xl bg-white/30 backdrop-blur sm:block">
                <DotLottieReact src="/assets/AdultDayCare.lottie" autoplay style={{ opacity: 0.85 }} />
                <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/40" />
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickStats.map((stat) => (
              <InfoStat key={stat.label} {...stat} />
            ))}
          </section>

          <section>
            <SectionHeading
              eyebrow="Understanding Adult Day Care"
              title="What Is Adult Day Care?"
              description="Engaging activities, supervised support, and health-aware routines in a community setting — all designed to keep seniors active while families get reliable respite."
            />
            <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
              <Card title="Social & Purposeful">
                Meaningful routines, friendships, and creative sessions make each day structured and
                joyful.
              </Card>
              <Card title="Health‑Aware">
                Gentle exercise, cognitive games, hydration, and nutritious meals/snacks tailored to
                each person.
              </Card>
              <Card title="Caregiver Respite">
                Dependable daytime coverage so families can work, rest, or run errands with peace of
                mind.
              </Card>
            </div>
          </section>

        <section>
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

        <section>
          <SectionHeading title="Benefits for Seniors & Families" eyebrow="Why Families Choose Us" />
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

        <section>
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

        <section>
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

        <section>
          <SectionHeading
            eyebrow="Your Loved One’s Well‑Being Comes First"
            title="Health & Safety Standards"
            description="Clear protocols, trained people, and a purpose-built environment all work together to keep every day safe and comfortable."
          />
          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="Licensed & Trained" icon={<FaMedkit />}>
              <ul className="space-y-2 text-sm text-slate-700">
                <Bullet>Adult Day Health Care licensed</Bullet>
                <Bullet>CPR/First Aid & dementia-aware team</Bullet>
                <Bullet>Annual competencies & refreshers</Bullet>
              </ul>
            </Card>
            <Card title="Secure Environment" icon={<FaShieldAlt />}>
              <ul className="space-y-2 text-sm text-slate-700">
                <Bullet>Check-in/out, visitor logs, ID badges</Bullet>
                <Bullet>Monitored spaces + clear wayfinding</Bullet>
                <Bullet>Fall-reduction layouts & rest areas</Bullet>
              </ul>
            </Card>
            <Card title="Health & Hygiene" icon={<FaHeartbeat />}>
              <ul className="space-y-2 text-sm text-slate-700">
                <Bullet>Scheduled cleaning & sanitizing</Bullet>
                <Bullet>Hydration support & safe meal service</Bullet>
                <Bullet>Medication reminders, wellness checks</Bullet>
              </ul>
            </Card>
            <Card title="Emergency Ready" icon={<FaHandsHelping />}>
              <ul className="space-y-2 text-sm text-slate-700">
                <Bullet>Written procedures & regular drills</Bullet>
                <Bullet>Incident reporting with family updates</Bullet>
                <Bullet>Care plans aligned with providers</Bullet>
              </ul>
            </Card>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-slate-600">
            Questions about our protocols? We’re happy to walk you through the full checklist during
            your tour.
          </p>
        </section>

        <section id="costs" className="scroll-mt-28">
          <div className="section-shell relative overflow-hidden px-4 py-10 sm:px-8">
            <div className="pointer-events-none absolute inset-0 opacity-30">
              <div className="h-full w-full bg-[url('/assets/background-card-2.jpg')] bg-cover bg-center bg-no-repeat" />
            </div>
            <div className="relative">
              <SectionHeading
                eyebrow="Transparent & Supportive"
                title="Costs & Funding Options"
                description="We’ll help you understand pricing, verify eligibility, and explore programs that may offset out-of-pocket costs."
              />
              <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[2fr,1fr]">
                <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/85 shadow-[0_18px_35px_-28px_rgba(15,34,71,0.6)] backdrop-blur-sm">
                  <table className="w-full text-left text-sm text-slate-700">
                    <thead className="bg-slate-50 text-navy">
                      <tr>
                        <th className="px-5 py-3 font-semibold">Method</th>
                        <th className="px-5 py-3 font-semibold">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        ['Private Pay', 'Clear daily/half-day rates with flexible scheduling.'],
                        [
                          'Medicaid Waivers',
                          'Availability varies by state; we’ll help check eligibility and documentation.',
                        ],
                        [
                          'Long-Term Care Insurance',
                          'Many LTC policies reimburse adult day services; we assist with verification and claims.',
                        ],
                        [
                          'Veterans Benefits',
                          'VA programs (incl. Aid & Attendance) may subsidize eligible veterans/spouses.',
                        ],
                        [
                          'Sliding-Scale / Local Grants',
                          'When available, we’ll connect you to community assistance.',
                        ],
                      ].map(([method, detail]) => (
                        <tr key={method} className="align-top">
                          <td className="px-5 py-3 font-semibold text-navy">{method}</td>
                          <td className="px-5 py-3">{detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="rounded-3xl border border-white/40 bg-white/90 p-6 shadow-[0_18px_35px_-28px_rgba(15,34,71,0.6)] backdrop-blur-sm">
                  <h3 className="inline-flex items-center gap-2 text-lg font-semibold text-navy">
                    <FaFileInvoiceDollar /> How We Help
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <Bullet>Review needs/schedule for a clear estimate</Bullet>
                    <Bullet>Check Medicaid waiver, VA, or LTC eligibility</Bullet>
                    <Bullet>Provide letters/invoices & assist with claims</Bullet>
                    <Bullet>Confirm a start date once funding is in place</Bullet>
                  </ul>
                  <p className="mt-4 text-xs text-slate-500">
                    Note: Program eligibility and coverage vary by policy and location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="section-shell mt-10 divide-y divide-slate-100 bg-white/90 px-2 py-2 sm:px-4">
            <div className="grid grid-cols-1 md:grid-cols-2">
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
                <details key={item.q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-5">
                    <span className="font-semibold text-navy">{item.q}</span>
                    <span className="ml-4 rounded-full border border-slate-200 px-3 py-1 text-xs uppercase tracking-wider text-slate-500 group-open:hidden">
                      Show
                    </span>
                    <span className="ml-4 hidden rounded-full border border-[#116768]/30 bg-[#e3f2ef] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#116768] group-open:inline">
                      Hide
                    </span>
                  </summary>
                  <div className="px-4 pb-5 text-slate-600">{item.a}</div>
                  {idx !== 5 ? <div className="px-4" /> : null}
                </details>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="section-shell relative overflow-hidden px-6 py-10 sm:px-12">
            <div className="pointer-events-none absolute inset-0 opacity-35">
              <div className="h-full w-full bg-[url('/assets/background-card-2.jpg')] bg-cover bg-center bg-no-repeat" />
            </div>
            <div className="relative flex flex-col items-start justify-between gap-5 text-left md:flex-row md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-navy">Ready to see if we’re a fit?</h3>
                <p className="mt-1 text-slate-600">
                  Schedule a tour and we’ll tailor a plan for your loved one.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <PrimaryCta href="tel:+1502XXXXXXX" className="w-full justify-center sm:w-auto">
                  Call Us
                </PrimaryCta>
                <PrimaryCta href="#contact" className="w-full justify-center sm:w-auto">
                  Contact Our Team
                </PrimaryCta>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <Footer />
  </>
)
}
