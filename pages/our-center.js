import { useRouter } from 'next/router'
import {
  FaArrowLeft,
  FaHeart,
  FaShieldAlt,
  FaUtensils,
  FaMusic,
  FaDumbbell,
  FaBusAlt,
  FaMapMarkedAlt,
  FaClock,
  FaWheelchair,
  FaPhoneAlt,
  FaMedkit,
  FaUserNurse,
} from 'react-icons/fa'
import Footer from '../components/Layout/Footer'
import GallerySection from '../components/OurCenterGallery'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import PrimaryCta from '../components/misc/PrimaryCta'
import SectionEyebrow from '../components/misc/SectionEyebrow'

const heroHighlights = [
  { icon: FaUserNurse, label: 'Licensed nurses & CNAs on-site' },
  { icon: FaShieldAlt, label: 'Secure check-in + monitoring' },
  { icon: FaHeart, label: 'Daily updates for families' },
]

const quickStats = [
  { icon: FaMapMarkedAlt, label: 'Where we are', value: '811 Mt Holly Rd, Fairdale' },
  { icon: FaClock, label: 'Hours', value: 'Mon–Sat • 7 AM – 7 PM' },
  { icon: FaBusAlt, label: 'Transportation', value: 'Door-to-door options available' },
  { icon: FaUtensils, label: 'Meals', value: 'Chef-guided menus & hydration' },
]

const careHighlights = [
  {
    icon: FaShieldAlt,
    title: 'Safety First',
    desc: 'Controlled entry, fall-prevention layouts, and continuous oversight.',
  },
  {
    icon: FaHeart,
    title: 'Compassionate Care',
    desc: 'Attentive pros who see, hear, and honor every participant.',
  },
  {
    icon: FaUtensils,
    title: 'Nutritious Menus',
    desc: 'Meals and snacks tailored to dietary needs and cultural favorites.',
  },
  {
    icon: FaMusic,
    title: 'Enrichment & Joy',
    desc: 'Music, crafts, brain games, and socials to keep spirits high.',
  },
  {
    icon: FaDumbbell,
    title: 'Wellness Support',
    desc: 'Chair yoga, stretching, and guided movement to stay active.',
  },
  {
    icon: FaBusAlt,
    title: 'Transportation Help',
    desc: 'Ask about pickups, drop-offs, and appointment rides.',
  },
]

const scheduleBlocks = [
  {
    time: '7:00 – 9:00 AM',
    title: 'Warm Welcome',
    text: 'Arrivals, light breakfast, health check-ins, and easy conversation.',
  },
  {
    time: '9:00 AM – 2:00 PM',
    title: 'Activities & Meals',
    text: 'Wellness blocks, creative projects, memory games, and a chef-guided lunch.',
  },
  {
    time: '2:00 – 7:00 PM',
    title: 'Wind Down & Departures',
    text: 'Music, one-to-one support, and departure updates for families.',
  },
]

const amenities = [
  { icon: FaWheelchair, text: 'Wheelchair-friendly layout & entrances' },
  { icon: FaMapMarkedAlt, text: 'Clearly marked rooms & calm rest areas' },
  { icon: FaShieldAlt, text: 'Secure facility with staffed oversight' },
  { icon: FaHeart, text: 'Quiet room for prayer, naps, and private calls' },
]

const faqItems = [
  {
    q: 'Do you offer trial days?',
    a: 'Yes. We can arrange a half-day or full-day visit so participants can experience our programs before enrolling.',
  },
  {
    q: 'What level of care do you provide?',
    a: 'Support with activities of daily living, medication reminders per policy, wellness programming, and coordination with families and providers to align on care needs.',
  },
  {
    q: 'How do I get started?',
    a: 'Schedule a tour, meet our team, and we’ll guide you through a simple enrollment process including assessments, preferences, and care coordination.',
  },
  {
    q: 'Do you accommodate special diets or allergies?',
    a: 'Absolutely. We tailor meals to dietary needs and carefully manage allergies.',
  },
  {
    q: 'Is transportation available?',
    a: 'Yes—ask about our transportation options and partner services for convenient drop-off and pick-up.',
  },
  {
    q: 'What about memory care needs?',
    a: 'We provide structured routines, gentle redirection, and engaging cognitive activities in a secure, supportive environment.',
  },
  {
    q: 'Do you accept Medicaid or other programs?',
    a: 'We can discuss available funding options and program eligibility during your tour.',
  },
  {
    q: 'How are medications handled?',
    a: 'Our trained staff follow strict medication reminder and documentation procedures aligned with policy and state guidelines.',
  },
  {
    q: 'What is your staffing like?',
    a: 'Attentive ratios, ongoing training, and supervision by experienced leadership to maintain safety and quality.',
  },
  {
    q: 'What if my loved one needs help with the restroom?',
    a: 'Discreet, respectful assistance is provided as needed, with privacy and dignity as top priorities.',
  },
  {
    q: 'What activities do you offer?',
    a: 'Music, arts & crafts, chair fitness, games, social groups, and quiet spaces for rest or reading.',
  },
  {
    q: 'What are the hours and scheduling options?',
    a: 'We’re open Monday–Saturday, 7 AM–7 PM, with flexible attendance plans.',
  },
]

