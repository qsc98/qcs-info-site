import Footer from '../components/Layout/Footer'
import SectionEyebrow from '../components/misc/SectionEyebrow'
import SectionHeading from '../components/misc/SectionHeading'
import FaqSection from '../components/misc/FaqSection'
import PrimaryCta from '../components/misc/PrimaryCta'
import Bullet from '../components/misc/Bullet'
import InfoStat from '../components/misc/InfoStat'
import PageBackButton from '../components/misc/PageBackButton'
import {
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

const quickStats = [
  { icon: FaClock, label: 'Service Window', value: 'Breakfast • Lunch • Snacks (daily)' },
  { icon: FaMapMarkerAlt, label: 'Kitchen', value: 'Prepared fresh on-site' },
  { icon: FaLeaf, label: 'Choices', value: 'Vegetarian & vegan options' },
  { icon: FaAllergies, label: 'Safety', value: 'Allergen-aware handling' },
]

const faqItems = [
  {
    q: 'Can you accommodate diabetic and low-sodium diets?',
    a: 'Yes. We offer diabetic-friendly and low-sodium selections daily and can tailor portions based on guidance from your provider.',
  },
  {
    q: 'How do you handle allergies?',
    a: 'We maintain ingredient logs, clear labeling, and cross-contact prevention steps. Let us know your allergens and we’ll add them to your care plan.',
  },
  {
    q: 'Are vegetarian or vegan options available?',
    a: 'Yes. We prepare plant-forward meals and can provide vegan alternatives upon request.',
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

export default function NutritiousMealsPage() {

  return (
    <>
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
                <SectionEyebrow className="mb-12">Nutritious Meals</SectionEyebrow>
                <h1 className="font-jakarta text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
                  Daily Meals with Clinical Care in Mind
                </h1>
                <p className="mt-12 text-base text-slate-600 sm:text-lg">
                  Our meal program delivers balanced, flavorful, and health-conscious meals tailored for seniors
                  and individuals with medical needs. We serve daily breakfast, lunch, and snacks—with accommodations
                  for diabetic, low-sodium, vegetarian, and allergy-sensitive diets. Menus are developed with licensed
                  nutritionists to ensure great taste and nutritional value.
                </p>

                <div className="mt-6 block sm:hidden">
                  <div className="relative aspect-[3/3] w-full overflow-hidden rounded-3xl bg-white/30 backdrop-blur">
                    <DotLottieReact src="/assets/Nutrition.lottie" autoplay style={{ opacity: 0.85 }} />
                    <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/40" />
                  </div>
                </div>

                <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
                  <PrimaryCta href="#menus" className="w-full justify-center sm:w-auto">
                    View Sample Menus
                  </PrimaryCta>
                  <PrimaryCta href="#faq" className="w-full justify-center sm:w-auto">
                    Read FAQs
                  </PrimaryCta>
                </div>
              </div>

              <div className="relative hidden aspect-[3/3] w-full overflow-hidden rounded-3xl bg-white/30 backdrop-blur sm:block">
                <DotLottieReact src="/assets/Nutrition.lottie" autoplay style={{ opacity: 0.85 }} />
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
              eyebrow="What You Can Expect"
              title="Daily Service & Dietary Options"
              description="Each day centers on hydration, balanced meals, and personalized health goals."
            />
            <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
              <Card title="Daily Service" icon={<FaUtensils />}>
                <ul className="space-y-2">
                  <Bullet>Breakfast, lunch, and nutritious snacks</Bullet>
                  <Bullet>Hydration & tea service throughout the day</Bullet>
                  <Bullet>Seasonal, rotating menus to keep things fresh</Bullet>
                </ul>
              </Card>
              <Card title="Dietary Options" icon={<FaLeaf />}>
                <ul className="space-y-2">
                  <Bullet>Diabetic-friendly & low-sodium choices</Bullet>
                  <Bullet>Vegetarian & vegan accommodations</Bullet>
                  <Bullet>Cultural preferences respectfully honored</Bullet>
                </ul>
              </Card>
              <Card className="md:col-span-2" title="Quality & Freshness" icon={<FaAppleAlt />}>
                <p className="text-slate-700">
                  We use fresh produce, lean proteins, and whole-grain options upon request—prepared to balance taste,
                  nutrition, and individual needs.
                </p>
              </Card>
            </div>
          </section>

          <section>
            <div className="section-shell relative overflow-hidden px-6 py-10 sm:px-12">
              <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: "url('/assets/honeycomb-background.jpg')" }}
                aria-hidden="true"
              />
              <div className="relative space-y-8">
                <SectionHeading
                  eyebrow="From Pantry to Plate"
                  title="Sourcing, Standards & Food Safety"
                  description="Menus by licensed nutritionists, trusted ingredients, and hospital-grade kitchen safety."
                />
                <div className="grid gap-8 lg:grid-cols-[0.85fr,1.15fr]">
                  <div className="space-y-6">
                    <Card title="Nutritionist-Guided" icon={<FaClipboardList />}>
                      Menus planned in consultation with licensed nutritionists for balanced macros and micronutrients.
                    </Card>
                    <Card title="Responsible Vendors" icon={<FaTruck />}>
                      We partner with trusted suppliers and verify labels & allergens for peace of mind.
                    </Card>
                    <Card title="Sustainable Mindset" icon={<FaSeedling />}>
                      Seasonally influenced menus; we aim to reduce waste and encourage smart portions.
                    </Card>
                  </div>
                  <div className="rounded-[32px] border border-white/30 bg-white/85 p-6 shadow-[0_20px_45px_-30px_rgba(15,34,71,0.5)] backdrop-blur">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <Card title="Temperature Logs" icon={<FaThermometerHalf />}>
                        <ul className="space-y-2 text-sm text-slate-700">
                          <Bullet>Hot & cold holding tracked each service</Bullet>
                          <Bullet>Reheating and cooling standards followed</Bullet>
                          <Bullet>Equipment checks & calibration</Bullet>
                        </ul>
                      </Card>
                      <Card title="Sanitization" icon={<FaShieldAlt />}>
                        <ul className="space-y-2 text-sm text-slate-700">
                          <Bullet>Scheduled surface & utensil sanitizing</Bullet>
                          <Bullet>Glove & hand-washing protocols</Bullet>
                          <Bullet>Clean, labeled storage</Bullet>
                        </ul>
                      </Card>
                      <Card title="Allergen Controls" icon={<FaAllergies />}>
                        <ul className="space-y-2 text-sm text-slate-700">
                          <Bullet>Ingredient logs & clear labeling</Bullet>
                          <Bullet>Cross-contact prevention steps</Bullet>
                          <Bullet>Personalized notes in care plans</Bullet>
                        </ul>
                      </Card>
                      <Card title="Training & Audits" icon={<FaClipboardList />}>
                        <ul className="space-y-2 text-sm text-slate-700">
                          <Bullet>Staff certified in safe food handling</Bullet>
                          <Bullet>Routine checks & corrective actions</Bullet>
                          <Bullet>Incident reporting & follow-up</Bullet>
                        </ul>
                      </Card>
                    </div>
                    <p className="mt-6 text-center text-sm text-slate-600">
                      Have questions about our protocols or a specific dietary need? We’ll walk you through the full checklist
                      during your tour.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="menus">
            <SectionHeading title="Sample Weekly Rotation" />
            <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
              <Card title="Breakfast Highlights" icon={<FaUtensils />}>
                <ul className="space-y-2">
                  <Bullet>Oatmeal with fruit & nuts</Bullet>
                  <Bullet>Veggie omelets & whole-grain toast</Bullet>
                  <Bullet>Yogurt parfaits & seasonal fruit</Bullet>
                </ul>
              </Card>
              <Card title="Lunch Favorites" icon={<FaAppleAlt />}>
                <ul className="space-y-2">
                  <Bullet>Baked chicken & roasted vegetables</Bullet>
                  <Bullet>Lentil stew or bean & rice bowls</Bullet>
                  <Bullet>Grilled fish & hearty salads</Bullet>
                </ul>
              </Card>
              <Card title="Snack Options" icon={<FaHandHoldingHeart />}>
                <ul className="space-y-2">
                  <Bullet>Fresh fruit & cottage cheese</Bullet>
                  <Bullet>Hummus with whole-grain crackers</Bullet>
                  <Bullet>Mixed nuts & herbal teas</Bullet>
                </ul>
              </Card>
            </div>
          </section>


          <section id="costs" className="scroll-mt-28">
            <div className="section-shell relative overflow-hidden px-4 py-10 sm:px-8">
              <div className="pointer-events-none absolute inset-0 opacity-30">
                <div className="h-full w-full bg-[url('/assets/background-card-2.jpg')] bg-cover bg-center bg-no-repeat" />
              </div>
              <div className="relative">
                <SectionHeading
                  eyebrow="Transparent & Supportive"
                  title="Meal Program & Funding"
                  description="Meal costs may be included in day services or billed separately depending on your plan — we’ll help you confirm."
                />
                <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
                  <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/90">
                    <table className="w-full text-left text-sm text-slate-700">
                      <tbody>
                        {[
                          ['Private Pay', 'Daily or monthly meal charges with clear invoices.'],
                          ['Day Program Bundles', 'Meals included with adult day care attendance for many plans.'],
                          ['Medicaid Waivers', 'Eligibility varies — we’ll help verify documentation.'],
                          ['Long-Term Care Insurance', 'Some policies reimburse meals with adult day services.'],
                          ['Local Programs/Grants', 'When available, we’ll help connect you to assistance.'],
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
                      <Bullet>Clarify whether meals are included in your plan</Bullet>
                      <Bullet>Check Medicaid waiver or LTC policy eligibility</Bullet>
                      <Bullet>Provide invoices/letters & assist with claims</Bullet>
                      <Bullet>Coordinate start dates once coverage is set</Bullet>
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
            description="Quick answers about diets, preparation, and hydration routines."
            items={faqItems}
          />
          <section className="section-shell relative overflow-hidden px-6 py-10 sm:px-12">
            <div className="pointer-events-none absolute inset-0 opacity-35">
              <div className="h-full w-full bg-[url('/assets/background-card-2.jpg')] bg-cover bg-center bg-no-repeat" />
            </div>
            <div className="relative flex flex-col items-start justify-between gap-5 text-left md:flex-row md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-navy">Ready to taste the difference?</h3>
                <p className="mt-1 text-slate-600">
                  Schedule a tasting or tour and we’ll show you how meals fit seamlessly into your loved one’s day.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <PrimaryCta href="tel:+1-000-000-0000" className="w-full justify-center sm:w-auto">
                  Call Our Kitchen
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
