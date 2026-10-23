'use client'

import { motion } from 'motion/react'
import { useMemo } from 'react'
import ContactForm from './ContactForm'
import siteConfig, { fullAddress, isOpen } from '../site.config'
import getScrollAnimation from '../utils/getScrollAnimation'
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
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
      <div className="relative mx-auto max-w-(--breakpoint-xl)">
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
              <p className="mt-1 text-base text-black-500">Questions? Email us anytime.</p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-2 block text-sm font-medium text-green-600 underline underline-offset-4 hover:text-green-700"
              >{siteConfig.contact.email}</a>
            </div>

            <div className="rounded-xl bg-white p-6 text-center shadow-lg">
              <p className="text-lg font-semibold">Visit us</p>
              <p className="mt-1 text-base text-black-500">Tours available once we open.</p>
              <span className="mt-2 block text-base">{fullAddress}</span>
            </div>

            <div className="rounded-xl bg-white p-6 text-center shadow-lg">
              <p className="text-lg font-semibold">Status</p>
              <p className="mt-1 text-base text-black-500">{siteConfig.launch.statusLine}</p>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>

        {/* Contact Form Centered */}
          <div className="mx-auto max-w-lg">
            <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <h3 className="mb-6 text-center text-2xl font-bold">{isOpen ? 'Contact Us' : 'Join the Waitlist'}</h3>
              <ContactForm />
            </div>
          </div>
      </div>
    </section>
  )
}

export default ContactSection
