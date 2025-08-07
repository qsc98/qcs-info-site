import Image from 'next/image'
import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import getScrollAnimation from '../utils/getScrollAnimation'
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'

const features = [
  'Comprehensive Adult Day Care Services',
  'Reliable Medical Transportation',
  'Wholesome, Nutritious Meals',
  'Compassionate In-Home Care Services',
  'Tailored Case Management',
]

const ServiceOfferings = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className="mx-auto mt-10 max-w-screen-xl items-center px-6 sm:px-8 lg:px-16" id="services">
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation} className="mx-auto max-w-2xl text-center">
          <span className="badge badge-neutral mb-10 p-2">Services</span>
          <h2 className="text-4xl font-extrabold sm:text-5xl">Care You Can Count On.</h2>
        </motion.div>
      </ScrollAnimationWrapper>

      <div className="mb-12 grid grid-flow-row grid-cols-1 gap-8 sm:grid-flow-col sm:grid-cols-2">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-1" variants={scrollAnimation}>
            <Image
              src="/assets/service_offerings_section.jpg"
              alt="Service Offerings"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="content-center">
          <motion.div
            className="ml-auto flex w-full flex-col items-end items-center justify-center lg:px-10"
            variants={scrollAnimation}
          >
            <p className="my-2 text-black-600">
              Discover our range of services designed to enhance quality of life with care,
              convenience, and compassion - for you or someone you love.
            </p>
            <ul className="ml-8 list-inside self-start text-black-500">
              {features.map((feature, index) => (
                <motion.li
                  className="circle-check custom-list relative"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  )
}

export default ServiceOfferings
