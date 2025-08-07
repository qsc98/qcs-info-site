import { FaMoneyCheckAlt, FaMapMarkerAlt, FaClock, FaUserNurse, FaClipboardList, FaUtensils } from "react-icons/fa";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import getScrollAnimation from '../utils/getScrollAnimation'
import { useMemo } from 'react'

const PaymentLocationsSection = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), [])
  return (
    <ScrollAnimationWrapper>
      <motion.section
        variants={scrollAnimation}
        className="bg-white py-16 px-6 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Why Families Trust Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            variants={scrollAnimation}
            whileHover={{ scale: 1.05 }}
            className="rounded-lg bg-white shadow-md p-6 flex flex-col items-center"
          >
            <FaMoneyCheckAlt className="text-green-500 mb-3" size={40} />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Flexible Payment Options</h3>
            <p className="text-gray-600">
              We accept <strong>Medicaid</strong>, <strong>Private Pay</strong>, and <strong>Veteran Benefits</strong>.
            </p>
          </motion.div>

          <motion.div
            variants={scrollAnimation}
            whileHover={{ scale: 1.05 }}
            className="rounded-lg bg-white shadow-md p-6 flex flex-col items-center"
          >
            <FaMapMarkerAlt className="text-green-500 mb-3" size={40} />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Serving Our Community</h3>
            <p className="text-gray-600">
              Proudly supporting families in <strong>Louisville</strong>, <strong>Fairdale</strong>, and nearby areas.
            </p>
          </motion.div>

          <motion.div
            variants={scrollAnimation}
            whileHover={{ scale: 1.05 }}
            className="rounded-lg bg-white shadow-md p-6 flex flex-col items-center"
          >
            <FaClock className="text-green-500 mb-3" size={40} />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Convenient Hours</h3>
            <p className="text-gray-600">
              Open Monday–Saturday, 7 AM – 7 PM to fit your family's schedule.
            </p>
          </motion.div>

          <motion.div
            variants={scrollAnimation}
            whileHover={{ scale: 1.05 }}
            className="rounded-lg bg-white shadow-md p-6 flex flex-col items-center"
          >
            <FaUserNurse className="text-green-500 mb-3" size={40} />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Compassionate Staff</h3>
            <p className="text-gray-600">
              Every team member is trained, background-checked, and passionate about care.
            </p>
          </motion.div>

          <motion.div
            variants={scrollAnimation}
            whileHover={{ scale: 1.05 }}
            className="rounded-lg bg-white shadow-md p-6 flex flex-col items-center"
          >
            <FaClipboardList className="text-green-500 mb-3" size={40} />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Personalized Plans</h3>
            <p className="text-gray-600">
              Each client receives a care plan tailored to their needs and personality.
            </p>
          </motion.div>

          <motion.div
            variants={scrollAnimation}
            whileHover={{ scale: 1.05 }}
            className="rounded-lg bg-white shadow-md p-6 flex flex-col items-center"
          >
            <FaUtensils className="text-green-500 mb-3" size={40} />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Nutritious Meals</h3>
            <p className="text-gray-600">
              We serve three fresh meals daily — balanced, comforting, and healthy.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </ScrollAnimationWrapper>
  );
};

export default PaymentLocationsSection;
