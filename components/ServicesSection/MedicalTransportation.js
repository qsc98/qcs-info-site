import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import ScrollAnimationWrapper from '../Layout/ScrollAnimationWrapper'
import getScrollAnimation from '../../utils/getScrollAnimation'
import FAQList from '../FaqList'
import PrimaryCta from '../misc/PrimaryCta'

const MedicalTransportation = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  const faqs = [
    {
      question: 'What destinations are covered under medical transportation?',
      answer:
        'We transport clients to doctor appointments, dialysis centers, pharmacies, therapy sessions, and other approved health-related destinations.',
    },
    {
      question: 'Is prior booking required?',
      answer:
        'Yes, we recommend booking at least 24 hours in advance to ensure timely scheduling and vehicle availability.',
    },
    {
      question: 'Are caregivers allowed to accompany the rider?',
      answer:
        'Yes, one caregiver or family member may accompany the rider at no additional charge.',
    },
    {
      question: 'What safety measures are in place?',
      answer:
        'All drivers are trained in senior care transport protocols, and our vehicles include wheelchair lifts and secure restraint systems.',
    },
  ]

  return (
    <div
      id="medical-transportation"
      className="mx-auto max-w-screen-xl px-6 sm:py-12 sm:px-8 lg:px-16"
    >
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <ScrollAnimationWrapper>
          <motion.div
            variants={scrollAnimation}
            className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <h3 className="mb-3 flex items-center gap-2 text-2xl font-bold">Medical Transportation</h3>
            <p className="text-md flex-1 leading-relaxed text-black-500">
              We offer dependable, non-emergency transportation tailored to individuals with
              mobility or health-related needs. Whether it's routine doctor visits, outpatient
              therapy, pharmacy pickups, or adult day center transportation, our drivers ensure
              punctual, safe, and courteous service. All vehicles are wheelchair accessible and
              operated by professionals trained to assist passengers with care and dignity.
            </p>

            <PrimaryCta
              href="/medical-transportation?from=medical-transportation"
              className="mt-6 w-full justify-center sm:w-auto"
            >
              View Transport Services
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

export default MedicalTransportation
