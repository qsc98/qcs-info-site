import { useRouter } from 'next/router'
import Image from 'next/image'
import Footer from '../components/Layout/Footer'
import {
  FaArrowLeft,
  FaCheckCircle,
  FaWheelchair,
  FaShieldAlt,
  FaClock,
  FaMapMarkerAlt,
  FaRoute,
  FaUserNurse,
  FaPhoneAlt,
} from 'react-icons/fa'

const MedicalTransportationPage = () => {
  const router = useRouter()
  const sectionId = router.query.from || 'medical-transportation'

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

        {/* Hero Banner (matches style) */}
        <section className="relative mt-10 overflow-hidden rounded-2xl border border-gray-500 shadow-lg">
          <div className="mx-auto my-8 max-w-lg">
            <Image
              src="/assets/Image-placeholder.png"
              alt="Medical Transportation"
              width={800}
              height={500}
              className="rounded-lg shadow"
            />
          </div>
        </section>

        {/* Quick Facts strip */}
        <section className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-gray-500 bg-white-500 p-4 shadow md:grid-cols-4">
          <div className="flex items-center gap-3">
            <FaClock className="h-5 w-5 text-green-600" />
            <span className="text-sm text-black-500">Advance booking (24 hrs)</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="h-5 w-5 text-green-600" />
            <span className="text-sm text-black-500">Louisville & nearby</span>
          </div>
          <div className="flex items-center gap-3">
            <FaWheelchair className="h-5 w-5 text-green-600" />
            <span className="text-sm text-black-500">Wheelchair‑accessible fleet</span>
          </div>
          <div className="flex items-center gap-3">
            <FaShieldAlt className="h-5 w-5 text-green-600" />
            <span className="text-sm text-black-500">Trained, vetted drivers</span>
          </div>
        </section>

        {/* What We Cover */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold text-green-500">Where We Take You</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                title: 'Appointments & Treatments',
                bullets: [
                  'Primary & specialist visits',
                  'Dialysis & infusion centers',
                  'Physical / occupational therapy',
                ],
              },
              {
                title: 'Errands & Essentials',
                bullets: [
                  'Pharmacies & labs',
                  'Adult day center drop‑off',
                  'Hospital discharge pickup',
                ],
              },
            ].map(({ title, bullets }) => (
              <div
                key={title}
                className="rounded-xl border border-gray-500 bg-white-500 p-6 shadow"
              >
                <div className="mb-3 flex items-center gap-3">
                  <FaRoute className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-black-600">{title}</h3>
                </div>
                <ul className="space-y-2">
                  {bullets.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-black-500">
                      <FaCheckCircle className="mt-0.5 h-4 w-4 text-green-600" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Safety & Accessibility */}
        <section className="mt-12 rounded-xl border border-gray-500 bg-white-500 p-6 shadow">
          <div className="mb-3 flex items-center gap-3">
            <FaUserNurse className="h-5 w-5 text-green-600" />
            <h2 className="text-2xl font-semibold text-green-500">Safety & Accessibility</h2>
          </div>
          <ul className="space-y-2">
            {[
              'Drivers trained in senior care transport protocols',
              'Wheelchair lifts, secure restraints, and assistance to door',
              'Courtesy wait & return service available by request',
              'Caregivers/family may ride along at no charge (1 companion)',
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-black-500">
                <FaCheckCircle className="mt-0.5 h-4 w-4 text-green-600" /> {t}
              </li>
            ))}
          </ul>
        </section>

        {/* How to Book */}
        <section className="mt-12 rounded-xl border border-gray-500 bg-white-500 p-6 shadow">
          <h2 className="mb-3 text-2xl font-semibold text-green-500">How to Book</h2>
          <ol className="list-decimal space-y-2 pl-5 text-black-500">
            <li>Call us to request a pickup window and destination.</li>
            <li>Share mobility needs (wheelchair, walker, assistance to door).</li>
            <li>We confirm pickup time, driver, and estimated return.</li>
          </ol>
        </section>

        {/* Soft CTA */}
        <section className="mt-12 rounded-2xl border border-gray-500 bg-gradient-to-r from-green-600 to-green-500 p-6 text-white-500 shadow">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">Need a ride to your appointment?</h3>
              <p className="text-white-500/90">
                Book in advance and we’ll handle the rest—safely and on time.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+1-000-000-0000"
                className="inline-flex items-center gap-2 rounded-md bg-white-500 px-4 py-2 text-sm font-semibold text-black-600 shadow transition hover:shadow-md"
              >
                <FaPhoneAlt /> Call Now
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

export default MedicalTransportationPage
