import { u } from "framer-motion/client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
      slug: "graphic-design",
      title: "Graphic Design",
      description:
        "Graphic design is an essential skill in today's visual-driven world. Our courses are designed to provide you with a solid foundation in graphic design principles, from typography to color theory. Whether you're a beginner or looking to enhance your skills, our curriculum is tailored to meet your needs and help you succeed in the creative industry.",
      buttonText: "Learn more",
      image: "/digital-marketing.svg",
    },
    /*  {
      id: 4,
      slug: "product-design-4",
      title: "Product Desgin",
      description:
        "Text goes here...",
      buttonText: "Learn more",
      image: "/digital-marketing.svg",
    },
    {
      id: 5,
      slug: "product-design-5",
      title: "Product Desgin",
      description:
        "Text goes here...",
      buttonText: "Learn more",
      image: "/digital-marketing.svg",
    },
    {
      id: 6,
      slug: "product-design-6",
      title: "Product Desgin",
      description:
        "Text goes here...",
      buttonText: "Learn more",
      image: "/digital-marketing.svg",
    },
    {
      id: 7,
      slug: "product-design-7",
      title: "Product Desgin",
      description:
        "Text goes here...",
      buttonText: "Learn more",
      image: "/digital-marketing.svg",
    }, */
  ],

  "Software & Cloud Engineering": [
    {
      id: 1,
      slug: "software-engineering",
      title: "Software Engineering",
      description:
        "Tech is the future, and software engineering is at the heart of it. Our courses are designed to provide you with a solid foundation in software development, from coding languages to software architecture. Whether you're a beginner or looking to enhance your skills, our curriculum is tailored to meet your needs and help you succeed in the tech industry.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
    {
      id: 2,
      slug: "web-development",
      title: "Web Development",
      description:
        "The web is the backbone of modern technology, and our web development courses are designed to equip you with the skills needed to build dynamic and responsive websites. From front-end design to back-end development, we provide a comprehensive learning experience that prepares you for a successful career in web development.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
    {
      id: 3,
      slug: "cloud-computing",
      title: "Cloud Computing",
      description:
        "Harness the power of the cloud with our cloud computing courses. Learn how to deploy, manage, and scale applications in cloud environments like AWS and Azure. Our curriculum is designed to provide you with the skills needed to excel in the rapidly growing field of cloud computing.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
    {
      id: 4,
      slug: "mobile-app-development",
      title: "Mobile App Development",
      description:
        "As mobile devices continue to dominate the tech landscape, our mobile app development courses are designed to equip you with the skills needed to create innovative and user-friendly applications. From iOS to Android development, we provide a comprehensive learning experience that prepares you for a successful career in mobile app development.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
    /*  {
      id: 5,
      slug: "software-engineering-5",
      title: "Software Engineering",
      description:
        "Text goes here...",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
    {
      id: 6,
      slug: "software-engineering-6",
      title: "Software Engineering",
      description:
        "Text goes here...",
      buttonText: "Learn more",
      image: "/product-design.svg",
    }, */
  ],

  "Networking & Hardware": [
    {
      id: 1,
      slug: "hardware-engineering",
      title: "Hardware Engineering",
      description:
        "The backbone of technology lies in hardware engineering. Our courses are designed to provide you with a deep understanding of hardware systems, from circuit design to embedded systems. Whether you're looking to build your own devices or enhance your knowledge in hardware development, our curriculum is tailored to equip you with the skills needed to excel in this field.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
    {
      id: 2,
      slug: "network-administration",
      title: "Network Administration",
      description:
        "Staying connected is crucial in today's digital world, and our network administration courses are designed to equip you with the skills needed to manage and maintain computer networks. From configuring routers to troubleshooting network issues, we provide a comprehensive learning experience that prepares you for a successful career in network administration.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
    {
      id: 3,
      slug: "cybersecurity",
      title: "Cybersecurity",
      description:
        "Join the fight against cyber threats with our cybersecurity courses. Learn how to protect systems, networks, and data from cyber attacks. Our curriculum is designed to provide you with the skills needed to excel in the rapidly growing field of cybersecurity.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
  ],

  "Data Science & AI": [
    {
      id: 1,
      slug: "data-analysis",
      title: "Data Analysis",
      description:
        "In a data-driven world, the ability to analyze and interpret data is crucial. Our data analysis courses are designed to provide you with the skills needed to turn raw data into actionable insights. From statistical analysis to data visualization techniques, we equip you with the tools to excel in this rapidly growing field.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
    {
      id: 2,
      slug: "machine-learning",
      title: "Machine Learning",
      description:
        "Power your career with our machine learning courses. Learn how to build intelligent systems that can learn from data and make predictions. Our curriculum is designed to provide you with a solid foundation in machine learning algorithms and techniques, preparing you for a successful career in this exciting field.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
    {
      id: 3,
      slug: "artificial-intelligence",
      title: "Artificial Intelligence",
      description:
        "Explore the future of technology with our artificial intelligence courses. Learn how to create intelligent systems that can mimic human behavior and decision-making. Our curriculum is designed to provide you with a deep understanding of AI concepts and applications, preparing you for a successful career in this cutting-edge field.",
      buttonText: "Learn more",
      image: "/product-design.svg",
    },
  ],
};

const coursesTab = [
  "Design & Digital Marketing",
  "Software & Cloud Engineering",
  "Networking & Hardware",
  "Data Science & AI",
];

const Courses = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryTab = queryParams.get("tab");

  useEffect(() => {
    if (location.state?.from === "ourschool") {
  window.scrollTo(0, 0);
}
}, [location.state]);


  const [activeTab, setActiveTab] = useState(() => {
    const match = coursesTab.find(
      (tab) => tab.toLowerCase() === queryTab?.toLowerCase()
    );
    return match || "Design & Digital Marketing";
  });

  const handleTabClick = (course) => {
    setActiveTab(course);
  };

  const cardToShow = data[activeTab];

  useEffect(() => {
    const match = coursesTab.find(
      (tab) => tab.toLowerCase() === queryTab?.toLowerCase()
    );
    if (match) {
      setActiveTab(match);
    }
  }, [queryTab]);

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
