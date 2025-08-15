import { useRouter } from 'next/router'
import Image from 'next/image'
import Footer from '../components/Layout/Footer'
import {
  FaArrowLeft,
  FaHandshake,
  FaHeart,
  FaUsers,
  FaShieldAlt,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaClock,
  FaHandsHelping,
  FaChurch,
  FaClipboardList,
  FaLaptopCode,
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
      {(title || icon) && (
        <div className="mb-4 flex items-center gap-3">
          {icon ? (
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
              {icon}
            </span>
          ) : null}
          {title ? <h3 className="text-lg font-semibold text-gray-900">{title}</h3> : null}
        </div>
      )}
      {children}
    </div>
  )
}

/* ---------- Page ---------- */
export default function AboutPage() {
  const router = useRouter()
  const sectionId = router.query.from || 'about'

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
            <FaArrowLeft /> Back to Home
          </button>
        </div>

        {/* HERO */}
        <section className="mt-6 grid items-center gap-8 rounded-3xl bg-gradient-to-b from-emerald-50 to-white p-6 shadow-sm sm:grid-cols-2 sm:p-10">
          {/* Text column */}
          <div>
            <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-left sm:text-5xl">
              Rooted in Care, Built for Community
            </h1>
            <p className="mt-4 max-w-xl text-center text-gray-700 sm:text-left">
              We’re a diverse team of caregivers, technologists, and local advocates committed to
              meaningful, trustworthy care for adults and seniors in Louisville. From social workers
              and church volunteers to IT professionals and family caregivers — we bring experience,
              heart, and innovation to everything we do.
            </p>
            <p className="mt-3 max-w-xl text-center text-gray-700 sm:text-left">
              Our team proudly partners with local religious organizations, community centers, and
              families to make compassionate care both personal and accessible.
            </p>

            {/* Trust Strip */}
            <div className="mt-8 grid grid-cols-1 gap-4 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-gray-100 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                  <FaMapMarkerAlt className="text-lg" />
                </span>
                <span className="text-sm font-medium text-gray-800">Louisville, Kentucky</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-700 ring-1 ring-amber-200">
                  <FaClock className="text-lg" />
                </span>
                <span className="text-sm font-medium text-gray-800">Mon–Sat • 7 AM–7 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-200">
                  <FaShieldAlt className="text-lg" />
                </span>
                <span className="text-sm font-medium text-gray-800">Trained & screened staff</span>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="relative aspect-[3/3] w-full overflow-hidden rounded-2xl shadow-xl">
            <DotLottieReact src="/assets/AboutUs.lottie" autoplay />
          </div>
        </section>

        {/* QUICK FACTS (compact) */}
        <section className="mt-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat icon={<FaMapMarkerAlt />} text="Louisville & nearby communities" />
            <Stat icon={<FaClock />} text="Mon–Sat • 7 AM–7 PM" />
            <Stat icon={<FaUsers />} text="Family‑centered approach" />
            <Stat icon={<FaShieldAlt />} text="Licensed, trained team" />
          </div>
        </section>

        {/* MISSION */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="Why We Exist"
            title="Our Mission"
            description="To help adults live safely, socially, and independently through purposeful daytime programs and trusted in‑home support—delivered with dignity and compassion."
          />
          <div className="mx-auto mt-6 max-w-4xl">
            <Card>
              <p className="text-black-500">
                Our mission is rooted in the belief that every person deserves respect, meaningful
                engagement, and the opportunity to thrive within their own community. We work
                closely with families, healthcare providers, and local partners to create
                individualized care experiences that honor cultural backgrounds, promote wellness,
                and foster emotional connection. Through continuous learning, transparent
                communication, and a commitment to safety, we aim to not only meet today’s needs but
                also inspire a stronger, more compassionate future for senior and adult care in
                Louisville, Fairdale & neighboring areas.
              </p>
            </Card>
          </div>
        </section>

        {/* VALUES */}
        <section className="mt-14">
          <SectionHeading title="Our Values" />
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            <Card title="Trust" icon={<FaHandshake />}>
              Transparent communication, dependable schedules, and clear accountability.
            </Card>
            <Card title="Community" icon={<FaUsers />}>
              We partner with families and local organizations to surround each person with support.
            </Card>
            <Card title="Safety" icon={<FaShieldAlt />}>
              Trained staff, written protocols, and continuous oversight on every service.
            </Card>
          </div>
        </section>

        {/* PARTNERSHIPS */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="Stronger Together"
            title="Community Partnerships"
            description="We collaborate with local faith communities, neighborhood centers, and advocates to make care more personal and accessible."
          />
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
            <Card title="Faith‑Based Orgs" icon={<FaChurch />}>
              Outreach, transportation support, and culturally familiar volunteers.
            </Card>
            <Card title="Community Centers" icon={<FaHandsHelping />}>
              Shared programs, referrals, and safe spaces for social connection.
            </Card>
            <Card title="Technology & Ops" icon={<FaLaptopCode />}>
              Scheduling, communication, and care notes that keep families informed.
            </Card>
          </div>
        </section>

        {/* TEAM SNAPSHOT (placeholders) */}
        <section className="mt-14">
          <SectionHeading
            title="Meet the Team"
            description="A few of the people behind the care."
          />
          <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-gray-100">
                <div className="relative h-48 w-full overflow-hidden rounded-xl">
                  <Image
                    src="/assets/image-placeholder.png"
                    alt={`Team member ${n}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-semibold text-gray-900">Team Member {n}</h3>
                  <p className="text-sm text-gray-600">Role • Credentials</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-gray-600">
            Interested in partnering or volunteering? Reach out—we’d love to connect.
          </p>
        </section>

        {/* WHAT FAMILIES CAN EXPECT */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="Clarity • Safety • Follow‑through"
            title="What Families Can Expect"
            description="We combine dependable routines with transparent communication and compassionate, culturally aware care."
          />

          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 items-stretch gap-6 md:grid-cols-2">
            {/* Core expectations */}
            <Card title="You Can Expect" className="h-full">
              <div className="flex min-h-full flex-col">
                <ul className="space-y-2">
                  <Bullet>Personalized care plans co-created with your family</Bullet>
                  <Bullet>Clear schedules and tasks confirmed before start date</Bullet>
                  <Bullet>Consistent caregivers whenever possible</Bullet>
                  <Bullet>Visit notes and optional text/phone updates</Bullet>
                  <Bullet>Respect for culture, faith, and language preferences</Bullet>
                  <Bullet>Safe transfers & home-safety-minded routines</Bullet>
                  <Bullet>Medication reminders and wellness check-ins per plan</Bullet>
                  <Bullet>Flexible adjustments and quick resolution when needs change</Bullet>
                </ul>

                {/* Anchored note at the bottom */}
                <p className="mt-4 border-t border-gray-200 pt-3 text-xs leading-relaxed text-gray-600">
                  <span className="font-semibold">Note:</span> We tailor specific protocols to each
                  service and care plan so safety and comfort always come first.
                </p>
              </div>
            </Card>

            {/* Trust & assurance stack */}
            <div className="grid grid-cols-1 gap-6">
              <Card title="Communication & Transparency" icon={<FaClipboardList />}>
                <ul className="space-y-2">
                  <Bullet>Dedicated point of contact for questions or changes</Bullet>
                  <Bullet>Written care plan with goals, preferences, and boundaries</Bullet>
                  <Bullet>Simple feedback loop for concerns or compliments</Bullet>
                  <Bullet>Incident reporting with documented follow‑up</Bullet>
                </ul>
              </Card>

              <Card title="Safety & Standards" icon={<FaShieldAlt />}>
                <ul className="space-y-2">
                  <Bullet>Background‑checked, trained, and supervised caregivers</Bullet>
                  <Bullet>Hygiene practices and clean‑equipment routines</Bullet>
                  <Bullet>Privacy and confidentiality for personal information</Bullet>
                  <Bullet>Backup coverage planning for reliability</Bullet>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-14 rounded-[28px] bg-gradient-to-r from-emerald-700 to-emerald-600 p-6 text-white shadow-[0_20px_50px_-25px_rgba(16,185,129,0.5)] ring-1 ring-emerald-600/60">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">Want to learn more or tour?</h3>
              <p className="text-white/90">Call us or send a note—we’re happy to help.</p>
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
