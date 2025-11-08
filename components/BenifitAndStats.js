import { useMemo } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { RectangleGroupIcon, FaceSmileIcon, CreditCardIcon, HomeIcon } from '@heroicons/react/24/outline'
import { MdFaceRetouchingNatural } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";

import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import getScrollAnimation from '../utils/getScrollAnimation'
import InsightCard from './Util/InsightCard'

const BenefitStatsSection = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  const Card = ({ icon: Icon, label, value, suffix = '', children }) => (
    <motion.div variants={scrollAnimation} whileHover={{ y: -4 }}>
      <InsightCard
        icon={Icon}
        iconSize={56}
        title={label}
        value={
          typeof value === 'number' ? <CountUp end={value} suffix={suffix} duration={1.8} /> : value
        }
        description={children}
        className="text-center"
      />
    </motion.div>
  )

  return (
    <div
      className="mx-auto max-w-screen-xl items-center px-6 pb-12 sm:px-8 lg:px-16"
      id="benefits"
    >
      {/* Section header */}
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation} className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-3xl sm:text-5xl">
            Our Care Can Make A Difference
          </h2>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-black-500">
            Research-backed outcomes families care about
          </p>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* Stats grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
        <ScrollAnimationWrapper>
          <Card icon={RectangleGroupIcon} label="Social Connection" value={33} suffix="%">
            Adults 45+ report feeling lonely—our programs foster real connection.
          </Card>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <Card icon={MdFaceRetouchingNatural} label="Caregiver Relief" value={78} suffix="%">
            Caregivers feel emotionally better with just 4 hours/week of respite care.
          </Card>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <Card icon={TbPigMoney} label="Cost Advantage" value={'5x'}>
            Less expensive than full‑time nursing homes—with equal compassion.
          </Card>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <Card icon={HomeIcon} label="Age in Place" value={74} suffix="%">
            Of seniors remain living at home with the support of adult day services.
          </Card>
        </ScrollAnimationWrapper>
      </div>
    </div>
  )
}

export default BenefitStatsSection
