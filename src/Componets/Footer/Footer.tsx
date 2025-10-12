"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Social Links */}
        <div className="flex gap-5 text-lg">
          <a
            href="https://github.com/Sakshi-Bhawsar"

            target="_blank"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sakshi-bhawsar/"
            target="_blank"

            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sakshi5bhawsar@gmail.com"
            className="hover:text-red-400 transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/its_sakshi_bhawsar_/"
            target="_blank"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Sakshi Bhawsar. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
