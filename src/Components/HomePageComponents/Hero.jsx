import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-[#363636] w-full">
      <div className="w-10/12 mx-auto flex flex-col-reverse md:flex-row justify-between items-center py-10 px-4 md:px-8 text-white gap-8">
        {/* Left Side - Text Content */}
        <motion.div
          className="flex flex-col gap-6 w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="font-bold text-3xl md:text-5xl leading-snug"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Your learning path to endless growth
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Your learning path to endless growth
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <button className="px-6 py-3 font-semibold rounded bg-white text-[#446e40] w-full sm:w-auto">
              Explore courses
            </button>
            <button className="px-6 py-3 rounded bg-gradient-to-tr from-[#446e40] to-[#83D47B] w-full sm:w-auto">
              Register now
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side - Hero Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/hero-image.svg"
            alt="hero image"
            className="w-full max-w-md mx-auto md:max-w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
