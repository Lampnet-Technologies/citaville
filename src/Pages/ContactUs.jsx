import { FiInbox, FiPhone } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { LiaInstagram, LiaLinkedin, LiaTwitter } from "react-icons/lia";

const styles = {
  icons:
    "w-12 h-12 flex items-center justify-center transition-colors duration-700 rounded-full bg-orange-400 hover:bg-white hover:text-black text-white",
};

export const ContactUs = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        type: "spring",
      },
    }),
  };

  return (
    <section className="w-full bg-[#363636]">
      <div className="w-10/12  mx-auto py-20">
        {/* Top Image */}
        <div className="flex justify-center">
          <img
            src="/course-details.svg"
            alt="course details"
            className="w-full"
          />
        </div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl px-10 py-5 w-full md:w-8/12 mx-auto grid grid-cols-2 md:grid-cols-3  justify-between items-center md:-translate-y-1/2  gap-4"
        >
          {[
            {
              icon: <FiPhone className="text-white text-2xl" />,
              title: "Call Us",
              value: "+2340000000",
            },
            {
              icon: <FiInbox className="text-white text-2xl" />,
              title: "Email Us",
              value: "your@email.com",
            },
            {
              icon: <HiLocationMarker className="text-white text-2xl" />,
              title: "Location",
              value: "Lagos, Nigeria",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-gradient-to-tr from-[#446e40] to-[#83D47B] flex p-2 md:px-4 md:py-3 rounded-md items-center gap-3 w-full md:w-auto"
            >
              {item.icon}
              <div className="text-white text-sm">
                <p className="font-medium">{item.title}</p>
                <p className="text-white/90">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
import { useState } from "react";

const formStyles = {
  icons:
    "w-12 flex items-center justify-center transition-colors duration-700 h-12 rounded-full bg-orange-400 hover:bg-white hover:text-black text-white",
};

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully:", formData);
      // Reset form or perform API call
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      className="flex flex-col gap-10 md:flex-row w-11/12 max-w-6xl mx-auto rounded-2xl overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Left Side */}
      <motion.div
        variants={fadeInUp}
        custom={1}
        className="text-white bg-black w-full md:w-1/2 flex flex-col justify-center h-72 space-y-5 p-6 sm:p-8 md:p-10"
      >
        <h2 className="font-semibold text-3xl sm:text-4xl leading-tight">
          Still have any Questions
        </h2>
        <p className="text-lg sm:text-xl text-white/80">
          Reach out to us, Let's clear your doubt
        </p>
        <div className="flex gap-4 mt-2">
          <span className={formStyles.icons}>
            <LiaLinkedin />
          </span>
          <span className={formStyles.icons}>
            <LiaInstagram />
          </span>
          <span className={formStyles.icons}>
            <LiaTwitter />
          </span>
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        variants={fadeInUp}
        custom={2}
        className="w-full md:w-1/2 bg-[#363636] p-6 sm:p-8"
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-6">
            {/* Name Fields */}
            <div className="flex flex-col md:flex-row gap-4">
              {["firstName", "lastName"].map((field, i) => (
                <div className="flex-1" key={field}>
                  <input
                    type="text"
                    name={field}
                    placeholder={
                      field === "firstName" ? "First Name" : "Last Name"
                    }
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full p-3 border border-white text-white placeholder-white/80 bg-transparent rounded-md"
                  />
                  {errors[field] && (
                    <p className="text-red-400 text-sm mt-1">{errors[field]}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Email and Phone */}
            <div className="flex flex-col md:flex-row gap-4">
              {["email", "phone"].map((field) => (
                <div className="flex-1" key={field}>
                  <input
                    type={field === "email" ? "email" : "tel"}
                    name={field}
                    placeholder={
                      field === "email" ? "Your Email" : "Phone Number"
                    }
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full p-3 border border-white text-white placeholder-white/80 bg-transparent rounded-md"
                  />
                  {errors[field] && (
                    <p className="text-red-400 text-sm mt-1">{errors[field]}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-white text-white placeholder-white/80 bg-transparent rounded-md h-32"
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.03 }}
              className="px-6 py-3 font-semibold rounded bg-gradient-to-tr from-[#446e40] to-[#83D47B] text-white"
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "What is UX design?",
    answer:
      "We offer a full refund within 14 days of purchase if you are not satisfied with our service.",
  },
  {
    question: "What are the key principles of UX design?",
    answer:
      "Yes, we offer 24/7 customer support via email, chat, and phone. Our team is always ready to help.",
  },
  {
    question: "What is the difference between UX and UI design?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time through your dashboard.",
  },
];

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="w-full px-4 py-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#363636] border border-gray-600 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between px-4 py-4 text-left text-white font-semibold focus:outline-none"
            >
              {faq.question}
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiChevronDown className="text-xl" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-4 pb-4 text-white/90 text-sm"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export const ContactUsPage = () => {
  return (
    <div className="bg-[#363636]">
      <ContactUs />
      <ContactForm />
      <Accordion />
    </div>
  );
};
