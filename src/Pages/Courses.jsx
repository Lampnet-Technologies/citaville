import { useState } from "react";
import { data } from "./data";
import { div } from "framer-motion/client";

const Courses = () => {
  const [activeTab, setActiveTab] = useState("Design & Digital Marketing");
  const [visibleCourse, setVisibleCourse] = useState(3);

  const coursesTab = [
    "Design & Digital Marketing",
    "Software Engineering",
    "Hardware Engineering",
  ];

  const handleTabClick = (course) => {
    setActiveTab(course);
    setVisibleCourse(3);
  };

  const cardToShow = data[activeTab];

  return (
    <section className="bg-gray-800 py-20">
      <div
        style={{
          backgroundImage:
            "url('/78d11d493c53fe21bf5a0b44ca2cae6c937206d7.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-32  w-10/12 mx-auto flex items-center justify-center"
      >
        <h2 className="font-bold text-white text-4xl py-20 text center ">
          Our Courses
        </h2>
      </div>

      <div>
        {/* Buttons */}
        <div  className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 w-11/12 mx-auto py-6">
          {coursesTab.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(tab)}
               className={`px-6 py-4 rounded-lg text-lg sm:text-2xl font-bold transition-colors duration-700 ${
              activeTab === tab
                ? "bg-white text-[#39B54A]"
                : " text-white hover:bg-white hover:text-[#39B54A]"
            }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-between items-center w-11/12 text-white mx-auto py-12">
          {cardToShow.map((course) => (
            <div className="space-y-4">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full"
              />
              <h3 className="uppercase font-semibold text-2xl sm:text-3xl">
                {course.title}
              </h3>
              <p className="text-justify">{course.description}</p>
              <button className="w-full bg-gradient-to-tr from-[#446e40] to-[#83D47B] text-white font-semibold px-6 py-2 rounded-xl">
                {course.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
