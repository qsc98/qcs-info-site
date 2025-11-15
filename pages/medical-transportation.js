// pages/medical-transportation.js
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import {
  FaWheelchair,
  FaShieldAlt,
  FaClock,
  FaMapMarkerAlt,
  FaRoute,
  FaUserNurse,
  FaPhoneAlt,
  FaIdCard,
  FaClipboardList,
  FaThermometerHalf,
} from 'react-icons/fa'
import Footer from '../components/Layout/Footer'
import Bullet from '../components/misc/Bullet'
import FaqSection from '../components/misc/FaqSection'
import InfoStat from '../components/misc/InfoStat'
import PageBackButton from '../components/misc/PageBackButton'
import PrimaryCta from '../components/misc/PrimaryCta'
import SectionEyebrow from '../components/misc/SectionEyebrow'
import SectionHeading from '../components/misc/SectionHeading'

const quickStats = [
  { icon: FaClock, label: 'Advance Notice', value: 'Book 24 hours ahead' },
  { icon: FaMapMarkerAlt, label: 'Coverage', value: 'Louisville metro & nearby' },
  { icon: FaWheelchair, label: 'Accessibility', value: 'Lift-equipped fleet' },
  { icon: FaShieldAlt, label: 'Drivers', value: 'Trained & insured team' },
]

