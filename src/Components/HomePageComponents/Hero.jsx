import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="bg-gray-800 w-full">
      <div className="w-10/12 mx-auto flex justify-between items-center p-8 text-white">
        {/* The Left side */}
        <motion.div
          className="flex flex-col gap-4 w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="font-bold text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Your learning path to endless growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Unlock your full potential with courses designed to guide you step by step. Whether you're just starting out or leveling up your skills, our learning paths help you grow with confidence, clarity, and purpose
          </motion.p>
          <motion.div
            className="space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Link to="/courses">
            <button className="px-6 py-2 font-semibold rounded bg-gradient-to-tr from-[#fff] to-[#fff] text-[#446e40]">
             Explore courses
            </button>
            </Link>
            <button className="px-6 py-2 rounded bg-gradient-to-tr from-[#446e40] to-[#83D47B]">
              Register now
            </button>
          </motion.div>
        </motion.div>

        {/* The Right side */}
        <motion.div
          className="w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/hero-image.svg" alt="hero image" className="w-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
