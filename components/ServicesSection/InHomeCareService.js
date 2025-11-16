import { motion } from 'framer-motion'
import React, { useMemo } from 'react'
import getScrollAnimation from '../../utils/getScrollAnimation'
import FAQList from '../FaqList'
import ScrollAnimationWrapper from '../Layout/ScrollAnimationWrapper'
import PrimaryCta from '../misc/PrimaryCta'

const InHomeCare = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])
  const faqs = [
    {
      question: 'What types of tasks can a caregiver assist with?',
      answer:
        'Caregivers can help with bathing, dressing, grooming, light cleaning, mobility assistance, medication reminders, and companionship.',
    },
    {
      question: 'Are caregivers trained or certified?',
      answer:
        'Yes, all our caregivers go through background checks and are trained or certified in elder care and first aid.',
    },
    {
      question: 'Can care be provided overnight or 24/7?',
      answer:
        'Yes, we offer flexible care options including hourly, overnight, and live-in arrangements.',
    },
    {
      question: 'How do you match a caregiver to a client?',
      answer:
        'We assess the client’s needs and personality, then assign a caregiver best suited for their physical and emotional well-being.',
    },
  ]

  return (
    <div id="in-home-care" className="mx-auto max-w-screen-xl px-6 sm:px-8 sm:py-12 lg:px-16">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <ScrollAnimationWrapper>
          <motion.div
            variants={scrollAnimation}
            className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <h3 className="mb-3 flex items-center gap-2 text-2xl font-bold">In-Home Care</h3>
            <p className="text-md flex-1 leading-relaxed text-black-500">
              Our in-home care service allows individuals to age in place comfortably while
              receiving the support they need for daily living. We offer a range of assistance
              including personal hygiene, mobility, light housekeeping, medication reminders, and
              emotional companionship. Each care plan is customized based on the client’s needs, and
              services are delivered by trained, vetted caregivers who prioritize dignity, respect,
              and safety.
            </p>

            <PrimaryCta
              href="/in-home-care?from=in-home-care"
              className="mt-6 w-full justify-center sm:w-auto"
            >
              Explore In-Home Care
            </PrimaryCta>
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation}>
            <FAQList faqs={faqs} />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  )
}

export default InHomeCare
