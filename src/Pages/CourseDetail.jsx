import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Register from "../Components/Register";
import Footer from "../Components/Footer";
import BackButton from "../Components/BackButton";

/* ================================
   COURSE DATA
   ================================ */

const data = [
  /* ===== Business Analytics ===== */
  {
    slug: "desktop-publishing-microsoft-office-basic-computer-operation",
    title: "Desktop Publishing & Microsoft Office: Basic Computer Operation",
    description:
      "Develop essential computer and internet skills, including word processing, spreadsheets, presentations, email, and online safety.",
    currentStudents: "150 students currently taking this course",
    duration: "Duration: 4 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure:
      "/brochures/Desktop Publishing & Microsoft Office_ Basic Computer Operation.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Computers",
        bullets: [
          "Computer hardware and software basics",
          "Operating systems overview",
          "Basic troubleshooting",
        ],
      },
      {
        step: "2. Productivity Tools",
        bullets: [
          "Microsoft Word basics",
          "Excel for beginners",
          "PowerPoint for presentations",
        ],
      },
      {
        step: "3. Internet and Communication",
        bullets: [
          "Email setup and usage",
          "Internet browsing",
          "Using search engines",
        ],
      },
      {
        step: "4. Digital Safety",
        bullets: [
          "Online privacy",
          "Password management",
          "Avoiding scams and malware",
        ],
      },
      {
        step: "5. Collaboration Tools",
        bullets: [
          "Using Google Workspace",
          "File sharing and cloud storage",
          "Basic video conferencing tools",
        ],
      },
      {
        step: "6. Practical Skills",
        bullets: [
          "Creating and formatting documents",
          "Basic data entry",
          "Building simple presentations",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Prepare a full digital presentation",
          "Use multiple tools (Word, Excel, PowerPoint)",
          "Present project outcomes",
        ],
      },
    ],
  },
  {
    slug: "branding-and-promotions",
    title: "Branding and Promotions",
    description:
      "Develop strong branding and promotional strategies to enhance business visibility. Learn to create brand identity, manage campaigns, and leverage marketing channels.",
    currentStudents: "140 students currently taking this course",
    duration: "Duration: 4-6 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure: "/brochures/Branding and Promotions.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Fundamentals of Branding",
        bullets: [
          "Understanding brand identity and positioning",
          "Elements of strong branding",
          "Brand storytelling",
        ],
      },
      {
        step: "2. Promotions and Campaigns",
        bullets: [
          "Designing promotional campaigns",
          "Traditional vs digital promotion channels",
          "Budgeting for promotions",
        ],
      },
      {
        step: "3. Advertising Techniques",
        bullets: [
          "Crafting compelling ad messages",
          "Print, radio, and digital advertising",
          "Measuring campaign effectiveness",
        ],
      },
      {
        step: "4. Digital Brand Building",
        bullets: [
          "Building a digital presence",
          "Social media branding",
          "Online reputation management",
        ],
      },
      {
        step: "5. Public Relations",
        bullets: [
          "Crisis communication management",
          "Media relations",
          "Event promotions",
        ],
      },
      {
        step: "6. Brand Monitoring and Analysis",
        bullets: [
          "Brand audit frameworks",
          "Consumer perception analysis",
          "Tracking KPIs",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Create a branding and promotion strategy",
          "Execute a mini promotional campaign",
          "Analyze campaign impact",
        ],
      },
    ],
  },

  /* ===== Digital Marketing ===== */
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Learn the full spectrum of digital marketing techniques including SEO, SEM, content marketing, and analytics to build impactful online campaigns.",
    currentStudents: "220 students currently taking this course",
    duration: "Duration: 6-8 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure: "/brochures/_Digital Marketing.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Digital Marketing",
        bullets: [
          "Digital marketing vs traditional marketing",
          "Current trends and future outlook",
          "Key platforms and channels",
        ],
      },
      {
        step: "2. Search Engine Optimization (SEO)",
        bullets: [
          "Keyword research and planning",
          "On-page and off-page optimization",
          "SEO tools and analytics",
        ],
      },
      {
        step: "3. Social Media Marketing",
        bullets: [
          "Platform-specific strategies (Facebook, Instagram, LinkedIn, Twitter)",
          "Content scheduling and calendars",
          "Engagement and community building",
        ],
      },
      {
        step: "4. Content Marketing",
        bullets: [
          "Developing content strategies",
          "Blogging, video, and infographics",
          "Storytelling for engagement",
        ],
      },
      {
        step: "5. Paid Advertising",
        bullets: [
          "Google Ads and social ads",
          "Pay-per-click (PPC) strategies",
          "Budgeting and ROI measurement",
        ],
      },
      {
        step: "6. Email and Mobile Marketing",
        bullets: [
          "Email campaign design",
          "Segmentation and personalization",
          "SMS and mobile app strategies",
        ],
      },
      {
        step: "7. Analytics and Reporting",
        bullets: [
          "Google Analytics fundamentals",
          "Campaign performance tracking",
          "Reporting for stakeholders",
        ],
      },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description:
      "Gain practical skills to create, manage, and optimize social media campaigns across different platforms for engagement and growth.",
    currentStudents: "160 students currently taking this course",
    duration: "Duration: 4-6 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure: "/brochures/_Social Media Marketing.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Social Media Landscape",
        bullets: [
          "Overview of major social platforms",
          "Understanding audience demographics",
          "Trends in social media",
        ],
      },
      {
        step: "2. Strategy Development",
        bullets: [
          "Defining goals and objectives",
          "Identifying target audiences",
          "Crafting a content plan",
        ],
      },
      {
        step: "3. Content Creation and Management",
        bullets: [
          "Visual and written content strategies",
          "Using design tools (Canva, Adobe Express)",
          "Content calendars and scheduling tools",
        ],
      },
      {
        step: "4. Engagement and Community Building",
        bullets: [
          "Responding to followers",
          "Growing communities",
          "Crisis management",
        ],
      },
      {
        step: "5. Advertising on Social Media",
        bullets: [
          "Setting up ad campaigns",
          "Audience targeting",
          "Analyzing ad performance",
        ],
      },
      {
        step: "6. Analytics and Measurement",
        bullets: [
          "Key metrics for social media",
          "Tools for monitoring performance",
          "Adjusting strategies based on data",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Develop a social media strategy for a brand",
          "Launch and manage a mini campaign",
          "Present performance results",
        ],
      },
    ],
  },

  /* ===== Data & Artificial Intelligence ===== */
  {
    slug: "data-analysis-fundamentals-powerbi-excel",
    title: "Data Analysis Fundamentals: Introduction to PowerBI & Excel",
    description:
      "Learn the basics of data analysis with industry-leading tools like Microsoft Excel and PowerBI. Gain the ability to clean, organize, visualize, and interpret datasets for informed decision-making.",
    currentStudents: "200 students currently taking this course",
    duration: "Duration: 5-6 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure:
      "/brochures/Data Analysis Fundamentals_ Introduction to PowerBI & Excel.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Data Analysis",
        bullets: [
          "Understanding the role of data in decision-making",
          "Types of data and their applications",
          "Overview of Excel and PowerBI capabilities",
        ],
      },
      {
        step: "2. Excel for Data Analysis",
        bullets: [
          "Data entry and formatting best practices",
          "Formulas, functions, and pivot tables",
          "Basic statistical analysis in Excel",
        ],
      },
      {
        step: "3. PowerBI Essentials",
        bullets: [
          "Importing and transforming data",
          "Data modeling basics",
          "Creating visual dashboards and reports",
        ],
      },
      {
        step: "4. Data Cleaning and Preparation",
        bullets: [
          "Identifying and handling missing data",
          "Data validation techniques",
          "Combining datasets from multiple sources",
        ],
      },
      {
        step: "5. Data Visualization",
        bullets: [
          "Designing effective charts and graphs",
          "Storytelling with data",
          "Interactive dashboards in PowerBI",
        ],
      },
      {
        step: "6. Practical Applications",
        bullets: [
          "Business case studies",
          "Hands-on exercises with real datasets",
          "Best practices for presenting insights",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Analyze a dataset using Excel and PowerBI",
          "Develop a dashboard with actionable insights",
          "Present findings in a professional format",
        ],
      },
    ],
  },
  {
    slug: "advanced-data-analysis-powerbi-excel",
    title: "Advanced Data Analysis Using PowerBI & Excel",
    description:
      "Build advanced proficiency in PowerBI and Excel, learning complex data modeling, predictive analytics, and business intelligence reporting.",
    currentStudents: "140 students currently taking this course",
    duration: "Duration: 6-8 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure:
      "/brochures/Advanced Data Analysis using PowerBI & Excel.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Advanced Excel Techniques",
        bullets: [
          "Advanced formulas and functions",
          "Macros and VBA automation",
          "Advanced data visualization",
        ],
      },
      {
        step: "2. Advanced PowerBI Features",
        bullets: [
          "DAX functions and calculations",
          "Data modeling with relationships",
          "Optimizing large datasets",
        ],
      },
      {
        step: "3. Predictive Analytics",
        bullets: [
          "Regression analysis and forecasting",
          "Time-series analysis",
          "Predictive dashboards in PowerBI",
        ],
      },
      {
        step: "4. Business Intelligence (BI) Reporting",
        bullets: [
          "Designing BI reports",
          "Real-time dashboards",
          "KPI-driven reporting",
        ],
      },
      {
        step: "5. Integration and Automation",
        bullets: [
          "Connecting PowerBI with external data sources",
          "Automated data refresh",
          "Integration with Microsoft services",
        ],
      },
      {
        step: "6. Case Studies and Industry Applications",
        bullets: [
          "Finance and budgeting use cases",
          "Marketing and sales dashboards",
          "Operational efficiency tracking",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Develop an advanced BI dashboard",
          "Incorporate predictive elements",
          "Present actionable recommendations",
        ],
      },
    ],
  },
  {
    slug: "advanced-data-analysis-python-sql",
    title: "Advanced Data Analysis Using Python & SQL",
    description:
      "Harness the power of Python and SQL for advanced data analysis. Learn data wrangling, querying, and advanced modeling techniques for deeper insights.",
    currentStudents: "120 students currently taking this course",
    duration: "Duration: 8 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure:
      "/brochures/Advanced Data Analysis using Python & SQL.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Python for Data",
        bullets: [
          "Python setup and libraries for data analysis",
          "Working with Pandas and NumPy",
          "Data cleaning and preprocessing",
        ],
      },
      {
        step: "2. SQL for Data Analysis",
        bullets: [
          "SQL fundamentals: SELECT, JOIN, GROUP BY",
          "Advanced queries and stored procedures",
          "Optimizing queries for performance",
        ],
      },
      {
        step: "3. Data Wrangling",
        bullets: [
          "Combining and reshaping datasets",
          "Handling outliers and anomalies",
          "Working with large data files",
        ],
      },
      {
        step: "4. Exploratory Data Analysis (EDA)",
        bullets: [
          "Statistical summaries",
          "Visual exploration with Matplotlib and Seaborn",
          "Correlation and trend analysis",
        ],
      },
      {
        step: "5. Advanced Analytics",
        bullets: [
          "Machine learning basics with Scikit-learn",
          "Clustering and classification models",
          "Feature engineering",
        ],
      },
      {
        step: "6. Real-World Applications",
        bullets: [
          "Case studies in finance, healthcare, and e-commerce",
          "Building end-to-end analysis workflows",
          "Reporting insights for stakeholders",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Analyze a complex dataset using Python and SQL",
          "Build and evaluate predictive models",
          "Present findings in a professional report",
        ],
      },
    ],
  },
  {
    slug: "big-data-fundamentals",
    title: "Big Data Fundamentals",
    description:
      "Understand the principles and technologies driving big data. Learn about distributed computing, data storage, and real-world applications of big data systems.",
    currentStudents: "100 students currently taking this course",
    duration: "Duration: 6 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure: "/brochures/Big Data Fundamentals.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Big Data",
        bullets: [
          "Definition and characteristics of big data",
          "Challenges and opportunities",
          "Big data lifecycle",
        ],
      },
      {
        step: "2. Big Data Technologies",
        bullets: [
          "Hadoop ecosystem overview",
          "MapReduce concepts",
          "Introduction to Spark",
        ],
      },
      {
        step: "3. Data Storage and Management",
        bullets: [
          "Distributed file systems (HDFS)",
          "NoSQL databases",
          "Data lakes vs warehouses",
        ],
      },
      {
        step: "4. Data Processing Frameworks",
        bullets: [
          "Batch processing",
          "Stream processing",
          "Real-time analytics",
        ],
      },
      {
        step: "5. Cloud and Big Data",
        bullets: [
          "Big data in cloud environments",
          "AWS, Azure, and Google Cloud tools",
          "Scalability and cost optimization",
        ],
      },
      {
        step: "6. Applications of Big Data",
        bullets: [
          "Use cases in retail, finance, healthcare",
          "Predictive analytics with big data",
          "Case studies from industry",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Design a big data architecture",
          "Implement a sample pipeline",
          "Analyze insights from large datasets",
        ],
      },
    ],
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    description:
      "Gain a solid understanding of Artificial Intelligence and Machine Learning concepts, algorithms, and their applications across industries.",
    currentStudents: "150 students currently taking this course",
    duration: "Duration: 8 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure: "/brochures/AI & Machine Learning.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to AI",
        bullets: [
          "History and evolution of AI",
          "Types of AI (narrow, general, super AI)",
          "Ethical considerations",
        ],
      },
      {
        step: "2. Machine Learning Basics",
        bullets: [
          "Supervised vs unsupervised learning",
          "Key algorithms and models",
          "Evaluation metrics",
        ],
      },
      {
        step: "3. Deep Learning Essentials",
        bullets: [
          "Neural networks and architecture",
          "Backpropagation explained",
          "Applications of deep learning",
        ],
      },
      {
        step: "4. Natural Language Processing (NLP)",
        bullets: [
          "Text processing and sentiment analysis",
          "Chatbots and conversational AI",
          "Case studies in NLP",
        ],
      },
      {
        step: "5. Computer Vision",
        bullets: [
          "Image classification and object detection",
          "Image preprocessing techniques",
          "Industry use cases of computer vision",
        ],
      },
      {
        step: "6. AI in Business",
        bullets: [
          "AI adoption strategies",
          "AI for automation and optimization",
          "Future trends in AI",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Develop a machine learning model",
          "Apply to a real dataset",
          "Present insights and outcomes",
        ],
      },
    ],
  },
  {
    slug: "generative-ai-fundamentals-business",
    title: "Generative AI Fundamentals for Business",
    description:
      "Explore the world of Generative AI and how businesses can leverage tools like ChatGPT, DALL·E, and other generative models to transform processes and creativity.",
    currentStudents: "110 students currently taking this course",
    duration: "Duration: 6 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure: "/brochures/Generative AI Fundamentals for Business.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Generative AI",
        bullets: [
          "What is Generative AI?",
          "Applications in text, image, and audio",
          "Key generative models",
        ],
      },
      {
        step: "2. Large Language Models (LLMs)",
        bullets: [
          "How LLMs work",
          "Capabilities and limitations",
          "Use cases in business",
        ],
      },
      {
        step: "3. Generative AI Tools",
        bullets: [
          "Using ChatGPT for productivity",
          "DALL·E for design and creativity",
          "Other generative AI platforms",
        ],
      },
      {
        step: "4. Business Applications",
        bullets: [
          "Customer service automation",
          "Content generation",
          "Data-driven decision support",
        ],
      },
      {
        step: "5. Ethical and Legal Concerns",
        bullets: [
          "Bias and misinformation risks",
          "Copyright issues",
          "Responsible AI practices",
        ],
      },
      {
        step: "6. Hands-On Exercises",
        bullets: [
          "Experiment with generative tools",
          "Develop a business use case",
          "Present findings",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Design a generative AI solution for a business problem",
          "Demonstrate workflow",
          "Present results to peers",
        ],
      },
    ],
  },
  {
    slug: "generative-ai-vibe-coding-ml-fundamentals",
    title: "Generative AI, Vibe Coding & Machine Learning Fundamental",
    description:
      "Combine generative AI, creative coding ('vibe coding') and ML fundamentals to create immersive, generative projects. Build foundations for creative, AI-driven experiences.",
    currentStudents: "130 students currently taking this course",
    duration: "Duration: 8 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure:
      "/brochures/Generative AI, Vibe Coding & ML Fundamentals.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Generative AI and Vibe Coding",
        bullets: [
          "What is Generative AI?",
          "what is machine learning?",
          "Overview of vibe coding",
          "Key generative models",
        ],
      },
      {
        step: "2. Deep Dive into Large Language Models (LLMs)",
        bullets: [
          "How LLMs work",
          "Capabilities and limitations",
          "Use cases in creative coding",
        ],
      },
      {
        step: "3. Generative AI Tools",
        bullets: [
          "Using ChatGPT for creative coding",
          "DALL·E for design and creativity",
          "Other generative AI platforms",
          "Introduction to ML frameworks (TensorFlow, PyTorch)",
          "Building simple ML models",
          "Integrating ML with generative AI",
        ],
      },
      {
        step: "4. Vibe Coding and Creative Applications",
        bullets: [
          "Creating generative art and music",
          "Interactive installations",
          "Combining AI with traditional coding",
          "Project ideation and brainstorming",
          "Prototyping generative projects",
          "Iterative development and feedback",
          "Showcasing and sharing work",
        ],
      },
      {
        step: "5. Ethical and Legal Concerns",
        bullets: [
          "Bias and misinformation risks",
          "Copyright issues",
          "Responsible AI practices",
        ],
      },
      {
        step: "6. Hands-On Exercises",
        bullets: [
          "Experiment with generative tools",
          "Develop a creative coding project",
          "Present findings",
          "Vibe coding challenges",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Design a generative AI and vibe coding project",
          "Incorporate machine learning elements",
          "Present results to peers",
        ],
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    description:
      "Learn how to implement AI-driven automation solutions to streamline business processes, enhance productivity, and drive innovation.",
    currentStudents: "80 students currently taking this course",
    duration: "Duration: 4-8 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure: "/brochures/AI & Automation.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to AI and Automation",
        bullets: [
          "Overview of AI technologies",
          "Types of automation (RPA, intelligent automation)",
          "Benefits and challenges of AI-driven automation",
        ],
      },
      {
        step: "2. AI Technologies for Automation",
        bullets: [
          "Machine learning and predictive analytics",
          "Natural Language Processing (NLP)",
          "Computer vision",
          "Robotic Process Automation (RPA)",
          "Intelligent agents",
          "AI-powered chatbots",
          "AI in workflow automation",
          "AI for data processing and analysis",
          "AI in customer service and support",
          "AI for marketing automation",
          "AI in supply chain and logistics",
          "AI for HR and recruitment",
          "AI in finance and accounting",
          "AI for IT operations",
          "AI in product development",
          "AI for sales automation",
          "AI in quality assurance",
          "AI for risk management",
          "AI in compliance and regulatory processes",
          "AI for innovation and R&D",
          "AI in strategic decision-making",
          "AI for competitive analysis",
          "AI in business intelligence",
          "AI for market research",
          "AI in customer insights",
          "AI for trend analysis",
          "AI in performance monitoring",
        ],
      },
      {
        step: "3. AI Tools for Automation",
        bullets: [
          "Overview of popular AI and automation tools",
          "Tool selection criteria",
          "Integration with existing systems",
          "Popular AI and automation platforms (UiPath, Automation Anywhere, Blue Prism)",
          "AI development frameworks (TensorFlow, PyTorch)",
          "Cloud-based AI services (AWS AI, Google Cloud AI, Azure AI)",
        ],
      },
      {
        step: "4. Business Applications of AI & Automation",
        bullets: [
          "Case studies of successful AI automation implementations",
          "Identifying automation opportunities",
          "Measuring ROI and impact",
          "AI in customer service automation",
          "AI for content generation",
          "AI in data analysis and reporting",
        ],
      },
      {
        step: "5. Ethical and Legal Concerns",
        bullets: [
          "Bias and misinformation risks",
          "Copyright issues",
          "Responsible AI and Automation practices",
          "Data privacy and security",
          "Regulatory compliance",
          "Ethical considerations in AI deployment",
        ],
      },
      {
        step: "6. Hands-On Exercises",
        bullets: [
          "Experiment with AI and automation tools",
          "Develop a simple automation workflow",
          "Present findings",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Design an AI-driven automation solution for a business process",
          "Implement a prototype",
          "Present results to peers",
        ],
      },
    ],
  },

  /* ===== Digital & Soft Skills ===== */
  {
    slug: "project-management-pmp-prince2-fundamentals",
    title: "Project Management - PMP [Prince2] Fundamentals",
    description:
      "Master essential project management methodologies including PMP and Prince2. This course equips learners with the skills to initiate, plan, execute, monitor, and close projects successfully.",
    currentStudents: "180 students currently taking this course",
    duration: "Duration: 6-8 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure:
      "/brochures/Project Management Professional (PMP®) Certification Training.pdf",
    /* "https://docs.google.com/document/d/1UK47kC7TCpVdDdu1BfCmnt5nKJBmWFtnVRTMsfRpBeo/export?format=pdf", To use Google Doc Directly add /export?format=pdf */
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Project Management",
        bullets: [
          "Overview of PMP and Prince2 frameworks",
          "Key roles and responsibilities in projects",
          "Project lifecycle and methodology differences",
        ],
      },
      {
        step: "2. Project Initiation",
        bullets: [
          "Defining project objectives and scope",
          "Identifying stakeholders",
          "Creating project charters",
        ],
      },
      {
        step: "3. Planning and Scheduling",
        bullets: [
          "Work breakdown structure (WBS)",
          "Project scheduling tools (Gantt charts, CPM)",
          "Resource allocation and budgeting",
        ],
      },
      {
        step: "4. Project Execution",
        bullets: [
          "Managing project teams",
          "Communication planning",
          "Quality assurance techniques",
        ],
      },
      {
        step: "5. Monitoring and Controlling",
        bullets: [
          "Performance metrics (KPIs, earned value analysis)",
          "Risk management strategies",
          "Change control processes",
        ],
      },
      {
        step: "6. Closing Projects",
        bullets: [
          "Final deliverables and approvals",
          "Lessons learned documentation",
          "Knowledge transfer and handover",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Simulate a real-world project",
          "Apply both PMP and Prince2 methodologies",
          "Present project results",
        ],
      },
    ],
  },
  {
    slug: "software-engineering-python",
    title: "Software Engineering with Python",
    description:
      "Develop a strong foundation in software engineering principles while learning Python, one of the most versatile programming languages in the world.",
    currentStudents: "180 students currently taking this course",
    duration: "Duration: 8-10 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure: "/brochures/Python Software Engineering.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Software Engineering",
        bullets: [
          "Software development lifecycle (SDLC)",
          "Agile vs Waterfall methodologies",
          "Role of software engineers",
        ],
      },
      {
        step: "2. Python Fundamentals",
        bullets: [
          "Syntax and data types",
          "Control flow and loops",
          "Functions and error handling",
        ],
      },
      {
        step: "3. Object-Oriented Programming (OOP)",
        bullets: [
          "Classes and objects",
          "Inheritance and polymorphism",
          "Encapsulation and abstraction",
        ],
      },
      {
        step: "4. Data Structures and Algorithms",
        bullets: [
          "Lists, stacks, queues, and dictionaries",
          "Sorting and searching algorithms",
          "Time and space complexity",
        ],
      },
      {
        step: "5. Python for Software Engineering",
        bullets: [
          "File handling and I/O",
          "Working with APIs",
          "Unit testing and debugging",
        ],
      },
      {
        step: "6. Software Development Best Practices",
        bullets: [
          "Version control with Git",
          "Code documentation",
          "Collaboration in teams",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Develop a Python-based application",
          "Apply engineering principles",
          "Present project to peers",
        ],
      },
    ],
  },
  {
    slug: "frontend-web-development",
    title: "Frontend Web Development",
    description:
      "Master the art of building responsive and interactive websites using HTML, CSS, and JavaScript along with modern frontend frameworks.",
    currentStudents: "210 students currently taking this course",
    duration: "Duration: 8 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure: "/brochures/_Frontend Web Development.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Web Development Basics",
        bullets: [
          "Understanding how the web works",
          "Client-side vs server-side",
          "Overview of web technologies",
        ],
      },
      {
        step: "2. HTML Essentials",
        bullets: [
          "HTML tags and structure",
          "Forms, tables, and semantic HTML",
          "Accessibility standards",
        ],
      },
      {
        step: "3. CSS for Styling",
        bullets: [
          "Selectors and properties",
          "Flexbox and grid layout",
          "Responsive design techniques",
        ],
      },
      {
        step: "4. JavaScript Fundamentals",
        bullets: [
          "Variables and functions",
          "DOM manipulation",
          "Event handling",
        ],
      },
      {
        step: "5. Frameworks and Libraries",
        bullets: [
          "Introduction to ReactJS",
          "Component-based design",
          "State management basics",
        ],
      },
      {
        step: "6. Project Workflow",
        bullets: [
          "Using Git and GitHub",
          "Deploying web applications",
          "Debugging and performance optimization",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Build a fully responsive website",
          "Incorporate interactivity",
          "Deploy to a live server",
        ],
      },
    ],
  },
  {
    slug: "fullstack-web-development-reactjs-nextjs-nodejs",
    title: "Fullstack Web Development using ReactJS, NextJS & NodeJS",
    description:
      "Become a fullstack developer by learning how to design, build, and deploy complete web applications using ReactJS, NextJS, and NodeJS.",
    currentStudents: "230 students currently taking this course",
    duration: "Duration: 10-12 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure:
      "/brochures/Fullstack Web Development (ReactJS, NextJS, NodeJS).pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Fullstack Development",
        bullets: [
          "Frontend vs backend",
          "Client-server architecture",
          "Project workflow",
        ],
      },
      {
        step: "2. Frontend with ReactJS",
        bullets: [
          "Components and props",
          "State and hooks",
          "React Router and navigation",
        ],
      },
      {
        step: "3. Server-Side with NextJS",
        bullets: [
          "Server-side rendering (SSR)",
          "Static site generation (SSG)",
          "API routes in NextJS",
        ],
      },
      {
        step: "4. Backend with NodeJS",
        bullets: [
          "Building RESTful APIs",
          "ExpressJS framework",
          "Database integration (MongoDB, SQL)",
        ],
      },
      {
        step: "5. Authentication & Security",
        bullets: [
          "User authentication with JWT",
          "Role-based access control",
          "Securing applications against vulnerabilities",
        ],
      },
      {
        step: "6. Deployment & DevOps Basics",
        bullets: [
          "Deploying apps on cloud platforms",
          "CI/CD pipelines",
          "Version control in teams",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Build a fullstack web app",
          "Integrate frontend and backend",
          "Deploy to production",
        ],
      },
    ],
  },
  {
    slug: "mobile-app-development-flutter-react-native",
    title: "Mobile App Development using Flutter or React Native",
    description:
      "Learn how to build cross-platform mobile applications for Android and iOS using Flutter or React Native.",
    currentStudents: "190 students currently taking this course",
    duration: "Duration: 8-10 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure:
      "/brochures/_Mobile App Development (Flutter or React Native).pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Mobile App Development Basics",
        bullets: [
          "Understanding mobile ecosystems",
          "Native vs cross-platform development",
          "Tools and setup",
        ],
      },
      {
        step: "2. Flutter Fundamentals",
        bullets: [
          "Widgets and layouts",
          "State management",
          "Navigation and routing",
        ],
      },
      {
        step: "3. React Native Fundamentals",
        bullets: [
          "JSX and components",
          "React Native APIs",
          "Navigation with React Navigation",
        ],
      },
      {
        step: "4. Backend Integration",
        bullets: [
          "Connecting apps to APIs",
          "Data storage and sync",
          "Push notifications",
        ],
      },
      {
        step: "5. Mobile UI/UX",
        bullets: [
          "Designing for different screen sizes",
          "User interaction best practices",
          "Accessibility in mobile apps",
        ],
      },
      {
        step: "6. Testing and Deployment",
        bullets: [
          "Debugging and profiling",
          "Testing strategies",
          "Publishing to Play Store and App Store",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Build a cross-platform mobile app",
          "Integrate backend services",
          "Deploy to both platforms",
        ],
      },
    ],
  },

  /* ===== Cloud & IT Infrastructure ===== */
  {
    slug: "cloud-computing-administration-aws-azure-google",
    title: "Cloud Computing and Administration (AWS, Azure & Google)",
    description:
      "Gain expertise in cloud platforms like AWS, Azure, and Google Cloud. Learn how to deploy, manage, and secure cloud infrastructure.",
    currentStudents: "160 students currently taking this course",
    duration: "Duration: 8-10 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure:
      "/brochures/Cloud Computing and Administration (AWS, Azure & Google).pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Cloud Computing",
        bullets: [
          "Definition and benefits",
          "Types of cloud services (IaaS, PaaS, SaaS)",
          "Cloud deployment models",
        ],
      },
      {
        step: "2. AWS Essentials",
        bullets: [
          "Compute (EC2), storage (S3), and networking",
          "IAM and security basics",
          "Deploying simple applications",
        ],
      },
      {
        step: "3. Microsoft Azure",
        bullets: [
          "Virtual machines and storage accounts",
          "Azure Active Directory",
          "Azure DevOps basics",
        ],
      },
      {
        step: "4. Google Cloud Platform",
        bullets: [
          "Compute Engine and Cloud Storage",
          "BigQuery and data analytics",
          "Identity and access management",
        ],
      },
      {
        step: "5. Cloud Administration",
        bullets: [
          "Monitoring and logging",
          "Automation and Infrastructure as Code (IaC)",
          "Backup and disaster recovery",
        ],
      },
      {
        step: "6. Security and Compliance",
        bullets: [
          "Encryption and identity management",
          "Compliance standards (GDPR, HIPAA)",
          "Securing multi-cloud environments",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Deploy a multi-service cloud solution",
          "Implement monitoring and security",
          "Present results",
        ],
      },
    ],
  },
  {
    slug: "devops-engineering",
    title: "DevOps Engineering",
    description:
      "Master DevOps practices including CI/CD pipelines, automation, and containerization to streamline development and operations.",
    currentStudents: "140 students currently taking this course",
    duration: "Duration: 8 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure: "/brochures/DevOps Engineering.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to DevOps",
        bullets: [
          "DevOps culture and principles",
          "Benefits of DevOps adoption",
          "DevOps tools landscape",
        ],
      },
      {
        step: "2. Version Control with Git",
        bullets: [
          "Branching and merging strategies",
          "Pull requests and collaboration",
          "Git workflows",
        ],
      },
      {
        step: "3. CI/CD Pipelines",
        bullets: [
          "Continuous integration principles",
          "Pipeline setup with Jenkins/GitHub Actions",
          "Automated testing",
        ],
      },
      {
        step: "4. Containerization and Orchestration",
        bullets: [
          "Docker basics",
          "Kubernetes orchestration",
          "Scaling containerized applications",
        ],
      },
      {
        step: "5. Infrastructure as Code",
        bullets: [
          "Terraform and Ansible basics",
          "Automating server provisioning",
          "Configuration management",
        ],
      },
      {
        step: "6. Monitoring and Logging",
        bullets: [
          "Prometheus and Grafana",
          "Centralized logging",
          "Alerting and incident response",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Build a CI/CD pipeline",
          "Deploy a containerized application",
          "Implement monitoring solutions",
        ],
      },
    ],
  },
  {
    slug: "software-testing-qa-basics",
    title: "Software Testing & QA Basics",
    description:
      "Gain practical knowledge of software testing methodologies, tools, and quality assurance practices to ensure software reliability.",
    currentStudents: "130 students currently taking this course",
    duration: "Duration: 6 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure: "/brochures/Software Testing & QA Basics.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Fundamentals of Software Testing",
        bullets: [
          "Why testing is important",
          "Types of testing",
          "Testing in the software lifecycle",
        ],
      },
      {
        step: "2. Manual Testing",
        bullets: [
          "Test case design",
          "Exploratory testing",
          "Defect reporting",
        ],
      },
      {
        step: "3. Automated Testing",
        bullets: [
          "Automation frameworks (Selenium, JUnit)",
          "When to automate",
          "Writing test scripts",
        ],
      },
      {
        step: "4. Functional and Non-Functional Testing",
        bullets: [
          "Regression, smoke, and sanity testing",
          "Performance and load testing",
          "Security testing basics",
        ],
      },
      {
        step: "5. QA Processes",
        bullets: [
          "Test planning and strategy",
          "Bug lifecycle",
          "Agile testing practices",
        ],
      },
      {
        step: "6. Tools and Best Practices",
        bullets: [
          "Using Jira for bug tracking",
          "Version control in QA",
          "Collaboration with developers",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Test a sample application",
          "Write and execute test cases",
          "Present QA results",
        ],
      },
    ],
  },
  {
    slug: "network-administration",
    title: "Network Administration",
    description:
      "Learn how to design, implement, and manage computer networks, ensuring security, scalability, and performance.",
    currentStudents: "125 students currently taking this course",
    duration: "Duration: 8 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure: "/brochures/Network Administration.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Networking",
        bullets: [
          "Networking basics and terminology",
          "Types of networks (LAN, WAN, WLAN)",
          "Network topologies",
        ],
      },
      {
        step: "2. Network Devices and Hardware",
        bullets: [
          "Routers, switches, and firewalls",
          "Cabling and wireless standards",
          "Network interface cards",
        ],
      },
      {
        step: "3. IP Addressing and Subnetting",
        bullets: [
          "IPv4 and IPv6 fundamentals",
          "Subnet masks and CIDR",
          "IP planning for enterprises",
        ],
      },
      {
        step: "4. Routing and Switching",
        bullets: [
          "Static vs dynamic routing",
          "Routing protocols (OSPF, BGP)",
          "VLANs and trunking",
        ],
      },
      {
        step: "5. Network Security",
        bullets: [
          "Firewalls and intrusion prevention",
          "VPNs and secure tunneling",
          "Access control policies",
        ],
      },
      {
        step: "6. Network Management and Monitoring",
        bullets: [
          "SNMP and monitoring tools",
          "Troubleshooting techniques",
          "Performance optimization",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Design and configure a small enterprise network",
          "Implement security measures",
          "Demonstrate monitoring setup",
        ],
      },
    ],
  },
  {
    slug: "cybersecurity-fundamentals",
    title: "Cybersecurity Fundamentals",
    description:
      "Understand the core concepts of cybersecurity including threats, vulnerabilities, and defense mechanisms to protect systems and networks.",
    currentStudents: "150 students currently taking this course",
    duration: "Duration: 6 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure: "/brochures/Cybersecurity Fundamental.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Cybersecurity",
        bullets: [
          "Types of cyber threats",
          "Cybersecurity principles",
          "Security in the digital era",
        ],
      },
      {
        step: "2. Cryptography Basics",
        bullets: [
          "Encryption and decryption",
          "Symmetric vs asymmetric cryptography",
          "Public key infrastructure",
        ],
      },
      {
        step: "3. Network Security",
        bullets: [
          "Firewalls and intrusion detection",
          "Secure network protocols",
          "VPNs and tunneling",
        ],
      },
      {
        step: "4. Endpoint Security",
        bullets: [
          "Securing devices and applications",
          "Antivirus and EDR tools",
          "Patch management",
        ],
      },
      {
        step: "5. Security Policies and Compliance",
        bullets: [
          "Developing security policies",
          "Incident response",
          "Compliance frameworks",
        ],
      },
      {
        step: "6. Emerging Trends",
        bullets: [
          "Cloud security",
          "IoT and mobile security",
          "AI in cybersecurity",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Conduct a security audit",
          "Implement mitigation measures",
          "Present findings",
        ],
      },
    ],
  },
  {
    slug: "hardware-engineering-fundamentals-computer-repair-maintenance",
    title:
      "Hardware Engineering Fundamentals: Basic Computer Repair & Maintenance",
    description:
      "Build foundational knowledge in computer hardware, components, and troubleshooting to understand how systems operate at a technical level.",
    currentStudents: "100 students currently taking this course",
    duration: "Duration: 6 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure: "/brochures/Hardware Engineering Fundamentals.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Hardware Engineering",
        bullets: [
          "Computer system components",
          "Input, output, and storage devices",
          "Hardware lifecycles",
        ],
      },
      {
        step: "2. Motherboards and Processors",
        bullets: [
          "CPU architecture",
          "Chipsets and sockets",
          "BIOS and firmware basics",
        ],
      },
      {
        step: "3. Memory and Storage",
        bullets: [
          "RAM and cache memory",
          "Hard drives, SSDs, and NVMe",
          "Storage performance factors",
        ],
      },
      {
        step: "4. Power Supply and Cooling",
        bullets: [
          "PSU types and ratings",
          "Cooling methods (air, liquid)",
          "Thermal management",
        ],
      },
      {
        step: "5. Peripheral Devices",
        bullets: [
          "Printers, monitors, and external devices",
          "Interface standards (USB, HDMI, DisplayPort)",
          "Troubleshooting peripherals",
        ],
      },
      {
        step: "6. Troubleshooting and Maintenance",
        bullets: [
          "Diagnosing hardware issues",
          "Preventive maintenance",
          "Replacing faulty components",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Assemble a computer system",
          "Test and troubleshoot components",
          "Document hardware build process",
        ],
      },
    ],
  },
  {
    slug: "mobile-phone-engineering-repair-assembly-maintenance",
    title:
      "Mobile Phone Engineering [Repair, Assembly & Maintenance for Android and iOS]",
    description:
      "Learn practical skills in diagnosing, repairing, and maintaining mobile phones and handheld devices.",
    currentStudents: "110 students currently taking this course",
    duration: "Duration: 6 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure:
      "/brochures/Mobile Phone Engineering (Repair & Maintenance).pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Mobile Engineering",
        bullets: [
          "Overview of mobile phone components",
          "Types of smartphones and OS",
          "Tools used in mobile repair",
        ],
      },
      {
        step: "2. Hardware Components",
        bullets: [
          "Motherboard and chipsets",
          "Display, battery, and charging ports",
          "Sensors and cameras",
        ],
      },
      {
        step: "3. Software Components",
        bullets: [
          "Mobile operating systems",
          "Flashing and firmware upgrades",
          "App troubleshooting",
        ],
      },
      {
        step: "4. Diagnostics and Repair",
        bullets: [
          "Common hardware faults",
          "Water damage repair techniques",
          "Replacing damaged parts",
        ],
      },
      {
        step: "5. Advanced Maintenance",
        bullets: [
          "Soldering and microsoldering basics",
          "Board-level repairs",
          "Safety precautions",
        ],
      },
      {
        step: "6. Customer Support and Service",
        bullets: [
          "Handling customer devices",
          "Data privacy considerations",
          "Professional repair ethics",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Perform complete repair of a faulty phone",
          "Document repair steps",
          "Present final results",
        ],
      },
    ],
  },
  {
    slug: "comptia-a-plus",
    title: "CompTIA A+",
    description:
      "Prepare for the CompTIA A+ certification with in-depth coverage of computer hardware, networking, security, and troubleshooting skills.",
    currentStudents: "115 students currently taking this course",
    duration: "Duration: 8 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure: "/brochures/CompTIA A+.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to CompTIA A+",
        bullets: [
          "Certification overview",
          "Exam domains",
          "Study and preparation tips",
        ],
      },
      {
        step: "2. Hardware",
        bullets: [
          "PC components and motherboards",
          "Storage devices and power supplies",
          "Peripherals and troubleshooting",
        ],
      },
      {
        step: "3. Networking",
        bullets: [
          "Networking concepts and protocols",
          "Configuring network devices",
          "Wi-Fi and wired connectivity",
        ],
      },
      {
        step: "4. Mobile Devices",
        bullets: [
          "Mobile hardware components",
          "Operating systems",
          "Mobile device management",
        ],
      },
      {
        step: "5. Operating Systems",
        bullets: [
          "Windows, macOS, and Linux basics",
          "Installation and configuration",
          "Command-line tools",
        ],
      },
      {
        step: "6. Security and Troubleshooting",
        bullets: [
          "Securing devices and networks",
          "Common security issues",
          "System troubleshooting",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Simulated troubleshooting scenarios",
          "Hands-on system repair",
          "Prepare a study roadmap",
        ],
      },
    ],
  },

  /* ===== Design & Creativity ===== */
  {
    slug: "basic-graphics-design-video-editing-canva-capcut",
    title: "Basic Graphics Design & Video Editing using Canva and Capcut",
    description:
      "Learn the fundamentals of graphic design and video editing using user-friendly tools like Canva and Capcut to create stunning visuals and engaging videos. Perfect for beginners looking to enhance their digital content creation skills.",
    currentStudents: "200+ students currently taking this course",
    duration: "Duration: 6 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure:
      "/brochures/Basic Graphics Design & Video Editing (Canva & CapCut).pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Graphic Design Principles & Elements",
        bullets: [
          "Principles of design",
          "Typography and color theory",
          "Understanding visual hierarchy",
          "Design thinking process",
        ],
      },
      {
        step: "2. Tools and Software",
        bullets: [
          "Adobe Photoshop basics",
          "Adobe Illustrator for vector design",
          "Canva and other design platforms",
        ],
      },
      {
        step: "3. Branding and Identity",
        bullets: [
          "Logo design fundamentals",
          "Creating brand guidelines",
          "Designing marketing materials",
        ],
      },
      {
        step: "4. Digital Design",
        bullets: [
          "Designing for social media",
          "UI elements for apps and websites",
          "Responsive design considerations",
        ],
      },
      {
        step: "5. Print Design",
        bullets: [
          "Designing posters and flyers",
          "Business cards and brochures",
          "Preparing designs for print",
        ],
      },
      {
        step: "6. Portfolio Building",
        bullets: [
          "Curating a design portfolio",
          "Showcasing projects",
          "Presenting to clients",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Design a complete brand identity",
          "Develop digital and print assets",
          "Present final portfolio",
        ],
      },
    ],
  },
  {
    slug: "graphic-design-video-editing-photoshop-coreldraw-premiere-after-effects",
    title:
      "Graphic Design & Video Editing using Photoshop, CorelDRAW and Adobe Premiere/After Effects",
    description:
      "Gain advanced skills in graphic design and video editing using industry-standard software like Adobe Photoshop, CorelDRAW, Adobe Premiere, and After Effects. Learn to create stunning visuals and compelling video content for various media platforms.",
    currentStudents: "140 students currently taking this course",
    duration: "Duration: 6 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure:
      "/brochures/Advanced Graphics Design & Video Editing (CorelDraw, Photoshop & Premiere Pro).pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Graphic Design Principles & Elements",
        bullets: [
          "Principles of design",
          "Typography and color theory",
          "Understanding visual hierarchy",
          "Design thinking process",
        ],
      },
      {
        step: "2. Tools and Software",
        bullets: [
          "Adobe Photoshop basics",
          "Adobe Illustrator for vector design",
          "Canva and other design platforms",
        ],
      },
      {
        step: "3. Branding and Identity",
        bullets: [
          "Logo design fundamentals",
          "Creating brand guidelines",
          "Designing marketing materials",
        ],
      },
      {
        step: "4. Digital Design",
        bullets: [
          "Designing for social media",
          "UI elements for apps and websites",
          "Responsive design considerations",
        ],
      },
      {
        step: "5. Print Design",
        bullets: [
          "Designing posters and flyers",
          "Business cards and brochures",
          "Preparing designs for print",
        ],
      },
      {
        step: "6. Portfolio Building",
        bullets: [
          "Curating a design portfolio",
          "Showcasing projects",
          "Presenting to clients",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Design a complete brand identity",
          "Develop digital and print assets",
          "Present final portfolio",
        ],
      },
    ],
  },
  {
    slug: "product-design-ui-ux",
    title: "Product Design [UI/UX]",
    description:
      "Learn how to design user-friendly and visually appealing interfaces while focusing on delivering great user experiences across digital products.",
    currentStudents: "120 students currently taking this course",
    duration: "Duration: 7 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure: "/brochures/Product Design UI_UX Design.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to UI/UX",
        bullets: [
          "Difference between UI and UX",
          "Design thinking principles",
          "User-centered design process",
        ],
      },
      {
        step: "2. Research and Wireframing",
        bullets: [
          "User research methods",
          "Creating personas",
          "Wireframing tools and techniques",
        ],
      },
      {
        step: "3. Visual Design",
        bullets: [
          "Typography and color schemes",
          "Design systems",
          "Layout principles",
        ],
      },
      {
        step: "4. Interaction Design",
        bullets: [
          "Prototyping with Figma/Adobe XD",
          "Usability testing",
          "Designing for accessibility",
        ],
      },
      {
        step: "5. UX Writing",
        bullets: [
          "Microcopy and user guidance",
          "Tone and clarity in UX",
          "Error messages and notifications",
        ],
      },
      {
        step: "6. Developer Handoff",
        bullets: [
          "Exporting assets",
          "Design specs for developers",
          "Collaboration in product teams",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Design a complete app or website",
          "Conduct usability testing",
          "Deliver final prototype",
        ],
      },
    ],
  },

  //* ===== Kids Courses ===== */
  {
    slug: "basic-kids-coding-class",
    title: "Basic Kids Coding Class",
    description:
      "Introduce children to programming concepts through fun, engaging activities using block-based coding and beginner-friendly languages.",
    currentStudents: "80 students currently taking this course",
    duration: "Duration: 4 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure: "/brochures/Basic Kids Coding Class.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Coding for Kids",
        bullets: [
          "Basic computer concepts",
          "Logic and problem-solving",
          "Introduction to Scratch programming",
        ],
      },
      {
        step: "2. Creating Animations",
        bullets: [
          "Building simple animations",
          "Using sprites and backgrounds",
          "Adding sound and effects",
        ],
      },
      {
        step: "3. Building Games",
        bullets: [
          "Game design principles",
          "Creating interactive games",
          "Sharing games online",
        ],
      },
      {
        step: "4. Storytelling with Code",
        bullets: [
          "Designing interactive stories",
          "Using coding blocks for narration",
          "Animating characters",
        ],
      },
      {
        step: "5. Introduction to Python for Kids",
        bullets: [
          "Basic Python syntax",
          "Variables and loops",
          "Mini Python projects",
        ],
      },
      {
        step: "6. Creativity with Code",
        bullets: [
          "Art and music coding projects",
          "Collaborative coding activities",
          "Encouraging innovation",
        ],
      },
      {
        step: "7. Capstone Kids Project",
        bullets: [
          "Build a small game or story",
          "Showcase creativity",
          "Present to peers",
          "Create a personal coding portfolio",
        ],
      },
    ],
  },
  {
    slug: "basic-kids-design-class",
    title: "Basic Kids Design Class",
    description:
      "Introduce children to the fundamentals of graphic design and creativity using simple, kid-friendly tools and projects. Perfect for young aspiring designers.",
    currentStudents: "50 students currently taking this course",
    duration: "Duration: 4 weeks",
    enrollButton: "Enroll Now",
    downloadBrochure: "/brochures/Basic Kids Design Class.pdf",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Design for Kids",
        bullets: [
          "Basic design concepts",
          "Colors, shapes, and patterns",
          "Using kid-friendly design tools",
          "Introduction to Scratch programming",
        ],
      },
      {
        step: "2. Creating Animations and Graphics",
        bullets: [
          "Building simple animations",
          "Using sprites and backgrounds",
          "Adding sound and effects",
          "Creating posters and flyers",
        ],
      },
      {
        step: "3. User Interface Design for Kids",
        bullets: [
          "Designing simple interfaces",
          "Understanding user experience",
          "Creating interactive projects",
        ],
      },
      {
        step: "4. Storytelling with Design",
        bullets: [
          "Designing interactive stories",
          "Using designs and colors for narration",
          "Animating characters",
          "Creating comic strips",
          "Designing book covers",
        ],
      },
      {
        step: "5. Various Design Tools for Kids",
        bullets: [
          "Basic Canva for kids",
          "Introduction to Tinkercad",
          "Mini design projects",
          "Basic photo editing with kid-friendly apps",
        ],
      },
      {
        step: "6. Creativity with Design",
        bullets: [
          "Art and music design projects",
          "Collaborative design activities",
          "Encouraging innovation",
          "Designing simple logos and icons",
        ],
      },
      {
        step: "7. Capstone Kids Project",
        bullets: [
          "Build a small design project",
          "Showcase creativity",
          "Present to peers",
          "Create a personal design portfolio",
        ],
      },
    ],
  },
];

