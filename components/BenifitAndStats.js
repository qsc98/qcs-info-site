import { useMemo } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { FaUsers, FaSmileBeam, FaDollarSign, FaHome } from 'react-icons/fa'

import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import getScrollAnimation from '../utils/getScrollAnimation'

const BenefitStatsSection = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  const Card = ({ icon: Icon, label, value, suffix = '', children }) => (
    <motion.div
      variants={scrollAnimation}
      whileHover={{ y: -4 }}
      className="group space-y-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-green-50 ring-1 ring-darkneutral-100">
        <Icon className="text-darkneutral-600" size={22} aria-hidden />
      </div>
      <p className="text-xs uppercase tracking-wide text-gray-600">{label}</p>
      <h3 className="text-5xl text-navy">
        {typeof value === 'number' ? <CountUp end={value} suffix={suffix} duration={1.8} /> : value}
      </h3>
      <div className="mx-auto h-1 w-10 rounded-full bg-gradient-to-r from-green-500 to-green-600" />
      <p className="text-sm leading-relaxed text-gray-700">{children}</p>
    </motion.div>
  )

  return (
    <div
      className="mx-auto mt-10 max-w-screen-xl items-center px-6 pb-16 sm:px-8 lg:px-16"
      id="benefits"
    >
      {/* Section header */}
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation} className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-3xl sm:text-5xl">
            Our Care Can Make A Difference
          </h2>
          <p className="mt-3 text-sm text-black-500">
            Research‑backed outcomes families care about
          </p>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* Stats grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
        <ScrollAnimationWrapper>
          <Card icon={FaUsers} label="Social Connection" value={33} suffix="%">
            Adults 45+ report feeling lonely—our programs foster real connection.
          </Card>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <Card icon={FaSmileBeam} label="Caregiver Relief" value={78} suffix="%">
            Caregivers feel emotionally better with just 4 hours/week of respite care.
          </Card>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <Card icon={FaDollarSign} label="Cost Advantage" value={'5x'}>
            Less expensive than full‑time nursing homes—with equal compassion.
          </Card>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <Card icon={FaHome} label="Age in Place" value={74} suffix="%">
            Of seniors remain living at home with the support of adult day services.
          </Card>
        </ScrollAnimationWrapper>
      </div>
    </div>
  )
}

export default BenefitStatsSection
