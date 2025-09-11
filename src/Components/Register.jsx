import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import CongratsPopup from "./CongratsPopup";

const Register = ({ onClose, preselectedCourse }) => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
    selected_course: preselectedCourse || "", // pre-fill here
  });

  const [showCongrats, setShowCongrats] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Using sandboxdemo365@gmail.com emailJs for testing
    emailjs
      .sendForm(
        "service_n8u5fm8",
        "template_t5ypt5s",
        formRef.current,
        "UzV5sbxOOLKURj0-V"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setShowCongrats(true);
          setIsSubmitting(false);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setError("Something went wrong. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <>
      <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
        <div className="bg-gray-900 text-white p-6 rounded-xl shadow-2xl w-full max-w-xl relative border border-green-500">
          <button
            className="absolute top-2 right-3 text-white hover:text-green-500 text-2xl font-bold"
            onClick={onClose}
          >
            &times;
          </button>

          <h2 className="text-2xl font-bold mb-6 text-center text-green-400">
            Register
          </h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              className="bg-transparent border border-white text-white p-2 rounded col-span-1 placeholder-white focus:outline-none focus:border-green-400"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              className="bg-transparent border border-white text-white p-2 rounded col-span-1 placeholder-white focus:outline-none focus:border-green-400"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="Phone Number"
              className="bg-transparent border border-white text-white p-2 rounded col-span-1 placeholder-white focus:outline-none focus:border-green-400"
              value={formData.user_phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="message"
              placeholder="Your Message"
              className="bg-transparent border border-white text-white p-2 rounded col-span-1 placeholder-white focus:outline-none focus:border-green-400"
              value={formData.message}
              onChange={handleChange}
            />

            <select
              name="selected_course"
              className="bg-gray-800 text-white border border-white p-2 rounded col-span-2 focus:outline-none focus:border-green-400"
              value={formData.selected_course}
              onChange={handleChange}
              required
            >
              <option value="">Select Course</option>

              {/* Business & Leadership */}
              <option value="Business & Leadership">
                Business & Leadership
              </option>
              <option value="Project Management – PMP [Prince2] Fundamentals">
                Project Management – PMP [Prince2] Fundamentals
              </option>
              <option value="Branding and Promotions">
                Branding and Promotions
              </option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Social Media Marketing">
                Social Media Marketing
              </option>

              {/* Data & Artificial Intelligence */}
              <option value="Data Analysis Fundamentals: PowerBI & Excel">
                Data Analysis Fundamentals: PowerBI & Excel
              </option>
              <option value="Advanced Data Analysis: PowerBI & Excel">
                Advanced Data Analysis: PowerBI & Excel
              </option>
              <option value="Advanced Data Analysis: Python & SQL">
                Advanced Data Analysis: Python & SQL
              </option>
              <option value="Big Data Fundamentals">
                Big Data Fundamentals
              </option>
              <option value="AI & Machine Learning">
                AI & Machine Learning
              </option>
              <option value="Generative AI Fundamentals for Business">
                Generative AI Fundamentals for Business
              </option>
              <option value="Generative AI, Vibe Coding & ML Fundamentals">
                Generative AI, Vibe Coding & ML Fundamentals
              </option>
              <option value="AI & Automation">AI & Automation</option>

              {/* Software & Development */}
              <option value="Software Engineering with Python">
                Software Engineering with Python
              </option>
              <option value="Frontend Web Development">
                Frontend Web Development
              </option>
              <option value="Fullstack Web Development (ReactJS, NextJS, NodeJS)">
                Fullstack Web Development (ReactJS, NextJS, NodeJS)
              </option>
              <option value="Mobile App Development (Flutter or React Native)">
                Mobile App Development (Flutter or React Native)
              </option>

              {/* Cloud & IT Infrastructure */}
              <option value="Cloud Computing & Administration (AWS, Azure, GCP)">
                Cloud Computing & Administration (AWS, Azure, GCP)
              </option>
              <option value="DevOps Engineering">DevOps Engineering</option>
              <option value="Software Testing & QA Basics">
                Software Testing & QA Basics
              </option>
              <option value="Network Administration">
                Network Administration
              </option>
              <option value="Cybersecurity Fundamentals">
                Cybersecurity Fundamentals
              </option>
              <option value="Hardware Engineering Fundamentals">
                Hardware Engineering Fundamentals
              </option>
              <option value="Mobile Phone Engineering (Repair & Maintenance)">
                Mobile Phone Engineering (Repair & Maintenance)
              </option>
              <option value="CompTIA A+">CompTIA A+</option>

              {/* Design & Creativity */}
              <option value="Basic Graphics Design & Video Editing (Canva & Capcut)">
                Basic Graphics Design & Video Editing (Canva & Capcut)
              </option>
              <option value="Graphic Design & Video Editing (Photoshop, CorelDRAW, Premiere, After Effects)">
                Graphic Design & Video Editing (Photoshop, CorelDRAW, Premiere,
                After Effects)
              </option>
              <option value="Product Design (UI/UX)">
                Product Design (UI/UX)
              </option>

              {/* Kids Programs */}
              <option value="Basic Kids Coding Class">
                Basic Kids Coding Class
              </option>
              <option value="Basic Kids Design Class">
                Basic Kids Design Class
              </option>

              {/* Digital Literacy */}
              <option value="Desktop Publishing & Microsoft Office: Basic Computer Operation">
                Desktop Publishing & Microsoft Office: Basic Computer Operation
              </option>
            </select>

            <button
              type="submit"
              disabled={isSubmitting}
              className="col-span-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold transition disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Register Now"}
            </button>
          </form>

          {error && (
            <p className="mt-4 text-red-400 text-center text-sm">{error}</p>
          )}
        </div>
      </div>

      {showCongrats && (
        <CongratsPopup
          type="registration"
          course={formData.selected_course}
          onClose={() => {
            setShowCongrats(false);
            onClose();
          }}
        />
      )}
    </>
  );
};

export default Register;
