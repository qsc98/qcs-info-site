// components/AdultDayCare.js
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import FAQList from "./FaqList";

const AdultDayCareService = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    const faqs = [
    {
        question: "What activities are included in adult day care?",
        answer: "We offer physical exercise, social interaction, games, art therapy, and mental stimulation activities tailored to individual abilities."
    },
    {
        question: "Is medical support available on-site?",
        answer: "Yes, basic health services such as medication management, vitals monitoring, and emergency assistance are provided by trained staff."
    },
    {
        question: "Do you provide transportation to the facility?",
        answer: "Yes, we offer round-trip transportation services for eligible clients within our coverage area."
    },
    {
        question: "Can family members visit during the day?",
        answer: "Absolutely! Families are encouraged to visit and participate in select activities with their loved ones."
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
            Adult Day Care Services
            </h3>
            <p className="text-black-500 text-md leading-relaxed mb-4">
                Our adult day care program is designed to support older adults in a safe, structured, and enriching environment during daytime hours. 
                We provide supervised care with personalized activities such as memory games, light physical exercise, social interaction, and creative engagement. 
                Whether for respite, companionship, or daytime supervision, this service helps seniors thrive while caregivers take time to work or rest with peace of mind.
            </p>
            <button className="float-right font-medium tracking-wide py-4 px-5 sm:px-8 border border-green-500 text-green-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-green-500 hover:text-white-500 transition-all hover:shadow-green ">
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
  );
};

export default AdultDayCareService;
