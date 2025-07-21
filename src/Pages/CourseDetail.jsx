import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const data = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      " This course Equip learners to build functional websites and web applications using no-code platforms without programming knowledge",
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
        ],
      },
      {
        step: "2. Web Design Fundamentals",
        bullets: [
          "UI/UX principles",
          "Layouts, typography, and color theory",
          "Responsive design basics",
        ],
      },
      {
        step: "3. Building Websites with No-Code Tools",
        bullets: [
          "Platform walkthrough (e.g., Webflow or Bubble)",
          "Creating pages, adding components, and styling",
          "Integrating multimedia (images, videos)",
        ],
      },
      {
        step: "4. Workflows and Logic",
        bullets: [
          "Setting up forms, buttons, and interactivity",
          "Basic database setup (e.g., Airtable integration)",
          "Automating workflows with tools like Zapier",
        ],
      },
      {
        step: "5. E-commerce and Advanced Features",
        bullets: [
          "Building online stores (e.g., Shopify integration)",
          "Payment gateways and user authentication",
        ],
      },
      {
        step: "6. Publishing and Maintenance",
        bullets: [
          "Domain setup and hosting",
          "SEO basics and analytics integration (e.g., Google Analytics)",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Build a fully functional website (e.g., portfolio, business site, or simple app)",
        ],
      },
    ],
  },

  {
    slug: "product-design",
    title: "Product Design",
    description:
      " This course Equip learners to build functional websites and web applications using no-code platforms without programming knowledge",
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
        ],
      },
      {
        step: "2. Web Design Fundamentals",
        bullets: [
          "UI/UX principles",
          "Layouts, typography, and color theory",
          "Responsive design basics",
        ],
      },
      {
        step: "3. Building Websites with No-Code Tools",
        bullets: [
          "Platform walkthrough (e.g., Webflow or Bubble)",
          "Creating pages, adding components, and styling",
          "Integrating multimedia (images, videos)",
        ],
      },
      {
        step: "4. Workflows and Logic",
        bullets: [
          "Setting up forms, buttons, and interactivity",
          "Basic database setup (e.g., Airtable integration)",
          "Automating workflows with tools like Zapier",
        ],
      },
      {
        step: "5. E-commerce and Advanced Features",
        bullets: [
          "Building online stores (e.g., Shopify integration)",
          "Payment gateways and user authentication",
        ],
      },
      {
        step: "6. Publishing and Maintenance",
        bullets: [
          "Domain setup and hosting",
          "SEO basics and analytics integration (e.g., Google Analytics)",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Build a fully functional website (e.g., portfolio, business site, or simple app)",
        ],
      },
    ],
  },
];

const CourseDetail = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);

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
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold">{course.title}</h1>
        <p className="text-lg text-gray-300">{course.description}</p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-400">
          <span>{course.currentStudents}</span>
          <span>{course.duration}</span>
        </div>
        <button className="bg-[#39B54A] text-white px-8 py-3 rounded-lg font-semibold">
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
    </div>
  );
};

export default CourseDetail;
