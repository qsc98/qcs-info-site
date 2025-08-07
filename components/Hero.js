import React, { useMemo } from 'react'
import Image from 'next/image'
import ButtonPrimary from './misc/ButtonPrimary'
import { motion } from 'framer-motion'
import getScrollAnimation from '../utils/getScrollAnimation'
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'

const Hero = ({
  listUser = [
    {
      name: 'Users',
      number: '390',
      icon: '/assets/Icon/heroicons_sm-user.svg',
    },
    {
      name: 'Locations',
      number: '20',
      icon: '/assets/Icon/gridicons_location.svg',
    },
    {
      name: 'Server',
      number: '50',
      icon: '/assets/Icon/bx_bxs-server.svg',
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className="mx-auto mt-24 max-w-screen-xl px-8 xl:px-16">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row grid-rows-2 gap-8 py-6 sm:grid-flow-col sm:grid-cols-2 md:grid-rows-1"
          variants={scrollAnimation}
        >
          <div className="row-start-2 flex flex-col items-start justify-center sm:row-start-1">
            <h1 className="text-3xl font-medium leading-normal text-black-600 lg:text-4xl xl:text-5xl">
              <strong>Quality</strong> You Can <strong>Trust</strong>.<br></br>
              <strong>Care</strong> You <strong>Deserve</strong>.
            </h1>
            <p className="mb-6 mt-4 text-black-500">
              From daytime care and engaging activities to nutritous meals and safe transportation —
              we’re here to support you in every step of the way.
            </p>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/main_hero_section.jpg"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  )
}

export default Hero
