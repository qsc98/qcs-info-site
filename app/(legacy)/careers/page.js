import {
  FaLaptopMedical,
  FaHandsHelping,
  FaChalkboardTeacher,
  FaCalendarCheck,
} from 'react-icons/fa'
import Bullet from '@/components/legacy/Bullet'
import FaqSection from '@/components/legacy/FaqSection'
import LottieFigure from '@/components/legacy/LottieFigure'
import PrimaryCta from '@/components/legacy/PrimaryCta'
import SectionEyebrow from '@/components/legacy/SectionEyebrow'
import SectionHeading from '@/components/legacy/SectionHeading'
import { pageMetadata } from '@/lib/seo'
import siteConfig from '@/site.config'

export const metadata = pageMetadata({
  title: 'Careers',
  description:
    'Join our Adult Day Health Care team in Fairdale, KY. Nursing, engagement and transportation roles with paid training.',
  path: '/careers',
})

const benefits = [
  {
    title: 'Comprehensive Coverage',
    copy: 'Medical, dental, vision, and mental health support from day one for eligible team members.',
  },
  {
    title: 'Growth & Training',
    copy: 'Paid certifications, leadership workshops, and hands-on mentorship with clinical leads.',
  },
  {
    title: 'Purposeful Scheduling',
    copy: 'Stable shifts, cross-training options, and flexibility for school, caregiving, or second jobs.',
  },
]

const openings = [
  {
    title: 'Adult Day Health Nurse',
    points: ['Licensed RN/LPN', 'Charting + medication oversight', 'Family communication daily'],
  },
  {
    title: 'Engagement Guide',
    points: ['Lead memory care groups', 'Coordinate outings & arts', 'Support daily routines'],
  },
  {
    title: 'Transportation Specialist',
    points: ['Commercial license preferred', 'Door-to-door support', 'Safety-first culture'],
  },
]

const faqItems = [
  {
    q: 'Do I need prior adult day care experience?',
    a: 'It’s a plus, but we provide onboarding for anyone with healthcare, hospitality, or community experience who shares our mission.',
  },
  {
    q: 'What shifts are available?',
    a: 'Day shifts are primary, and we plan staggered schedules and part-time roles for transportation and meal prep teams.',
  },
  {
    q: 'Do you support tuition or certifications?',
    a: 'Yes. We reimburse approved CNA, CPR, DSP, and activity director programs plus offer continuing education stipends.',
  },
  {
    q: 'How do I apply?',
    a: `Email ${siteConfig.contact.careersEmail} with your resume. Our hiring team replies within 2 business days once hiring begins.`,
  },
]

const steps = [
  {
    title: '1. Share Your Story',
    detail: 'Send your resume, licenses, and a short paragraph about why you love adult care.',
  },
  {
    title: '2. Meet the Team',
    detail: 'Virtual or on-site interview with clinical leads plus a quick tour of our center.',
  },
  {
    title: '3. Onboard & Shadow',
    detail:
      'Background check, paid onboarding, and mentorship before your first independent shift.',
  },
]

function GlassCard({ title, children }) {
  return (
    <article className="rounded-3xl border border-white/30 bg-white/85 p-6 shadow-[0_25px_45px_-32px_rgba(12,36,64,0.35)]">
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <div className="mt-3 text-sm text-slate-600">{children}</div>
    </article>
  )
}

