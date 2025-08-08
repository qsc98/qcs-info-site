import { useRouter } from 'next/router'
import Image from 'next/image'
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
} from 'react-icons/fa'

const NutritiousMealsPage = () => {
  const router = useRouter()
  const sectionId = router.query.from || 'nutritious-meals'

  return (
    <>
      <div className="mx-auto mb-24 max-w-screen-xl px-8 xl:px-16">
        {/* Sticky Back Button (glassy) */}
        <div className="sticky top-4 z-50 flex justify-start">
          <button
            onClick={() => router.push(`/#${sectionId}`)}
            className="bg-white/80 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-black-600 shadow-lg backdrop-blur transition hover:bg-white-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <FaArrowLeft /> Services Overview
          </button>
        </div>

        {/* Hero Banner (matches Adult page structure) */}
        <section className="relative mt-10 overflow-hidden rounded-2xl border border-gray-500 shadow-lg">
          <div className="mx-auto my-8 max-w-lg">
            <Image
              src="/assets/Image-placeholder.png"
              alt="Nutritious Meals"
              width={800}
              height={500}
              className="rounded-lg shadow"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black-700/80 via-black-700/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <h1 className="text-3xl font-bold text-white-500 sm:text-4xl">Nutritious Meals</h1>
            <p className="mt-3 max-w-3xl text-white-500/90">
              Balanced, flavorful meals planned with nutritionists—customized for diabetic,
              low‑sodium, vegetarian, and allergy‑sensitive diets.
            </p>
          </div>
        </section>

        {/* Quick Facts strip */}
        <section className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-gray-500 bg-white-500 p-4 shadow md:grid-cols-4">
          <div className="flex items-center gap-3">
            <FaClock className="h-5 w-5 text-green-600" />
            <span className="text-sm text-black-500">Breakfast • Lunch • Snacks</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="h-5 w-5 text-green-600" />
            <span className="text-sm text-black-500">Prepared fresh on‑site</span>
          </div>
          <div className="flex items-center gap-3">
            <FaLeaf className="h-5 w-5 text-green-600" />
            <span className="text-sm text-black-500">Vegetarian/vegan options</span>
          </div>
          <div className="flex items-center gap-3">
            <FaAllergies className="h-5 w-5 text-green-600" />
            <span className="text-sm text-black-500">Allergen‑aware prep</span>
          </div>
        </section>

        {/* What’s Included */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold text-green-500">What’s Included</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-500 bg-white-500 p-6 shadow">
              <div className="mb-3 flex items-center gap-3">
                <FaUtensils className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-black-600">Daily Service</h3>
              </div>
              <ul className="space-y-2">
                {[
                  'Breakfast, lunch, and snacks',
                  'Hydration & tea service',
                  'Seasonal rotating menus',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-black-500">
                    <FaCheckCircle className="mt-0.5 h-4 w-4 text-green-600" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-500 bg-white-500 p-6 shadow">
              <div className="mb-3 flex items-center gap-3">
                <FaLeaf className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-black-600">Dietary Options</h3>
              </div>
              <ul className="space-y-2">
                {[
                  'Low‑sodium & diabetic‑friendly',
                  'Vegetarian & vegan accommodations',
                  'Cultural preferences honored',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-black-500">
                    <FaCheckCircle className="mt-0.5 h-4 w-4 text-green-600" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-500 bg-white-500 p-6 shadow md:col-span-2">
              <div className="mb-3 flex items-center gap-3">
                <FaAppleAlt className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-black-600">Quality & Freshness</h3>
              </div>
              <p className="text-black-500">
                Fresh produce and lean proteins with whole‑grain options upon request—prepared to
                balance taste, nutrition, and individual needs.
              </p>
            </div>
          </div>
        </section>

        {/* Sample Rotation */}
        <section className="mt-12 rounded-xl border border-gray-500 bg-white-500 p-6 shadow">
          <h2 className="mb-3 text-2xl font-semibold text-green-500">Sample Weekly Rotation</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-500 p-4">
              <h3 className="mb-2 font-semibold text-black-600">Breakfast</h3>
              <p className="text-black-500">
                Oatmeal & fruit, veggie omelets, yogurt parfaits, whole‑grain toast.
              </p>
            </div>
            <div className="rounded-lg border border-gray-500 p-4">
              <h3 className="mb-2 font-semibold text-black-600">Lunch</h3>
              <p className="text-black-500">
                Baked chicken & veggies, lentil stew, grilled fish, bean & rice bowls, salads.
              </p>
            </div>
          </div>
          <div className="mt-4 rounded-lg border border-gray-500 p-4">
            <h3 className="mb-2 font-semibold text-black-600">Snacks</h3>
            <p className="text-black-500">
              Fresh fruit, hummus & crackers, nuts, cottage cheese, herbal tea.
            </p>
          </div>
        </section>

        {/* Safety */}
        <section className="mt-12 rounded-xl border border-gray-500 bg-white-500 p-6 shadow">
          <div className="mb-3 flex items-center gap-3">
            <FaThermometerHalf className="h-5 w-5 text-green-600" />
            <h2 className="text-2xl font-semibold text-green-500">Food Safety & Handling</h2>
          </div>
          <p className="text-black-500">
            Temperature logs, sanitization protocols, labeled allergens, and staff training ensure
            every meal is served safely and on time.
          </p>
        </section>

        {/* Soft CTA */}
        <section className="mt-12 rounded-2xl border border-gray-500 bg-gradient-to-r from-green-600 to-green-500 p-6 text-white-500 shadow">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">Want a full menu preview?</h3>
              <p className="text-white-500/90">
                Reach out and we’ll share this month’s rotation and nutrition info.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+1-000-000-0000"
                className="rounded-md bg-white-500 px-4 py-2 text-sm font-semibold text-black-600 shadow transition hover:shadow-md"
              >
                Call Now
              </a>
              <a
                href="#contact"
                className="rounded-md border border-white-500/80 px-4 py-2 text-sm font-semibold text-white-500 transition hover:bg-white-500 hover:text-black-600"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </>
  )
}

export default NutritiousMealsPage
