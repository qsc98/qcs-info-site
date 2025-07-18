// components/FAQList.js
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
      >
        <span className="font-medium text-black-800">{question}</span>
        <ChevronDownIcon
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-black-600 text-sm">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQList = ({ faqs = [] }) => {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;
