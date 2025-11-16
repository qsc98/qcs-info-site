import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useMemo } from 'react'
import getScrollAnimation from '../../utils/getScrollAnimation'
import ScrollAnimationWrapper from '../Layout/ScrollAnimationWrapper'
import SectionEyebrow from '../misc/SectionEyebrow'

const ServiceOfferings = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className="mx-auto max-w-screen-xl items-center px-6 py-10 sm:px-8 lg:px-16">
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation} className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Services</SectionEyebrow>
          <h2 className="text-3xl font-extrabold sm:text-5xl">Care You Can Count On</h2>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-black-500">
            Enhancing life with care, convenience, and compassion.
          </p>
        </motion.div>
      </ScrollAnimationWrapper>

      <div className="mt-12 flex justify-center">
        <ScrollAnimationWrapper className="w-full max-w-2xl">
          <motion.div className="w-full overflow-hidden rounded-2xl" variants={scrollAnimation}>
            <Image
              src="/assets/service_offerings_section.svg"
              alt="Service Offerings"
              quality={100}
              height={414}
              width={508}
              className="h-auto w-full object-cover"
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  )
}

export default ServiceOfferings
