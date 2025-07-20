import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export const OurCourses = () => {
  const [activeButton, setActiveButton] = useState("Design & Digital Marketing");
  const [visibleCount, setVisibleCount] = useState(3);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    setVisibleCount(3);
  };

  const handlemore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const data = {
    "Design & Digital Marketing": [
      {
        id: 1,
        title: "Product Design",
        description:
          "Learn the principles of product design, from user research to prototyping.",
        image: "/courses-01.svg",
        buttonText: "Learn more",
      },
      {
        id: 2,
        title: "Graphic Design",
        description:
          "Learn the principles of product design, from user research to prototyping.",
        image: "/courses-02.svg",
        buttonText: "Learn more",
      },
      {
        id: 3,
        title: "Digital Marketing",
        description:
          "Learn the principles of product design, from user research to prototyping.",
        image: "/courses-03.svg",
        buttonText: "Learn more",
      },
    ],
    "Software & Cloud Engineering": [
      {
        id: 1,
        title: "Web Development",
        description:
          "Learn the principles of web development, from HTML to JavaScript.",
        image: "/courses-01.svg",
        buttonText: "Learn more",
      },
      {
        id: 2,
        title: "Cloud Computing",
        description:
          "Learn the principles of cloud computing, from AWS to Azure.",
        image: "/courses-02.svg",
        buttonText: "Learn more",
      },
      {
        id: 3,
        title: "Mobile App Development",
        description:
          "Learn the principles of mobile app development, from Android to iOS.",
        image: "/courses-03.svg",
        buttonText: "Learn more",
      },
    ],
    "Networking & Hardware": [
      {
        id: 1,
        title: "Network Administration",
        description:
          "Learn the principles of network administration, from routing to switching.",
        image: "/courses-01.svg",
        buttonText: "Learn more",
      },
      {
        id: 2,
        title: "Cybersecurity",
        description:
          "Learn the principles of cybersecurity, from ethical hacking to penetration testing.",
        image: "/courses-02.svg",
        buttonText: "Learn more",
      },
      {
        id: 3,
        title: "Hardware Engineering",
        description:
          "Learn the principles of hardware engineering, from circuit design to PCB layout.",
        image: "/courses-03.svg",
        buttonText: "Learn more",
      },
    ],
    "Data Science/Ai": [
      {
        id: 1,
        title: "Data Analysis",
        description:
          "Learn the principles of data analysis, from data cleaning to visualization.",
        image: "/courses-01.svg",
        buttonText: "Learn more",
      },
      {
        id: 2,
        title: "Machine Learning",
        description:
          "Learn the principles of machine learning, from supervised to unsupervised learning.",
        image: "/courses-02.svg",
        buttonText: "Learn more",
      },
      {
        id: 3,
        title: "Artificial Intelligence",
        description:
          "Learn the principles of artificial intelligence, from neural networks to natural language processing.",
        image: "/courses-03.svg",
        buttonText: "Learn more",
      },
    ],
  };

  const buttons = [
    "Design & Digital Marketing",
    "Software & Cloud Engineering",
    "Networking & Hardware",
    "Data Science/Ai",
  ];
  
  const itemsToShow = data[activeButton].slice(0, visibleCount) || [];

  return (
    <section className="w-full bg-gray-800 py-12">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-center text-[#39B54A] capitalize font-extrabold text-4xl">
          Our courses
        </h2>
      </motion.div>

      {/* Button Grids */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 w-11/12 mx-auto py-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {buttons.map((btn, i) => (
          <motion.button
            key={btn}
            onClick={() => handleButtonClick(btn)}
            className={`px-6 py-4 rounded-lg text-lg sm:text-2xl font-bold transition-colors duration-700 ${
              activeButton === btn
                ? "bg-white text-[#39B54A]"
                : " text-white hover:bg-white hover:text-[#39B54A]"
            }`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {btn}
          </motion.button>
        ))}
      </motion.div>

      {/* Display Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-between items-center w-11/12 mx-auto py-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {itemsToShow.map((items, i) => (
          <motion.div
            key={items.id}
            className="space-y-4 text-white w-full"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src={items.image}
              alt={items.title}
              className="w-full h-full"
            />
            <h3 className="uppercase font-semibold text-2xl sm:text-3xl">
              {items.title}
            </h3>
            <p className="text-justify">{items.description}</p>
            <button className="w-full bg-gradient-to-tr from-[#446e40] to-[#83D47B] text-white font-semibold px-6 py-2 rounded-xl">
              {items.buttonText}
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* See more Button */}
      {visibleCount < data[activeButton]?.length && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={handlemore}
            className="mt-4 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition"
          >
            See more
          </button>
        </motion.div>
      )}
    </section>
  );
};

//  Learning Latest Skils
export const LearnLatestSkill = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/the-study.png')",
        padding: "20px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full bg-gray-800 py-12 text-white flex justify-center items-center"
    >
      <div className="w-10/12  space-y-4 bg-opacity-50 py-20  rounded-lg">
        <h2 className="text-4xl font-bold">Learn Latest Skills</h2>
        <p className="text-lg w-7/12">
          Embark on a journey of knowledge, and unlock a multitude of
          opportunities, influencing your future in several ways. Whether you
          are advancing or a total new-bie, our courses and resources are
          crafted to suit your need Join Citaville and see your tech journey
          take the right direction!
        </p>
        <button className="bg-green-600 hover:bg-green-700 transition px-6 py-2 rounded font-semibold text-white">
          Register now
        </button>
      </div>
    </section>
  );
};

