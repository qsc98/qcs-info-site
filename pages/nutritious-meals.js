import { useRouter } from 'next/router'
import Footer from '../components/Layout/Footer'
import {
  FaArrowLeft,
  FaCheckCircle,
  FaLeaf,
  FaUtensils,
  FaAppleAlt,
  FaAllergies,
  FaThermometerHalf,
  FaClock,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaClipboardList,
  FaHandHoldingHeart,
  FaSeedling,
  FaTruck,
  FaFileInvoiceDollar,
} from 'react-icons/fa'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

/* ---------- UI Atoms (same look/feel as your Adult Day Care page) ---------- */
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
export default function NutritiousMealsPage() {
  const router = useRouter()
  const sectionId = router.query.from || 'nutritious-meals'

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
              Nutritious Meals Program
            </h1>
            <p className="mt-4 max-w-xl text-center text-gray-700 sm:text-left">
              Our meal program delivers balanced, flavorful, and health‑conscious meals tailored for
              seniors and individuals with medical needs. We serve daily breakfast, lunch, and
              snacks—with accommodations for diabetic, low‑sodium, vegetarian, and allergy‑sensitive
              diets. Menus are developed with licensed nutritionists to ensure great taste and
              nutritional value.
            </p>

            {/* Trust Strip */}
            <div className="mt-8 grid grid-cols-1 gap-4 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-gray-100 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                  <FaUtensils className="text-lg" />
                </span>
                <span className="text-sm font-medium text-gray-800">Chef‑prepped daily</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-700 ring-1 ring-amber-200">
                  <FaLeaf className="text-lg" />
                </span>
                <span className="text-sm font-medium text-gray-800">Nutritionist‑guided menus</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-200">
                  <FaAllergies className="text-lg" />
                </span>
                <span className="text-sm font-medium text-gray-800">Allergen‑aware prep</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
              <a
                href="#menus"
                className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-700 px-6 py-3 text-white shadow-lg ring-1 ring-emerald-600/60 transition hover:-translate-y-0.5 hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 sm:w-auto"
              >
                View Sample Menus
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
            <DotLottieReact src="/assets/Nutrition.lottie" autoplay />
          </div>
        </section>

        {/* QUICK FACTS */}
        <section className="mt-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat icon={<FaClock />} text="Breakfast • Lunch • Snacks (Daily)" />
            <Stat icon={<FaMapMarkerAlt />} text="Prepared fresh on‑site" />
            <Stat icon={<FaLeaf />} text="Vegetarian & vegan options" />
            <Stat icon={<FaAllergies />} text="Allergen‑aware handling" />
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="What You Can Expect"
            title="Daily Service & Dietary Options"
            description="We build each day around hydration, balanced meals, and flexible accommodations to meet individual health goals."
          />
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            <Card title="Daily Service" icon={<FaUtensils />}>
              <ul className="space-y-2">
                <Bullet>Breakfast, lunch, and nutritious snacks</Bullet>
                <Bullet>Hydration & tea service throughout the day</Bullet>
                <Bullet>Seasonal, rotating menus to keep things fresh</Bullet>
              </ul>
            </Card>
            <Card title="Dietary Options" icon={<FaLeaf />}>
              <ul className="space-y-2">
                <Bullet>Diabetic‑friendly & low‑sodium choices</Bullet>
                <Bullet>Vegetarian & vegan accommodations</Bullet>
                <Bullet>Cultural preferences respectfully honored</Bullet>
              </ul>
            </Card>
            <Card className="md:col-span-2" title="Quality & Freshness" icon={<FaAppleAlt />}>
              <p className="text-gray-700">
                We use fresh produce, lean proteins, and whole‑grain options upon request—prepared
                to balance taste, nutrition, and individual needs.
              </p>
            </Card>
          </div>
        </section>

        {/* SOURCING & STANDARDS */}
        <section className="mt-14">
          <SectionHeading
            title="Sourcing & Standards"
            description="Behind every plate is a clear process: safe sourcing, careful handling, and continuous improvement."
          />
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
            <Card title="Nutritionist‑Guided" icon={<FaClipboardList />}>
              Menus planned in consultation with licensed nutritionists for balanced macros and
              micronutrients.
            </Card>
            <Card title="Responsible Vendors" icon={<FaTruck />}>
              We partner with trusted suppliers and verify labels & allergens for peace of mind.
            </Card>
            <Card title="Sustainable Mindset" icon={<FaSeedling />}>
              Seasonally influenced menus; we aim to reduce waste and encourage smart portions.
            </Card>
          </div>
        </section>

        {/* SAMPLE ROTATION */}
        <section id="menus" className="mt-14 scroll-mt-28">
          <SectionHeading title="Sample Weekly Rotation" />
          <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Breakfast */}
            <Card title="Breakfast Highlights" icon={<FaUtensils />}>
              <ul className="space-y-2">
                <Bullet>Oatmeal with fruit & nuts</Bullet>
                <Bullet>Veggie omelets & whole‑grain toast</Bullet>
                <Bullet>Yogurt parfaits & seasonal fruit</Bullet>
              </ul>
            </Card>

            {/* Lunch */}
            <Card title="Lunch Favorites" icon={<FaAppleAlt />}>
              <ul className="space-y-2">
                <Bullet>Baked chicken & roasted vegetables</Bullet>
                <Bullet>Lentil stew or bean & rice bowls</Bullet>
                <Bullet>Grilled fish & hearty salads</Bullet>
              </ul>
            </Card>

            {/* Snacks */}
            <Card title="Snack Options" icon={<FaHandHoldingHeart />}>
              <ul className="space-y-2">
                <Bullet>Fresh fruit & cottage cheese</Bullet>
                <Bullet>Hummus with whole‑grain crackers</Bullet>
                <Bullet>Mixed nuts & herbal teas</Bullet>
              </ul>
            </Card>
          </div>
        </section>

        {/* FOOD SAFETY */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="Prepared & Served With Care"
            title="Food Safety & Handling"
            description="Clear protocols, trained staff, and monitored temperatures help us keep every meal safe and on time."
          />
          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-3 inline-flex items-center gap-2 text-gray-900">
                <FaThermometerHalf className="text-emerald-600" />
                <span className="font-semibold">Temperature Logs</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <Bullet>Hot & cold holding tracked each service</Bullet>
                <Bullet>Reheating and cooling standards followed</Bullet>
                <Bullet>Equipment checks & calibration</Bullet>
              </ul>
            </div>

            <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-3 inline-flex items-center gap-2 text-gray-900">
                <FaShieldAlt className="text-emerald-600" />
                <span className="font-semibold">Sanitization</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <Bullet>Scheduled surface & utensil sanitizing</Bullet>
                <Bullet>Glove & hand‑washing protocols</Bullet>
                <Bullet>Clean, labeled storage</Bullet>
              </ul>
            </div>

            <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-3 inline-flex items-center gap-2 text-gray-900">
                <FaAllergies className="text-emerald-600" />
                <span className="font-semibold">Allergen Controls</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <Bullet>Ingredient logs & clear labeling</Bullet>
                <Bullet>Cross‑contact prevention steps</Bullet>
                <Bullet>Personalized notes in care plans</Bullet>
              </ul>
            </div>

            <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-3 inline-flex items-center gap-2 text-gray-900">
                <FaClipboardList className="text-emerald-600" />
                <span className="font-semibold">Training & Audits</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <Bullet>Staff certified in safe food handling</Bullet>
                <Bullet>Routine checks & corrective actions</Bullet>
                <Bullet>Incident reporting & follow‑up</Bullet>
              </ul>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-gray-600">
            Have questions about our protocols or a specific dietary need? We’ll walk you through
            our checklist during your tour.
          </p>
        </section>

        {/* COSTS & SUPPORT (optional but consistent with site) */}
        <section id="costs" className="mt-14 scroll-mt-28">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 px-3 py-1 text-xs font-medium text-yellow-900 shadow-md ring-1 ring-yellow-500/50">
              Transparent & Supportive
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-gray-900">Meal Program & Funding</h2>
            <p className="mx-auto mt-2 max-w-3xl text-gray-700">
              Meal costs may be included in day services or billed separately, depending on your
              plan. We’ll help you understand options and paperwork.
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
                    [
                      'Included with Day Services',
                      'Often bundled into daily rates; varies by schedule.',
                    ],
                    [
                      'Private Pay (Meals Only)',
                      'Simple, transparent daily or monthly meal rates.',
                    ],
                    [
                      'Medicaid Waivers',
                      'Eligibility varies; we’ll help verify coverage specifics.',
                    ],
                    [
                      'Long‑Term Care Insurance',
                      'Some policies reimburse meals with adult day services.',
                    ],
                    [
                      'Local Programs/Grants',
                      'When available, we’ll help connect you to assistance.',
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
                <Bullet>Clarify whether meals are included in your plan</Bullet>
                <Bullet>Check Medicaid waiver or LTC policy eligibility</Bullet>
                <Bullet>Provide invoices/letters & assist with claims</Bullet>
                <Bullet>Coordinate start dates once coverage is set</Bullet>
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
                  q: 'Can you accommodate diabetic and low‑sodium diets?',
                  a: 'Yes. We offer diabetic‑friendly and low‑sodium selections daily and can tailor portions based on guidance from your provider.',
                },
                {
                  q: 'How do you handle allergies?',
                  a: 'We maintain ingredient logs, clear labeling, and cross‑contact prevention steps. Let us know your allergens and we’ll add them to your care plan.',
                },
                {
                  q: 'Are vegetarian or vegan options available?',
                  a: 'Yes. We prepare plant‑forward meals and can provide vegan alternatives upon request.',
                },
                {
                  q: 'Who designs the menus?',
                  a: 'Menus are developed in consultation with licensed nutritionists and reviewed regularly for quality and balance.',
                },
                {
                  q: 'Can we see a current menu?',
                  a: 'Absolutely. We can share this month’s rotation and note which items are best for your dietary needs.',
                },
                {
                  q: 'Is hydration included?',
                  a: 'Yes—water stations, tea service, and hydration reminders are part of the daily routine.',
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
              <h3 className="text-xl font-semibold">Want a full menu preview?</h3>
              <p className="text-white/90">
                Reach out and we’ll share this month’s rotation and nutrition info.
              </p>
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
