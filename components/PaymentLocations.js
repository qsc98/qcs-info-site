// components/PaymentLocationsSection.js
import React, { useEffect, useState } from 'react'
import {
  FaMoneyCheckAlt,
  FaMapMarkerAlt,
  FaClock,
  FaUserNurse,
  FaClipboardList,
  FaUtensils,
} from 'react-icons/fa'
import { motion } from 'framer-motion'

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

  const cardMotionProps = hoverable ? { whileHover: { scale: 1.03 } } : {}

  const Card = ({ icon: Icon, title, children }) => (
    <motion.div
      variants={item}
      {...cardMotionProps}
      className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md"
    >
      <Icon className="mb-3 text-emerald-800" size={40} aria-hidden="true" />
      <h3 className="mb-2 text-xl font-semibold text-gray-700">{title}</h3>
      <p className="text-center text-gray-600">{children}</p>
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
      <h2 className="mb-10 text-3xl sm:text-5xl">Why Families Trust Us</h2>

      <motion.div
        variants={container}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Card icon={FaMapMarkerAlt} title="Serving Our Community">
          Proudly supporting families in <strong>Louisville</strong>, <strong>Fairdale</strong>, and
          nearby areas.
        </Card>

        <Card icon={FaClock} title="Convenient Hours">
          Open Monday–Saturday, 7 AM – 7 PM to fit your family&apos;s schedule.
        </Card>

        <Card icon={FaUserNurse} title="Compassionate Staff">
          Every team member is trained, background‑checked, and passionate about care.
        </Card>

        <Card icon={FaClipboardList} title="Personalized Plans">
          Each client receives a care plan tailored to their needs and personality.
        </Card>

        <Card icon={FaMoneyCheckAlt} title="Flexible Payment Options">
          We accept <strong>Medicaid</strong>, <strong>Private Pay</strong>, and{' '}
          <strong>Veteran Benefits</strong>.
        </Card>

        <Card icon={FaUtensils} title="Nutritious Meals">
          We serve three fresh meals daily — balanced, comforting, and healthy.
        </Card>
      </motion.div>
    </motion.section>
  )
}

export default PaymentLocationsSection
