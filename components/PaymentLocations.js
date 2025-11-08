// components/PaymentLocationsSection.js
import React, { useEffect, useState } from 'react'

import {
  MapIcon,
  ClockIcon,
  UserIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline'

import { motion } from 'framer-motion'
import InsightCard from './Util/InsightCard'
import { IoNutritionOutline } from "react-icons/io5";

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

const PaymentLocationsSection = () => {
  // Only enable hover animation if the device supports hover
  const [hoverable, setHoverable] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      setHoverable(window.matchMedia('(hover: hover)').matches)
    }
  }, [])

  const Card = ({ icon: Icon, title, children }) => (
    <motion.div variants={item} {...(hoverable ? { whileHover: { scale: 1.03 } } : {})}>
      <InsightCard icon={Icon} iconSize={56} title={title} description={children} />
    </motion.div>
  )

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white px-6 py-16 text-center"
    >
      <h2 className="text-3xl font-extrabold sm:text-5xl">Why Families Trust Us</h2>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-black-500">
        A trusted partner for families seeking dependable adult day care.
      </p>

      <motion.div
        variants={container}
        className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Card icon={MapIcon} title="Serving Our Community">
          Proudly supporting families in <strong>Louisville</strong>, <strong>Fairdale</strong>, and
          nearby areas.
        </Card>

        <Card icon={ClockIcon} title="Convenient Hours">
          Open Monday–Saturday, 7 AM – 7 PM to fit your family&apos;s schedule.
        </Card>

        <Card icon={UserIcon} title="Compassionate Staff">
          Every team member is trained, background‑checked, and passionate about care.
        </Card>

        <Card icon={ClipboardDocumentCheckIcon} title="Personalized Plans">
          Each client receives a care plan tailored to their needs and personality.
        </Card>

        <Card icon={CurrencyDollarIcon} title="Flexible Payment Options">
          We accept <strong>Medicaid</strong>, <strong>Private Pay</strong>, and{' '}
          <strong>Veteran Benefits</strong>.
        </Card>

        <Card icon={IoNutritionOutline} title="Nutritious Meals">
          We serve three fresh meals daily — balanced, comforting, and healthy.
        </Card>
      </motion.div>
    </motion.section>
  )
}

export default PaymentLocationsSection
