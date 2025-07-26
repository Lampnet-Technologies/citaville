import React from "react";
import { motion } from "framer-motion";

const OurSchool = () => {
  const schoolItems = [
    {
      id: 1,
      title: "software & cloud engineering",
      description:
        "Your learning path to endless growth our learning path to endless growth ",
      image: "/our-school-01.svg",
      buttonText: "Learn more",
      path: "",
    },
    {
      id: 2,
      title: "networking hardware",
      description:
        "Your learning path to endless growth our learning path to endless growth ",
      image: "/our-school-02.svg",
      buttonText: "Learn more",
      path: "",
    },
    {
      id: 3,
      title: "design & digital marketing",
      description:
        "Your learning path to endless growth our learning path to endless growth ",
      image: "/our-school-03.svg",
      buttonText: "Learn more",
      path: "",
    },
    {
      id: 4,
      title: "data science",
      description:
        "Your learning path to endless growth our learning path to endless growth ",
      image: "/our-school-04.svg",
      buttonText: "Learn more",
      path: "",
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
    <section className="w-full bg-[#363636] py-12">
      <div className="w-10/12 mx-auto space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[#39B54A] capitalize font-extrabold text-4xl"
        >
          our schools
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-between items-center">
          {schoolItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="space-y-4 text-white w-full"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full"
              />
              <h3 className="uppercase font-semibold text-3xl">{item.title}</h3>
              <p className="text-justify">{item.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-tr from-[#446e40] to-[#83D47B] text-white font-semibold px-6 py-2 rounded-xl"
              >
                {item.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSchool;
