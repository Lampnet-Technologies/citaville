// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OurSchool = () => {
  const schoolItems = [
    {
      id: 1,
      title: "Business Analytics",
      description:
        "Our Business Analytics category embraces courses that cover a wide range of topics.",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753984403/software_cloud_engineering_u08dtm.jpg",
      buttonText: "Learn more",
      tab: "Business Analytics",
    },
    {
      id: 2,
      title: "Data & Artificial Intelligence",
      description:
        "Data & AI category helps learners develop their data analysis and AI skills.",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753984402/hardwar_and_networking-training-1_zj0tk5.jpg",
      buttonText: "Learn more",
      tab: "Data & Artificial Intelligence",
    },
    {
      id: 3,
      title: "Digital & SoftSkills",
      description:
        "Develop digital skills and enhance soft skills like communication, teamwork, and leadership.",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753984403/design_digital_marketing_abpvd1.jpg",
      buttonText: "Learn more",
      tab: "Digital & Soft Skills",
    },
    {
      id: 4,
      title: "Cloud & IT Infrastructure",
      description:
        "Courses ranging from hardware, networking, cloud computing, and IT certifications.",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753983775/Data-Science_h6xmri.jpg",
      buttonText: "Learn more",
      tab: "Cloud & IT Infrastructure",
    },
    {
      id: 5,
      title: "Design & Creativity",
      description:
        "Courses that help learners develop their creative skills and design capabilities.",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979969/graphic-design_vz0jbu.png",
      buttonText: "Learn more",
      tab: "Design & Creativity",
    },
    {
      id: 6,
      title: "Kids Programs",
      description:
        "Fun and educational courses designed specifically for children.",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1757428720/Basic_Kids_Coding_Class_lcmkjz.png",
      buttonText: "Learn more",
      tab: "Kids Programs",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section id="our-school" className="w-full bg-gray-800 py-12">
      <div className="w-11/12 mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[#39B54A] capitalize font-extrabold text-4xl sm:text-5xl"
        >
          Our Schools
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {schoolItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex flex-col justify-between w-full min-h-[400px] bg-gray-900 rounded-xl shadow-lg p-4 hover:scale-105 transition-transform duration-300 text-white"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <div className="space-y-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
                />
                <h3 className="uppercase font-semibold text-xl sm:text-xl md:text-2xl break-words">
                  {item.title}
                </h3>
                <p className="text-justify text-sm sm:text-base md:text-lg">
                  {item.description}
                </p>
              </div>

              <Link
                to={`/courses?tab=${encodeURIComponent(item.tab)}`}
                state={{ from: "ourschool" }}
                className="block w-full mt-4"
              >
                <button className="w-full bg-gradient-to-tr from-[#446e40] to-[#83D47B] text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition">
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
