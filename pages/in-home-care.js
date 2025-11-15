import Footer from '../components/Layout/Footer'
import SectionEyebrow from '../components/misc/SectionEyebrow'
import SectionHeading from '../components/misc/SectionHeading'
import FaqSection from '../components/misc/FaqSection'
import Bullet from '../components/misc/Bullet'
import InfoStat from '../components/misc/InfoStat'
import PrimaryCta from '../components/misc/PrimaryCta'
import PageBackButton from '../components/misc/PageBackButton'
import {
  FaShieldAlt,
  FaHeartbeat,
  FaClock,
  FaMapMarkerAlt,
  FaHandsHelping,
  FaSyringe,
  FaBroom,
  FaClipboardList,
  FaUserShield,
  FaPhoneAlt,
  FaFileInvoiceDollar,
} from 'react-icons/fa'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const quickStats = [
  { icon: FaClock, label: 'Hours', value: 'Hourly • Overnight • 24/7' },
  { icon: FaMapMarkerAlt, label: 'Coverage', value: 'Louisville metro & nearby' },
  { icon: FaUserShield, label: 'Care Team', value: 'Trained, vetted caregivers' },
  { icon: FaHeartbeat, label: 'Care Plans', value: 'Personalized to every home' },
]

const faqItems = [
  {
    q: 'Who can receive in-home care?',
    a: 'Adults who want to remain at home but benefit from assistance with personal care, routines, mobility, or companionship.',
  },
  {
    q: 'Do I have to commit to a long contract?',
    a: 'No. We offer flexible scheduling and can scale hours up or down based on your family’s needs.',
  },
  {
    q: 'Can caregivers help with medications?',
    a: 'Caregivers provide reminders, documentation, and coordination per your care plan. Skilled nursing tasks can be scheduled separately if needed.',
  },
  {
    q: 'Do you cover nights or weekends?',
    a: 'Yes. We provide hourly, overnight, and live-in coverage, including weekends and holidays.',
  },
  {
    q: 'Is transportation included?',
    a: 'Caregivers can accompany clients on errands or appointments. We’ll clarify transportation options in your plan.',
  },
  {
    q: 'How do you ensure safety?',
    a: 'Background checks, ongoing training, insured care teams, and regular supervision keep every visit accountable.',
  },
]

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

