import { useMemo } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { FaUsers, FaSmileBeam, FaDollarSign, FaHome } from 'react-icons/fa'

import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import getScrollAnimation from '../utils/getScrollAnimation'

const BenefitStatsSection = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div
      className="mx-auto mt-10 max-w-screen-xl items-center px-6 pb-16 sm:px-8 lg:px-16"
      id="benefits"
    >
      {/* Section header */}
      <ScrollAnimationWrapper>
        <motion.div
          variants={scrollAnimation}
          className="mx-auto mb-6 max-w-2xl text-center"
        >
          <h2 className="font-extrabold tracking-tight text-2xl text-black-500">Our Care Can Make A Difference</h2>
          <p className="mt-2 text-sm text-gray-400">
            Research-backed outcomes families care about
          </p>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* Stats grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <ScrollAnimationWrapper>
          <motion.div
            className="group space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl ring-1 ring-white/5 transition-all hover:-translate-y-1 hover:shadow-2xl"
            variants={scrollAnimation}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/30">
              <FaUsers className="text-emerald-400" size={22} aria-hidden />
            </div>
            <p className="text-xs uppercase tracking-wide text-gray-400">Social Connection</p>
            <h3 className="text-5xl font-extrabold text-emerald-400">
              <CountUp end={33} suffix="%" duration={2.5} />
            </h3>
            <div className="mx-auto h-1 w-10 rounded-full bg-gradient-to-r from-emerald-400/70 to-green-400/70" />
            <p className="text-sm text-gray-300">
              Adults 45+ report feeling lonely—our programs foster real connection.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>

        {/* Card 2 */}
        <ScrollAnimationWrapper>
          <motion.div
            className="group space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl ring-1 ring-white/5 transition-all hover:-translate-y-1 hover:shadow-2xl"
            variants={scrollAnimation}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/30">
              <FaSmileBeam className="text-emerald-400" size={22} aria-hidden />
            </div>
            <p className="text-xs uppercase tracking-wide text-gray-400">Caregiver Relief</p>
            <h3 className="text-5xl font-extrabold text-emerald-400">
              <CountUp end={78} suffix="%" duration={2.5} />
            </h3>
            <div className="mx-auto h-1 w-10 rounded-full bg-gradient-to-r from-emerald-400/70 to-green-400/70" />
            <p className="text-sm text-gray-300">
              Caregivers feel emotionally better with just 4 hours/week of respite care.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>

        {/* Card 3 */}
        <ScrollAnimationWrapper>
          <motion.div
            className="group space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl ring-1 ring-white/5 transition-all hover:-translate-y-1 hover:shadow-2xl"
            variants={scrollAnimation}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/30">
              <FaDollarSign className="text-emerald-400" size={22} aria-hidden />
            </div>
            <p className="text-xs uppercase tracking-wide text-gray-400">Cost Advantage</p>
            <h3 className="text-5xl font-extrabold text-emerald-400">5x</h3>
            <div className="mx-auto h-1 w-10 rounded-full bg-gradient-to-r from-emerald-400/70 to-green-400/70" />
            <p className="text-sm text-gray-300">
              Less expensive than full-time nursing homes—with equal compassion.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>

        {/* Card 4 */}
        <ScrollAnimationWrapper>
          <motion.div
            className="group space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl ring-1 ring-white/5 transition-all hover:-translate-y-1 hover:shadow-2xl"
            variants={scrollAnimation}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/30">
              <FaHome className="text-emerald-400" size={22} aria-hidden />
            </div>
            <p className="text-xs uppercase tracking-wide text-gray-400">Age in Place</p>
            <h3 className="text-5xl font-extrabold text-emerald-400">
              <CountUp end={74} suffix="%" duration={2.5} />
            </h3>
            <div className="mx-auto h-1 w-10 rounded-full bg-gradient-to-r from-emerald-400/70 to-green-400/70" />
            <p className="text-sm text-gray-300">
              Of seniors remain living at home with the support of adult day services.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  )
}

export default BenefitStatsSection
