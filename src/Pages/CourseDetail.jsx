import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CongratsPopup from "../Components/CongratsPopup";

const data = [
  /* Detailed Data For Design & Digital Marketing Courses */
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
    currentStudents: "123 students currently taking this course",
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

  {
    slug: "graphic-design",
    title: "Graphic Design",
    description:
      "Master the principles of visual communication with our Graphic Design course. Learn how to create compelling designs using industry-standard tools like Adobe Photoshop, Illustrator, and Canva. Develop your creativity and technical skills to produce professional-quality graphics for digital and print media.",
    currentStudents: "210 students currently taking this course",
    duration: "Duration 4-6 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Graphic Design",
        bullets: [
          "Overview of graphic design and its applications",
          "Principles of design: balance, contrast, alignment, repetition",
          "Understanding color theory and typography",
          "Tools used in the design industry",
        ],
      },
      {
        step: "2. Adobe Photoshop Essentials",
        bullets: [
          "Getting started with Photoshop interface and tools",
          "Photo editing and retouching techniques",
          "Working with layers, masks, and filters",
          "Designing simple graphics and web assets",
        ],
      },
      {
        step: "3. Adobe Illustrator Basics",
        bullets: [
          "Vector vs raster graphics explained",
          "Creating logos and icons using Illustrator",
          "Working with paths, shapes, and text",
          "Using gradients, patterns, and effects",
        ],
      },
      {
        step: "4. Layout and Composition",
        bullets: [
          "Understanding layout design and visual hierarchy",
          "Creating brochures, posters, and flyers",
          "Grid systems and alignment techniques",
          "Exporting designs for print and digital",
        ],
      },
      {
        step: "5. Branding and Identity Design",
        bullets: [
          "Designing logos and brand identity systems",
          "Creating brand style guides",
          "Visual storytelling and brand consistency",
          "Case studies of successful branding projects",
        ],
      },
      {
        step: "6. Web and Social Media Graphics",
        bullets: [
          "Designing banners, thumbnails, and ads for social media",
          "Creating responsive web graphics",
          "Optimizing images for performance and quality",
          "Templates and tools for social content",
        ],
      },
      {
        step: "7. Portfolio Development",
        bullets: [
          "Building a professional design portfolio",
          "Organizing your work for maximum impact",
          "Presenting projects with mockups",
          "Preparing for job applications or freelancing",
        ],
      },
      {
        step: "8. Capstone Project",
        bullets: [
          "Develop a complete branding and design package for a real or fictional company",
          "Present your design process, decisions, and final outcomes",
        ],
      },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description:
      "Dive into the world of social media and learn how to create impactful campaigns that drive engagement, traffic, and sales. This course covers major platforms like Facebook, Instagram, X (Twitter), LinkedIn, and TikTok, with hands-on strategies for content creation, audience targeting, analytics, and advertising.",
    currentStudents: "165 students currently taking this course",
    duration: "Duration 3-5 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Social Media Marketing",
        bullets: [
          "Understanding the role of social media in modern marketing",
          "Overview of popular social media platforms and their audiences",
          "Defining campaign goals and success metrics",
          "Trends shaping the future of social media",
        ],
      },
      {
        step: "2. Content Strategy & Creation",
        bullets: [
          "Creating a content calendar for consistency",
          "Visual design basics for posts and stories",
          "Crafting engaging captions and hashtags",
          "User-generated content and influencer collaborations",
        ],
      },
      {
        step: "3. Platform-Specific Tactics",
        bullets: [
          "Facebook & Instagram: pages, reels, stories, and ads",
          "X (Twitter): trends, threads, and real-time engagement",
          "LinkedIn: B2B strategies and personal branding",
          "TikTok: short-form video content and viral trends",
        ],
      },
      {
        step: "4. Social Media Advertising",
        bullets: [
          "Paid vs. organic strategies",
          "Creating and managing ad campaigns",
          "Audience targeting and budget optimization",
          "Analyzing ad performance and ROI",
        ],
      },
      {
        step: "5. Engagement & Community Building",
        bullets: [
          "Responding to comments and messages effectively",
          "Handling negative feedback and crisis communication",
          "Building brand loyalty through interaction",
          "Using contests, polls, and stories to engage users",
        ],
      },
      {
        step: "6. Analytics & Optimization",
        bullets: [
          "Using platform insights and analytics tools",
          "Tracking KPIs like reach, engagement, and conversions",
          "A/B testing content and ad creatives",
          "Adjusting strategy based on data",
        ],
      },
      {
        step: "7. Automation & Tools",
        bullets: [
          "Scheduling tools like Buffer and Hootsuite",
          "Integrating email and CRM systems",
          "Monitoring brand mentions and competitors",
          "Using AI for content suggestions and generation",
        ],
      },
      {
        step: "8. Capstone Project",
        bullets: [
          "Plan and execute a full social media campaign for a business or cause",
          "Document strategy, creative assets, analytics, and results",
        ],
      },
    ],
  },
  {
    slug: "brand-strategy-identity",
    title: "Brand Strategy & Identity",
    description:
      "Learn how to build a powerful brand that resonates with your audience. This course teaches you how to craft compelling brand strategies and create cohesive visual and verbal identities. Ideal for marketers, designers, entrepreneurs, and anyone involved in shaping a brand's perception.",
    currentStudents: "120 students currently taking this course",
    duration: "Duration 4-6 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Foundations of Branding",
        bullets: [
          "What is branding? Understanding perception and positioning",
          "Brand equity and why it matters",
          "Brand strategy vs. brand identity",
          "Case studies of successful and failed branding",
        ],
      },
      {
        step: "2. Defining Brand Purpose and Vision",
        bullets: [
          "Crafting your brand mission and vision statements",
          "Identifying core values and brand personality",
          "Understanding your target audience and their needs",
          "Developing a brand voice and tone",
        ],
      },
      {
        step: "3. Competitive Analysis & Market Positioning",
        bullets: [
          "Analyzing competitors and industry trends",
          "Finding your unique value proposition (UVP)",
          "Positioning your brand effectively in the market",
          "Creating brand personas and messaging frameworks",
        ],
      },
      {
        step: "4. Visual Identity Design",
        bullets: [
          "Logo creation: types, principles, and process",
          "Choosing brand colors, typography, and iconography",
          "Creating visual style guidelines",
          "Examples of iconic visual identities",
        ],
      },
      {
        step: "5. Verbal Identity & Brand Storytelling",
        bullets: [
          "Writing effective brand taglines and slogans",
          "Creating a compelling origin story",
          "Tone of voice: formal, friendly, witty, etc.",
          "Applying messaging across touchpoints",
        ],
      },
      {
        step: "6. Building Brand Touchpoints",
        bullets: [
          "Translating your brand identity to websites, packaging, social media",
          "Consistency across digital and physical experiences",
          "Branding internal documents and communications",
          "Aligning marketing strategies with brand identity",
        ],
      },
      {
        step: "7. Brand Guidelines & Implementation",
        bullets: [
          "Creating a complete brand style guide",
          "Training teams on brand usage",
          "Auditing brand consistency across channels",
          "Managing brand assets and templates",
        ],
      },
      {
        step: "8. Capstone Project",
        bullets: [
          "Create a complete brand strategy and identity package for a startup or rebrand",
          "Deliver assets including logo, brand story, messaging, and a style guide",
        ],
      },
    ],
  },
  {
    slug: "copywriting-for-conversion",
    title: "Copywriting for Conversion",
    description:
      "Unlock the power of words to drive sales, sign-ups, and engagement. This course teaches the psychology and strategy behind persuasive copywriting. Learn to write headlines, landing pages, emails, and ads that convert browsers into buyers.",
    currentStudents: "95 students currently taking this course",
    duration: "Duration 3-5 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Conversion Copywriting",
        bullets: [
          "What is copywriting for conversion?",
          "Understanding the customer journey and funnel",
          "Difference between copywriting and content writing",
          "Key traits of high-converting copy",
        ],
      },
      {
        step: "2. Audience Research & Messaging",
        bullets: [
          "Identifying pain points, desires, and objections",
          "Crafting buyer personas and empathy maps",
          "Writing with clarity and relevance",
          "Creating value propositions that resonate",
        ],
      },
      {
        step: "3. Headlines & Hooks",
        bullets: [
          "The science of writing powerful headlines",
          "Types of hooks: curiosity, urgency, benefits, and proof",
          "Headline formulas and testing methods",
          "Split-testing and optimizing hooks",
        ],
      },
      {
        step: "4. Landing Pages & Website Copy",
        bullets: [
          "Structuring landing pages for conversion",
          "Writing compelling calls-to-action (CTAs)",
          "Using social proof and testimonials",
          "Removing friction and increasing clarity",
        ],
      },
      {
        step: "5. Email & Ad Copywriting",
        bullets: [
          "Writing persuasive subject lines and preview text",
          "Creating email sequences (welcome, nurture, promo)",
          "Writing copy for Facebook, Instagram, and Google ads",
          "Using AIDA and PAS frameworks effectively",
        ],
      },
      {
        step: "6. Psychological Triggers & Persuasion",
        bullets: [
          "Applying scarcity, urgency, and FOMO",
          "Leveraging reciprocity and social proof",
          "Using emotional vs rational appeals",
          "Understanding cognitive biases in buyers",
        ],
      },
      {
        step: "7. Copy Review, Editing & Optimization",
        bullets: [
          "Reviewing and tightening your copy",
          "Improving readability and flow",
          "Conversion copy editing checklist",
          "Using analytics to improve performance",
        ],
      },
      {
        step: "8. Capstone Project",
        bullets: [
          "Write a complete high-converting funnel for a product or service",
          "Deliver assets including headline, landing page, emails, and ad copy",
        ],
      },
    ],
  },
  {
    slug: "seo-content-strategy",
    title: "SEO & Content Strategy",
    description:
      "Master how to create content that ranks high on search engines and delivers real value to your audience. This course teaches you how to research keywords, structure SEO-friendly articles, and build a long-term content strategy that drives organic traffic and business growth.",
    currentStudents: "130 students currently taking this course",
    duration: "Duration 4-6 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to SEO & Content Strategy",
        bullets: [
          "Understanding how search engines work",
          "What is SEO? On-page, off-page, and technical SEO",
          "Overview of content marketing vs. content strategy",
          "The role of content in modern SEO",
        ],
      },
      {
        step: "2. Keyword Research & Planning",
        bullets: [
          "How to perform keyword research using tools like Ahrefs, Ubersuggest, and Google Keyword Planner",
          "Understanding search intent and keyword difficulty",
          "Creating a keyword map and content plan",
          "Long-tail vs. short-tail keywords",
        ],
      },
      {
        step: "3. On-Page SEO Fundamentals",
        bullets: [
          "Optimizing title tags, meta descriptions, headers, and images",
          "Best practices for internal linking and URL structure",
          "SEO copywriting: using keywords naturally",
          "Improving readability and user experience",
        ],
      },
      {
        step: "4. Content Creation & Optimization",
        bullets: [
          "Planning content for different stages of the funnel",
          "Structuring blog posts, articles, and pillar pages",
          "Using visuals, CTAs, and formatting to enhance engagement",
          "Content audit and optimization tips",
        ],
      },
      {
        step: "5. Technical SEO Basics",
        bullets: [
          "Site speed, mobile responsiveness, and indexing",
          "Understanding sitemaps, robots.txt, and schema markup",
          "Fixing crawl errors and duplicate content",
          "Tools for technical audits: Screaming Frog, Google Search Console",
        ],
      },
      {
        step: "6. Link Building & Authority",
        bullets: [
          "Importance of backlinks for SEO",
          "White-hat link building techniques",
          "Guest posting, outreach, and content partnerships",
          "Tracking domain authority and link quality",
        ],
      },
      {
        step: "7. Analytics & Content Strategy",
        bullets: [
          "Tracking content performance with Google Analytics",
          "Using Search Console for SEO insights",
          "Setting content KPIs (traffic, bounce rate, conversions)",
          "Adjusting strategy based on data and trends",
        ],
      },
      {
        step: "8. Capstone Project",
        bullets: [
          "Develop a complete SEO-driven content strategy for a website or business",
          "Include keyword research, content calendar, and optimization plans",
        ],
      },
    ],
  },

  /* Add more courses for design & digital marketing here */

  /* Detailed Data For Software & Cloud Engineering Courses */
  {
    slug: "software-engineering",
    title: "Software Engineering",
    description:
      "Build the foundation for designing, developing, and maintaining reliable software systems. This course introduces the core principles of software engineering, including development methodologies, design patterns, system architecture, testing, and team collaboration. Ideal for aspiring developers and project leads.",
    currentStudents: "210 students currently taking this course",
    duration: "Duration 5-8 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Software Engineering",
        bullets: [
          "What is software engineering?",
          "Software development life cycle (SDLC)",
          "Role of a software engineer",
          "Ethics and professionalism in software development",
        ],
      },
      {
        step: "2. Software Development Methodologies",
        bullets: [
          "Agile, Scrum, and Kanban",
          "Waterfall vs. iterative models",
          "Understanding sprints, user stories, and backlog grooming",
          "Collaboration tools (e.g., Jira, Trello)",
        ],
      },
      {
        step: "3. Requirements Engineering",
        bullets: [
          "Gathering and analyzing requirements",
          "Creating use cases and user stories",
          "Functional vs. non-functional requirements",
          "Documentation best practices",
        ],
      },
      {
        step: "4. System Design & Architecture",
        bullets: [
          "High-level vs. low-level design",
          "Design patterns and architectural styles (MVC, microservices, etc.)",
          "UML diagrams and modeling tools",
          "Designing for scalability and maintainability",
        ],
      },
      {
        step: "5. Software Development Practices",
        bullets: [
          "Version control with Git and GitHub",
          "Code readability, documentation, and refactoring",
          "Code reviews and pair programming",
          "Using IDEs and developer tooling effectively",
        ],
      },
      {
        step: "6. Software Testing & Quality Assurance",
        bullets: [
          "Unit, integration, and system testing",
          "Manual vs. automated testing",
          "Test-driven development (TDD)",
          "Tools like Jest, Selenium, and Postman",
        ],
      },
      {
        step: "7. Deployment, Maintenance & DevOps",
        bullets: [
          "CI/CD pipelines and version releases",
          "Monitoring and logging software in production",
          "Bug tracking and maintenance planning",
          "Introduction to containerization (Docker, Kubernetes)",
        ],
      },
      {
        step: "8. Capstone Project",
        bullets: [
          "Design, develop, and document a full software application",
          "Follow an SDLC process from requirements to deployment",
        ],
      },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Gain the skills to build modern, responsive websites and web applications from scratch. This course covers both frontend and backend technologies, preparing you to become a full-stack web developer with real-world project experience.",
    currentStudents: "250 students currently taking this course",
    duration: "Duration 6-8 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Web Development",
        bullets: [
          "What is web development? Frontend vs. Backend",
          "Overview of web technologies and career paths",
          "Setting up your development environment",
          "Introduction to version control with Git and GitHub",
        ],
      },
      {
        step: "2. HTML & CSS Fundamentals",
        bullets: [
          "Building structure with HTML5",
          "Styling with CSS and responsive design principles",
          "Flexbox, Grid, and layout techniques",
          "Introduction to media queries and accessibility",
        ],
      },
      {
        step: "3. JavaScript Programming Basics",
        bullets: [
          "Understanding JavaScript syntax and logic",
          "DOM manipulation and event handling",
          "Form validation and interactivity",
          "Working with APIs and JSON",
        ],
      },
      {
        step: "4. Frontend Frameworks (React)",
        bullets: [
          "Introduction to component-based architecture",
          "State and props in React",
          "Routing with React Router",
          "Hooks and functional components",
        ],
      },
      {
        step: "5. Backend Development Basics",
        bullets: [
          "Introduction to Node.js and Express.js",
          "Setting up a server and creating routes",
          "Working with REST APIs",
          "Database integration (MongoDB or SQL basics)",
        ],
      },
      {
        step: "6. Authentication & User Management",
        bullets: [
          "User registration and login systems",
          "Using JWTs for secure authentication",
          "Storing passwords securely with bcrypt",
          "Role-based access control",
        ],
      },
      {
        step: "7. Deployment & Hosting",
        bullets: [
          "Preparing your app for deployment",
          "Hosting with platforms like Netlify, Vercel, or Heroku",
          "Setting environment variables and secrets",
          "Monitoring performance and uptime",
        ],
      },
      {
        step: "8. Capstone Project",
        bullets: [
          "Build and deploy a full-stack web application",
          "Include user authentication, API integration, and CRUD functionality",
          "Present your work with a project demo and GitHub repo",
        ],
      },
    ],
  },
  {
    slug: "cloud-computing",
    title: "Cloud Computing",
    description:
      "Learn how to leverage cloud technologies to build scalable and flexible infrastructure. This course introduces key cloud platforms, deployment models, services (IaaS, PaaS, SaaS), and hands-on skills needed for cloud development and operations.",
    currentStudents: "170 students currently taking this course",
    duration: "Duration 5-7 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Cloud Computing",
        bullets: [
          "What is cloud computing?",
          "Benefits and challenges of the cloud",
          "Cloud deployment models: public, private, hybrid",
          "Service models: IaaS, PaaS, SaaS",
        ],
      },
      {
        step: "2. Cloud Platforms Overview",
        bullets: [
          "Overview of major platforms: AWS, Azure, Google Cloud",
          "Understanding regions, availability zones, and data centers",
          "Intro to cloud provider consoles and interfaces",
          "Use cases for each platform",
        ],
      },
      {
        step: "3. Virtualization & Compute Services",
        bullets: [
          "Virtual machines and compute instances",
          "Auto-scaling and load balancing",
          "Containers vs. VMs",
          "Introduction to serverless computing",
        ],
      },
      {
        step: "4. Storage & Database Services",
        bullets: [
          "Object vs. block vs. file storage",
          "Popular services: S3, Azure Blob, GCP Cloud Storage",
          "Relational vs. NoSQL databases in the cloud",
          "Using managed database services",
        ],
      },
      {
        step: "5. Networking in the Cloud",
        bullets: [
          "Virtual Private Cloud (VPC) and subnets",
          "Security groups, firewalls, and routing",
          "DNS services and IP management",
          "Content Delivery Networks (CDNs)",
        ],
      },
      {
        step: "6. Cloud Security & IAM",
        bullets: [
          "Identity and Access Management (IAM)",
          "Cloud encryption and security best practices",
          "Multi-factor authentication and policies",
          "Shared responsibility model",
        ],
      },
      {
        step: "7. Monitoring, Billing & Deployment",
        bullets: [
          "Monitoring services and logging tools",
          "Cloud billing and cost optimization",
          "Deployment pipelines and DevOps in the cloud",
          "Cloud-native application development",
        ],
      },
      {
        step: "8. Capstone Project",
        bullets: [
          "Deploy a secure, scalable web application on a cloud platform",
          "Include storage, compute, database, and IAM configurations",
        ],
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Learn how to build fully functional mobile applications for Android and iOS. This course guides you through designing intuitive user interfaces, managing app logic, and deploying apps to app stores using modern tools and frameworks.",
    currentStudents: "200 students currently taking this course",
    duration: "Duration 5-7 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Mobile Development",
        bullets: [
          "Overview of mobile platforms (Android vs. iOS)",
          "Native, hybrid, and cross-platform development",
          "Understanding mobile app architecture",
          "Choosing the right development tools",
        ],
      },
      {
        step: "2. Setting Up Your Development Environment",
        bullets: [
          "Installing Node.js, Android Studio, and Xcode (for Mac)",
          "Creating your first app with React Native or Flutter",
          "Exploring IDEs (VS Code, Android Studio)",
          "Using emulators and real devices for testing",
        ],
      },
      {
        step: "3. User Interface & UX Design Principles",
        bullets: [
          "Designing mobile-friendly interfaces",
          "Using layout components, navigation, and gestures",
          "Responsive design for various screen sizes",
          "Material Design vs. iOS Human Interface Guidelines",
        ],
      },
      {
        step: "4. State Management & App Logic",
        bullets: [
          "Managing state with React Native (useState, Redux, Context API)",
          "Handling user input and form data",
          "Navigation between screens",
          "Error handling and feedback",
        ],
      },
      {
        step: "5. Working with APIs & Databases",
        bullets: [
          "Fetching data with Axios or Fetch API",
          "Connecting to RESTful APIs and displaying content",
          "Storing data with AsyncStorage or SQLite",
          "Introduction to Firebase for real-time database",
        ],
      },
      {
        step: "6. Native Features & Device Integration",
        bullets: [
          "Using camera, location, and sensors",
          "Push notifications and local notifications",
          "Permissions and device storage access",
          "Offline support and caching",
        ],
      },
      {
        step: "7. Testing & Deployment",
        bullets: [
          "Debugging tools and performance testing",
          "Building for production (APK, IPA)",
          "Publishing to Google Play Store and Apple App Store",
          "Monitoring crashes and updates",
        ],
      },
      {
        step: "8. Capstone Project",
        bullets: [
          "Design and build a complete mobile app (e.g., to-do app, recipe app, or social feed)",
          "Implement real API integration and local storage",
          "Publish a demo build or test deployment",
        ],
      },
    ],
  },
  {
    slug: "devops-ci/cd-fundamentals",
    title: "DevOps & CI/CD Fundamentals",
    description:
      "Master the essential practices and tools of DevOps to automate and streamline software development, testing, and deployment. Learn continuous integration and continuous delivery (CI/CD) to build reliable and scalable applications.",
    currentStudents: "150 students currently taking this course",
    duration: "Duration 4-6 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to DevOps",
        bullets: [
          "What is DevOps and why it matters",
          "Culture, collaboration, and automation",
          "DevOps lifecycle and key principles",
          "Overview of DevOps tools ecosystem",
        ],
      },
      {
        step: "2. Version Control with Git & GitHub",
        bullets: [
          "Git basics: commit, branch, merge",
          "Working with remote repositories",
          "Pull requests and code reviews",
          "Branching strategies and workflows",
        ],
      },
      {
        step: "3. Continuous Integration (CI)",
        bullets: [
          "Setting up automated builds",
          "Writing and running unit tests",
          "Integrating CI tools like Jenkins, GitHub Actions, or Travis CI",
          "Build pipelines and quality gates",
        ],
      },
      {
        step: "4. Continuous Delivery & Deployment (CD)",
        bullets: [
          "Automating deployment processes",
          "Deployment strategies: blue-green, canary releases",
          "Infrastructure as code with tools like Terraform",
          "Monitoring and rollback mechanisms",
        ],
      },
      {
        step: "5. Containerization with Docker",
        bullets: [
          "Understanding containers and images",
          "Writing Dockerfiles and building images",
          "Managing containers with Docker CLI",
          "Introduction to container orchestration (Kubernetes basics)",
        ],
      },
      {
        step: "6. Configuration Management & Infrastructure Automation",
        bullets: [
          "Using tools like Ansible, Puppet, or Chef",
          "Automating server provisioning and configuration",
          "Managing environments and secrets",
          "Integrating config management in CI/CD pipelines",
        ],
      },
      {
        step: "7. Monitoring & Logging",
        bullets: [
          "Setting up application and infrastructure monitoring",
          "Using tools like Prometheus, Grafana, and ELK stack",
          "Alerting and incident management",
          "Analyzing logs for performance and errors",
        ],
      },
      {
        step: "8. Capstone Project",
        bullets: [
          "Build a full CI/CD pipeline for a sample application",
          "Containerize the app and deploy to a cloud or local environment",
          "Implement automated testing, deployment, and monitoring",
        ],
      },
    ],
  },
  {
    slug: "version-control",
    title: "Version Control with Git & GitHub",
    description:
      "Learn how to efficiently manage your codebase using Git and GitHub. This course covers essential version control concepts, collaboration workflows, and best practices for modern software development.",
    currentStudents: "210 students currently taking this course",
    duration: "Duration 3-4 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Version Control",
        bullets: [
          "What is version control and why it’s important",
          "Overview of Git and GitHub",
          "Installing Git and setting up your environment",
          "Basic Git commands and concepts",
        ],
      },
      {
        step: "2. Working with Git",
        bullets: [
          "Creating repositories and cloning",
          "Staging and committing changes",
          "Understanding branches and merges",
          "Resolving conflicts",
        ],
      },
      {
        step: "3. Collaboration with GitHub",
        bullets: [
          "Using remote repositories",
          "Push, pull, and fetch commands",
          "Pull requests and code reviews",
          "Managing issues and project boards",
        ],
      },
      {
        step: "4. Branching Strategies",
        bullets: [
          "Git Flow and GitHub Flow",
          "Feature branching and hotfixes",
          "Rebasing vs merging",
          "Tagging and releases",
        ],
      },
      {
        step: "5. Advanced Git Features",
        bullets: [
          "Stashing changes",
          "Reverting commits",
          "Cherry-picking",
          "Using Git hooks",
        ],
      },
      {
        step: "6. Integrations and Best Practices",
        bullets: [
          "Connecting GitHub with CI/CD tools",
          "Writing clear commit messages",
          "Code collaboration etiquette",
          "Security best practices with GitHub",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Collaborate on a project using Git and GitHub",
          "Implement branching strategy and code reviews",
          "Manage issues and automate workflows",
        ],
      },
    ],
  },
  {
    slug: "software-testing",
    title: "Software Testing & QA Basics",
    description:
      "Learn the fundamental principles of software testing and quality assurance. This course covers various testing types, methodologies, and tools to ensure software reliability and performance.",
    currentStudents: "140 students currently taking this course",
    duration: "Duration 4-5 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Software Testing",
        bullets: [
          "Importance of software testing",
          "Testing lifecycle and process",
          "Types of testing: manual vs automated",
          "Roles and responsibilities in QA",
        ],
      },
      {
        step: "2. Testing Techniques and Types",
        bullets: [
          "Unit testing, integration testing, system testing",
          "Acceptance testing and regression testing",
          "Functional vs non-functional testing",
          "Exploratory testing and test case design",
        ],
      },
      {
        step: "3. Test Planning and Documentation",
        bullets: [
          "Writing effective test plans and test cases",
          "Bug reporting and tracking",
          "Using test management tools",
          "Test metrics and quality standards",
        ],
      },
      {
        step: "4. Introduction to Automation Testing",
        bullets: [
          "Benefits of test automation",
          "Overview of popular tools (Selenium, JUnit, etc.)",
          "Writing simple automated tests",
          "Continuous testing in CI/CD pipelines",
        ],
      },
      {
        step: "5. Performance and Load Testing",
        bullets: [
          "Basics of performance testing",
          "Load testing and stress testing concepts",
          "Using tools like JMeter",
          "Analyzing and interpreting results",
        ],
      },
      {
        step: "6. QA Best Practices",
        bullets: [
          "Ensuring software quality",
          "Collaboration between developers and testers",
          "Agile and DevOps in QA",
          "Continuous improvement in testing",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Develop a test plan and execute tests for a sample application",
          "Automate key test cases",
          "Report findings and suggest improvements",
        ],
      },
    ],
  },
  {
    slug: "backend-development",
    title: "Backend Development",
    description:
      "Learn to build robust and scalable server-side applications. This course covers server frameworks, databases, APIs, authentication, and deployment techniques essential for backend development.",
    currentStudents: "190 students currently taking this course",
    duration: "Duration 6-8 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Backend Development",
        bullets: [
          "Understanding client-server architecture",
          "Overview of backend technologies",
          "Setting up your development environment",
          "Introduction to RESTful APIs",
        ],
      },
      {
        step: "2. Server-side Programming",
        bullets: [
          "Working with Node.js and Express.js",
          "Handling requests and responses",
          "Middleware and routing",
          "Error handling and debugging",
        ],
      },
      {
        step: "3. Databases and Data Modeling",
        bullets: [
          "Introduction to SQL and NoSQL databases",
          "Designing database schemas",
          "CRUD operations",
          "Using ORMs like Sequelize or Mongoose",
        ],
      },
      {
        step: "4. Authentication and Authorization",
        bullets: [
          "User authentication methods",
          "Session management and JWT",
          "Role-based access control",
          "Securing APIs",
        ],
      },
      {
        step: "5. Building and Consuming APIs",
        bullets: [
          "RESTful API best practices",
          "API versioning and documentation",
          "Consuming third-party APIs",
          "GraphQL basics",
        ],
      },
      {
        step: "6. Testing and Deployment",
        bullets: [
          "Writing unit and integration tests",
          "Continuous integration and deployment",
          "Deploying backend applications",
          "Monitoring and maintenance",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Build a complete backend for a web or mobile app",
          "Implement authentication and API endpoints",
          "Deploy your application to the cloud",
        ],
      },
    ],
  },

  /* Add more courses for software and cloud engineering here */
  /* Detailed Data For Networking and Hardware Engineering Courses */
  {
    slug: "hardware-engineering",
    title: "Hardware Engineering",
    description:
      "Gain practical skills in designing, building, and maintaining computer hardware systems. This course covers digital circuits, microprocessors, embedded systems, and hardware troubleshooting techniques.",
    currentStudents: "120 students currently taking this course",
    duration: "Duration 5-7 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Hardware Engineering",
        bullets: [
          "Overview of hardware engineering principles",
          "Basic electrical concepts and components",
          "Understanding digital vs analog circuits",
          "Safety practices in hardware work",
        ],
      },
      {
        step: "2. Digital Logic and Circuit Design",
        bullets: [
          "Logic gates and Boolean algebra",
          "Combinational and sequential circuits",
          "Designing and simulating circuits",
          "Introduction to FPGA and CPLD",
        ],
      },
      {
        step: "3. Microprocessors and Microcontrollers",
        bullets: [
          "Microprocessor architecture",
          "Programming microcontrollers",
          "Interfacing sensors and actuators",
          "Embedded system design basics",
        ],
      },
      {
        step: "4. Computer Architecture",
        bullets: [
          "CPU components and operation",
          "Memory hierarchy and storage devices",
          "Input/output systems",
          "Bus systems and data transfer",
        ],
      },
      {
        step: "5. Hardware Troubleshooting and Maintenance",
        bullets: [
          "Diagnosing common hardware issues",
          "Using diagnostic tools",
          "Repair and replacement procedures",
          "Preventive maintenance best practices",
        ],
      },
      {
        step: "6. Emerging Technologies in Hardware",
        bullets: [
          "Introduction to IoT hardware",
          "Wearable technology",
          "Hardware for AI and robotics",
          "Trends in semiconductor technology",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Design and prototype a hardware system",
          "Test and troubleshoot your design",
          "Document your project and present results",
        ],
      },
    ],
  },
  {
    slug: "network-administration",
    title: "Network Administration",
    description:
      "Learn how to design, implement, and manage computer networks. This course covers network protocols, configuration, security, and troubleshooting to ensure efficient and secure network operations.",
    currentStudents: "130 students currently taking this course",
    duration: "Duration 5-7 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Networking",
        bullets: [
          "Basics of computer networks",
          "Types of networks (LAN, WAN, MAN)",
          "OSI and TCP/IP models",
          "Network hardware components",
        ],
      },
      {
        step: "2. Network Protocols and Services",
        bullets: [
          "IP addressing and subnetting",
          "DHCP, DNS, and NAT",
          "Routing protocols overview",
          "Common network services",
        ],
      },
      {
        step: "3. Network Configuration",
        bullets: [
          "Configuring routers and switches",
          "VLANs and network segmentation",
          "Wireless network setup",
          "Managing network devices",
        ],
      },
      {
        step: "4. Network Security",
        bullets: [
          "Firewall basics and configurations",
          "VPNs and secure remote access",
          "Intrusion detection and prevention",
          "Network access control",
        ],
      },
      {
        step: "5. Network Troubleshooting",
        bullets: [
          "Common network issues and diagnostics",
          "Using tools like ping, traceroute, and Wireshark",
          "Performance monitoring and optimization",
          "Troubleshooting wireless networks",
        ],
      },
      {
        step: "6. Network Management and Documentation",
        bullets: [
          "Network monitoring tools",
          "Backup and recovery strategies",
          "Network documentation best practices",
          "Compliance and audit procedures",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Design and implement a secure network",
          "Configure devices and troubleshoot issues",
          "Document and present your network setup",
        ],
      },
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Build your skills to protect networks, systems, and data from cyber threats. This course covers security fundamentals, threat detection, cryptography, and best practices for safeguarding digital assets.",
    currentStudents: "160 students currently taking this course",
    duration: "Duration 6-8 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Cybersecurity",
        bullets: [
          "Overview of cybersecurity concepts",
          "Types of cyber threats and attacks",
          "Security principles and frameworks",
          "Legal and ethical issues in cybersecurity",
        ],
      },
      {
        step: "2. Network Security",
        bullets: [
          "Securing network infrastructure",
          "Firewalls and intrusion detection systems",
          "Virtual Private Networks (VPNs)",
          "Wireless network security",
        ],
      },
      {
        step: "3. Cryptography Basics",
        bullets: [
          "Encryption and decryption methods",
          "Symmetric vs asymmetric cryptography",
          "Public key infrastructure (PKI)",
          "Digital signatures and certificates",
        ],
      },
      {
        step: "4. Identity and Access Management",
        bullets: [
          "Authentication methods",
          "Authorization and access control",
          "Multi-factor authentication",
          "Managing user identities",
        ],
      },
      {
        step: "5. Threat Detection and Incident Response",
        bullets: [
          "Monitoring and analyzing security events",
          "Malware types and detection",
          "Incident response planning",
          "Forensics basics",
        ],
      },
      {
        step: "6. Security Policies and Best Practices",
        bullets: [
          "Developing security policies",
          "Risk assessment and management",
          "Security awareness training",
          "Compliance standards and audits",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Conduct a security assessment",
          "Implement security controls",
          "Respond to a simulated cyber incident",
        ],
      },
    ],
  },
  {
    slug: "internet-of-things-basics",
    title: "Internet of Things (IoT) Basics",
    description:
      "Explore the fundamentals of IoT, including how connected devices communicate and interact. Learn about sensors, data collection, and IoT applications across industries.",
    currentStudents: "110 students currently taking this course",
    duration: "Duration 4-6 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to IoT",
        bullets: [
          "What is IoT? Concepts and applications",
          "IoT architecture and components",
          "IoT communication protocols",
          "Real-world use cases",
        ],
      },
      {
        step: "2. Sensors and Actuators",
        bullets: [
          "Types of sensors used in IoT",
          "Actuators and their roles",
          "Data acquisition and processing",
          "Integrating sensors with microcontrollers",
        ],
      },
      {
        step: "3. IoT Networking",
        bullets: [
          "Wireless communication technologies (Wi-Fi, Bluetooth, Zigbee)",
          "IoT network topologies",
          "Data transmission and protocols",
          "Security considerations in IoT networks",
        ],
      },
      {
        step: "4. Data Management and Cloud Integration",
        bullets: [
          "Collecting and storing IoT data",
          "Cloud platforms for IoT",
          "Data analytics and visualization",
          "Edge vs cloud computing",
        ],
      },
      {
        step: "5. IoT Device Programming",
        bullets: [
          "Programming microcontrollers (Arduino, Raspberry Pi)",
          "IoT development platforms",
          "Building simple IoT projects",
          "Debugging and testing IoT devices",
        ],
      },
      {
        step: "6. Security and Privacy in IoT",
        bullets: [
          "Common IoT vulnerabilities",
          "Implementing security measures",
          "Data privacy and regulations",
          "Best practices for secure IoT deployment",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Design and build a basic IoT system",
          "Collect and analyze sensor data",
          "Demonstrate secure communication between devices",
        ],
      },
    ],
  },
  {
    slug: "it-support-help-desk-skills",
    title: "IT Support & Help Desk Skills",
    description:
      "Develop essential skills for providing technical support and resolving common IT issues. This course covers troubleshooting, customer service, ticketing systems, and best practices in IT support.",
    currentStudents: "125 students currently taking this course",
    duration: "Duration 4-6 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to IT Support",
        bullets: [
          "Role of IT support and help desk",
          "Common hardware and software issues",
          "Understanding user needs and expectations",
          "Effective communication skills",
        ],
      },
      {
        step: "2. Troubleshooting Techniques",
        bullets: [
          "Diagnosing hardware problems",
          "Resolving software and OS issues",
          "Network troubleshooting basics",
          "Using remote support tools",
        ],
      },
      {
        step: "3. Ticketing Systems and Documentation",
        bullets: [
          "Using help desk ticketing software",
          "Logging and tracking support requests",
          "Documenting solutions and knowledge base",
          "Prioritizing and escalating issues",
        ],
      },
      {
        step: "4. Customer Service Excellence",
        bullets: [
          "Providing professional support",
          "Managing difficult users",
          "Time management and multitasking",
          "Maintaining user satisfaction",
        ],
      },
      {
        step: "5. Security Awareness for IT Support",
        bullets: [
          "Protecting user data and privacy",
          "Recognizing phishing and malware",
          "Implementing security best practices",
          "Supporting security policies",
        ],
      },
      {
        step: "6. Tools and Technologies",
        bullets: [
          "Common IT support tools",
          "Remote desktop and diagnostic tools",
          "Asset management and inventory",
          "Software deployment basics",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Simulate IT support scenarios",
          "Resolve user issues efficiently",
          "Document and present your support process",
        ],
      },
    ],
  },
  {
    slug: "wireless-network-setup-security",
    title: "Wireless Network Setup & Security",
    description:
      "Learn how to design, configure, and secure wireless networks. This course covers Wi-Fi standards, network configuration, security protocols, and troubleshooting techniques to maintain reliable wireless connections.",
    currentStudents: "140 students currently taking this course",
    duration: "Duration 5-7 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Wireless Networking",
        bullets: [
          "Wireless communication basics",
          "Wi-Fi standards and protocols",
          "Wireless network components",
          "Understanding wireless frequencies",
        ],
      },
      {
        step: "2. Wireless Network Design",
        bullets: [
          "Planning and site survey",
          "Access point placement",
          "Network topology for wireless",
          "Capacity and coverage considerations",
        ],
      },
      {
        step: "3. Wireless Network Configuration",
        bullets: [
          "Setting up wireless routers and access points",
          "SSID and channel configuration",
          "MAC filtering and client management",
          "Guest networks and VLANs",
        ],
      },
      {
        step: "4. Wireless Security Protocols",
        bullets: [
          "WEP, WPA, WPA2, and WPA3 overview",
          "Implementing encryption",
          "Authentication methods",
          "Securing wireless networks against attacks",
        ],
      },
      {
        step: "5. Troubleshooting Wireless Networks",
        bullets: [
          "Diagnosing connectivity issues",
          "Interference and signal problems",
          "Using wireless analysis tools",
          "Performance optimization",
        ],
      },
      {
        step: "6. Advanced Wireless Technologies",
        bullets: [
          "Wi-Fi 6 and future standards",
          "Mesh networks",
          "IoT wireless communication",
          "Wireless network management tools",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Design and implement a secure wireless network",
          "Configure devices and troubleshoot issues",
          "Document your wireless setup and security measures",
        ],
      },
    ],
  },
  {
    slug: "network-troubleshooting-techniques",
    title: "Network Troubleshooting Techniques",
    description:
      "Master the skills to diagnose and resolve network issues efficiently. This course covers tools, methods, and best practices for troubleshooting wired and wireless networks in various environments.",
    currentStudents: "115 students currently taking this course",
    duration: "Duration 4-6 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Network Troubleshooting",
        bullets: [
          "Common network problems and symptoms",
          "Troubleshooting methodologies",
          "Understanding network topologies",
          "Importance of documentation",
        ],
      },
      {
        step: "2. Network Diagnostic Tools",
        bullets: [
          "Using ping and traceroute",
          "IPConfig and Netstat commands",
          "Wireshark for packet analysis",
          "SNMP and network monitoring tools",
        ],
      },
      {
        step: "3. Troubleshooting Wired Networks",
        bullets: [
          "Checking physical connections",
          "Switch and router issues",
          "Cabling problems and solutions",
          "Testing hardware components",
        ],
      },
      {
        step: "4. Troubleshooting Wireless Networks",
        bullets: [
          "Diagnosing signal interference",
          "Access point configuration issues",
          "Authentication and connectivity problems",
          "Optimizing wireless performance",
        ],
      },
      {
        step: "5. Network Performance Issues",
        bullets: [
          "Bandwidth and latency analysis",
          "QoS and traffic shaping",
          "Detecting network congestion",
          "Resolving bottlenecks",
        ],
      },
      {
        step: "6. Security-Related Troubleshooting",
        bullets: [
          "Detecting unauthorized access",
          "Malware impact on networks",
          "Firewall and VPN troubleshooting",
          "Responding to security incidents",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Identify and resolve a complex network issue",
          "Document the troubleshooting process",
          "Present findings and solutions",
        ],
      },
    ],
  },

  /* Add more courses for networking & hardware here */
  /* Detailed Data For Data Science & AI Courses */
  {
    slug: "data-analysis",
    title: "Data Analysis",
    description:
      "Learn to collect, process, and interpret data to support decision-making. This course covers data visualization, statistical analysis, and tools to transform raw data into actionable insights.",
    currentStudents: "150 students currently taking this course",
    duration: "Duration 4-6 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Data Analysis",
        bullets: [
          "Understanding data types and sources",
          "Data collection methods",
          "Data cleaning and preparation",
          "Basic statistics for analysis",
        ],
      },
      {
        step: "2. Data Visualization Techniques",
        bullets: [
          "Creating charts and graphs",
          "Using visualization tools (e.g., Excel, Tableau)",
          "Best practices for visual communication",
          "Interpreting visual data",
        ],
      },
      {
        step: "3. Exploratory Data Analysis (EDA)",
        bullets: [
          "Summarizing data distributions",
          "Identifying patterns and outliers",
          "Using descriptive statistics",
          "Correlation and causation concepts",
        ],
      },
      {
        step: "4. Statistical Analysis",
        bullets: [
          "Hypothesis testing",
          "Regression analysis",
          "ANOVA and other tests",
          "Statistical software basics",
        ],
      },
      {
        step: "5. Data Tools and Technologies",
        bullets: [
          "Introduction to Excel for data analysis",
          "Basics of Python/R for analysis",
          "Using SQL for data queries",
          "Data cleaning libraries and tools",
        ],
      },
      {
        step: "6. Data Reporting and Presentation",
        bullets: [
          "Creating reports and dashboards",
          "Communicating findings effectively",
          "Storytelling with data",
          "Ethics in data reporting",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Analyze a real dataset",
          "Create visualizations and reports",
          "Present actionable insights",
        ],
      },
    ],
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    description:
      "Dive into the world of machine learning by understanding algorithms that allow computers to learn from data. This course covers supervised, unsupervised learning, and real-world ML applications.",
    currentStudents: "170 students currently taking this course",
    duration: "Duration 6-8 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Machine Learning",
        bullets: [
          "Overview of machine learning concepts",
          "Types of machine learning: supervised, unsupervised, reinforcement",
          "Applications and use cases",
          "ML workflow and lifecycle",
        ],
      },
      {
        step: "2. Data Preparation and Feature Engineering",
        bullets: [
          "Data cleaning and preprocessing",
          "Feature selection and extraction",
          "Handling missing data",
          "Data normalization and scaling",
        ],
      },
      {
        step: "3. Supervised Learning Algorithms",
        bullets: [
          "Linear regression",
          "Logistic regression",
          "Decision trees and random forests",
          "Support vector machines",
        ],
      },
      {
        step: "4. Unsupervised Learning Algorithms",
        bullets: [
          "Clustering techniques (k-means, hierarchical)",
          "Dimensionality reduction (PCA)",
          "Anomaly detection",
        ],
      },
      {
        step: "5. Model Evaluation and Tuning",
        bullets: [
          "Cross-validation",
          "Performance metrics (accuracy, precision, recall)",
          "Hyperparameter tuning",
          "Avoiding overfitting and underfitting",
        ],
      },
      {
        step: "6. Advanced Topics and Tools",
        bullets: [
          "Introduction to deep learning",
          "Neural networks basics",
          "Popular ML frameworks (TensorFlow, scikit-learn)",
          "Ethics in machine learning",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Build and evaluate ML models",
          "Apply techniques to real datasets",
          "Present your findings",
        ],
      },
    ],
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    description:
      "Explore the fundamentals and applications of AI, including intelligent agents, machine learning, natural language processing, and robotics. Prepare to innovate in this fast-evolving field.",
    currentStudents: "160 students currently taking this course",
    duration: "Duration 6-8 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Artificial Intelligence",
        bullets: [
          "History and scope of AI",
          "Intelligent agents and environments",
          "Problem-solving and search algorithms",
          "AI applications overview",
        ],
      },
      {
        step: "2. Knowledge Representation and Reasoning",
        bullets: [
          "Logic and inference",
          "Semantic networks and ontologies",
          "Rule-based systems",
          "Probabilistic reasoning",
        ],
      },
      {
        step: "3. Machine Learning Basics",
        bullets: [
          "Supervised and unsupervised learning",
          "Neural networks introduction",
          "Decision trees and clustering",
          "Reinforcement learning basics",
        ],
      },
      {
        step: "4. Natural Language Processing (NLP)",
        bullets: [
          "Language models and parsing",
          "Text classification and sentiment analysis",
          "Speech recognition basics",
          "Chatbots and conversational agents",
        ],
      },
      {
        step: "5. Robotics and Perception",
        bullets: [
          "Robot architectures",
          "Sensors and actuators",
          "Computer vision fundamentals",
          "Planning and navigation",
        ],
      },
      {
        step: "6. Ethical and Social Implications",
        bullets: [
          "AI ethics and bias",
          "Privacy concerns",
          "AI governance and policy",
          "Future of AI",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Develop an AI-based solution",
          "Integrate multiple AI techniques",
          "Present your project outcomes",
        ],
      },
    ],
  },
  {
    slug: "sql-for-data-exploration",
    title: "SQL for Data Exploration",
    description:
      "Learn to use SQL to query and analyze data efficiently. This course covers fundamental SQL syntax, complex queries, joins, aggregations, and best practices for data exploration.",
    currentStudents: "130 students currently taking this course",
    duration: "Duration 4-6 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to SQL",
        bullets: [
          "Basics of relational databases",
          "SQL syntax and commands",
          "Data types and operators",
          "Writing simple queries",
        ],
      },
      {
        step: "2. Filtering and Sorting Data",
        bullets: [
          "Using WHERE clause",
          "Logical operators",
          "ORDER BY and LIMIT",
          "Pattern matching with LIKE",
        ],
      },
      {
        step: "3. Working with Multiple Tables",
        bullets: [
          "Understanding table relationships",
          "INNER JOIN and OUTER JOIN",
          "Subqueries and nested queries",
          "Using aliases for readability",
        ],
      },
      {
        step: "4. Aggregation and Grouping",
        bullets: [
          "GROUP BY clause",
          "Aggregate functions (SUM, COUNT, AVG)",
          "HAVING clause for filtering groups",
          "Using DISTINCT",
        ],
      },
      {
        step: "5. Advanced SQL Queries",
        bullets: [
          "Window functions",
          "Common table expressions (CTEs)",
          "Recursive queries",
          "Using transactions",
        ],
      },
      {
        step: "6. SQL Optimization and Best Practices",
        bullets: [
          "Indexing basics",
          "Query optimization tips",
          "Security considerations",
          "Writing maintainable SQL",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Explore a sample database",
          "Write complex queries to extract insights",
          "Present your data exploration findings",
        ],
      },
    ],
  },
  {
    slug: "big-data-fundamentals",
    title: "Big Data Fundamentals",
    description:
      "Understand the core concepts of big data, its technologies, and applications. This course covers data storage, processing frameworks, and challenges associated with handling massive datasets.",
    currentStudents: "140 students currently taking this course",
    duration: "Duration 5-7 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to Big Data",
        bullets: [
          "Definition and characteristics of big data",
          "Types of big data: structured, semi-structured, unstructured",
          "Big data use cases and industries",
          "Challenges in big data management",
        ],
      },
      {
        step: "2. Big Data Technologies Overview",
        bullets: [
          "Hadoop ecosystem",
          "MapReduce programming model",
          "Introduction to Spark",
          "NoSQL databases",
        ],
      },
      {
        step: "3. Data Storage and Management",
        bullets: [
          "Distributed file systems (HDFS)",
          "Data warehouses vs data lakes",
          "Data ingestion and ETL processes",
          "Data governance and security",
        ],
      },
      {
        step: "4. Big Data Processing Frameworks",
        bullets: [
          "Batch processing with Hadoop",
          "Real-time processing with Spark Streaming",
          "Data processing pipelines",
          "Scalability and fault tolerance",
        ],
      },
      {
        step: "5. Big Data Analytics",
        bullets: [
          "Introduction to big data analytics",
          "Machine learning on big data",
          "Visualization tools for big data",
          "Use of AI in big data analytics",
        ],
      },
      {
        step: "6. Cloud and Big Data",
        bullets: [
          "Big data on cloud platforms",
          "Managed big data services",
          "Cost and performance considerations",
          "Security and compliance in cloud big data",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Design a big data solution for a business problem",
          "Implement data ingestion and processing",
          "Analyze and present insights from large datasets",
        ],
      },
    ],
  },
  {
    slug: "natural-language-processing",
    title: "Natural Language Processing (NLP)",
    description:
      "Discover how computers understand, interpret, and generate human language. This course covers fundamental NLP techniques, language models, and real-world applications like chatbots and sentiment analysis.",
    currentStudents: "120 students currently taking this course",
    duration: "Duration 5-7 weeks",
    enrollButton: "Enroll Now",
    CourseTitle: "Curriculum Outline",
    curriculum: [
      {
        step: "1. Introduction to NLP",
        bullets: [
          "History and importance of NLP",
          "Natural language basics",
          "Common NLP tasks and applications",
          "Challenges in NLP",
        ],
      },
      {
        step: "2. Text Preprocessing",
        bullets: [
          "Tokenization and stemming",
          "Lemmatization",
          "Stop words removal",
          "Text normalization techniques",
        ],
      },
      {
        step: "3. Language Modeling",
        bullets: [
          "N-grams and probabilistic models",
          "Introduction to neural language models",
          "Word embeddings (Word2Vec, GloVe)",
          "Contextual embeddings (BERT, GPT)",
        ],
      },
      {
        step: "4. Syntax and Parsing",
        bullets: [
          "Part-of-speech tagging",
          "Parsing techniques",
          "Dependency parsing",
          "Syntax trees",
        ],
      },
      {
        step: "5. NLP Applications",
        bullets: [
          "Sentiment analysis",
          "Text classification",
          "Named entity recognition",
          "Machine translation",
          "Chatbots and conversational AI",
        ],
      },
      {
        step: "6. Advanced NLP Techniques",
        bullets: [
          "Sequence-to-sequence models",
          "Attention mechanisms",
          "Transformer architecture",
          "Transfer learning in NLP",
        ],
      },
      {
        step: "7. Capstone Project",
        bullets: [
          "Build an NLP application",
          "Use pre-trained models",
          "Present your NLP solution",
        ],
      },
    ],
  },

  /* Add more course for data science & ai here */
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
          <span className="bg-white w-80 py-2 p-2 rounded-md shadow font-medium text-black">
            {course.currentStudents}
          </span>
          <span className="bg-white w-44 py-2 p-2 rounded-md shadow font-medium text-black">
            {course.duration}
          </span>
        </div>
        {/* Enroll Button */}
        <button
          onClick={() => setShowCongrats(true)}
          className="bg-[#39B54A] text-white px-8 py-3 rounded-lg font-semibold"
        >
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