const SectionHeading = ({
  eyebrow,
  eyebrowTone = 'navy',
  eyebrowClassName = '',
  title,
  description,
}) => (
  <div className="text-center">
    {eyebrow ? (
      <div className="mb-4 flex justify-center">
        <SectionEyebrow tone={eyebrowTone} className={eyebrowClassName}>
          {eyebrow}
        </SectionEyebrow>
      </div>
    ) : null}
    <h2 className="font-jakarta text-3xl font-semibold text-navy sm:text-4xl">{title}</h2>
    {description ? (
      <p className="mx-auto mt-3 max-w-3xl text-base text-slate-600 sm:text-lg">{description}</p>
    ) : null}
  </div>
)

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

const OurCenter = () => {
  const router = useRouter()

  return (
    <>
      <div className="mx-auto mb-24 mt-6 max-w-screen-xl px-4 sm:px-6 lg:px-10">
        <div className="sticky top-4 z-50 mb-6 flex justify-start">
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold text-navy shadow-lg shadow-[rgba(17,103,104,0.08)] ring-1 ring-slate-100 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#116768]/50"
          >
            <FaArrowLeft aria-hidden /> Back to Main Page
          </button>
        </div>

        <div className="mt-6 space-y-16 sm:space-y-20 lg:space-y-24">
        <section className="relative section-shell overflow-hidden px-6 py-10 sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: "url('/assets/background.jpg')" }}
            aria-hidden="true"
          />
          <div className="relative grid items-start gap-10 sm:grid-cols-[1.05fr,0.95fr]">
          <div className="text-center sm:text-left">
            <SectionEyebrow className="mb-6">Inside Our Center</SectionEyebrow>
            <h1 className="mt-4 font-jakarta text-3xl font-extrabold leading-tight text-navy sm:text-5xl">
              Warmth, Safety, and Joy—All Under One Roof
            </h1>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Every room, routine, and relationship is intentionally designed so participants feel
              at home and families feel confident. Expect brighter spaces, compassionate experts, and
              engaging days that honor dignity.
            </p>
            <div className="mt-6 block sm:hidden">
              <div className="relative aspect-[3/3] w-full overflow-hidden rounded-3xl">
                <DotLottieReact src="/assets/OurCenter.lottie" autoplay />
                <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/40" />
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
              <PrimaryCta href="/contact" className="w-full justify-center sm:w-auto">
                Plan a Visit
              </PrimaryCta>
              <PrimaryCta
                href="#visit"
                className="w-full justify-center sm:w-auto"
                aria-label="Jump to visit section for location and hours"
              >
                See Location & Hours
              </PrimaryCta>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Medicaid & private pay accepted • Coordinated with local providers
            </p>
          </div>

          <div className="relative hidden aspect-[3/3] w-full overflow-hidden rounded-3xl sm:block">
            <DotLottieReact src="/assets/OurCenter.lottie" autoplay />
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/40" />
          </div>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Why Families Choose Us"
            title="Comfort, Clinical Oversight, and Community"
            description="We combine compassionate care with purposeful programming in a bright, accessible space. Here’s what you can count on every day."
          />
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {careHighlights.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-white/50 bg-[url('/assets/background-card-2.jpg')] bg-cover bg-center bg-no-repeat shadow-[0_24px_40px_-32px_rgba(15,34,71,0.6)]"
              >
                <div className="h-full rounded-[28px] bg-white/50 p-6 backdrop-blur-[2px] transition group-hover:-translate-y-1">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white shadow-[0_12px_24px_rgba(15,34,71,0.25)]">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="font-jakarta text-xl font-semibold text-navy">{title}</h3>
                  <p className="mt-2 text-slate-600">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell px-6 py-10 sm:px-12">
          <SectionHeading
            eyebrow="A Day With Us"
            title="Predictable Rhythm, Personal Touches"
            description="Participants ease into the day, enjoy curated programs, and head home calm and connected."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {scheduleBlocks.map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-white/60 bg-white/90 p-6 shadow-sm shadow-[0_10px_24px_rgba(15,34,71,0.08)]"
              >
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#116768]">
                  <FaClock aria-hidden />
                  {block.time}
                </div>
                <h3 className="mt-3 font-jakarta text-xl text-navy">{block.title}</h3>
                <p className="mt-2 text-slate-600">{block.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickStats.map((stat) => (
            <InfoStat key={stat.label} {...stat} />
          ))}
        </section>

        <div
          className="relative section-shell overflow-hidden px-4 py-10 sm:px-8"
          style={{
            backgroundImage: "url('/assets/background-3.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-white/50" aria-hidden="true" />
          <div className="relative">
          <GallerySection
            title="See the Spaces"
            description="Bright natural light, calming colors, and flexible rooms for dining, creative sessions, wellness, and quiet reflection."
          />
          </div>
        </div>

        <section>
          <SectionHeading
            eyebrow="Accessibility & Amenities"
            title="Designed for Ease and Dignity"
            description="Every hallway, seating area, and care station balances safety with hospitality."
          />
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {amenities.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_20px_rgba(15,34,71,0.06)]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white">
                  <Icon />
                </span>
                <p className="text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="visit" className="section-shell relative overflow-hidden px-6 py-10 sm:px-12">
          <div className="pointer-events-none absolute inset-0 opacity-50">
            <div className="h-full w-full bg-[url('/assets/background-2.jpg')] bg-cover bg-center bg-no-repeat" />
          </div>
          <div className="relative">
          <SectionHeading
            eyebrow="Visit Us"
            title="Plan Your Tour or Drop-In"
            description="811 Mt Holly Rd, Fairdale, KY 40118 • Open Monday – Saturday, 7 AM – 7 PM"
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white">
                    <FaMedkit />
                  </span>
                  <div>
                    <p className="font-semibold text-navy">Have care questions?</p>
                    <p className="text-sm text-slate-600">We’ll walk through eligibility, funding, and next steps.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <PrimaryCta href="/contact" className="w-full justify-center sm:w-auto">
                  Contact Our Team
                </PrimaryCta>
                <PrimaryCta
                  href="tel:+1502XXXXXXX"
                  className="w-full justify-center gap-2 sm:w-auto"
                  aria-label="Call our center"
                >
                  <FaPhoneAlt /> Call Us
                </PrimaryCta>
              </div>

              <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-sm">
                <h3 className="font-jakarta text-lg text-navy">Tour Checklist</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
                  <li>Bring ID, insurance/Medicaid info if applicable</li>
                  <li>Share dietary needs or mobility devices</li>
                  <li>Ask about sample schedules & transportation</li>
                </ul>
              </div>
            </div>

            <div>
              <iframe
                title="Google Map to our center"
                className="h-80 w-full rounded-3xl border border-white/60 shadow-[0_20px_45px_-35px_rgba(15,34,71,0.8)]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.9570945952433!2d-85.76777598467997!3d38.101059779704754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690a13eb7b6d61%3A0xa6a2aa35a4d7c4ec!2s811%20Mt%20Holly%20Rd%2C%20Fairdale%2C%20KY%2040118!5e0!3m2!1sen!2sus!4v1629860414313!5m2!1sen!2sus"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="FAQ"
            title="Answers for Families & Caregivers"
            description="Need something specific? Call or message us anytime—we’re happy to help."
          />
          <div className="section-shell mt-10 divide-y divide-slate-100 bg-white/90 px-2 py-2 sm:px-4">
            {faqItems.map((item, idx) => (
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
                {idx !== faqItems.length - 1 ? <div className="px-4" /> : null}
              </details>
            ))}
          </div>
        </section>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default OurCenter
