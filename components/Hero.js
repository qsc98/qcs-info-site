import { useMemo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import getScrollAnimation from '../utils/getScrollAnimation'
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import Link from 'next/link'

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className="mx-auto mt-24 max-w-screen-xl px-8 xl:px-16">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row grid-rows-2 gap-8 py-6 sm:grid-flow-col sm:grid-cols-2 md:grid-rows-1"
          variants={scrollAnimation}
        >
          <div className="row-start-2 flex flex-col items-start justify-center sm:row-start-1">
            <h1 className="text-center text-3xl font-medium leading-normal text-black-600 sm:text-center lg:text-left lg:text-4xl xl:text-5xl">
              <strong>Quality</strong> You Can <strong>Trust</strong>.<br></br>
              <strong>Care</strong> You <strong>Deserve</strong>.
            </h1>
            <p className="mb-6 mt-4 text-black-500">
              From daytime care and engaging activities to nutritous meals and safe transportation —
              we’re here to support you in every step of the way.
            </p>
            <Link
              href="/our-center"
              className="group mt-2 inline-flex items-center font-semibold text-green-600 hover:underline"
            >
              Learn about our center
              <svg
                className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/main_hero_section.jpg"
                alt="Seniors enjoying"
                quality={100}
                width={612}
                height={383}
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  )
}

export default Hero
