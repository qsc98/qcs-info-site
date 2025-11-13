// components/AdultDayCareService.js
import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import ScrollAnimationWrapper from '../Layout/ScrollAnimationWrapper'
import getScrollAnimation from '../../utils/getScrollAnimation'
import FAQList from '../FaqList'
import PrimaryCta from '../misc/PrimaryCta'

const AdultDayCareService = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  const faqs = [
    {
      question: 'What activities are included in adult day care?',
      answer:
        'We offer physical exercise, social interaction, games, art therapy, and mental stimulation activities tailored to individual abilities.',
    },
    {
      question: 'Is medical support available on-site?',
      answer:
        'Yes, basic health services such as medication management, vitals monitoring, and emergency assistance are provided by trained staff.',
    },
    {
      question: 'Do you provide transportation to the facility?',
      answer:
        'Yes, we offer round-trip transportation services for eligible clients within our coverage area.',
    },
    {
      question: 'Can family members visit during the day?',
      answer:
        'Absolutely! Families are encouraged to visit and participate in select activities with their loved ones.',
    },
  ]

  return (
    <div id="adult-day-care" className="mx-auto max-w-screen-xl px-6 sm:pb-12 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <ScrollAnimationWrapper>
          <motion.div
            variants={scrollAnimation}
            className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <h3 className="mb-3 flex items-center gap-2 text-2xl font-bold">Adult Day Care Services</h3>
            <p className="text-md flex-1 leading-relaxed text-black-500">
              Our adult day care program is designed to support older adults in a safe, structured,
              and enriching environment during daytime hours. We provide supervised care with
              personalized activities such as memory games, light physical exercise, social
              interaction, and creative engagement. Whether for respite, companionship, or daytime
              supervision, this service helps seniors thrive while caregivers take time to work or
              rest with peace of mind.
            </p>

            <PrimaryCta
              href="/adult-day-care?from=adult-day-care"
              className="mt-6 w-full justify-center sm:w-auto"
            >
              Learn About Day Care
            </PrimaryCta>
          </motion.div>
        </ScrollAnimationWrapper>

        <motion.div variants={scrollAnimation}>
          <FAQList faqs={faqs} />
        </motion.div>
      </div>
    </div>
  )
}

export default AdultDayCareService
