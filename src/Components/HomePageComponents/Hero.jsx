import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = ({ onRegisterClick }) => {
  return (
    <section className="bg-gray-800 w-full">
      <div className="w-11/12 mx-auto flex flex-col-reverse md:flex-row justify-between items-center p-6 md:p-8 gap-10 text-white">
        {/* Left Side */}
        <motion.div
          className="flex flex-col gap-4 w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Your learning path to endless growth
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Unlock your full potential with courses designed to guide you step
            by step. Whether you're just starting out or leveling up your
            skills, our learning paths help you grow with confidence, clarity,
            and purpose.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Link to="/courses">
              <button className="w-full sm:w-auto px-6 py-2 font-semibold rounded bg-white text-[#446e40] hover:bg-gray-100 transition">
                Explore courses
              </button>
            </Link>

            <button
              onClick={onRegisterClick}
              className="w-full sm:w-auto px-6 py-2 rounded bg-gradient-to-tr from-[#446e40] to-[#83D47B] hover:opacity-90 transition"
            >
              Register now
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/hero-image.svg"
            alt="hero image"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
