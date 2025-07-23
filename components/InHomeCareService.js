import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import FAQList from "./FaqList";

const InHomeCare = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    const faqs = [
    {
        question: "What types of tasks can a caregiver assist with?",
        answer: "Caregivers can help with bathing, dressing, grooming, light cleaning, mobility assistance, medication reminders, and companionship."
    },
    {
        question: "Are caregivers trained or certified?",
        answer: "Yes, all our caregivers go through background checks and are trained or certified in elder care and first aid."
    },
    {
        question: "Can care be provided overnight or 24/7?",
        answer: "Yes, we offer flexible care options including hourly, overnight, and live-in arrangements."
    },
    {
        question: "How do you match a caregiver to a client?",
        answer: "We assess the client’s needs and personality, then assign a caregiver best suited for their physical and emotional well-being."
    },
    ];


  return (
    <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <ScrollAnimationWrapper>
          <motion.div
            variants={scrollAnimation}
            className="bg-white shadow-lg rounded-xl p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-emerald-800 mb-3 flex items-center gap-2">
              In-Home Care
            </h3>
            <p className="text-black-500 text-md leading-relaxed">
              Our in-home care service allows individuals to age in place comfortably while receiving the support they need for daily living. 
              We offer a range of assistance including personal hygiene, mobility, light housekeeping, medication reminders, and emotional companionship. 
              Each care plan is customized based on the client’s needs, and services are delivered by trained, vetted caregivers who prioritize dignity, respect, and safety.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation}>
            <FAQList faqs={faqs} />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default InHomeCare;
