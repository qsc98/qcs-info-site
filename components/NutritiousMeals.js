// components/NutritiousMeals.js
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import FAQList from "./FaqList";

const NutritiousMeals = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

const faqs = [
  {
    question: "Who designs the meal plans?",
    answer: "Our menus are created in consultation with certified nutritionists and follow dietary guidelines for seniors and those with medical needs."
  },
  {
    question: "Can I request vegetarian or cultural-specific meals?",
    answer: "Yes, we accommodate dietary preferences and cultural requirements such as vegetarian, halal, or kosher meals with advance notice."
  },
  {
    question: "How often is the menu rotated?",
    answer: "We rotate our menus on a bi-weekly basis to ensure variety and seasonal freshness."
  },
  {
    question: "Do you offer meals for those with food allergies?",
    answer: "Yes, we take food allergies seriously and work with clients to substitute or eliminate allergens where necessary."
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
              Nutritious Meals
            </h3>
            <p className="text-black-500 text-md leading-relaxed mb-4">
              Our meal program is focused on delivering balanced, flavorful, and health-conscious meals that meet the unique dietary needs of seniors and individuals with medical conditions. 
              We provide daily offerings that include breakfast, lunch, and snacks, with accommodations for diabetic, low-sodium, vegetarian, and allergy-sensitive diets. 
              Meals are served fresh and designed in consultation with licensed nutritionists to ensure both taste and nutritional value.
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

export default NutritiousMeals;