const CourseDetail = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

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
    <>
     <BackButton />
      <div className="min-h-screen bg-gray-900 text-white py-20 px-6 md:px-10">
        <div className="w-10/12 mx-auto space-y-10">
          {/* Header Image */}
          <div>
            <img src="/course-details.svg" alt="course details" />
          </div>

          {/* Course Title & Description */}
          <h1 className="text-4xl font-bold text-green-500">{course.title}</h1>
          <p className="text-lg text-gray-300">{course.description}</p>

          {/* Course Meta Info */}
          <div className="flex flex-col gap-4 text-md">
            <span className="bg-white w-80 py-2 px-2 rounded-md shadow font-medium text-black">
              {course.currentStudents}
            </span>
            <span className="bg-white w-44 py-2 px-2 rounded-md shadow font-medium text-black">
              {course.duration}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-start gap-3">
            {/* Enroll Button */}
            <button
              onClick={() => setShowRegister(true)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg shadow font-semibold hover:bg-green-700"
            >
              {course.enrollButton}
            </button>

            {/* Download Brochure Button */}
            <a
              href={course.downloadBrochure}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white rounded-lg shadow font-semibold hover:bg-green-700"
            >
              Download Brochure
            </a>
          </div>

          {/* Curriculum Section */}
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

      {/* Register Popup */}
      {showRegister && (
        <Register
          preselectedCourse={course.title}
          onClose={() => setShowRegister(false)}
        />
      )}

      <Footer />
    </>
  );
};

export default CourseDetail;
