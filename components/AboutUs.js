import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useMemo } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import getScrollAnimation from '../utils/getScrollAnimation'
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import PrimaryCta from './misc/PrimaryCta'
import SectionEyebrow from './misc/SectionEyebrow'
import AboutImage from '../public/assets/aboutus.jpg'

const AboutUs = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div
      className="section-shell relative mx-auto max-w-screen-xl overflow-hidden rounded-3xl px-6 py-16 sm:px-8 lg:px-16"
      id="about"
      style={{
        backgroundImage: "url('/assets/background-3.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white/50" aria-hidden="true" />
      <div className="relative">
        <ScrollAnimationWrapper>
          <motion.div
            variants={scrollAnimation}
            className="mb-8 flex flex-col items-center gap-2 text-center"
          >
            <SectionEyebrow className="mb-4">About Us</SectionEyebrow>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black-500">
              A Diverse Team Making Care Personal
            </p>
          </motion.div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 items-center gap-12 sm:grid-cols-2 sm:pt-10">
          {/* Left: Image */}
          <ScrollAnimationWrapper className="flex flex-col items-center sm:items-start">
            {/* Replaces DaisyUI `card bg-base-100` */}
            <motion.div variants={scrollAnimation} className="rounded-lg bg-white shadow-lg">
              <Image
                src={AboutImage}
                alt="About our caregiving team"
                width={384}
                height={384}
                className="size-full rounded-lg object-cover"
                priority
              />
            </motion.div>
          </ScrollAnimationWrapper>

          {/* Right: Text + Premium CTA */}
          <ScrollAnimationWrapper>
            <motion.div variants={scrollAnimation} className="text-center sm:text-left">
              <h2 className="font-jakarta text-3xl font-bold leading-[1.2] text-navy sm:text-5xl">
                Rooted in Care,
                <br /> Built for Community
              </h2>
              {/* Replaces DaisyUI `text-base-content` */}
              <p className="mt-6 text-black-500">
                We’re a diverse team of caregivers, technologists, and local advocates committed to
                providing meaningful, trustworthy care for adults and seniors in Louisville. From
                social workers and church volunteers to IT professionals and family caregivers — we
                bring experience, heart, and innovation to everything we do.
              </p>
              <p className="mt-4 text-black-500">
                Our team proudly partners with local religious organizations, community centers, and
                families to make compassionate care both personal and accessible.
              </p>

              <PrimaryCta
                href='/about-us'
                aria-label="Meet our team"
                className="mt-6 w-full justify-center sm:w-full"
              >
                Meet Our Team
                <FaArrowRight className="size-4" />
              </PrimaryCta>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
