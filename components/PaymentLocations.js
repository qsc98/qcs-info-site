import {
  FaMoneyCheckAlt,
  FaMapMarkerAlt,
  FaClock,
  FaUserNurse,
  FaClipboardList,
  FaUtensils,
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import getScrollAnimation from '../utils/getScrollAnimation'
import { useMemo } from 'react'

const PaymentLocationsSection = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])
  return (
    <ScrollAnimationWrapper>
      <motion.section variants={scrollAnimation} className="bg-white px-6 py-16 text-center">
        <h2 className="text-gray-800 mb-10 text-3xl font-bold">Why Families Trust Us</h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            variants={scrollAnimation}
            whileHover={{ scale: 1.05 }}
            className="bg-white flex flex-col items-center rounded-lg p-6 shadow-md"
          >
            <FaMapMarkerAlt className="mb-3 text-green-500" size={40} />
            <h3 className="text-gray-700 mb-2 text-xl font-semibold">Serving Our Community</h3>
            <p className="text-gray-600">
              Proudly supporting families in <strong>Louisville</strong>, <strong>Fairdale</strong>,
              and nearby areas.
            </p>
          </motion.div>

          <motion.div
            variants={scrollAnimation}
            whileHover={{ scale: 1.05 }}
            className="bg-white flex flex-col items-center rounded-lg p-6 shadow-md"
          >
            <FaClock className="mb-3 text-green-500" size={40} />
            <h3 className="text-gray-700 mb-2 text-xl font-semibold">Convenient Hours</h3>
            <p className="text-gray-600">
              Open Monday–Saturday, 7 AM – 7 PM to fit your family's schedule.
            </p>
          </motion.div>

          <motion.div
            variants={scrollAnimation}
            whileHover={{ scale: 1.05 }}
            className="bg-white flex flex-col items-center rounded-lg p-6 shadow-md"
          >
            <FaUserNurse className="mb-3 text-green-500" size={40} />
            <h3 className="text-gray-700 mb-2 text-xl font-semibold">Compassionate Staff</h3>
            <p className="text-gray-600">
              Every team member is trained, background-checked, and passionate about care.
            </p>
          </motion.div>

          <motion.div
            variants={scrollAnimation}
            whileHover={{ scale: 1.05 }}
            className="bg-white flex flex-col items-center rounded-lg p-6 shadow-md"
          >
            <FaClipboardList className="mb-3 text-green-500" size={40} />
            <h3 className="text-gray-700 mb-2 text-xl font-semibold">Personalized Plans</h3>
            <p className="text-gray-600">
              Each client receives a care plan tailored to their needs and personality.
            </p>
          </motion.div>

          <motion.div
            variants={scrollAnimation}
            whileHover={{ scale: 1.05 }}
            className="bg-white flex flex-col items-center rounded-lg p-6 shadow-md"
          >
            <FaMoneyCheckAlt className="mb-3 text-green-500" size={40} />
            <h3 className="text-gray-700 mb-2 text-xl font-semibold">Flexible Payment Options</h3>
            <p className="text-gray-600">
              We accept <strong>Medicaid</strong>, <strong>Private Pay</strong>, and{' '}
              <strong>Veteran Benefits</strong>.
            </p>
          </motion.div>

          <motion.div
            variants={scrollAnimation}
            whileHover={{ scale: 1.05 }}
            className="bg-white flex flex-col items-center rounded-lg p-6 shadow-md"
          >
            <FaUtensils className="mb-3 text-green-500" size={40} />
            <h3 className="text-gray-700 mb-2 text-xl font-semibold">Nutritious Meals</h3>
            <p className="text-gray-600">
              We serve three fresh meals daily — balanced, comforting, and healthy.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </ScrollAnimationWrapper>
  )
}

export default PaymentLocationsSection
