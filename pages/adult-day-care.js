import { useRouter } from 'next/router'
import Image from 'next/image'
import Footer from '../components/Layout/Footer'
import {
  FaArrowLeft,
  FaUserFriends,
  FaHeartbeat,
  FaUtensils,
  FaShieldAlt,
  FaCheckCircle,
  FaWheelchair,
  FaClock,
  FaMapMarkerAlt,
} from 'react-icons/fa'

const AdultDayCarePage = () => {
  const router = useRouter()
  const sectionId = router.query.from || 'adult-day-care'

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

        {/* Hero Banner */}
        <section className="relative mt-10 overflow-hidden rounded-2xl border border-gray-500 shadow-lg">
          <div className="mx-auto my-8 max-w-lg">
            <Image
              src="/assets/image-placeholder.png"
              alt="Coming soon"
              width={800}
              height={500}
              className="rounded-lg shadow"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black-700/80 via-black-700/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <h1 className="text-3xl font-bold text-white-500 sm:text-4xl">
              Adult Day Care Services
            </h1>
            <p className="mt-3 max-w-3xl text-white-500/90">
              Safe, supervised, and enriching daytime care that promotes health, independence, and
              social connection— while giving families peace of mind.
            </p>
          </div>
        </section>

        {/* Quick Facts strip */}
        <section className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-gray-500 bg-white-500 p-4 shadow md:grid-cols-4">
          <div className="flex items-center gap-3">
            <FaClock className="h-5 w-5 text-green-600" />
            <span className="text-sm text-black-500">Mon–Sat, 7 AM – 7 PM</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="h-5 w-5 text-green-600" />
            <span className="text-sm text-black-500">811 Mt Holly Rd, Fairdale</span>
          </div>
          <div className="flex items-center gap-3">
            <FaWheelchair className="h-5 w-5 text-green-600" />
            <span className="text-sm text-black-500">Accessible facility & transport</span>
          </div>
          <div className="flex items-center gap-3">
            <FaShieldAlt className="h-5 w-5 text-green-600" />
            <span className="text-sm text-black-500">Supervised, trained staff</span>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold text-green-500">What We Offer</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-500 bg-white-500 p-6 shadow">
              <div className="mb-3 flex items-center gap-3">
                <FaUserFriends className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-black-600">Social & Cognitive</h3>
              </div>
              <ul className="space-y-2">
                {[
                  'Group activities & companionship',
                  'Memory games and mental stimulation',
                  'Arts & crafts, music, and conversation',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-black-500">
                    <FaCheckCircle className="mt-0.5 h-4 w-4 text-green-600" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-500 bg-white-500 p-6 shadow">
              <div className="mb-3 flex items-center gap-3">
                <FaHeartbeat className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-black-600">Wellness & Safety</h3>
              </div>
              <ul className="space-y-2">
                {[
                  'Light exercise & mobility support',
                  'Medication reminders & vitals checks',
                  'Supervised environment with trained staff',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-black-500">
                    <FaCheckCircle className="mt-0.5 h-4 w-4 text-green-600" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-500 bg-white-500 p-6 shadow md:col-span-2">
              <div className="mb-3 flex items-center gap-3">
                <FaUtensils className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-black-600">Nutrition & Comfort</h3>
              </div>
              <p className="text-black-500">
                Nutritious snacks and meals during the day, plus comfortable activity areas designed
                for connection and engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Daily Activities */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold text-green-500">Sample Daily Activities</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-500 bg-white-500 p-6 shadow">
              <h3 className="mb-2 text-lg font-semibold text-black-600">Morning</h3>
              <p className="text-black-500">
                Gentle stretching, group discussions, and cognitive games to start the day.
              </p>
            </div>
            <div className="rounded-xl border border-gray-500 bg-white-500 p-6 shadow">
              <h3 className="mb-2 text-lg font-semibold text-black-600">Afternoon</h3>
              <p className="text-black-500">
                Arts & crafts, music therapy, or light exercise followed by a healthy snack.
              </p>
            </div>
          </div>
        </section>

        {/* Transportation */}
        <section className="mt-12 rounded-xl border border-gray-500 bg-white-500 p-6 shadow">
          <h2 className="mb-3 text-2xl font-semibold text-green-500">Transportation Available</h2>
          <p className="text-black-500">
            We offer round-trip transportation for eligible clients within our service area. Our
            vehicles are wheelchair-accessible and operated by friendly, trained drivers.
          </p>
        </section>

        {/* Family Involvement */}
        <section className="mt-12">
          <h2 className="mb-3 text-2xl font-semibold text-green-500">Family Involvement</h2>
          <p className="text-black-500">
            We encourage family members to participate in certain activities and visit during the
            day. This fosters stronger relationships and provides reassurance to loved ones.
          </p>
        </section>

        {/* Soft CTA */}
        <section className="mt-12 rounded-2xl border border-gray-500 bg-gradient-to-r from-green-600 to-green-500 p-6 text-white-500 shadow">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">Ready to tour our center?</h3>
              <p className="text-white-500/90">
                Call us or send a message—let’s find a schedule that works for you.
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

export default AdultDayCarePage
