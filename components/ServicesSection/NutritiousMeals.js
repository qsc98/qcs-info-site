// components/NutritiousMeals.js
import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import ScrollAnimationWrapper from '../Layout/ScrollAnimationWrapper'
import getScrollAnimation from '../../utils/getScrollAnimation'
import FAQList from '../FaqList'

const NutritiousMeals = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  const faqs = [
    {
      question: 'Who designs the meal plans?',
      answer:
        'Our menus are created in consultation with certified nutritionists and follow dietary guidelines for seniors and those with medical needs.',
    },
    {
      question: 'Can I request vegetarian or cultural-specific meals?',
      answer:
        'Yes, we accommodate dietary preferences and cultural requirements such as vegetarian, halal, or kosher meals with advance notice.',
    },
    {
      question: 'How often is the menu rotated?',
      answer: 'We rotate our menus on a bi-weekly basis to ensure variety and seasonal freshness.',
    },
    {
      question: 'Do you offer meals for those with food allergies?',
      answer:
        'Yes, we take food allergies seriously and work with clients to substitute or eliminate allergens where necessary.',
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
              Nutritious Meals
            </h3>
            <p className="text-md mb-14 leading-relaxed text-black-500">
              Our meal program is focused on delivering balanced, flavorful, and health-conscious
              meals that meet the unique dietary needs of seniors and individuals with medical
              conditions. We provide daily offerings that include breakfast, lunch, and snacks, with
              accommodations for diabetic, low-sodium, vegetarian, and allergy-sensitive diets.
              Meals are served fresh and designed in consultation with licensed nutritionists to
              ensure both taste and nutritional value.
            </p>

            <button className="bg-white hover:text-white-500 hover:shadow-green absolute bottom-6 left-1/2 -translate-x-1/2 transform rounded-full border border-green-500 px-4 py-2 font-medium capitalize tracking-wide text-green-500 shadow outline-none transition-all hover:bg-green-500">
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

export default NutritiousMeals
