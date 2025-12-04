// pages/adult-day-care.js
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React from 'react'
import {
  FaUserFriends,
  FaHeartbeat,
  FaUtensils,
  FaShieldAlt,
  FaWheelchair,
  FaClock,
  FaMapMarkerAlt,
  FaHandsHelping,
  FaWalking,
  FaFileInvoiceDollar,
  FaMedkit,
} from 'react-icons/fa'
import Layout from '../components/Layout/Layout'
import Bullet from '../components/misc/Bullet'
import FaqSection from '../components/misc/FaqSection'
import InfoStat from '../components/misc/InfoStat'
import PrimaryCta from '../components/misc/PrimaryCta'
import SectionEyebrow from '../components/misc/SectionEyebrow'
import SectionHeading from '../components/misc/SectionHeading'

const quickStats = [
  { icon: FaClock, label: 'Hours', value: 'Mon–Sat • 7 AM – 7 PM' },
  { icon: FaMapMarkerAlt, label: 'Location', value: '811 Mt Holly Rd, Fairdale' },
  { icon: FaWheelchair, label: 'Access', value: 'Wheelchair‑friendly + transport' },
  { icon: FaShieldAlt, label: 'Staffing', value: 'Licensed & trained team' },
]

const faqItems = [
  {
    q: 'Who is eligible for Adult Day Care?',
    a: 'Adults who benefit from supervision, social engagement, or assistance with daily activities — including those with mild cognitive or mobility challenges.',
  },
  {
    q: 'What happens on a typical day?',
    a: 'A warm welcome and breakfast, group activities and wellness, lunch and social time, then a calm wrap-up with departures and optional family updates.',
  },
  {
    q: 'Do you accommodate special diets or allergies?',
    a: 'Yes. We provide diabetic-friendly, low-sodium, and texture-modified options and carefully manage allergies.',
  },
  {
    q: 'Is transportation available?',
    a: 'Yes. We offer wheelchair-accessible rides within our service area; we’ll confirm routes and timing during your tour.',
  },
  {
    q: 'How are medications handled?',
    a: 'Per policy and state guidelines, our trained team provides medication reminders and documents administration per your care plan.',
  },
  {
    q: 'What are the costs and funding options?',
    a: 'We’ll provide transparent rates and help you explore Medicaid waivers, VA benefits, LTC insurance, and any local assistance.',
  },
]

