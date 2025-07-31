// eslint-disable-next-line no-unused-vars
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
        "From mastering the principles of product design to understanding the intricacies of digital marketing strategies, we provide a comprehensive learning experience that equips you with the skills needed to thrive in today's competitive landscape.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979974/nlp_dnxl9z.png",
    },
    {
      id: 2,
      slug: "digital-marketing",
      title: "Digital Marketing",
      description:
        "The digital marketing landscape is constantly changing, and our courses are designed to keep you ahead of the curve. From mastering SEO techniques to understanding social media strategies, we provide a comprehensive learning experience that equips you with the skills needed to thrive in today's competitive digital world.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979974/seo-content_mllhag.png",
    },
    {
      id: 3,
      slug: "graphic-design",
      title: "Graphic Design",
      description:
        "Our courses are designed to provide you with a solid foundation in graphic design principles, from typography to color theory. Whether you're a beginner or looking to enhance your skills, our curriculum is tailored to meet your needs and help you succeed in the creative industry.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979969/graphic-design_vz0jbu.png",
    },
    {
      id: 4,
      slug: "social-media-marketing",
      title: "Social Media Marketing",
      description:
        "Master the art of reaching and engaging audiences on platforms like Instagram, Facebook, Twitter, and LinkedIn. Learn content creation, scheduling, ad campaigns, and analytics to build effective social strategies.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979975/social-marketing_hcgfeg.png",
    },
    {
      id: 5,
      slug: "brand-strategy-identity",
      title: "Brand Strategy & Identity",
      description:
        "Learn how to define, position, and express a brand across digital and physical platforms. This course explores logo design, brand voice, mission alignment, and visual consistency to help businesses stand out.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979972/brand-strategy_q3cf73.png",
    },
    {
      id: 6,
      slug: "copywriting-for-conversion",
      title: "Copywriting For Conversion",
      description:
        "Write compelling copy that drives action. This course covers persuasive writing techniques, emotional triggers, call-to-actions, and landing page optimization to boost sales, signups, or engagement.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979971/copywriting_yv9yc3.png",
    },
    {
      id: 7,
      slug: "seo-content-strategy",
      title: "SEO & Content Strategy",
      description:
        "Discover how to optimize content for search engines and users. Learn keyword research, on-page SEO, content planning, and performance analysis to improve visibility and organic traffic.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979974/seo-data_fjf1xi.png",
    },
  ],

  /* Next Course Contents */

  "Software & Cloud Engineering": [
    {
      id: 1,
      slug: "software-engineering",
      title: "Software Engineering",
      description:
        "Tech is the future, and software engineering is at the heart of it. Our courses are designed to provide you with a solid foundation in software development, from coding languages to software architecture. Whether you're a beginner or looking to enhance your skills, our curriculum is tailored to meet your needs and help you succeed in the tech industry.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979990/software-engineering_iuuegg.png",
    },
    {
      id: 2,
      slug: "web-development",
      title: "Web Development",
      description:
        "The web is the backbone of modern technology, and our web development courses are designed to equip you with the skills needed to build dynamic and responsive websites. From front-end design to back-end development, we provide a comprehensive learning experience that prepares you for a successful career in web development.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979975/web-dev_sl0ly5.png",
    },
    {
      id: 3,
      slug: "cloud-computing",
      title: "Cloud Computing",
      description:
        "Harness the power of the cloud with our cloud computing courses. Learn how to deploy, manage, and scale applications in cloud environments like AWS and Azure. Our curriculum is designed to provide you with the skills needed to excel in the rapidly growing field of cloud computing.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979970/cloud-computing_eu9cpg.png",
    },
    {
      id: 4,
      slug: "mobile-app-development",
      title: "Mobile App Development",
      description:
        "As mobile devices continue to dominate the tech landscape, our mobile app development courses are designed to equip you with the skills needed to create innovative and user-friendly applications. From iOS to Android development, we provide a comprehensive learning experience that prepares you for a successful career in mobile app development.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979973/mobile-dev_yldylz.png",
    },
    {
      id: 5,
      slug: "devops-ci/cd-fundamentals",
      title: "DevOps & CI/CD Fundamentals",
      description:
        "Streamline development and deployment with DevOps tools and practices. Learn about automation, continuous integration, continuous delivery (CI/CD), and infrastructure as code. A must-have skill set for modern software teams.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979969/devops_hds1t2.png",
    },
    {
      id: 6,
      slug: "version-control",
      title: "Version Control With Git & GitHub",
      description:
        "Track, manage, and collaborate on code using the world’s most popular version control system. This hands-on course teaches you Git essentials, branching strategies, and GitHub workflows used by developers globally.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979975/version-control_ek5pax.png",
    },
    {
      id: 6,
      slug: "software-testing",
      title: "Software Testing & QA Basics",
      description:
        "Ensure software quality with structured testing techniques. Learn about unit testing, integration testing, test automation, and bug tracking. This course prepares you to identify defects early and deliver robust applications with confidence.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979974/software-testing_zyihnb.png",
    },
    {
      id: 6,
      slug: "backend-development",
      title: "Backend Development",
      description:
        "Learn to build robust and scalable server-side applications using frameworks like Node.js, Django, or Laravel. Explore REST APIs, databases, authentication, and deployment — all essential to powering dynamic web applications.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979969/backend_inpcp7.png",
    },
  ],

  /* Next Course */

  "Networking & Hardware": [
    {
      id: 1,
      slug: "hardware-engineering",
      title: "Hardware Engineering",
      description:
        "Our courses are designed to provide you with a deep understanding of hardware systems. Whether you're looking to build your own devices or enhance your knowledge in hardware development, our curriculum is tailored to equip you with the skills needed to excel in this field.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979972/hardware-engineering_ugckpy.png",
    },
    {
      id: 2,
      slug: "network-administration",
      title: "Network Administration",
      description:
        "Our network administration courses are designed to equip you with the skills needed to manage and maintain computer networks. From configuring routers to troubleshooting network issues, we provide a comprehensive learning experience that prepares you for a successful career in network administration.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979973/network_admin_fqafny.png",
    },
    {
      id: 3,
      slug: "cybersecurity",
      title: "Cybersecurity",
      description:
        "Join the fight against cyber threats with our cybersecurity courses. Learn how to protect systems, networks, and data from cyber attacks. Our curriculum is designed to provide you with the skills needed to excel in the rapidly growing field of cybersecurity.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979972/cybersecurity_fwyqe2.png",
    },
    {
      id: 6,
      slug: "internet-of-things-basics",
      title: "Internet of Things (IoT) Basics",
      description:
        "Explore how everyday objects connect and communicate over the internet. Learn the basics of IoT architecture, sensors, embedded systems, and data exchange. A great introduction for those curious about smart devices and automation technologies.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979972/iot_we348u.png",
    },
    {
      id: 6,
      slug: "it-support-help-desk-skills",
      title: "IT Support & Help Desk Skills",
      description:
        "Build a strong foundation in troubleshooting hardware, software, and network issues. This course trains you to handle real-world IT support tasks and communicate effectively with users — essential for entry-level IT roles.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979973/it-support_kplcpf.png",
    },
    {
      id: 6,
      slug: "wireless-network-setup-security",
      title: "Wireless Network Setup & Security",
      description:
        "Learn how to configure secure and efficient wireless networks for homes, offices, and public environments. This course covers protocols, encryption, signal optimization, and best practices for preventing unauthorized access.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979989/wireless-network_q59e83.png",
    },
    {
      id: 6,
      slug: "network-troubleshooting-techniques",
      title: "Network Troubleshooting Techniques",
      description:
        "Gain practical skills in diagnosing and resolving network issues. From IP conflicts to DNS errors, you’ll learn the tools and methods used by professionals to keep networks running smoothly and securely.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979974/network-troubleshooting_sbiqvj.png",
    },
  ],

  /* Next Course */

  "Data Science & AI": [
    {
      id: 1,
      slug: "data-analysis",
      title: "Data Analysis",
      description:
        "Our data analysis courses are designed to provide you with the skills needed to turn raw data into actionable insights. From statistical analysis to data visualization techniques, we equip you with the tools to excel in this rapidly growing field.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979972/data-analysis_kpgonp.png",
    },
    {
      id: 2,
      slug: "machine-learning",
      title: "Machine Learning",
      description:
        "Power your career with our machine learning courses. Learn how to build intelligent systems that can learn from data and make predictions. Our curriculum is designed to provide you with a solid foundation in machine learning algorithms and techniques.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979973/machine-learning2_wcixwd.png",
    },
    {
      id: 3,
      slug: "artificial-intelligence",
      title: "Artificial Intelligence",
      description:
        "Learn how to create intelligent systems that can mimic human behavior and decision-making. Our curriculum is designed to provide you with a deep understanding of AI concepts and applications, preparing you for a successful career in this cutting-edge field.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979970/ai2_afodbr.png",
    },
    {
      id: 6,
      slug: "sql-for-data-exploration",
      title: "SQL for Data Exploration",
      description:
        "Master the language of data with our SQL course. Learn how to query databases, filter and group data, and derive insights using real-world datasets. Perfect for beginners and analysts looking to turn raw data into actionable knowledge.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979975/sql_iehpyu.png",
    },
    {
      id: 6,
      slug: "big-data-fundamentals",
      title: "Big Data Fundamentals",
      description:
        "Understand the architecture and tools behind large-scale data processing. Learn how to store, manage, and analyze massive datasets using Hadoop, Spark, and other industry-standard platforms. This course is ideal for those looking to step into the world of data-driven decision-making at scale.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979969/big-data_xzxi9v.png",
    },
    {
      id: 6,
      slug: "natural-language-processing",
      title: "Natural Language Processing (NLP)",
      description:
        "Dive into the world of human-language understanding by machines. Explore key NLP techniques like sentiment analysis, text classification, and language generation. This course equips you with practical skills to build applications that understand and process human language intelligently.",
      buttonText: "Learn more",
      image:
        "https://res.cloudinary.com/dnoycjq2q/image/upload/v1753982410/nlp2_l4fw4q.jpg",
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
            <div key={course.slug} className="space-y-4">
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
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
