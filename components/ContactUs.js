import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import getScrollAnimation from '../utils/getScrollAnimation'
import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import ContactForm from './ContactForm'
import SectionEyebrow from './misc/SectionEyebrow'

const ContactSection = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <section
      className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-10"
      id="contact"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/assets/honeycomb-background.jpg')" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-screen-xl">
        {/* Heading */}
        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation} className="mx-auto mb-12 max-w-2xl text-center">
            <SectionEyebrow>Support</SectionEyebrow>
            <h2 className="text-3xl font-extrabold sm:text-5xl">Let’s Connect!</h2>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-black-500">
              Have questions or need support? Reach out and we’ll respond ASAP.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>

        {/* Info Cards */}
        <ScrollAnimationWrapper>
          <motion.div
            variants={scrollAnimation}
            className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <div className="rounded-xl bg-white p-6 text-center shadow-lg">
              <p className="text-lg font-semibold">Email</p>
              <p className="mt-1 text-sm text-black-500">Need help? Drop us an email.</p>
              <a
                href="mailto:admin@qualityseniorcare.org"
                className="mt-2 block text-sm font-medium text-green-600 underline underline-offset-4 hover:text-green-700"
              >
                admin@qualityseniorcare.org
              </a>
            </div>

            <div className="rounded-xl bg-white p-6 text-center shadow-lg">
              <p className="text-lg font-semibold">Visit us</p>
              <p className="mt-1 text-sm text-black-500">Come by our office anytime.</p>
              <span className="mt-2 block text-sm">811 Mt Holly Rd, Fairdale, KY 40118</span>
            </div>

            <div className="rounded-xl bg-white p-6 text-center shadow-lg">
              <p className="text-lg font-semibold">Social Media</p>
              <p className="mt-1 text-sm text-black-500">Stay updated & connect with us.</p>
              <div className="mt-3 flex justify-center gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="h-5 w-5 text-[#1877F2] transition-transform duration-200 hover:scale-110" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="h-5 w-5 text-[#E1306C] transition-transform duration-200 hover:scale-110" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="h-5 w-5 text-[#0A66C2] transition-transform duration-200 hover:scale-110" />
                </a>
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>

        {/* Contact Form Centered */}
        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation} className="mx-auto max-w-lg">
            <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <h3 className="mb-6 text-center text-2xl font-bold">Contact Us</h3>
              <ContactForm />
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}

export default ContactSection
