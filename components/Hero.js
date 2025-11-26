import { UserGroupIcon, HomeModernIcon, SparklesIcon, TruckIcon } from '@heroicons/react/24/outline'
import PhoneIcon from '@heroicons/react/24/solid/PhoneIcon'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useMemo } from 'react'
import getScrollAnimation from '../utils/getScrollAnimation'
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import PrimaryCta from './misc/PrimaryCta'

const highlights = [
  {
    title: 'Adult Day Care',
    description: 'Safe, structured daytime engagement and companionship.',
    Icon: UserGroupIcon,
  },
  {
    title: 'In-Home Care',
    description: 'Personalized support wherever you feel most comfortable.',
    Icon: HomeModernIcon,
  },
  {
    title: 'Nutritious Meals',
    description: 'Chef-guided menus tailored to every dietary need.',
    Icon: SparklesIcon,
  },
  {
    title: 'Transportation',
    description: 'Reliable, door-to-door rides to appointments and our center.',
    Icon: TruckIcon,
  },
]

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className="relative w-full overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/assets/background.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-white" />
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-8 xl:px-16">
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 sm:gap-20 lg:gap-32"
            variants={scrollAnimation}
          >
            <div className="order-2 max-w-full text-center sm:order-1 sm:text-left">
              <h1 className="font-jakarta text-3xl font-extrabold leading-tight sm:text-5xl">
                <span className="block">
                  <span>Quality You Can Trust</span>.
                </span>
                <span className="mt-2 block">
                  <span>Care You Deserve</span>.
                </span>
              </h1>

              <p className="mt-8 max-w-xl font-inter text-base leading-relaxed text-slate-700 sm:text-lg">
                From daytime care and engaging activities to nutritious meals and safe
                transportation — we’re here to support you every step of the way.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <PrimaryCta href="/our-center" className="justify-center">
                  Learn about our center
                  <svg
                    className="ml-2 size-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </PrimaryCta>

                <PrimaryCta
                  href="tel:+1502XXXXXXX"
                  className="justify-center"
                  aria-label="Call our center"
                >
                  Call our center
                  <PhoneIcon className="ml-2 size-5" />
                </PrimaryCta>
              </div>

              <div className="mt-12 flex items-center gap-2 text-xs text-slate-500 sm:gap-3">
                <span>Medicaid & private pay accepted • Services offered</span>
                <span
                  className="group relative flex size-4 items-center justify-center rounded-full bg-[#116768] text-[10px] font-bold text-white"
                  aria-label="Coverage and services info"
                >
                  i
                  <span className="invisible absolute bottom-full left-1/2 z-10 mb-2 w-64 -translate-x-1/2 rounded-xl border border-slate-100 bg-white p-4 text-center text-[11px] text-navy shadow-xl opacity-0 transition group-hover:visible group-hover:opacity-100">
                    Coverage eligibility and service availability can change. Please call ahead to
                    confirm Medicaid/private pay acceptance and specific offerings.
                  </span>
                </span>
              </div>
            </div>

            <div className="order-1 flex w-full sm:order-2">
              <motion.div className="size-full" variants={scrollAnimation}>
                <Image
                  src="/assets/main_hero_section.svg"
                  alt="Seniors enjoying"
                  quality={100}
                  width={612}
                  height={383}
                />
              </motion.div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ title, description, Icon }) => (
            <ScrollAnimationWrapper key={title}>
              <motion.div
                variants={scrollAnimation}
                className="flex items-center gap-4 rounded-lg border border-slate-100 bg-white p-5 shadow-[0_12px_24px_rgba(15,34,71,0.05)]"
              >
                <Icon className="size-20 text-navy" />
                <div>
                  <p className="text-lg font-semibold text-navy">{title}</p>
                  <p className="text-sm text-slate-600">{description}</p>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
