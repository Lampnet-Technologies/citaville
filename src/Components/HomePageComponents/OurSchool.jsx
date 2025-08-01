import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OurSchool = () => {
  const schoolItems = [
    {
      id: 1,
      title: "software & cloud engineering",
      description:
        "Build scalable applications and master cloud platforms like AWS and Azure to power the tech of tomorrow",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753984403/software_cloud_engineering_u08dtm.jpg",
      buttonText: "Learn more",
      path: "/courses?tab=Software%20&%20Cloud%20Engineering",
    },
    {
      id: 2,
      title: "networking & hardware",
      description:
        "Learn the essentials of computer networks, routers, and hardware systems that keep devices and data connected",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753984402/hardwar_and_networking-training-1_zj0tk5.jpg",
      buttonText: "Learn more",
      path: "/courses?tab=Networking%20&%20Hardware",
    },
    {
      id: 3,
      title: "design & digital marketing",
      description:
        "Explore visual design, branding, and digital strategies to create impactful campaigns that engage and convert",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753984403/design_digital_marketing_abpvd1.jpg",
      buttonText: "Learn more",
      path: "/courses?tab=Design%20&%20Digital%20Marketing",
    },
    {
      id: 4,
      title: "data science & ai",
      description:
        "Turn raw data into powerful insights with tools like Python, SQL, and machine learning—fuel smarter decisions",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753983775/Data-Science_h6xmri.jpg",
      buttonText: "Learn more",
      path: "/courses?tab=Data%20Science%20&%20AI",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="our-school" className="w-full bg-gray-800 py-12">
      <div className="w-11/12 mx-auto space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[#39B54A] capitalize font-extrabold text-4xl"
        >
          our schools
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {schoolItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="space-y-4 text-white w-full min-h-[400px]"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="uppercase font-semibold text-xl sm:text-2xl md:text-2xl lg:text-3xl break-words">
                {item.title}
              </h3>
              <p className="text-justify text-sm sm:text-base">
                {item.description}
              </p>
              <Link
                to={item.path}
                state={{ from: "ourschool" }}
                className="block w-full"
              >
                <button className="w-full bg-gradient-to-tr from-[#446e40] to-[#83D47B] text-white font-semibold px-6 py-2 rounded-xl">
                  {item.buttonText}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSchool;