export default function CareersPage() {
  return (
    <div className="pt-32 sm:pt-36">
      <div className="mx-auto mt-6 mb-24 max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-10">
        <div className="mt-6 space-y-16 sm:space-y-20 lg:space-y-24">
          <div className="rounded-3xl border border-amber-200 bg-linear-to-r from-amber-50 via-white to-amber-50 px-6 py-4 text-sm text-amber-800 shadow-[0_20px_45px_-32px_rgba(217,119,6,0.35)]">
            <span className="font-semibold tracking-[0.3em] uppercase">Coming Soon· </span>
            Application portal will open when hiring begins. Join our newsletter or check back in
            early summer 2026.
          </div>
          <section className="section-shell relative overflow-hidden px-6 py-8 sm:px-12">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-45"
              style={{ backgroundImage: "url('/assets/background.jpg')" }}
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="text-center sm:text-left">
                <SectionEyebrow className="mb-12">Careers</SectionEyebrow>
                <h1 className="font-jakarta text-4xl leading-tight font-extrabold text-navy sm:text-5xl">
                  Build a Career <br />
                  Rooted in Dignity
                </h1>
                <p className="mt-10 text-base text-slate-600 sm:text-lg">
                  Join clinicians, engagement guides, and operations teammates who believe adult day
                  care can feel like a second home. We hire people who value compassion, structure,
                  and innovation.
                </p>
                <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
                  <PrimaryCta href="/#contact" className="w-full justify-center sm:w-auto">
                    Apply / Refer Talent
                  </PrimaryCta>
                  <PrimaryCta href="/about-us" className="w-full justify-center sm:w-auto">
                    Learn About Our Culture
                  </PrimaryCta>
                </div>
                <p className="mt-14 text-sm text-slate-500">
                  Equal Opportunity Employer • Paid training • Local leadership
                </p>
              </div>
              <div className="relative hidden aspect-3/3 w-full rounded-3xl border border-white/40 bg-white/20 shadow-[0_25px_55px_-35px_rgba(12,36,64,0.65)] lg:block">
                <LottieFigure src="/assets/HR.lottie" autoplay style={{ opacity: 0.9 }} />
                <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/40" />
              </div>
            </div>
          </section>

          <section className="section-shell relative overflow-hidden px-6 py-10 sm:px-12">
            <div className="pointer-events-none absolute inset-0 bg-[url('/assets/honeycomb-background.jpg')] bg-cover opacity-50" />
            <div className="relative">
              <SectionHeading
                eyebrow="Why Work With Us"
                title="Benefits That Back Your Purpose"
                description="Where clinical excellence and people-first care help every team member excel."
              />
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {benefits.map((benefit) => (
                  <GlassCard key={benefit.title} title={benefit.title}>
                    {benefit.copy}
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>

          <section className="section-shell px-6 py-10 sm:px-12">
            <SectionHeading
              eyebrow="Open Roles"
              title="Where You Fit In"
              description="Every role supports our promise to families. Here are the roles we plan to fill."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {openings.map((role) => (
                <article
                  key={role.title}
                  className="rounded-[28px] border border-white/40 bg-white/85 p-6 shadow-[0_20px_35px_-28px_rgba(15,34,71,0.65)]"
                >
                  <h3 className="text-lg font-semibold text-navy">{role.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {role.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 size-2 rounded-full bg-[#116768]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="section-shell relative overflow-hidden px-6 py-10 sm:px-12">
            <div className="pointer-events-none absolute inset-0 bg-[url('/assets/background-2.jpg')] bg-cover opacity-50" />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <SectionHeading
                  eyebrow="How We Hire"
                  title="Transparent, fast, and supportive"
                  description="Our hiring process is built on respect and dialogue."
                />
                <div className="mt-8 space-y-6 rounded-[32px] border border-white/35 bg-white/90 p-6 shadow-[0_25px_45px_-32px_rgba(12,36,64,0.45)]">
                  {steps.map((step) => (
                    <div key={step.title}>
                      <p className="text-sm font-semibold tracking-[0.18em] text-[#116768] uppercase">
                        {step.title}
                      </p>
                      <p className="mt-2 text-base text-slate-600">{step.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[32px] border border-white/25 bg-white/90 p-6 shadow-[0_25px_45px_-32px_rgba(12,36,64,0.45)]">
                <h3 className="text-xl font-semibold text-navy">What We Value</h3>
                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  <Bullet icon={<FaHandsHelping />}>
                    Care that honors dignity, autonomy, and community.
                  </Bullet>
                  <Bullet icon={<FaLaptopMedical />}>
                    Smart tools and documentation to keep everyone in sync.
                  </Bullet>
                  <Bullet icon={<FaChalkboardTeacher />}>
                    Continuous learning with shared playbooks and huddles.
                  </Bullet>
                  <Bullet icon={<FaCalendarCheck />}>
                    Reliable schedules and mutual accountability.
                  </Bullet>
                </div>
              </div>
            </div>
          </section>

          <section className="section-shell px-6 py-10 sm:px-12">
            <FaqSection
              eyebrow="FAQs"
              description="Here’s what candidates ask most. Reach out anytime for more detail."
              items={faqItems}
            />
          </section>
        </div>
      </div>
    </div>
  )
}
