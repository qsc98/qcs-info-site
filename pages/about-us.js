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
} from 'react-icons/fa'

const AboutPage = () => {
  const router = useRouter()
  const sectionId = router.query.from || 'about'

  return (
    <>
      <div className="mx-auto mb-24 max-w-screen-xl px-8 xl:px-16">
        {/* Sticky Back Button (glassy) */}
        <div className="sticky top-4 z-50 flex justify-start">
          <button
            onClick={() => router.push(`/#${sectionId}`)}
            className="inline-flex items-center gap-2 rounded-md bg-white/80 px-4 py-2 text-sm font-semibold text-black-600 shadow-lg backdrop-blur transition hover:bg-white-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <FaArrowLeft /> Back to Home
          </button>
        </div>

        {/* Hero Banner — constrained height + gradient */}
        <section className="relative mt-10 overflow-hidden rounded-2xl border border-gray-500 shadow-lg">
          <div className="mx-auto my-8 max-w-lg">
            <Image
              src="/assets/image-placeholder.png"
              alt="Our team"
              width={800}
              height={500}
              className="rounded-lg shadow"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black-700/80 via-black-700/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <h1 className="text-3xl font-bold text-white-500 sm:text-4xl">
              About Quality Senior Health Care
            </h1>
            <p className="mt-3 max-w-3xl text-white-500/90">
              A mission‑driven team delivering safe, social, and dignified care—centered on people
              and community.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-gray-500 bg-white p-4 shadow md:grid-cols-4">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="h-5 w-5 text-green-600" />
            <span className="text-sm text-black-500">Louisville, Kentucky</span>
          </div>
          <div className="flex items-center gap-3">
            <FaClock className="h-5 w-5 text-green-600" />
            <span className="text-sm text-black-500">Mon–Sat • 7 AM–7 PM</span>
          </div>
          <div className="flex items-center gap-3">
            <FaShieldAlt className="h-5 w-5 text-green-600" />
            <span className="text-sm text-black-500">Trained & screened staff</span>
          </div>
          <div className="flex items-center gap-3">
            <FaUsers className="h-5 w-5 text-green-600" />
            <span className="text-sm text-black-500">Family‑centered approach</span>
          </div>
        </section>

        {/* Mission */}
        <section className="mt-12 rounded-xl border border-gray-500 bg-white p-6 shadow">
          <div className="mb-3 flex items-center gap-3">
            <FaHeart className="h-5 w-5 text-green-600" />
            <h2 className="text-2xl font-semibold text-green-500">Our Mission</h2>
          </div>
          <p className="text-black-500">
            To help adults live safely, socially, and independently through purposeful daytime
            programs and trusted in‑home support—delivered with dignity and compassion.
          </p>
        </section>

        {/* Values */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold text-green-500">Our Values</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: <FaHandshake className="h-5 w-5 text-green-600" />,
                title: 'Trust',
                text: 'Transparent communication and dependable care.',
              },
              {
                icon: <FaUsers className="h-5 w-5 text-green-600" />,
                title: 'Community',
                text: 'Partnerships with families and local orgs.',
              },
              {
                icon: <FaShieldAlt className="h-5 w-5 text-green-600" />,
                title: 'Safety',
                text: 'Trained staff, clear protocols, continuous oversight.',
              },
            ].map(({ icon, title, text }) => (
              <div key={title} className="rounded-xl border border-gray-500 bg-white p-6 shadow">
                <div className="mb-2 flex items-center gap-3">
                  {icon}
                  <h3 className="text-lg font-semibold text-black-600">{title}</h3>
                </div>
                <p className="text-black-500">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Snapshot (placeholder cards you can later wire to bios) */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold text-green-500">Meet the Team</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-xl border border-gray-500 bg-white p-4 shadow">
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/assets/image-placeholder.png" // replace with team photo
                    alt={`Team member ${n}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-semibold text-black-600">Team Member {n}</h3>
                  <p className="text-sm text-black-500">Role / Credentials</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Families Can Expect */}
        <section className="mt-12 rounded-xl border border-gray-500 bg-white p-6 shadow">
          <h2 className="mb-3 text-2xl font-semibold text-green-500">What Families Can Expect</h2>
          <ul className="space-y-2">
            {[
              'Personalized plans aligned to routines and goals',
              'Regular updates and quick responses to questions',
              'Respect for culture, faith, and preferences',
              'Clear safety practices and accountability',
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-black-500">
                <FaCheckCircle className="mt-0.5 h-4 w-4 text-green-600" /> {t}
              </li>
            ))}
          </ul>
        </section>

        {/* Soft CTA */}
        <section className="mt-12 rounded-2xl border border-gray-500 bg-gradient-to-r from-green-600 to-green-500 p-6 text-white shadow">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">Want to learn more or tour?</h3>
              <p className="text-white/90">Call us or send a note—we’re happy to help.</p>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+1-000-000-0000"
                className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black-600 shadow transition hover:shadow-md"
              >
                Call Now
              </a>
              <a
                href="#contact"
                className="rounded-md border border-white/80 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black-600"
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

export default AboutPage