import { FiCalendar } from "react-icons/fi";

const latestNewsData = [
  {
    id: 1,
    title: "Graphic Design",
    description:
      "Explore the latest advancements in artificial intelligence and how they are shaping the future.",
    image: "/latest-news-01.svg",
    year: "2025",
  },
  {
    id: 2,
    title: "Digital Marketing",
    description:
      "Discover the latest trends in digital marketing and how to leverage them for your business.",
    image: "/latest-news-02.svg",
    year: "2025",
  },
  {
    id: 3,
    title: "Data Science",
    description:
      "Learn about the latest tools and techniques in data science and how they can be applied to real-world problems.",
    image: "/latest-news-02.svg",
    year: "2025",
  },
];
export const LatestNews = () => {
  const [visibleCount, setVisibleCount] = useState(2);
  return (
    <section className="w-full bg-gray-800 py-12">
      <div className="w-10/12 mx-auto space-y-10">
        <h2 className="text-center text-[#39B54A] capitalize font-extrabold text-4xl">
          Latest News
        </h2>
        <div className="grid grid-cols-2 gap-10 justify-between items-center">
          {latestNewsData.slice(0, visibleCount).map((item) => (
            <div key={item.id} className="space-y-4 text-white w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full"
              />
              <h3 className="uppercase font-semibold text-3xl">{item.title}</h3>
              <p className="text-justify">{item.description}</p>
              <div className="flex items-center gap-2">
                <FiCalendar size={20} />
                <span>{item.year}</span>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < latestNewsData.length && (
          <div className="text-center mt-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + 1)}
              className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition"
            >
              See more
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export const OurOfferings = () => {
  const style = {
    image: "w-24 h-24",
    p1: "font-bold text-2xl text-white",
    p2: "font-medium text-xl text-white",
  };
  return (
    <section className="bg-gradient-to-br from-[#446E40]  to-[#83D47B]  w-full">
      <div className="w-9/12 mx-auto py-20">
        <h1 className="text-center mb-20 font-extrabold capitalize text-white text-3xl">
          Our Offering
        </h1>
        <div className="space-y-10">
          {/* items one */}
          <div className="space-y-2">
            <div className="flex gap-10  items-center ">
              <img
                src="/learn-anywhere-icon.svg"
                alt="Learn Anywhere"
                className={style.image}
              />
              <p className="flex flex-col">
                <span className={style.p1}>Expert tutors</span>
                <span className={style.p2}>
                  Our courses are taught by people who know their onions and
                  ready to give a beautiful learning experience
                </span>
              </p>
            </div>
            <div className="bg-white w-full h-0.5"></div>
          </div>

          {/* items two */}
          <div className="space-y-2">
            <div className="flex gap-10  items-center ">
              <img
                src="/Tutor-icon.svg"
                alt="Expert Tutor"
                className={style.image}
              />
              <p className="flex flex-col">
                <span className={style.p1}>Learn anywhere </span>
                <span className={style.p2}>
                  You can learn from home, at your shop or even during your
                  break at work
                </span>
              </p>
            </div>
            <div className="bg-white w-full h-0.5"></div>
          </div>
          {/* items three */}
          <div className="space-y-2">
            <div className="flex gap-10  items-center ">
              <img
                src="/Certificate-icon.svg"
                alt="Expert Tutor"
                className={style.image}
              />
              <p className="flex flex-col">
                <span className={style.p1}>Course Certificate </span>
                <span className={style.p2}>
                  our students undergo project based learning where they produce
                  and build what they are learning and get a certificate at the
                  end
                </span>
              </p>
            </div>
            <div className="bg-white w-full h-0.5"></div>
          </div>
          {/* items Four */}
          <div className="space-y-2">
            <div className="flex gap-10  items-center ">
              <img
                src="/Best-price-icon.svg"
                alt="Expert Tutor"
                className={style.image}
              />
              <p className="flex flex-col">
                <span className={style.p1}>Affordable prices</span>
                <span className={style.p2}>
                  Our courses are for everybody because of this we offer them at
                  discounted prices and still deliver quality teaching.
                </span>
              </p>
            </div>
            <div className="bg-white w-full h-0.5"></div>
          </div>

          <button className="bg-gradient-to-tr from-[#446e40] to-[#83D47B] text-white font-semibold px-6 py-2 rounded-xl">
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "Our instructors can monitor your class progressand are easily accessible to provide direct assistance.can ask questions, ask for help, participate in class",
    image: "/testimonial-01.svg",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback:
      "The courses are well-structured and the instructors are very knowledgeable. I learned a lot in a short time.",
    image: "/testimonial-02.svg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    feedback:
      "I love the flexibility of learning at my own pace. The resources provided are top-notch and very helpful.",
    image: "/testimonial-03.svg",
  },
  {
    id: 4,
    name: "Bob Brown",
    feedback:
      "The community support is amazing. I was able to connect with other learners and share experiences.",
    image: "/testimonial-04.svg",
  },
  {
    id: 5,
    name: "Charlie Davis",
    feedback:
      "The hands-on projects really helped me apply what I learned. I feel more confident in my skills now.",
    image: "/testimonial-05.svg",
  },
  {
    id: 6,
    name: "Eve Wilson",
    feedback:
      "I appreciate the personalized feedback from instructors. It helped me improve my work significantly.",
    image: "/testimonial-06.svg",
  },
  {
    id: 7,
    name: "David Lee",
    feedback:
      "The course content is relevant and up-to-date. I feel prepared for the job market after completing the course.",
    image: "/testimonial-07.svg",
  },
  {
    id: 8,
    name: "Sophia Kim",
    feedback:
      "I highly recommend this platform to anyone looking to enhance their skills. The learning experience is fantastic.",
    image: "/testimonial-08.svg",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsPerPage = 3;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerPage);
  const startIndex = currentIndex * testimonialsPerPage;
  const testimonialsToShow = testimonials.slice(
    startIndex,
    startIndex + testimonialsPerPage
  );

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-gray-800 text-white w-full">
      <div className="w-10/12 mx-auto py-20 space-y-10">
        <h1 className="text-[#39b54a] font-extrabold text-center text-3xl ">
          Hear from our learners
        </h1>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-10/12 mx-auto ">
            {testimonialsToShow.map((testimonials) => (
              <div
                key={testimonials.id}
                className="flex flex-col items-center  p-6 rounded-lg space-y-4 mb-6"
              >
                <div className="bg-gradient-to-tr from-[#446e40] via-[#619b5c] to-[#83D47B] text-white p-4 rounded-lg mb-4 space-y-5 h-44 text-balance">
                  <p>{testimonials.feedback}</p>
                  <p className="text-end">{testimonials.name}</p>
                </div>
                <div className="rounded-full w-20 h-20 bg-gray-200">
                  <img src={testimonials.image} alt={testimonials.image} />
                </div>
              </div>
            ))}
          </div>

          {/* The Dot */}
          <div className="flex gap-4 items-center justify-center">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-6 h-2 rounded-4xl ${
                  index === currentIndex
                    ? "bg-gradient-to-tr from-[#446e40] via-[#619b5c] to-[#83D47B]"
                    : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Faqs = () => {
  const frequentlyAskedQuestions = [
    {
      id: 1,
      title: "What is UX design?",
      description:
        "The key principles of UX design include simplicity, consistency, clarity, and empathy. A good UX design should be simple and easy to use, consistent across different devices and platforms, clear in its messaging and instructions, and empathetic to the user’s needs and goals.",
    },
    {
      id: 2,
      title: "What are the key principles of UX design?",
      description:
        "The key principles of UX design include simplicity, consistency, clarity, and empathy. A good UX design should be simple and easy to use, consistent across different devices and platforms, clear in its messaging and instructions, and empathetic to the user’s needs and goals.",
    },
    {
      id: 3,
      title: "What is the difference between UX and UI design?",
      description:
        "UX design focuses on the overall experience of the user, including the ease of use, functionality, and emotional response to the product. UI design, on the other hand, focuses on the visual and interactive elements of the product, such as the layout, typography, and color scheme.",
    },
  ];

  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (index) => {
    setActiveId(activeId === index ? null : index);
  };
  return (
    <section className="bg-gray-800 text-white  w-full ">
      <div className="w-10/12 mx-auto py-12 space-y-12">
        <div>
          <h1 className="text-[#39b54a] font-extrabold text-center text-3xl">
            Frequently Asked Questions
          </h1>
        </div>
        <div>
          {frequentlyAskedQuestions.map((faq) => (
            <div key={faq.id} className="mb-4 border-b pb-2 space-y-8">
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full text-left text-lg font-semibold flex justify-between items-center mb-4"
              >
                {faq.title}
                <span>{activeId === faq.id ? "-" : "+"}</span>
              </button>
              {activeId === faq.id && (
                <p className="mt-2 text-gray-200">{faq.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Investing = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/Frame 1000001375.png')",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full bg-gray-800 py-20  text-white "
    >
      <div className="w-10/12 mx-auto space-y-8">
        <h2 className="font-extrabold text-3xl w-96 ">Start investing in yourself today!</h2>
        <button className="px-6 py-2 rounded bg-gradient-to-tr from-[#446e40] via-[#619b5c] to-[#83D47B] font-extrabold ">
          Apply now
        </button>
      </div>
    </section>
  );
};
