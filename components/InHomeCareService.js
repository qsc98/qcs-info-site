import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import getScrollAnimation from '../utils/getScrollAnimation'
import FAQList from './FaqList'

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
    <div className="mx-auto my-12 max-w-screen-xl px-6 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <ScrollAnimationWrapper>
          <motion.div
            variants={scrollAnimation}
            className="bg-white relative min-h-[auto] rounded-xl border border-gray-100 p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <h3 className="text-emerald-800 mb-3 flex items-center gap-2 text-2xl font-bold">
              In-Home Care
            </h3>
            <p className="text-md mb-14 leading-relaxed text-black-500">
              Our in-home care service allows individuals to age in place comfortably while
              receiving the support they need for daily living. We offer a range of assistance
              including personal hygiene, mobility, light housekeeping, medication reminders, and
              emotional companionship. Each care plan is customized based on the client’s needs, and
              services are delivered by trained, vetted caregivers who prioritize dignity, respect,
              and safety.
            </p>

            <button className="bg-white hover:text-white hover:shadow-green absolute bottom-6 left-1/2 -translate-x-1/2 transform rounded-full border border-green-500 px-4 py-2 font-medium capitalize tracking-wide text-green-500 shadow outline-none transition-all hover:bg-green-500">
              Learn More
            </button>
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
