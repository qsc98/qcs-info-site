import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from '../utils/getScrollAnimation';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto py-12"
      id="contact"
    >
      {/* Heading */}
      <ScrollAnimationWrapper>
        <motion.div
          variants={scrollAnimation}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="badge badge-neutral p-2 mb-10">Support</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold">Let’s Connect!</h2>
          <p className="text-base-content text-lg mt-4">
            Have questions or need support? Reach out and we’ll respond ASAP.
          </p>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* Info Cards */}
      <ScrollAnimationWrapper>
        <motion.div
            variants={scrollAnimation}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          <div className="card bg-base-100 shadow-lg p-6 text-center">
            <p className="text-lg font-semibold">Email</p>
            <p className="text-sm text-base-content mt-1">Need help? Drop us an email.</p>
            <a href="mailto:info@wellnesscoreadhc.com" className="link mt-2 block">admin@qualityseniorcare.org</a>
          </div>
          <div className="card bg-base-100 shadow-lg p-6 text-center">
            <p className="text-lg font-semibold">Visit us</p>
            <p className="text-sm text-base-content mt-1">Come by our office anytime.</p>
            <span className="mt-2 block text-sm">811 Mt Holly Rd, Fairdale, KY 40118</span>
          </div>
          <div className="card bg-base-100 shadow-lg p-6 text-center">
            <p className="text-lg font-semibold">Social Media</p>
            <p className="text-sm text-base-content mt-1">Stay updated & connect with us.</p>
            <div className="flex justify-center gap-4 mt-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="h-5 w-5 text-[#1877F2] hover:scale-110 transition-transform duration-200" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="h-5 w-5 text-[#E1306C] hover:scale-110 transition-transform duration-200" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="h-5 w-5 text-[#0A66C2] hover:scale-110 transition-transform duration-200" />
                </a>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* Contact Form Centered */}
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation} className="max-w-lg mx-auto">
            <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-center mb-6">Contact Us</h3>
            <ContactForm />
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default ContactSection;
