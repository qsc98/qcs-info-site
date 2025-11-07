import { useMemo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import getScrollAnimation from '../utils/getScrollAnimation'
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import Link from 'next/link'
import PhoneIcon from '@heroicons/react/24/solid/PhoneIcon'

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className="mx-auto my-24 max-w-screen-xl px-8 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-10 xl:px-16">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row grid-rows-2 gap-8 py-6 sm:grid-flow-col sm:grid-cols-2 md:grid-rows-1"
          variants={scrollAnimation}
        >
          <div className="max-w-full">
            <h1 className="font-jakarta text-4xl font-extrabold leading-tight sm:text-5xl">
              <span className="font-black">Quality</span> You Can <span className="font-black">Trust</span>.<br />
              <span className="font-black">Care</span> You <span className="font-black">Deserve</span>.
            </h1>

            <p className="mt-4 max-w-xl font-inter text-base leading-relaxed text-slate-700 sm:text-lg">
              From daytime care and engaging activities to nutritious meals and safe transportation —
              we’re here to support you every step of the way.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/our-center"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Learn about our center
                <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <a
                href="tel:+1502XXXXXXX"
                className="inline-flex items-center justify-center rounded-full border border-emerald-600 p-3 text-emerald-700 transition hover:bg-emerald-600 hover:text-white"
                aria-label="Call our center"
              >
                <PhoneIcon className="h-5 w-5" />
              </a>
            </div>

            <p className="mt-3 text-xs text-slate-500">Medicaid & private pay accepted</p>
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
