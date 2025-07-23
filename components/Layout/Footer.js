import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/Logo-Transparent.png";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16 px-6 sm:px-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Company Info */}
        <div className="text-left">
          <Image
            src={Logo}
            alt="Logo"
            width={75}
            height={75}
          />
          <p className="text-gray-600 text-sm leading-relaxed">
            We provide compassionate adult day care and in-home support services for families in
            Louisville, KY. Helping individuals live safely, socially, and independently.
          </p>
          <p className="text-gray-400 text-xs mt-6">
            &copy; {new Date().getFullYear()} Quality Senior Health Care. All rights reserved.
          </p>
        </div>

        {/* Middle: Learn More */}
        <div className="flex flex-col items-center text-center">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Explore Our Services</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              "Adult Day Health Care",
              "Medical Transportation",
              "Nutritious Meals",
              "In-Home Care Support",
              "Activities & Engagement",
              "Our Approach to Safety",
            ].map((item) => (
              <li key={item} className="hover:text-emerald-600 cursor-pointer transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Contact & Policies */}
        <div className="flex flex-col items-center text-center">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact & Policies</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+11234567890" className="hover:text-emerald-600">
                (502) 821-0283
              </a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:admin@qualityseniorcare.org" className="hover:text-emerald-600">
                admin@qualityseniorcare.org
              </a>
            </li>
            <li>
              <strong>Address:</strong>
              <p>
                811 Mount Holly Rd.<br />
                Fairdale, KY 40118
              </p>
            </li>
            <li className="pt-4 border-t border-gray-100">
              <a href="/privacy-policy" className="hover:text-emerald-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:text-emerald-600">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/disclaimer" className="hover:text-emerald-600">
                Disclaimer
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