function Card({ title, icon, children, className = '' }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-white/25 bg-[url('/assets/background-card.jpg')] bg-cover bg-center bg-no-repeat p-px ${className}`}
    >
      <div className="h-full rounded-[28px] bg-white/85 p-6 shadow-[0_20px_35px_-28px_rgba(15,34,71,0.65)] backdrop-blur-sm transition group-hover:-translate-y-1">
        {title || icon ? (
          <div className="mb-4 flex items-center gap-3">
            {icon ? (
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-navy text-white shadow-[0_12px_24px_rgba(15,34,71,0.25)]">
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

  return (
    <Layout>
      <div className="mx-auto mb-24 mt-6 max-w-screen-xl px-4 sm:px-6 lg:px-10">
        <div className="mt-6 space-y-16 sm:space-y-20 lg:space-y-24">
          <section className="section-shell relative overflow-hidden p-6 sm:px-12">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: "url('/assets/background.jpg')" }}
              aria-hidden="true"
            />
            <div className="relative grid items-start gap-10 sm:grid-cols-[1.1fr,0.9fr]">
              <div className="text-center sm:text-left">
                <SectionEyebrow className="mb-12">Adult Day Care</SectionEyebrow>
                <h1 className="font-jakarta text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
                  Safe, Structured Days with Heart
                </h1>
                <p className="mt-12 text-base text-slate-600 sm:text-lg">
                  Our adult day care program is designed to support older adults in a safe,
                  structured, and enriching environment during daytime hours. We provide supervised
                  care with personalized activities—memory games, gentle exercise, social
                  connection, and creative engagement—so seniors thrive while caregivers get
                  dependable respite.
                </p>

                <div className="mt-6 block sm:hidden">
                  <div className="relative aspect-[3/3] w-full overflow-hidden rounded-3xl bg-white/30 backdrop-blur">
                    <DotLottieReact
                      src="/assets/AdultDayCare.lottie"
                      autoplay
                      style={{ opacity: 0.85 }}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/40" />
                  </div>
                </div>

                <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
                  <PrimaryCta href="#costs" className="w-full justify-center sm:w-auto">
                    See Costs & Funding
                  </PrimaryCta>
                  <PrimaryCta href="#faq" className="w-full justify-center sm:w-auto">
                    Read FAQs
                  </PrimaryCta>
                </div>
              </div>

              <div className="relative hidden aspect-[3/3] w-full overflow-hidden rounded-3xl bg-white/30 backdrop-blur sm:block">
                <DotLottieReact
                  src="/assets/AdultDayCare.lottie"
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
              eyebrow="Understanding Adult Day Care"
              title="What It Is & Who Thrives Here"
              description="Daytime care, restorative routines, and community—supporting seniors to thrive and caregivers to recharge."
            />
            <div className="mx-auto mt-10 grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
              <div className="space-y-6">
                <Card title="Meaningful, Structured Days" icon={<FaUserFriends />}>
                  <p className="text-slate-700">
                    Morning welcomes, purposeful group activities, music, creative therapies, and
                    restorative breaks create a predictable rhythm that keeps minds engaged and
                    spirits high.
                  </p>
                  <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                    <Bullet>Guided memory games & conversation circles</Bullet>
                    <Bullet>Chair fitness, stretching, and safe movement</Bullet>
                    <Bullet>Nutritious meals/snacks and hydration prompts</Bullet>
                    <Bullet>Calm spaces for rest, reflection, or one-on-one time</Bullet>
                  </ul>
                </Card>
                <Card title="Care That Gives Families Breathing Room" icon={<FaHandsHelping />}>
                  <p className="text-slate-700">
                    Licensed staff provide supervision, medication reminders per policy, mobility
                    assistance, and daily updates — so loved ones can work or recharge knowing care
                    is handled.
                  </p>
                  <div className="mt-4 rounded-2xl border border-slate-100 bg-white/70 p-4 text-sm text-slate-700">
                    <p className="font-semibold text-navy">What to expect</p>
                    <p className="mt-2">
                      Doors open 7 AM, with programming through 7 PM, flexible schedules (partial or
                      full days), and transportation options for eligible participants.
                    </p>
                  </div>
                </Card>
              </div>
              <div className="rounded-3xl border border-white/30 bg-[url('/assets/background-card-2.jpg')] bg-cover bg-center bg-no-repeat p-px">
                <div className="rounded-[28px] bg-white/90 p-6 shadow-[0_18px_35px_-28px_rgba(15,34,71,0.6)] backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#116768]">
                    Who It Supports
                  </p>
                  <h3 className="mt-2 font-jakarta text-2xl font-semibold text-navy">
                    Designed for:
                  </h3>
                  <ul className="mt-6 space-y-2">
                    <Bullet>Adults 55+ who crave companionship and structured days</Bullet>
                    <Bullet>Individuals with mild cognitive change or early dementia</Bullet>
                    <Bullet>People needing light mobility help or wheelchair access</Bullet>
                    <Bullet>Those rebuilding strength after a hospital stay or illness</Bullet>
                    <Bullet>
                      Family caregivers who need dependable weekday or Saturday respite
                    </Bullet>
                  </ul>
                  <div className="mt-6 rounded-2xl border border-[#116768]/10 bg-[#116768]/5 p-4 text-sm text-slate-700">
                    <p className="font-semibold text-navy">Getting started</p>
                    <p className="mt-2">
                      Schedule a tour, share care goals, and we’ll co-create a day schedule that
                      matches interests, health needs, and transportation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="day-flow" className="section-shell relative overflow-hidden px-6 py-10 sm:px-12">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-50"
              style={{ backgroundImage: "url('/assets/honeycomb-background.jpg')" }}
              aria-hidden="true"
            />
            <div className="relative p-6 sm:p-10">
              <SectionHeading
                eyebrow="Daily Flow + Programs"
                title="How Each Day Runs & What We Provide"
                description="See the rhythm your loved one can count on plus the core services wrapped into every visit."
              />
              <div className="mx-auto mt-10 space-y-12">
                <div className="rounded-3xl border border-white/30 bg-white/80 p-6 shadow-[0_20px_45px_-32px_rgba(15,34,71,0.5)] backdrop-blur">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#116768]">
                        Daily Rhythm
                      </p>
                      <h3 className="mt-2 font-jakarta text-2xl font-semibold text-navy">
                        Structured, predictable blocks
                      </h3>
                    </div>
                    <p className="max-w-xl text-sm text-slate-600">
                      Smooth transitions from arrival to wind-down keep participants grounded while you
                      stay updated.
                    </p>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
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
                </div>

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#116768]">
                        Programs & Supports
                      </p>
                      <h3 className="mt-2 font-jakarta text-2xl font-semibold text-navy">
                        Everything included in the day
                      </h3>
                    </div>
                    <p className="max-w-xl text-sm text-slate-600">
                      Social connection, wellness monitoring, nourishing meals, and transportation
                      support are all coordinated by the same care team.
                    </p>
                  </div>
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
                        within our service area — operated by friendly, trained drivers. Ask us about
                        routes and timing.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <SectionHeading
              title="Benefits for Seniors & Families"
              eyebrow="Why Families Choose Us"
            />
            <div className="relative mx-auto mt-6 max-w-5xl overflow-hidden rounded-[32px] border border-white/30 bg-white/70 p-6 shadow-[0_24px_50px_-34px_rgba(15,34,71,0.65)] sm:p-8">
              <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            </div>
          </section>



          <section>
            <SectionHeading
              eyebrow="Your Loved One’s Well‑Being Comes First"
              title="Health & Safety Standards"
              description="Trained staff, clear protocols, and a safe, purpose-built environment ensure daily comfort."
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
              Questions about our protocols? We’re happy to walk you through the full checklist
              during your tour.
            </p>
          </section>

          <section id="costs" className="scroll-mt-28">
            <div className="section-shell relative overflow-hidden px-4 py-10 sm:px-8">
              <div className="pointer-events-none absolute inset-0 opacity-30">
                <div className="size-full bg-[url('/assets/background-card-2.jpg')] bg-cover bg-center bg-no-repeat" />
              </div>
              <div className="relative">
                <SectionHeading
                  eyebrow="Transparent & Supportive"
                  title="Costs & Funding Options"
                  description="We’ll guide you through pricing, eligibility, and programs that can reduce costs."
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

          <FaqSection
            id="faq"
            items={faqItems}
            description="Quick answers to the topics families ask about most often."
          />

          <section>
            <div className="section-shell relative overflow-hidden px-6 py-10 sm:px-12">
              <div className="pointer-events-none absolute inset-0 opacity-35">
                <div className="size-full bg-[url('/assets/background-card-2.jpg')] bg-cover bg-center bg-no-repeat" />
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
    </Layout>
  )
}
