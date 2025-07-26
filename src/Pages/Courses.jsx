import { useState } from "react";
import { Link } from "react-router-dom";

const data = {
  "Design & Digital Marketing": [
    {
      id: 1,
      slug: "product-design",
      title: "Product Desgin",
      description:
        "The world of design and digital marketing is ever-evolving, and our courses are designed to keep you at the forefront of this dynamic field. From mastering the principles of product design to understanding the intricacies of digital marketing strategies, we provide a comprehensive learning experience that equips you with the skills needed to thrive in today's competitive landscape.",
      buttonText: "Learn more",
      image: "/digital-marketing.svg",
    },
    {
      id: 2,
      slug: "digital-marketing",
      title: "Digital Marketing",
      description:
        "The digital marketing landscape is constantly changing, and our courses are designed to keep you ahead of the curve. From mastering SEO techniques to understanding social media strategies, we provide a comprehensive learning experience that equips you with the skills needed to thrive in today's competitive digital world.",
      buttonText: "Learn more",
      image: "/digital-marketing.svg",
    },
    {
      id: 3,
      slug: "product-design-3",
      title: "Product Desgin",
      description:
        "The world of design and digital marketing is ever-evolving, and our courses are designed to keep you at the forefront of this dynamic field. From mastering the principles of product design to understanding the intricacies of digital marketing strategies, we provide a comprehensive learning experience that equips you with the skills needed to thrive in today's competitive landscape.",
      buttonText: "Learn more",
      image: "/digital-marketing.svg",
    },
    {
      id: 4,
      slug: "product-design-4",
      title: "Product Desgin",
      description:
        "The world of design and digital marketing is ever-evolving, and our courses are designed to keep you at the forefront of this dynamic field. From mastering the principles of product design to understanding the intricacies of digital marketing strategies, we provide a comprehensive learning experience that equips you with the skills needed to thrive in today's competitive landscape.",
      buttonText: "Learn more",
      image: "/digital-marketing.svg",
    },
    {
      id: 5,
      slug: "product-design-5",
      title: "Product Desgin",
      description:
        "The world of design and digital marketing is ever-evolving, and our courses are designed to keep you at the forefront of this dynamic field. From mastering the principles of product design to understanding the intricacies of digital marketing strategies, we provide a comprehensive learning experience that equips you with the skills needed to thrive in today's competitive landscape.",
      buttonText: "Learn more",
      image: "/digital-marketing.svg",
    },
    {
      id: 6,
      slug: "product-design-6",
      title: "Product Desgin",
      description:
        "The world of design and digital marketing is ever-evolving, and our courses are designed to keep you at the forefront of this dynamic field. From mastering the principles of product design to understanding the intricacies of digital marketing strategies, we provide a comprehensive learning experience that equips you with the skills needed to thrive in today's competitive landscape.",
      buttonText: "Learn more",
      image: "/digital-marketing.svg",
    },
    {
      id: 7,
      slug: "product-design-7",
      title: "Product Desgin",
      description:
        "The world of design and digital marketing is ever-evolving, and our courses are designed to keep you at the forefront of this dynamic field. From mastering the principles of product design to understanding the intricacies of digital marketing strategies, we provide a comprehensive learning experience that equips you with the skills needed to thrive in today's competitive landscape.",
      buttonText: "Learn more",
      image: "/digital-marketing.svg",
    },
  ],
  "Software Engineering": [
    {
      id: 1,
      slug: "software-engineering-1",
      title: "Software Engineering",
      description:
        "Tech is the future, and software engineering is at the heart of it. Our courses are designed to provide you with a solid foundation in software development, from coding languages to software architecture. Whether you're a beginner or looking to enhance your skills, our curriculum is tailored to meet your needs and help you succeed in the tech industry.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
    {
      id: 2,
      slug: "software-engineering-2",
      title: "Software Engineering",
      description:
        "Tech is the future, and software engineering is at the heart of it. Our courses are designed to provide you with a solid foundation in software development, from coding languages to software architecture. Whether you're a beginner or looking to enhance your skills, our curriculum is tailored to meet your needs and help you succeed in the tech industry.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
    {
      id: 3,
      slug: "software-engineering-3",
      title: "Software Engineering",
      description:
        "Tech is the future, and software engineering is at the heart of it. Our courses are designed to provide you with a solid foundation in software development, from coding languages to software architecture. Whether you're a beginner or looking to enhance your skills, our curriculum is tailored to meet your needs and help you succeed in the tech industry.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
    {
      id: 4,
      slug: "software-engineering-4",
      title: "Software Engineering",
      description:
        "Tech is the future, and software engineering is at the heart of it. Our courses are designed to provide you with a solid foundation in software development, from coding languages to software architecture. Whether you're a beginner or looking to enhance your skills, our curriculum is tailored to meet your needs and help you succeed in the tech industry.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
    {
      id: 5,
      slug: "software-engineering-5",
      title: "Software Engineering",
      description:
        "Tech is the future, and software engineering is at the heart of it. Our courses are designed to provide you with a solid foundation in software development, from coding languages to software architecture. Whether you're a beginner or looking to enhance your skills, our curriculum is tailored to meet your needs and help you succeed in the tech industry.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
    {
      id: 6,
      slug: "software-engineering-6",
      title: "Software Engineering",
      description:
        "Tech is the future, and software engineering is at the heart of it. Our courses are designed to provide you with a solid foundation in software development, from coding languages to software architecture. Whether you're a beginner or looking to enhance your skills, our curriculum is tailored to meet your needs and help you succeed in the tech industry.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
  ],

  "Hardware Engineering": [
    {
      id: 1,
      slug: "hardware-engineering-1",
      title: "Hardware Engineering",
      description:
        "The backbone of technology lies in hardware engineering. Our courses are designed to provide you with a deep understanding of hardware systems, from circuit design to embedded systems. Whether you're looking to build your own devices or enhance your knowledge in hardware development, our curriculum is tailored to equip you with the skills needed to excel in this field.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
    {
      id: 2,
      slug: "hardware-engineering-2",
      title: "Hardware Engineering",
      description:
        "The backbone of technology lies in hardware engineering. Our courses are designed to provide you with a deep understanding of hardware systems, from circuit design to embedded systems. Whether you're looking to build your own devices or enhance your knowledge in hardware development, our curriculum is tailored to equip you with the skills needed to excel in this field.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
    {
      id: 3,
      slug: "hardware-engineering-3",
      title: "Hardware Engineering",
      description:
        "The backbone of technology lies in hardware engineering. Our courses are designed to provide you with a deep understanding of hardware systems, from circuit design to embedded systems. Whether you're looking to build your own devices or enhance your knowledge in hardware development, our curriculum is tailored to equip you with the skills needed to excel in this field.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
    {
      id: 4,
      slug: "hardware-engineering-4",      
      title: "Hardware Engineering",
      description:
        "The backbone of technology lies in hardware engineering. Our courses are designed to provide you with a deep understanding of hardware systems, from circuit design to embedded systems. Whether you're looking to build your own devices or enhance your knowledge in hardware development, our curriculum is tailored to equip you with the skills needed to excel in this field.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
    {
      id: 5,
      slug: "hardware-engineering-5",
      title: "Hardware Engineering",
      description:
        "The backbone of technology lies in hardware engineering. Our courses are designed to provide you with a deep understanding of hardware systems, from circuit design to embedded systems. Whether you're looking to build your own devices or enhance your knowledge in hardware development, our curriculum is tailored to equip you with the skills needed to excel in this field.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
    {
      id: 6,
      slug: "hardware-engineering-6",
      title: "Hardware Engineering",
      description:
        "The backbone of technology lies in hardware engineering. Our courses are designed to provide you with a deep understanding of hardware systems, from circuit design to embedded systems. Whether you're looking to build your own devices or enhance your knowledge in hardware development, our curriculum is tailored to equip you with the skills needed to excel in this field.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
  ],
};

const Courses = () => {
  const [activeTab, setActiveTab] = useState("Design & Digital Marketing");

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
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 w-11/12 mx-auto py-6">
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
              <Link to={`/CourseDetail/${course.slug}`}>
                <button className="w-full bg-gradient-to-tr from-[#446e40] to-[#83D47B] text-white font-semibold px-6 py-2 rounded-xl">
                  {course.buttonText}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
