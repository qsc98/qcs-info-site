import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import ScrollAnimationWrapper from '../Layout/ScrollAnimationWrapper'
import getScrollAnimation from '../../utils/getScrollAnimation'
import FAQList from '../FaqList'
import Link from 'next/link'

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
      className="mx-auto max-w-screen-xl px-6 py-12 sm:px-8 lg:px-16"
    >
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <ScrollAnimationWrapper>
          <motion.div
            variants={scrollAnimation}
            className="relative min-h-[auto] rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <h3 className="mb-3 flex items-center gap-2 text-2xl font-bold">
              Medical Transportation
            </h3>
            <p className="text-md mb-14 leading-relaxed text-black-500">
              We offer dependable, non-emergency transportation tailored to individuals with
              mobility or health-related needs. Whether it's routine doctor visits, outpatient
              therapy, pharmacy pickups, or adult day center transportation, our drivers ensure
              punctual, safe, and courteous service. All vehicles are wheelchair accessible and
              operated by professionals trained to assist passengers with care and dignity.
            </p>
            <Link
              href={{
                pathname: '/medical-transportation',
                query: { from: 'medical-transportation' },
              }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 transform rounded-xl bg-[#4c6d8f] px-8 py-3 font-semibold text-white shadow-[0_8px_20px_rgba(15,34,71,0.25)] transition hover:bg-[#3f5d7b] focus:outline-none focus:ring-2 focus:ring-[#4c6d8f]/50"
            >
              View Transport Services
            </Link>
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
