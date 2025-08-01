/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export const OurCourses = () => {
  const [activeButton, setActiveButton] = useState(
    "Design & Digital Marketing"
  );
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
          "Master the art of user-centered design through research, wireframing, and interactive prototyping to create impactful digital products.",
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979974/nlp_dnxl9z.png",
        buttonText: "Learn more",
      },
      {
        id: 2,
        title: "Graphic Design",
        description:
          "Build strong visual communication skills through color theory, typography, layout design, and real-world branding projects.",
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979969/graphic-design_vz0jbu.png",
        buttonText: "Learn more",
      },
      {
        id: 3,
        title: "Digital Marketing",
        description:
          "Learn how to grow brands online with SEO, content strategy, social media campaigns, and performance marketing techniques.",
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979974/seo-content_mllhag.png",
        buttonText: "Learn more",
      },
    ],
    "Software & Cloud Engineering": [
      {
        id: 1,
        title: "Web Development",
        description:
          "Learn to build responsive websites using HTML, CSS, JavaScript, and modern frameworks like React and Node.js.",
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979975/web-dev_sl0ly5.png",
        buttonText: "Learn more",
      },
      {
        id: 2,
        title: "Cloud Computing",
        description:
          "Explore cloud platforms like AWS and Azure while learning to deploy, scale, and secure cloud-based applications.",
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979970/cloud-computing_eu9cpg.png",
        buttonText: "Learn more",
      },
      {
        id: 3,
        title: "Mobile App Development",
        description:
          "Design and develop mobile apps for Android and iOS using tools like Flutter, React Native, or Swift.",
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979973/mobile-dev_yldylz.png",
        buttonText: "Learn more",
      },
    ],
    "Networking & Hardware": [
      {
        id: 1,
        title: "Network Administration",
        description:
          "Learn to configure, monitor, and troubleshoot computer networks using routers, switches, and network protocols.",
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979973/network_admin_fqafny.png",
        buttonText: "Learn more",
      },
      {
        id: 2,
        title: "Cybersecurity",
        description:
          "Protect systems and data by learning ethical hacking, threat detection, penetration testing, and security best practices.",
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979972/cybersecurity_fwyqe2.png",
        buttonText: "Learn more",
      },
      {
        id: 3,
        title: "Hardware Engineering",
        description:
          "Understand computer hardware systems, from basic circuit design and microcontrollers to assembling and testing devices.",
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979972/hardware-engineering_ugckpy.png",
        buttonText: "Learn more",
      },
    ],
    "Data Science & AI": [
      {
        id: 1,
        title: "Data Analysis",
        description:
          "Gain insights from data by learning to clean, analyze, and visualize datasets using Excel, Python, and Tableau.",
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979972/data-analysis_kpgonp.png",
        buttonText: "Learn more",
      },
      {
        id: 2,
        title: "Machine Learning",
        description:
          "Learn to build predictive models using algorithms like regression, decision trees, and clustering with Python.",
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979973/machine-learning2_wcixwd.png",
        buttonText: "Learn more",
      },
      {
        id: 3,
        title: "Artificial Intelligence",
        description:
          "Explore how AI powers real-world applications using neural networks, computer vision, and natural language processing.",
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979970/ai2_afodbr.png",
        buttonText: "Learn more",
      },
    ],
  };

  const buttons = [
    "Design & Digital Marketing",
    "Software & Cloud Engineering",
    "Networking & Hardware",
    "Data Science & AI",
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
            <Link
              to={`/courses?tab=${encodeURIComponent(activeButton)}`}
              className="w-full inline-block"
            >
              <button className="w-full bg-gradient-to-tr from-[#446e40] to-[#83D47B] text-white font-semibold px-6 py-2 rounded-xl">
                {items.buttonText}
              </button>
            </Link>
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
export const LearnLatestSkill = ({ onRegisterClick }) => {
  return (
    <section
      className="relative w-full text-white py-20 px-4"
      style={{
        backgroundImage: "url('/the-study.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay to improve text contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Learn Latest Skills</h2>
        <p className="text-base md:text-lg">
          Embark on a journey of knowledge, and unlock a multitude of
          opportunities, influencing your future in several ways. Whether you
          are advancing or a total newbie, our courses and resources are crafted
          to suit your need. Join Citaville and see your tech journey take the
          right direction!
        </p>
        <button
          onClick={onRegisterClick}
          className="bg-green-600 hover:bg-green-700 transition px-6 py-2 rounded font-semibold text-white"
        >
          Register now
        </button>
      </div>
    </section>
  );
};

// Latest News
import { FiCalendar } from "react-icons/fi";
import { Link } from "react-router-dom";

const latestNewsData = [
  {
    id: 1,
    title: "Graphic Design",
    description:
      "Explore the latest advancements in artificial intelligence and how they are shaping the future. Dive into modern design trends and discover how visual storytelling is evolving in the digital age.",
    image:
      "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753983775/Graphic-Design-Trends-2025_wyuk3f.png",
    year: "2025",
  },
  {
    id: 2,
    title: "Digital Marketing",
    description:
      "Discover the latest trends in digital marketing and how to leverage them for your business. Uncover how brands are using AI, short-form video, and data-driven strategies to boost engagement.",
    image:
      "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753983774/11-A-2025-Digital-Marketing-Trends-Predictions-1-1200x675_iwhhnx.webp",
    year: "2025",
  },
  {
    id: 3,
    title: "Data Science",
    description:
      "Learn about the latest tools and techniques in data science and how they can be applied to real-world problems. Explore how emerging tools and machine learning are transforming industries through smart data insights.",
    image:
      "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753983776/data-science-latest-news_ibsghp.jpg",
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
        <div className="grid grid-cols-1 gap-10 justify-between items-center md:grid-cols-2">
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

// Our Offers
export const OurOfferings = () => {
  const style = {
    image: "w-20 h-20 sm:w-24 sm:h-24",
    title: "font-bold text-xl sm:text-2xl text-white",
    description: "text-white text-sm sm:text-base",
  };

  const offerings = [
    {
      icon: "/learn-anywhere-icon.svg",
      title: "Expert tutors",
      desc: "Our courses are taught by people who know their onions and are ready to give a beautiful learning experience.",
    },
    {
      icon: "/Tutor-icon.svg",
      title: "Learn anywhere",
      desc: "You can learn from home, at your shop, or even during your break at work.",
    },
    {
      icon: "/Certificate-icon.svg",
      title: "Course Certificate",
      desc: "Our students undergo project-based learning and get certified upon completion.",
    },
    {
      icon: "/Best-price-icon.svg",
      title: "Affordable prices",
      desc: "Our courses are for everybody — affordable, but still top quality.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#446E40] to-[#83D47B] w-full py-16 px-4">
      <div className="w-full max-w-6xl mx-auto space-y-12">
        <h1 className="text-center text-white font-extrabold text-3xl sm:text-4xl capitalize">
          Our Offerings
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {offerings.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white/10 p-6 rounded-xl shadow-md"
            >
              <img src={item.icon} alt={item.title} className={style.image} />
              <div>
                <h3 className={style.title}>{item.title}</h3>
                <p className={style.description}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link to="/courses">
            <button className="bg-white text-[#446E40] font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Explore Courses
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const testimonials = [
  {
    id: 1,
    name: "Geneveve Adeola",
    feedback:
      "Our instructors can monitor your class progressand are easily accessible to provide direct assistance.can ask questions, ask for help, participate in class",
    image:
      "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753985630/testimonal1_sktamo.jpg",
  },
  {
    id: 2,
    name: "Obiora Jude",
    feedback:
      "The courses are well-structured and the instructors are very knowledgeable. I learned a lot in a short time.",
    image:
      "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753985621/testimonal2_btihhm.jpg",
  },
  {
    id: 3,
    name: "Malik Khan",
    feedback:
      "I love the flexibility of learning at my own pace. The resources provided are top-notch and very helpful.",
    image:
      "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753985620/testimonal3_chbdqs.jpg",
  },
  {
    id: 4,
    name: "Bob Olafemi",
    feedback:
      "The community support is amazing. I was able to connect with other learners and share experiences.",
    image:
      "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753985618/testimonal4_bfdfkn.jpg",
  },
  {
    id: 5,
    name: "Eve Wilson",
    feedback:
      "The hands-on projects really helped me apply what I learned. I feel more confident in my skills now.",
    image:
      "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753985614/testimonal5_qf6pvj.jpg",
  },
  {
    id: 6,
    name: "Charles Davis",
    feedback:
      "I appreciate the personalized feedback from instructors. It helped me improve my work significantly.",
    image:
      "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753985613/testimonal6_w8m1p2.jpg",
  },
  {
    id: 7,
    name: "Sophia Kim",
    feedback:
      "The course content is relevant and up-to-date. I feel prepared for the job market after completing the course.",
    image:
      "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753985613/testimonal7_upsgab.jpg",
  },
  {
    id: 8,
    name: "David Lee",
    feedback:
      "I highly recommend this platform to anyone looking to enhance their skills. The learning experience is fantastic.",
    image:
      "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753985627/testimonal8_fcgfvn.jpg",
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
  <div className="w-11/12 max-w-6xl mx-auto py-20 space-y-12">
    <h1 className="text-[#39b54a] font-extrabold text-center text-3xl">
      Hear from our learners
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {testimonialsToShow.map((testimonial) => (
        <div
          key={testimonial.id}
          className="flex flex-col items-center bg-white/10 p-6 rounded-xl space-y-4 shadow-md"
        >
          {/* Feedback Text */}
          <div className="bg-gradient-to-tr from-[#446e40] via-[#619b5c] to-[#83D47B] text-white p-4 rounded-lg min-h-[140px] w-full text-sm text-justify">
            <p className="">{testimonial.feedback}</p>
          </div>

          {/* Image */}
          <div className="rounded-full w-24 h-24 overflow-hidden border-4 border-[#83D47B]">
            <img
              src={testimonial.image}
              alt={`Photo of ${testimonial.name}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <p className="text-center font-medium text-lg">{testimonial.name}</p>
        </div>
      ))}
    </div>

    {/* Dot Navigation */}
    <div className="flex gap-3 items-center justify-center mt-8">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => handleDotClick(index)}
          className={`w-6 h-2 rounded-full transition-all duration-300 ${
            index === currentIndex
              ? "bg-gradient-to-tr from-[#446e40] via-[#619b5c] to-[#83D47B]"
              : "bg-gray-500"
          }`}
        ></button>
      ))}
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
        "UX (User Experience) design focuses on creating products that are useful, easy to use, and enjoyable for people to interact with. It involves understanding user needs and behaviors to design meaningful and positive experiences, from initial interaction to overall satisfaction. UX design is a multidisciplinary field, encompassing user research, information architecture, interaction design, and visual design. ",
    },
    {
      id: 2,
      title: "What are the key principles of UX design?",
      description:
        "The key principles of UX design include simplicity, consistency, clarity, and empathy. A good UX design should be simple and easy to use, consistent across different devices and platforms, clear in its messaging and instructions, and empathetic to the user’s needs and goals. There are also other principles such as accessibility, usability, and performance that are important for creating effective UX designs.",
    },
    {
      id: 3,
      title: "What is the difference between UX and UI design?",
      description:
        "UX design focuses on the overall experience of the user, including the ease of use, functionality, and emotional response to the product. UI design, on the other hand, focuses on the visual and interactive elements of the product, such as the layout, typography, and color scheme. While UX design is about making the product easy to use and enjoyable, UI design is about making the product visually appealing and intuitive.",
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
        <h2 className="font-extrabold text-3xl w-full">
          Start investing in yourself today!
        </h2>
        <Link to="/courses">
          <button className="px-6 py-2 rounded bg-gradient-to-tr from-[#446e40] via-[#619b5c] to-[#83D47B] font-extrabold ">
            Apply now
          </button>
        </Link>
      </div>
    </section>
  );
};
