// components/PaymentLocationsSection.js

import {
  MapIcon,
  ClockIcon,
  UserIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline'

import { motion } from 'framer-motion'
import React, { useSyncExternalStore } from 'react'
import { IoNutritionOutline } from 'react-icons/io5'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, when: 'beforeChildren' },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

const subscribeHoverPreference = (callback) => {
  if (typeof window === 'undefined' || !window.matchMedia) return () => {}

  const mediaQuery = window.matchMedia('(hover: hover)')
  const handler = () => callback()
  mediaQuery.addEventListener?.('change', handler) ?? mediaQuery.addListener?.(handler)

  return () => {
    mediaQuery.removeEventListener?.('change', handler) ??
      mediaQuery.removeListener?.(handler)
  }
}

const getHoverSnapshot = () =>
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(hover: hover)').matches
    : false

const PaymentCard = ({ icon: Icon, title, children, hoverable }) => (
  <motion.div variants={item} {...(hoverable ? { whileHover: { y: -6 } } : {})}>
    <article className="group relative h-full overflow-hidden rounded-3xl border border-white/50 bg-[url('/assets/background-card-2.jpg')] bg-cover bg-center bg-no-repeat shadow-[0_24px_40px_-32px_rgba(15,34,71,0.55)]">
      <div className="flex h-full flex-col rounded-[28px] bg-white/50 p-6 text-left backdrop-blur-[2px] transition group-hover:-translate-y-1">
        <Icon className="text-navy" style={{ width: 56, height: 56 }} aria-hidden />
        <h3 className="mt-4 font-jakarta text-xl font-semibold text-navy">{title}</h3>
        <p className="mt-2 text-slate-600">{children}</p>
      </div>
    </article>
  </motion.div>
)

const PaymentLocationsSection = () => {
  const hoverable = useSyncExternalStore(
    subscribeHoverPreference,
    getHoverSnapshot,
    () => false
  )

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="px-6 py-16 text-center"
    >
      <h2 className="text-3xl font-extrabold sm:text-5xl">Why Families Trust Us</h2>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-black-500">
        A trusted partner for families seeking dependable adult day care.
      </p>

      <motion.div
        variants={container}
        className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <PaymentCard icon={MapIcon} title="Serving Our Community" hoverable={hoverable}>
          Proudly supporting families in <strong>Louisville</strong>, <strong>Fairdale</strong>, and
          nearby areas.
        </PaymentCard>

        <PaymentCard icon={ClockIcon} title="Convenient Hours" hoverable={hoverable}>
          Open Monday–Saturday, 7 AM – 7 PM to fit your family&apos;s schedule.
        </PaymentCard>

        <PaymentCard icon={UserIcon} title="Compassionate Staff" hoverable={hoverable}>
          Every team member is trained, background‑checked, and passionate about care.
        </PaymentCard>

        <PaymentCard
          icon={ClipboardDocumentCheckIcon}
          title="Personalized Plans"
          hoverable={hoverable}
        >
          Each client receives a care plan tailored to their needs and personality.
        </PaymentCard>

        <PaymentCard icon={CurrencyDollarIcon} title="Flexible Payment Options" hoverable={hoverable}>
          We accept <strong>Medicaid</strong>, <strong>Private Pay</strong>, and{' '}
          <strong>Veteran Benefits</strong>.
        </PaymentCard>

        <PaymentCard icon={IoNutritionOutline} title="Nutritious Meals" hoverable={hoverable}>
          We serve three fresh meals daily — balanced, comforting, and healthy.
        </PaymentCard>
      </motion.div>
    </motion.section>
  )
}

export default PaymentLocationsSection
