import React from "react";
import { FiInbox, FiPhoneCall } from "react-icons/fi";
import { motion } from "framer-motion";

const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Footer = () => {
  return (
    <footer className="bg-[#363636] text-white">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-start gap-10 py-8 px-4">
        {/* Logo */}
        <motion.div
          className="space-y-4"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={footerVariants}
        >
          <div>
            <h2 className="font-bold text-xl">Citaville</h2>
            <p>Your learning partner</p>
          </div>
          <div className="flex gap-3">
            <span className="w-5 h-5 rounded-full bg-white"></span>
            <span className="w-5 h-5 rounded-full bg-white"></span>
            <span className="w-5 h-5 rounded-full bg-white"></span>
            <span className="w-5 h-5 rounded-full bg-white"></span>
          </div>
        </motion.div>

        {/* Quick Access */}
        <motion.div
          className="space-y-3"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={footerVariants}
        >
          <h2 className="font-semibold">Quick Access</h2>
          <ul className="space-y-2">
            {["Home", "Courses", "Blog", "About", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href={item === "Home" ?  "/" : `/${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Courses */}
        <motion.div
          className="space-y-3"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={footerVariants}
        >
          <h2 className="font-semibold">Courses</h2>
          <ul className="space-y-2">
            <li>
              <a href="/courses/web-development" className="text-gray-300 hover:text-white transition duration-300">
                Web Development
              </a>
            </li>
            <li>
              <a href="/courses/data-science" className="text-gray-300 hover:text-white transition duration-300">
                Data Science
              </a>
            </li>
            <li>
              <a href="/courses/graphic-design" className="text-gray-300 hover:text-white transition duration-300">
                Graphic Design
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="space-y-3"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={footerVariants}
        >
          <h2 className="font-semibold">Contact</h2>
          <p className="flex items-center gap-2 text-gray-300">
            <FiPhoneCall /> <span>Phone Number</span>
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <FiInbox /> <span>Email</span>
          </p>
        </motion.div>
      </div>

      <motion.div
        className="w-full rounded-t-full bg-[#39B54A] py-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p className="text-sm">Copyright by Citaville {new Date().getFullYear()}</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