const faqItems = [
  {
    q: 'How far in advance should I book?',
    a: 'We recommend requesting rides 24 hours ahead. Same-day rides may be possible depending on driver availability.',
  },
  {
    q: 'Can you provide door-through-door service?',
    a: 'Yes. Let us know when you book if you need assistance from inside the home to the vehicle or from the vehicle into the destination.',
  },
  {
    q: 'Do your vehicles accommodate wheelchairs?',
    a: 'All vehicles are lift-equipped with securements for wheelchairs and space for walkers or other assistive devices.',
  },
  {
    q: 'Can a family member ride along?',
    a: 'One companion may ride at no additional cost. Please share their name when booking so we can plan seating.',
  },
  {
    q: 'Will the driver wait during my appointment?',
    a: 'Yes, we offer wait-and-return rides. We’ll confirm the expected duration and any additional fees before the trip.',
  },
  {
    q: 'What happens if my appointment runs long?',
    a: 'Call or text us and we’ll adjust pickup timing. We stay flexible for unavoidable clinic delays.',
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

export default function MedicalTransportationPage() {

  return (
    <>
      <div className="mx-auto mb-24 mt-6 max-w-screen-xl px-4 sm:px-6 lg:px-10">
        <div className="sticky top-4 z-50 flex justify-start">
          <PageBackButton href="/" />
        </div>

        <div className="mt-6 space-y-16 sm:space-y-20 lg:space-y-24">
          <section className="section-shell relative overflow-hidden p-6 sm:px-12">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: "url('/assets/background.jpg')" }}
              aria-hidden="true"
            />
            <div className="relative grid items-start gap-10 sm:grid-cols-[1.1fr,0.9fr]">
              <div className="text-center sm:text-left">
                <SectionEyebrow className="mb-12">Medical Transportation</SectionEyebrow>
                <h1 className="font-jakarta text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
                  Safe, Door-to-Door Rides You Can Trust
                </h1>
                <p className="mt-12 text-base text-slate-600 sm:text-lg">
                  Safe, on-time rides for healthcare visits and essential errands. Our wheelchair-accessible vehicles
                  and trained drivers get you there comfortably—with assistance from curb-to-curb or door-through-door
                  based on your needs.
                </p>

                <div className="mt-6 block sm:hidden">
                  <div className="relative aspect-[3/3] w-full overflow-hidden rounded-3xl bg-white/30 backdrop-blur">
                    <DotLottieReact src="/assets/Transportation.lottie" autoplay style={{ opacity: 0.85 }} />
                    <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/40" />
                  </div>
                </div>

                <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
                  <PrimaryCta href="#coverage" className="w-full justify-center sm:w-auto">
                    See Where We Go
                  </PrimaryCta>
                  <PrimaryCta href="#booking" className="w-full justify-center sm:w-auto">
                    How to Book
                  </PrimaryCta>
                </div>
              </div>

              <div className="relative hidden aspect-[3/3] w-full overflow-hidden rounded-3xl bg-white/30 backdrop-blur sm:block">
                <DotLottieReact src="/assets/Transportation.lottie" autoplay style={{ opacity: 0.85 }} />
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
              eyebrow="Ride with Confidence"
              title="Safety & Accessibility"
              description="Clear protocols, well-equipped vehicles, and compassionate assistance at every step."
            />
            <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card title="Senior-Aware Training" icon={<FaUserNurse />}>
                <ul className="space-y-2 text-sm text-slate-700">
                  <Bullet>Drivers trained for mobility & dementia support</Bullet>
                  <Bullet>Assistance to door & safe transfers</Bullet>
                  <Bullet>Respectful communication & pace</Bullet>
                </ul>
              </Card>
              <Card title="Comfortable Rides" icon={<FaWheelchair />}>
                <ul className="space-y-2 text-sm text-slate-700">
                  <Bullet>Wheelchair lifts & secure restraints</Bullet>
                  <Bullet>Space for assistive devices</Bullet>
                  <Bullet>One companion rides free</Bullet>
                </ul>
              </Card>
              <Card title="Clear Procedures" icon={<FaClipboardList />}>
                <ul className="space-y-2 text-sm text-slate-700">
                  <Bullet>Route & timing confirmation</Bullet>
                  <Bullet>Curb-to-curb or door-through-door</Bullet>
                  <Bullet>Wait & return available</Bullet>
                </ul>
              </Card>
              <Card title="Vetted & Insured" icon={<FaIdCard />}>
                <ul className="space-y-2 text-sm text-slate-700">
                  <Bullet>Background checks & driving records</Bullet>
                  <Bullet>Commercial insurance maintained</Bullet>
                  <Bullet>Regular vehicle inspections</Bullet>
                </ul>
              </Card>
              <Card title="Sanitized & Monitored" icon={<FaShieldAlt />}>
                <ul className="space-y-2 text-sm text-slate-700">
                  <Bullet>Vehicle cleaning between rides</Bullet>
                  <Bullet>Seatbelts, grips, and secure flooring</Bullet>
                  <Bullet>Incident reporting with follow-up</Bullet>
                </ul>
              </Card>
              <Card title="Temperature & Comfort" icon={<FaThermometerHalf />}>
                <ul className="space-y-2 text-sm text-slate-700">
                  <Bullet>Climate control for year-round comfort</Bullet>
                  <Bullet>Drivers monitor weather delays</Bullet>
                  <Bullet>Hydration reminders when rides are longer</Bullet>
                </ul>
              </Card>
            </div>
          </section>

          <section id="coverage" className="section-shell relative overflow-hidden px-6 py-10 sm:px-12">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: "url('/assets/background-2.jpg')" }}
              aria-hidden="true"
            />
            <div className="relative space-y-12">
              <SectionHeading
                eyebrow="Door-to-Door Convenience"
                title="Where We Take You"
                description="Plan routes that fit your schedule, then jump into the simple booking steps below."
              />
              <div className="mx-auto grid max-w-5xl grid-cols-1 justify-items-center gap-6 md:grid-cols-2">
                <Card title="Appointments & Treatments" icon={<FaRoute />} className="w-full">
                  <ul className="space-y-2">
                    <Bullet>Primary & specialist visits</Bullet>
                    <Bullet>Dialysis & infusion centers</Bullet>
                    <Bullet>Physical / occupational therapy</Bullet>
                  </ul>
                </Card>
                <Card title="Errands & Essentials" icon={<FaRoute />} className="w-full">
                  <ul className="space-y-2">
                    <Bullet>Pharmacies & labs</Bullet>
                    <Bullet>Adult day center drop-off</Bullet>
                    <Bullet>Hospital discharge pickup</Bullet>
                  </ul>
                </Card>
              </div>

              <div id="booking" className="relative mx-auto max-w-5xl">
                <div className="mb-8">
                  <SectionHeading
                    title="How to Book"
                    description="Same-day rides may be limited; we recommend booking at least 24 hours in advance."
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-x-6 top-6 hidden h-0.5 bg-slate-200 md:block lg:inset-x-12" />
                  <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {[
                      {
                        step: '1',
                        title: 'Call or Request',
                        icon: <FaPhoneAlt className="text-[#116768]" />,
                        copy: 'Tell us your pickup window, destination, and whether you need a round trip.',
                      },
                      {
                        step: '2',
                        title: 'Share Mobility Needs',
                        icon: <FaWheelchair className="text-[#116768]" />,
                        copy: 'Wheelchair or walker? Assistance to door? Companion riding along? We’ll plan for it.',
                      },
                      {
                        step: '3',
                        title: 'Confirm Details',
                        icon: <FaClipboardList className="text-[#116768]" />,
                        copy: 'We’ll confirm pickup time, driver, vehicle access, and any wait-and-return needs.',
                      },
                    ].map(({ step, title, icon, copy }) => (
                      <li key={step} className="relative">
                        <div className="flex items-start gap-4 md:flex-col md:items-center">
                          <div className="relative z-10 inline-flex size-12 items-center justify-center rounded-full bg-white text-[#116768] shadow ring-2 ring-[#116768]/30">
                            <span className="text-base font-bold">{step}</span>
                          </div>
                          <div className="text-left md:mt-3 md:text-center">
                            <h3 className="inline-flex items-center gap-2 text-base font-semibold text-navy">
                              {icon} {title}
                            </h3>
                            <p className="mt-1 text-slate-600">{copy}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-10 flex justify-center">
                  <div className="w-full max-w-3xl rounded-3xl border border-white/30 bg-white/85 p-6 shadow-[0_18px_35px_-30px_rgba(15,34,71,0.5)] backdrop-blur">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                      <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#116768]/10 text-[#116768]">
                        <FaClipboardList className="text-2xl" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-navy">What to Have Ready</h4>
                        <ul className="mt-3 space-y-2 text-slate-700">
                          <Bullet>Pickup & drop-off addresses with entrance details if needed</Bullet>
                          <Bullet>Appointment time & contact at destination</Bullet>
                          <Bullet>Mobility/assistance needs (wheelchair, walker, door-through-door help)</Bullet>
                          <Bullet>Name of companion if riding along</Bullet>
                        </ul>
                        <div className="mt-5 border-t border-slate-200 pt-4">
                          <h5 className="font-medium text-navy">Special Requests</h5>
                          <p className="mt-1 text-sm text-slate-600">
                            Prefer a driver who speaks your language or one you’ve ridden with before? Need cultural or
                            faith-based accommodations? Let us know—we’ll do our best to honor them.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-shell relative overflow-hidden px-6 py-10 sm:px-12">
            <div className="pointer-events-none absolute inset-0 opacity-35">
              <div className="size-full bg-[url('/assets/background-card-2.jpg')] bg-cover bg-center bg-no-repeat" />
            </div>
            <div className="relative flex flex-col items-start justify-between gap-5 text-left md:flex-row md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-navy">Need a ride to your appointment?</h3>
                <p className="mt-1 text-slate-600">
                  Book in advance and we’ll handle the rest—safely, on time, and with updates along the way.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <PrimaryCta href="tel:+1-000-000-0000" className="w-full justify-center sm:w-auto">
                  Call Now
                </PrimaryCta>
                <PrimaryCta href="#booking" className="w-full justify-center sm:w-auto">
                  Request a Ride
                </PrimaryCta>
              </div>
            </div>
          </section>

          <FaqSection
            id="faq"
            description="Common questions about coverage, accessibility, and what to expect on ride day."
            items={faqItems}
          />
        </div>
      </div>

      <Footer />
    </>
  )
}
