import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OurSchool = () => {
  const schoolItems = [
    {
      id: 1,
      title: "Business Analytics",
      description:
        "Our Business Analytics category embraces courses that cover a wide range of topics including ",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753984403/software_cloud_engineering_u08dtm.jpg",
      buttonText: "Learn more",
      path: "/courses?tab=Business%20Analytics",
    },
    {
      id: 2,
      title: "Data & Artificial Intelligence",
      description:
        "Data & Artificial Intelligence category comprises of various courses that help learners develop their data analysis and AI skills.",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753984402/hardwar_and_networking-training-1_zj0tk5.jpg",
      buttonText: "Learn more",
      path: "/courses?tab=Data%20&%20Artificial%20Intelligence",
    },
    {
      id: 3,
      title: "Digital & SoftSkills",
      description:
        "Our Digital & SoftSkills category contains various courses that help learners develop their digital skills and enhance their soft skills like communication, teamwork, coding, and leadership.",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753984403/design_digital_marketing_abpvd1.jpg",
      buttonText: "Learn more",
      path: "/courses?tab=Digital%20&%20SoftSkills",
    },
    {
      id: 4,
      title: "Cloud & IT Infrastructure",
      description:
        "Our Cloud & IT Infrastructure category includes various courses ranging from hardware engineering, networking, cloud computing, IT certifications and many more related courses.",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753983775/Data-Science_h6xmri.jpg",
      buttonText: "Learn more",
      path: "/courses?tab=Cloud%20&%20IT%20Infrastructure",
    },
     {
      id: 5,
      title: "Design & Creativity",
      description:
        "Our Design & Creativity category includes various Design and Graphics related courses that help learners develop their creative skills and enhance their design capabilities.",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979969/graphic-design_vz0jbu.png",
      buttonText: "Learn more",
      path: "/courses?tab=Design%20&%20Creativity",
    },
     {
      id: 6,
      title: "Kids Programs",
      description:
        "The Kids Programs category contains fun and educational courses designed specifically for children to introduce them to the world of technology and creativity.",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1757428720/Basic_Kids_Coding_Class_lcmkjz.png",
      buttonText: "Learn more",
      path: "/courses?tab=Kids%20Programs",
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

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8">
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
