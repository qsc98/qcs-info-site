'use client'

// components/FAQList.js
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="rounded-lg border border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal/60"
      >
        <span className="font-medium text-black-700">{question}</span>
        <ChevronDownIcon
          className={`size-5 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      {isOpen && <div className="px-4 pb-4 text-sm text-black-600">{answer}</div>}
    </div>
  )
}

const FAQList = ({ faqs = [] }) => {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}

export default FAQList
