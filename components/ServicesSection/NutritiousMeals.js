// components/NutritiousMeals.js
import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import ScrollAnimationWrapper from '../Layout/ScrollAnimationWrapper'
import getScrollAnimation from '../../utils/getScrollAnimation'
import FAQList from '../FaqList'
import PrimaryCta from '../misc/PrimaryCta'

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
    <div id="nutritious-meals" className="mx-auto max-w-screen-xl px-6 sm:px-8 sm:py-12 lg:px-16">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <ScrollAnimationWrapper>
          <motion.div
            variants={scrollAnimation}
            className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <h3 className="mb-3 flex items-center gap-2 text-2xl font-bold">Nutritious Meals</h3>
            <p className="text-md flex-1 leading-relaxed text-black-500">
              Our meal program is focused on delivering balanced, flavorful, and health-conscious
              meals that meet the unique dietary needs of seniors and individuals with medical
              conditions. We provide daily offerings that include breakfast, lunch, and snacks, with
              accommodations for diabetic, low-sodium, vegetarian, and allergy-sensitive diets.
              Meals are served fresh and designed in consultation with licensed nutritionists to
              ensure both taste and nutritional value.
            </p>

            <PrimaryCta
              href="/nutritious-meals?from=nutritious-meals"
              className="mt-6 w-full justify-center sm:w-auto"
            >
              See What We Offer
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

export default NutritiousMeals
