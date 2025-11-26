import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import Image from 'next/image'
import {
  FaHandshake,
  FaUsers,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaClock,
  FaClipboardList,
} from 'react-icons/fa'
import Footer from '../components/Layout/Footer'
import Bullet from '../components/misc/Bullet'
import InfoStat from '../components/misc/InfoStat'
import PageBackButton from '../components/misc/PageBackButton'
import PrimaryCta from '../components/misc/PrimaryCta'
import SectionEyebrow from '../components/misc/SectionEyebrow'
import SectionHeading from '../components/misc/SectionHeading'

const quickStats = [
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Louisville & nearby communities' },
  { icon: FaClock, label: 'Hours', value: 'Mon–Sat • 7 AM – 7 PM' },
  { icon: FaUsers, label: 'Approach', value: 'Family-centered support' },
  { icon: FaShieldAlt, label: 'Team', value: 'Licensed, trained professionals' },
]

function Card({ title, icon, children, className = '', innerClassName = '' }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-white/25 bg-[url('/assets/background-card.jpg')] bg-cover p-px ${className}`}
    >
      <div className={`h-full rounded-[28px] bg-white/40 p-6 shadow-[0_20px_35px_-28px_rgba(15,34,71,0.65)] transition group-hover:-translate-y-1 ${innerClassName}`}>
        {(title || icon) && (
          <div className="mb-4 flex items-center gap-3">
            {icon ? (
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-navy text-white shadow-[0_12px_24px_rgba(15,34,71,0.25)]">
                {icon}
              </span>
            ) : null}
            {title ? <h3 className="text-lg font-semibold text-navy">{title}</h3> : null}
          </div>
        )}
        {children}
      </div>
    </article>
  )
}

/* ---------- Page ---------- */
export default function AboutPage() {

  return (
    <>
      <div className="mx-auto mb-24 mt-6 max-w-screen-xl px-4 sm:px-6 lg:px-10">
        {/* Back button */}
        <div className="sticky top-4 z-50 flex justify-start">
          <PageBackButton href="/" className="bg-white/80 text-gray-900 ring-gray-200 focus:ring-emerald-400" />
        </div>

        <div className="mt-6 space-y-16 sm:space-y-20 lg:space-y-24">
          {/* HERO */}
          <section className="section-shell relative overflow-hidden p-6 sm:px-12">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: "url('/assets/background.jpg')" }}
              aria-hidden="true"
            />
            <div className="relative grid gap-10 sm:grid-cols-[1.1fr,0.9fr]">
              <div className="text-center sm:text-left">
                <SectionEyebrow className="mb-12">About Us</SectionEyebrow>
                <h1 className="font-jakarta text-4xl font-extrabold leading-tight sm:text-5xl">
                  Rooted in Care, Built for Community
                </h1>
                <p className="mt-12 text-base text-slate-600 sm:text-lg">
                  We’re a caring team of caregivers, technologists, and community advocates providing meaningful, trustworthy support for adults and seniors in Louisville.
                  With social workers, volunteers, and IT professionals working together, we bring compassion and purpose to every day.
                </p>
                <p className="mt-4 text-base text-slate-600 sm:text-lg">
                  In partnership with local faith groups, community centers, and families, we make care personal, familiar, and close to home.
                </p>
                <div className="mt-6 block sm:hidden">
                  <div className="relative aspect-[3/3] w-full overflow-hidden rounded-3xl bg-white/30 backdrop-blur">
                    <DotLottieReact src="/assets/AboutUs.lottie" autoplay style={{ opacity: 0.85 }} />
                    <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/40" />
                  </div>
                </div>
              </div>
              <div className="relative hidden aspect-[3/3] w-full overflow-hidden rounded-3xl bg-white/25 backdrop-blur sm:block">
                <DotLottieReact src="/assets/AboutUs.lottie" autoplay style={{ opacity: 0.85 }} />
                <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/40" />
              </div>
            </div>
            <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickStats.map((stat) => (
                <InfoStat key={stat.label} {...stat} />
              ))}
            </div>
          </section>

          {/* MISSION + VALUES */}
          <section className="mt-14 grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-8 pt-8">
              <SectionHeading
                eyebrow="Why We Exist"
                title="Mission & Pillars"
                description="Empowering adults to live safely, socially, and independently."
              />
              <Card>
                Our mission is rooted in the belief that every person deserves respect, meaningful engagement, and the opportunity to thrive within their own community.
                We co-create individualized care experiences that honor culture, promote wellness, and keep families in the loop.
              </Card>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <Card
                  title="Trust"
                  icon={<FaHandshake />}
                >
                  Transparent communication, dependable schedules, and clear accountability.
                </Card>
                <Card
                  title="Community"
                  icon={<FaUsers />}
                >
                  Partnerships with families, churches, and neighborhood centers to surround each person with support.
                </Card>
                <Card
                  title="Safety"
                  icon={<FaShieldAlt />}
                >
                  Licensed clinicians, written protocols, and on-call leadership for every program.
                </Card>
              </div>
            </div>
            <div className="relative rounded-[32px] border border-white/25 bg-white/85 p-6 shadow-[0_20px_45px_-30px_rgba(15,34,71,0.5)] backdrop-blur">
              <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] opacity-45"
                style={{ backgroundImage: "url('/assets/background-2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <SectionHeading
                eyebrow="Community Impact"
                title="Partnerships & Programs"
                description="Our care is personal & responsive."
              />
              <div className="mt-7 space-y-4">
                <div className="rounded-2xl border border-slate-100 bg-white/80 p-4">
                  <p className="text-sm font-semibold text-navy">Faith-Based Outreach</p>
                  <p className="text-sm text-slate-600">
                    Respite days, transportation, and bilingual volunteers coordinated with church partners.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white/80 p-4">
                  <p className="text-sm font-semibold text-navy">Neighborhood Centers</p>
                  <p className="text-sm text-slate-600">
                    Shared programs, referrals, and safe multipurpose rooms for social connection.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white/80 p-4">
                  <p className="text-sm font-semibold text-navy">Technology & Ops</p>
                  <p className="text-sm text-slate-600">
                    Secure care notes, family dashboards, and real-time updates keep everyone aligned.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* TEAM SNAPSHOT */}
          <section id="team" className="section-shell relative mt-14 overflow-hidden px-6 py-10 sm:px-12">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-50"
              style={{ backgroundImage: "url('/assets/honeycomb-background.jpg')" }}
              aria-hidden="true"
            />
            <div className="relative">
              <SectionHeading
                eyebrow="People Who Care"
                title="Meet the Team"
                description="A peek at the leadership and frontline caregivers who make each day feel personal."
              />
              <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="rounded-[28px] border border-slate-100 bg-white/95 p-6 text-center shadow-[0_15px_35px_-25px_rgba(15,34,71,0.35)]"
                  >
                    <div className="relative mx-auto flex h-48 w-full max-w-[260px] items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50">
                      <div className="text-slate-400">
                        <svg width="64" height="64" fill="none" viewBox="0 0 64 64" className="mx-auto">
                          <rect x="8" y="16" width="48" height="32" rx="6" stroke="currentColor" strokeWidth="2" />
                          <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="2" />
                          <rect x="24" y="12" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                          Image Coming Soon
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 text-left">
                      <p className="text-lg font-semibold text-navy">Team Member {n}</p>
                      <p className="text-sm text-slate-600">Role • Credentials</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-slate-600">
                Interested in joining or partnering? Reach out — we’re growing a team that reflects the communities we serve.
              </p>
            </div>
          </section>

          {/* EXPERIENCE + LEADERSHIP */}
          <section className="mt-14">
            <SectionHeading
              eyebrow="Clarity • Safety • Follow-through"
              title="How Leadership Supports Every Family"
              description="Clinical oversight & clear routines ensure you always know who’s caring for your loved one."
            />
            <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
              <Card title="What Families Experience">
                <ul className="space-y-2">
                  <Bullet>Personalized care plans co-created with your family</Bullet>
                  <Bullet>Consistent caregivers whenever possible</Bullet>
                  <Bullet>Visit notes and optional text/phone updates</Bullet>
                  <Bullet>Safe transfers and home-safety-minded routines</Bullet>
                  <Bullet>Dedicated point of contact and simple feedback loop</Bullet>
                </ul>
              </Card>
              <Card title="Clinical + Operations Team" icon={<FaClipboardList />}>
                <ul className="space-y-2">
                  <Bullet>RN-led oversight, medication and vitals protocols</Bullet>
                  <Bullet>Care dashboards, real-time family updates, secure notes</Bullet>
                  <Bullet>Background-checked, trained, supervised caregivers</Bullet>
                  <Bullet>Backup coverage and hygiene protocols</Bullet>
                  <Bullet>Care conferences with families and providers</Bullet>
                </ul>
              </Card>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="section-shell relative overflow-hidden px-6 py-10 sm:px-12">
            <div className="pointer-events-none absolute inset-0 opacity-35">
              <div className="size-full bg-[url('/assets/background-card-2.jpg')] bg-cover bg-center bg-no-repeat" />
            </div>
            <div className="relative flex flex-col items-start justify-between gap-5 text-left md:flex-row md:items-center">
              <div>
                <h3 className="text-2xl font-semibold text-navy">Want to learn more about us or our mission & values?</h3>
                <p className="mt-1 text-slate-600">Call us or send a note—we’re happy to tell you about us!</p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <PrimaryCta href="tel:+1-000-000-0000" className="w-full justify-center sm:w-auto">
                  Call Now
                </PrimaryCta>
                <PrimaryCta href="#contact" className="w-full justify-center sm:w-auto">
                  Contact Us
                </PrimaryCta>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  )
}
