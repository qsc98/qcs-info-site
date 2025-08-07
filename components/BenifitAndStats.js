import { FaUsers, FaSmileBeam, FaDollarSign, FaHome } from "react-icons/fa";
import CountUp from "react-countup";
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import { motion } from "framer-motion";
import getScrollAnimation from '../utils/getScrollAnimation'
import { useMemo } from 'react'

const BenefitStatsSection = () => {
      const scrollAnimation = useMemo(() => getScrollAnimation(), [])
    
  return (
    <div className="mx-auto mt-10 pb-10 max-w-screen-xl items-center px-6 sm:px-8 lg:px-16" id="benefits">
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        <ScrollAnimationWrapper>
          <motion.div
            className="space-y-4"
            variants={scrollAnimation}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <FaUsers className="mx-auto text-green-500" size={40} />
            <h3 className="text-5xl font-bold text-green-500">
              <CountUp end={33} suffix="%" duration={2.5} />
            </h3>
            <p className="text-gray-300">
              Adults 45+ report feeling lonely—our programs foster real connection.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.div
            className="space-y-4"
            variants={scrollAnimation}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <FaSmileBeam className="mx-auto text-green-500" size={40} />
            <h3 className="text-5xl font-bold text-green-500">
              <CountUp end={78} suffix="%" duration={2.5} />
            </h3>
            <p className="text-gray-300">
              Caregivers feel emotionally better with just 4 hours/week of respite care.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.div
            className="space-y-4"
            variants={scrollAnimation}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <FaDollarSign className="mx-auto text-green-500" size={40} />
            <h3 className="text-5xl font-bold text-green-500">
              <CountUp end={100} prefix="$" duration={2.5} />
            </h3>
            <p className="text-gray-300">
              Less than the cost of nursing care per day—offering comfort and savings.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.div
            className="space-y-4"
            variants={scrollAnimation}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <FaHome className="mx-auto text-green-500" size={40} />
            <h3 className="text-5xl font-bold text-green-500">
              <CountUp end={74} suffix="%" duration={2.5} />
            </h3>
            <p className="text-gray-300">
              Of seniors remain living at home with the support of adult day services.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default BenefitStatsSection;
