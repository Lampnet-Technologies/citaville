import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CongratsPopup from "../Components/CongratsPopup";

const data = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      " This course Equip learners with the skills to create and manage effective digital marketing campaigns, including SEO, social media, email marketing, and content creation.",
    currentStudents: "180 students currently taking this course",
    duration: "Duration 3-6 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Digital Marketing",
        bullets: [
          "What is digital marketing? Overview of channels and strategies",
          "Overview of popular digital marketing tools (e.g., Google Analytics, SEMrush)",
          "Understanding target audiences and buyer personas",
          "Setting marketing goals and KPIs",
        ],
      },
      {
        step: "2. Search Engine Optimization (SEO)",
        bullets: [
          "Understanding search engines and how they work",
          "Keyword research and analysis",
          "On-page and off-page SEO techniques",
          "Technical SEO basics",
          "SEO tools and analytics",
        ],
      },
      {
        step: "3. Content Marketing",
        bullets: [
          "Creating valuable content for target audiences",
          "Content types (blogs, videos, infographics)",
          "Content distribution strategies and channels",
          "Measuring content performance",
          "Content marketing tools",
        ],
      },
      {
        step: "4. Social Media Marketing",
        bullets: [
          "Understanding social media platforms and their audiences",
          "Creating effective social media strategies",
          "Content creation and scheduling",
          "Engagement and community management",
          "Social media advertising basics",
          "Social media analytics and tools",
        ],
      },
      {
        step: "5. Email Marketing",
        bullets: [
          "Building and managing email lists",
          "Creating effective email campaigns",
          "Email design and copywriting best practices",
          "A/B testing and optimization",
        ],
      },
      {
        step: "6. Paid Advertising",
        bullets: [
          "Introduction to paid advertising (PPC, display ads, social media ads)",
          "Setting up and managing ad campaigns",
          "Understanding ad targeting and bidding strategies",
          "Analyzing ad performance and ROI",
          "Popular advertising platforms (e.g., Google Ads, Facebook Ads)",
        ],
      },
      {
        step: "7. Analytics and Reporting",
        bullets: [
          "Understanding web analytics and tracking",
          "Setting up Google Analytics",
          "Measuring campaign performance and ROI",
          "Creating reports and dashboards",
          "Using data to inform marketing strategies",
          "Popular analytics tools (e.g., Google Analytics, HubSpot)",
        ],
      },
      {
        step: "8. Capstone Project",
        bullets: [
          "Develop a comprehensive digital marketing strategy for a real or hypothetical business",
          "Implement and present the strategy using learned tools and techniques",
        ],
      },
    ],
  },

  {
    slug: "product-design",
    title: "Product Design",
    description:
      " This course Equip learners with the skills to design user-centered products, focusing on UX/UI principles, prototyping, and usability testing.",
    currentStudents: "180 students currently taking this course",
    duration: "Duration 6-8 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to No-Code Development",
        bullets: [
          "What is no-code? Benefits and limitations",
          "Overview of popular no-code platforms (e.g., Webflow, Bubble, Wix, Squarespace)",
          "Understanding the no-code ecosystem",
          "Identifying use cases for no-code development",
          "Setting up your no-code environment",
        ],
      },
      {
        step: "2. Web Design Fundamentals",
        bullets: [
          "UI/UX principles",
          "Layouts, typography, and color theory",
          "Responsive design basics",
          "Wireframing and prototyping tools (e.g., Figma, Adobe XD)",
          "Designing for accessibility and inclusivity",
        ],
      },
      {
        step: "3. Building Websites with No-Code Tools",
        bullets: [
          "Platform walkthrough (e.g., Webflow or Bubble)",
          "Creating pages, adding components, and styling",
          "Integrating multimedia (images, videos)",
          "Using templates and themes",
          "Customizing designs with CSS (if applicable)",
        ],
      },
      {
        step: "4. Workflows and Logic",
        bullets: [
          "Setting up forms, buttons, and interactivity",
          "Basic database setup (e.g., Airtable integration)",
          "Automating workflows with tools like Zapier",
          "Implementing user authentication and roles",
          "Connecting APIs and external services",
          "Testing and debugging no-code applications",
        ],
      },
      {
        step: "5. E-commerce and Advanced Features",
        bullets: [
          "Building online stores (e.g., Shopify integration)",
          "Payment gateways and user authentication",
          "Advanced features (e.g., dynamic content, user-generated content)",
          "Integrating third-party services (e.g., email marketing, CRM)",
          "Performance optimization and best practices",
          "Security considerations in no-code development",
        ],
      },
      {
        step: "6. Publishing and Maintenance",
        bullets: [
          "Domain setup and hosting",
          "SEO basics and analytics integration (e.g., Google Analytics)",
          "Monitoring performance and user feedback",
          "Regular updates and maintenance",
          "Scaling no-code applications",
          "Troubleshooting common issues",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Build a fully functional website (e.g., portfolio, business site, or simple app)",
          "Implement learned skills and tools",
          "Present the project, including design choices and functionality",
        ],
      },
    ],
  },
];

const CourseDetail = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [showCongrats, setShowCongrats] = useState(false);

  useEffect(() => {
    if (slug) {
      const allCourses = Object.values(data).flat();
      const selected = allCourses.find((c) => c.slug === slug);
      setCourse(selected);
    }
  }, [slug]);

  if (!course) {
    return <div className="text-white text-center py-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-6 md:px-10">
      <div className="w-10/12 mx-auto space-y-10">
      <div>
        <img src="/course-details.svg" alt="course details" />
      </div>
        <h1 className="text-4xl font-bold text-green-500">{course.title}</h1>
        <p className="text-lg text-gray-300">{course.description}</p>
        <div className=" flex flex-col gap-4 text-md">
          <span className="bg-white w-80 py-2 p-2 rounded-md shadow font-medium text-black">{course.currentStudents}</span>
          <span className="bg-white w-44 py-2 p-2 rounded-md shadow font-medium text-black">{course.duration}</span>
        </div>
        {/* Enroll Button */}
        <button
        onClick={() => setShowCongrats(true)}
        className="bg-[#39B54A] text-white px-8 py-3 rounded-lg font-semibold">
          {course.enrollButton}
        </button>

        <div className="pt-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            {course.CourseTitle}
          </h2>
          <div className="space-y-6">
            {course.curriculum.map((item, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold">{item.step}</h3>
                <ul className="list-disc list-inside ml-4 mt-2 text-gray-300 space-y-1">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Congrats Modal */}
      {showCongrats && (
        <CongratsPopup
        type="enroll"
        course={course.title}
        onClose={() => setShowCongrats(false)}
        />
      )}
    </div>
  );
};

export default CourseDetail;
