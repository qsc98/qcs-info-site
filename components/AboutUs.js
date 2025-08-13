import Image from 'next/image'
import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import getScrollAnimation from '../utils/getScrollAnimation'
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import AboutImage from '../public/assets/aboutus.jpg'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const AboutUs = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className="mx-auto max-w-screen-xl px-6 py-16 sm:px-8 lg:px-16" id="about">
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation} className="mb-8 flex justify-center">
          <span className="inline-flex items-center rounded-full bg-black px-3 py-1 text-sm font-semibold text-white shadow">
            About Us
          </span>
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
              className="h-full w-full rounded-lg object-cover"
              priority
            />
          </motion.div>
        </ScrollAnimationWrapper>

        {/* Right: Text + Premium CTA */}
        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation} className="text-center sm:text-left">
            <h2 className="text-4xl font-extrabold sm:text-5xl">
              Rooted in Care,
              <br /> Built for Community
            </h2>
            {/* Replaces DaisyUI `text-base-content` */}
            <p className="mt-6 text-lg leading-relaxed text-black-500">
              We’re a diverse team of caregivers, technologists, and local advocates committed to
              providing meaningful, trustworthy care for adults and seniors in Louisville. From
              social workers and church volunteers to IT professionals and family caregivers — we
              bring experience, heart, and innovation to everything we do.
            </p>
            <p className="mt-4 text-lg text-black-500">
              Our team proudly partners with local religious organizations, community centers, and
              families to make compassionate care both personal and accessible.
            </p>

            <div className="mx-auto mt-6 flex w-max">
              <Link
                href={{ pathname: '/about-us', query: { from: 'about-us' } }}
                aria-label="Meet our team"
                className="inline-flex items-center gap-2 rounded-full border border-green-500 bg-white px-6 py-3 font-semibold text-green-600 shadow transition hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Meet Our Team
                <FaArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  )
}

export default AboutUs