export default function InHomeCarePage() {

  return (
    <>
      <div>
        <div className="mx-auto mb-24 mt-6 max-w-screen-xl px-4 sm:px-6 lg:px-10">
        <div className="sticky top-4 z-50 flex justify-start">
          <PageBackButton href="/" />
        </div>

          <div className="mt-6 space-y-16 sm:space-y-20 lg:space-y-24">
            <section className="section-shell relative overflow-hidden px-6 py-6 sm:px-12">
              <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: "url('/assets/background.jpg')" }}
                aria-hidden="true"
              />
              <div className="relative grid items-start gap-10 sm:grid-cols-[1.1fr,0.9fr]">
                <div className="text-center sm:text-left">
                  <SectionEyebrow className="mb-12">In-Home Care</SectionEyebrow>
                  <h1 className="font-jakarta text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
                    Care That Meets You Where You Live
                  </h1>
                  <p className="mt-12 text-base text-slate-600 sm:text-lg">
                    Age in place with dignity. Our trained, vetted caregivers provide personal care,
                    mobility support, light housekeeping, medication reminders, and meaningful
                    companionship—so life at home stays safe, comfortable, and connected.
                  </p>

                  <div className="mt-6 block sm:hidden">
                    <div className="relative aspect-[3/3] w-full overflow-hidden rounded-3xl bg-white/30 backdrop-blur">
                      <DotLottieReact
                        src="/assets/HomeCare.lottie"
                        autoplay
                        style={{ opacity: 0.85 }}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/40" />
                    </div>
                  </div>

                  <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
                    <PrimaryCta href="#plans" className="w-full justify-center sm:w-auto">
                      Explore Care Plans
                    </PrimaryCta>
                    <PrimaryCta href="#faq" className="w-full justify-center sm:w-auto">
                      Read FAQs
                    </PrimaryCta>
                  </div>
                </div>

                <div className="relative hidden aspect-[3/3] w-full overflow-hidden rounded-3xl bg-white/30 backdrop-blur sm:block">
                  <DotLottieReact
                    src="/assets/HomeCare.lottie"
                    autoplay
                    style={{ opacity: 0.85 }}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/40" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {quickStats.map((stat) => (
                  <InfoStat key={stat.label} {...stat} />
                ))}
              </div>
            </section>

            <section>
              <SectionHeading
                eyebrow="Personalized Support"
                title="What We Offer & Who It’s For"
                description="Personalized care that balances independence and support."
              />
              <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Card title="Personal Care & ADLs" icon={<FaHandsHelping />}>
                    <ul className="space-y-2">
                      <Bullet>Bathing, grooming, and dressing</Bullet>
                      <Bullet>Toileting & continence care</Bullet>
                      <Bullet>Safe transfers & mobility support</Bullet>
                    </ul>
                  </Card>
                  <Card title="Wellness Support" icon={<FaSyringe />}>
                    <ul className="space-y-2">
                      <Bullet>Medication reminders & documentation</Bullet>
                      <Bullet>Vitals/symptom check-ins as requested</Bullet>
                      <Bullet>Coordination with family & providers</Bullet>
                    </ul>
                  </Card>
                  <Card title="Home Help" icon={<FaBroom />}>
                    <ul className="space-y-2">
                      <Bullet>Light housekeeping & laundry</Bullet>
                      <Bullet>Meal prep & grocery assistance</Bullet>
                      <Bullet>Errands & appointment escorts</Bullet>
                    </ul>
                  </Card>
                  <Card title="Companionship" icon={<FaHeartbeat />}>
                    <ul className="space-y-2">
                      <Bullet>Engaging conversation & games</Bullet>
                      <Bullet>Shared hobbies & memory support</Bullet>
                      <Bullet>Emotional encouragement</Bullet>
                    </ul>
                  </Card>
                </div>
                <div className="space-y-6 rounded-3xl border border-white/25 bg-[url('/assets/background-card-2.jpg')] bg-cover bg-center bg-no-repeat p-[1px]">
                  <div className="rounded-[28px] bg-white/90 p-6 text-left shadow-[0_18px_35px_-28px_rgba(15,34,71,0.6)] backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#116768]">
                      Who It Benefits
                    </p>
                    <h3 className="mt-2 font-jakarta text-2xl font-semibold text-navy">
                      Designed for:
                    </h3>
                    <div className="mt-6 space-y-4">
                      {[
                        {
                          title: 'Aging in Place',
                          desc: 'Adults who want to stay at home with confidence and dignity.',
                        },
                        {
                          title: 'Mobility & ADL Support',
                          desc: 'Individuals needing help with movement, transfers, or personal care.',
                        },
                        {
                          title: 'Chronic & Cognitive Care',
                          desc: 'Loved ones managing memory loss, chronic illnesses, or recovery routines.',
                        },
                        {
                          title: 'Family Caregivers',
                          desc: 'Families balancing work, travel, or respite who need trusted backup.',
                        },
                      ].map(({ title, desc }) => (
                        <div
                          key={title}
                          className="rounded-2xl bg-white/70 p-4 shadow-[0_10px_25px_-22px_rgba(15,34,71,0.7)]"
                        >
                          <p className="text-sm font-semibold text-navy">{title}</p>
                          <p className="text-sm text-slate-600">{desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section-shell relative overflow-hidden px-6 py-1 sm:px-12">
              <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: "url('/assets/honeycomb-background.jpg')" }}
                aria-hidden="true"
              />
              <div className="relative my-12 space-y-10">
                <SectionHeading
                  eyebrow="Why Families Choose Us"
                  title="Why Families Choose Us"
                  description="Dependable benefits and a predictable rhythm in every visit."
                />
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="space-y-6">
                    {[
                      {
                        title: 'Trusted Relationships',
                        body: 'One-on-one caregivers who get to know routines, preferences, and family expectations.',
                        icon: <FaUserShield />,
                      },
                      {
                        title: 'Holistic Wellness',
                        body: 'Medication reminders, nutrition support, mobility work, and conversation keep loved ones engaged.',
                        icon: <FaHeartbeat />,
                      },
                      {
                        title: 'Family Peace of Mind',
                        body: 'Clear notes after each visit plus on-call supervision mean you always know how the day went.',
                        icon: <FaHandsHelping />,
                      },
                    ].map(({ title, body, icon }) => (
                      <div
                        key={title}
                        className="flex w-full items-start gap-4 rounded-2xl border border-white/20 bg-white/80 p-5 shadow-[0_15px_30px_-25px_rgba(15,34,71,0.65)]"
                      >
                        <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-navy text-white">
                          {icon}
                        </span>
                        <div>
                          <h3 className="font-jakarta text-lg font-semibold text-navy">{title}</h3>
                          <p className="mt-1 text-slate-600">{body}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="section-shell relative overflow-hidden bg-white/90 px-6 py-6">
                    <div className="relative space-y-6">
                      <div className="space-y-1 text-left">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#116768]">
                          Daily Rhythm
                        </p>
                        <h3 className="font-jakarta text-2xl font-semibold text-navy">
                          What a Visit Includes
                        </h3>
                        <p className="text-sm text-slate-600">
                          Each visit is tailored, but most follow this easy cadence.
                        </p>
                      </div>
                      <ol className="space-y-4">
                        {[
                          {
                            title: 'Arrival & Check-In',
                            desc: 'Greetings, comfort check, review priorities with family or care log.',
                          },
                          {
                            title: 'Care Blocks',
                            desc: 'Personal care, meals, movement, light housekeeping, errands, and companionship.',
                          },
                          {
                            title: 'Wrap & Notes',
                            desc: 'Tidy-up, medication reminders, departure support, and a brief update.',
                          },
                        ].map(({ title, desc }, idx) => (
                          <li key={title} className="flex items-start gap-3">
                            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-navy text-xs font-semibold text-white">
                              {idx + 1}
                            </span>
                            <div>
                              <p className="font-semibold text-navy">{title}</p>
                              <p className="text-sm text-slate-600">{desc}</p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <SectionHeading
                eyebrow="Safety, Training & Oversight"
                title="Safety, Training & Oversight"
                description="Licensed care, trusted staff, transparent communication."
              />
              <div className="mx-auto mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card title="Vetted Care Team" icon={<FaUserShield />}>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <Bullet>Background checks + reference verification</Bullet>
                    <Bullet>CPR/First Aid & dementia-aware training</Bullet>
                    <Bullet>Insured, supervised caregivers</Bullet>
                  </ul>
                </Card>
                <Card title="Ongoing Training" icon={<FaClipboardList />}>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <Bullet>Annual competencies & refreshers</Bullet>
                    <Bullet>Care plan reviews with families</Bullet>
                    <Bullet>Shadow shifts for new assignments</Bullet>
                  </ul>
                </Card>
                <Card title="Home Safety Practices" icon={<FaShieldAlt />}>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <Bullet>Sanitation, infection-control routines</Bullet>
                    <Bullet>Fall-prevention walk-throughs</Bullet>
                    <Bullet>Emergency procedures + escalation paths</Bullet>
                  </ul>
                </Card>
                <Card title="Transparent Oversight" icon={<FaPhoneAlt />}>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <Bullet>Visit summaries + optional daily notes</Bullet>
                    <Bullet>On-call supervisor support 24/7</Bullet>
                    <Bullet>Care coordination with providers</Bullet>
                  </ul>
                </Card>
              </div>
            </section>

            <section id="plans" className="scroll-mt-24 py-10">
              <div className="section-shell relative overflow-hidden px-4 py-10 sm:px-8">
                <div className="pointer-events-none absolute inset-0 opacity-50">
                  <div className="h-full w-full bg-[url('/assets/background-2.jpg')] bg-cover bg-center bg-no-repeat" />
                </div>
                <div className="relative">
                  <SectionHeading
                    eyebrow="Transparent & Supportive"
                    title="Plans & Funding Options"
                    description="Flexible scheduling with help navigating insurance and waiver options."
                  />
                  <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[2fr,1fr]">
                    <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/85 shadow-[0_18px_35px_-28px_rgba(15,34,71,0.6)] backdrop-blur-sm">
                      <table className="w-full text-left text-sm text-slate-700">
                        <thead className="bg-slate-50 text-navy">
                          <tr>
                            <th className="px-5 py-3 font-semibold">Plan</th>
                            <th className="px-5 py-3 font-semibold">Details</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {[
                            ['Hourly Visits', 'Minimum 3-4 hour blocks with flexible frequency.'],
                            [
                              'Overnight Support',
                              'Evening through morning coverage for safety & rest.',
                            ],
                            ['24/7 Live-In', 'Rotating caregivers for continuous support at home.'],
                            [
                              'Medicaid Waivers',
                              'We’ll check eligibility and guide documentation for in-home services.',
                            ],
                            [
                              'Long-Term Care Insurance',
                              'Many policies reimburse homemaker/personal care — we assist with claims.',
                            ],
                            [
                              'Veterans Programs',
                              'Aid & Attendance or Homemaker/Home Health options for eligible veterans/spouses.',
                            ],
                          ].map(([plan, detail]) => (
                            <tr key={plan} className="align-top">
                              <td className="px-5 py-3 font-semibold text-navy">{plan}</td>
                              <td className="px-5 py-3">{detail}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="rounded-3xl border border-white/40 bg-white/90 p-6 shadow-[0_18px_35px_-28px_rgba(15,34,71,0.6)] backdrop-blur-sm">
                      <h3 className="inline-flex items-center gap-2 text-lg font-semibold text-navy">
                        <FaFileInvoiceDollar /> How We Support
                      </h3>
                      <ul className="mt-4 space-y-2">
                        <Bullet>Review needs and build a transparent estimate</Bullet>
                        <Bullet>Coordinate assessments and paperwork</Bullet>
                        <Bullet>Assist with insurance/waiver claims</Bullet>
                        <Bullet>Adjust schedules as needs evolve</Bullet>
                      </ul>
                      <p className="mt-4 text-xs text-slate-500">
                        Availability varies by policy and location — we’ll guide you through it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <FaqSection id="faq" className="mb-24 mt-16" items={faqItems} />

          <section>
            <div className="section-shell relative overflow-hidden px-6 py-10 sm:px-12">
              <div className="pointer-events-none absolute inset-0 opacity-35">
                <div className="h-full w-full bg-[url('/assets/background-card-2.jpg')] bg-cover bg-center bg-no-repeat" />
              </div>
              <div className="relative flex flex-col items-start justify-between gap-5 text-left md:flex-row md:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-navy">
                    Ready to meet your caregiver team?
                  </h3>
                  <p className="mt-1 text-slate-600">
                    Schedule a home visit or call us to start a custom plan.
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
