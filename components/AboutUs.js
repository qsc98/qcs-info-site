import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import AboutImage from "../public/assets/aboutus.jpg"; // Replace with your actual image

const AboutUs = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl px-6 sm:px-6 lg:px-16 mx-auto items-center"
      id="about"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:pt-12 pb-20 items-center">
        {/* Left: Card with Image + Button */}
        <ScrollAnimationWrapper className="flex flex-col items-center sm:items-start">
          <motion.div
            variants={scrollAnimation}
            className="card bg-base-100"
          >
            <span className="badge badge-neutral mb-4 p-2 mx-auto">About Us</span>
            <div className=" ">
              <Image
                src={AboutImage}
                alt="About our caregiving team"
                width={384}
                height={384}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </ScrollAnimationWrapper>

        {/* Right: Clean Text Content */}
        <ScrollAnimationWrapper>
          <motion.div
            variants={scrollAnimation}
            className="text-center sm:text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-success-content">
              Rooted in Care,<br /> Built for Community
            </h2>
            <p className="text-base-content text-lg mt-6 leading-relaxed">
              We’re a diverse team of caregivers, technologists, and local advocates committed to providing meaningful, trustworthy care for adults and seniors in Louisville.
              From social workers and church volunteers to IT professionals and family caregivers — we bring experience, heart, and innovation to everything we do.
            </p>
            <p className="text-base-content text-lg mt-4">
              Our team proudly partners with local religious organizations, community centers, and families to make compassionate care both personal and accessible.
            </p>
                        <div className="card-actions justify-center mt-6">
              <a className="btn btn-success btn-wide " href="">
                Meet Our Team
              </a>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default AboutUs;
