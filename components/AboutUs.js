import Image from 'next/image'
import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import getScrollAnimation from '../utils/getScrollAnimation'
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import AboutImage from '../public/assets/aboutus.jpg'

const AboutUs = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className="mx-auto max-w-screen-xl px-6 py-16 sm:px-8 lg:px-16" id="about">
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation} className="mb-8 flex justify-center">
          <span className="badge badge-neutral p-2">About Us</span>
        </motion.div>
      </ScrollAnimationWrapper>

      <div className="grid grid-cols-1 items-center gap-12 sm:grid-cols-2 sm:pt-10">
        {/* Left: Card with Image + Button */}
        <ScrollAnimationWrapper className="flex flex-col items-center sm:items-start">
          <motion.div variants={scrollAnimation} className="card bg-base-100">
            <div className=" ">
              <Image
                src={AboutImage}
                alt="About our caregiving team"
                width={384}
                height={384}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </ScrollAnimationWrapper>

        {/* Right: Clean Text Content */}
        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation} className="text-center sm:text-left">
            <h2 className="text-4xl font-extrabold sm:text-5xl">
              Rooted in Care,
              <br /> Built for Community
            </h2>
            <p className="text-base-content mt-6 text-lg leading-relaxed">
              We’re a diverse team of caregivers, technologists, and local advocates committed to
              providing meaningful, trustworthy care for adults and seniors in Louisville. From
              social workers and church volunteers to IT professionals and family caregivers — we
              bring experience, heart, and innovation to everything we do.
            </p>
            <p className="text-base-content mt-4 text-lg">
              Our team proudly partners with local religious organizations, community centers, and
              families to make compassionate care both personal and accessible.
            </p>
            <div className="card-actions mt-6 justify-center">
              <a className="btn btn-success btn-wide" href="">
                Meet Our Team ╰┈┈➤
              </a>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  )
}

export default AboutUs
