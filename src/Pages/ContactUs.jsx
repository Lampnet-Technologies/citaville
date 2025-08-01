import { FiInbox, FiPhone } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { LiaInstagram, LiaLinkedin, LiaTwitter } from "react-icons/lia";
import emailjs from "emailjs-com";
import Footer from "../Components/Footer"

/* const styles = {
  icons:
    "w-12 h-12 flex items-center justify-center transition-colors duration-700 rounded-full bg-orange-400 hover:bg-white hover:text-black text-white",
}; */

export const ContactUs = () => {
  return (
   <section className="w-full bg-gray-800">
  <div className="w-10/12 mx-auto py-20">
    <div>
      <img src="/course-details.svg" alt="course details" />
    </div>

    <div className="rounded-3xl px-6 py-6 w-full md:w-10/12 lg:w-8/12 mx-auto flex flex-wrap justify-center gap-4 md:-translate-y-1/2">
      {/* Phone */}
      <div className="bg-gradient-to-tr from-[#446e40] to-[#83D47B] flex px-4 py-3 rounded-md items-center gap-3 w-full sm:w-auto">
        <FiPhone className="text-white text-2xl" />
        <div className="text-white">
          <p>Call Us</p>
          <p>+2340000000</p>
        </div>
      </div>

      {/* Email */}
      <div className="bg-gradient-to-tr from-[#446e40] to-[#83D47B] flex px-4 py-3 rounded-md items-center gap-3 w-full sm:w-auto">
        <FiInbox className="text-white text-2xl" />
        <div className="text-white">
          <p>Email Us</p>
          <p>info.laptopcityonline@gmail.com</p>
        </div>
      </div>

      {/* Location */}
      <div className="bg-gradient-to-tr from-[#446e40] to-[#83D47B] flex px-4 py-3 rounded-md items-center gap-3 w-full sm:w-auto">
        <HiLocationMarker className="text-white text-2xl" />
        <div className="text-white">
          <p>Location</p>
          <p>Lagos, Nigeria</p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

import { useState, useRef } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const formStyles = {
  icons:
    "w-10 h-10 flex items-center justify-center transition-colors duration-700 rounded-full bg-orange-400 hover:bg-white hover:text-black text-white",
};

export const ContactForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

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
      emailjs
        .sendForm(
          "service_qkx572v", // the service ID
          "template_4etzm1h", // the template ID
          formRef.current,
          "S232evyeiRVGwFbXN" // my user ID
        )

      // Reset form or perform API call
      .then(() => {
          setSuccessMessage("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setTimeout(() => setSuccessMessage(""), 5000);
    })
        .catch((err) => {
          console.error("EmailJS error:", err);
          alert("An error has occurred. Please try again later.");
        });
    }
  };

  return (
    <div className="flex flex-col gap-10 md:flex-row w-10/12 mx-auto rounded-2xl overflow-hidden mb-10">
      {/* Left Side - Social (no forced height) */}
      <div className="text-white bg-black w-full md:w-1/2 flex h-72 flex-col space-y-5 p-10">
        <h2 className="font-semibold text-4xl">Still have any Questions</h2>
        <p className="text-xl text-white/80">
          Reach out to us, Let's clear your doubt
        </p>
        <div className="flex gap-4 mt-4">
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
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 bg-gray-800">
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-6 ">
            {/* Name Fields */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border border-white text-white placeholder-white/80 bg-transparent rounded-md"
                />
                {errors.firstName && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 border border-white text-white placeholder-white/80 bg-transparent rounded-md"
                />
                {errors.lastName && (
                  <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email and Phone */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-white text-white placeholder-white/80 bg-transparent rounded-md"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-white text-white placeholder-white/80 bg-transparent rounded-md"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
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

            {/* Success Message */}
            {successMessage && (
              <p className="text-green-400 text-sm mt-1">
                {successMessage}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="px-6 py-3 font-semibold rounded bg-gradient-to-tr from-[#446e40] to-[#83D47B] text-white"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const ContactUsPage = () => {
  return (
    <div className="bg-gray-800">
      <ContactUs />
      <ContactForm />
      <Footer />
    </div>
  );
};
