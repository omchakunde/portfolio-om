import {
  Brain,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  Layers3,
  LucideIcon,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

export type Accent = "blue" | "green" | "violet" | "amber";

export type Project = {
  slug: string;
  title: string;
  type: string;
  category: "Full Stack" | "AI/ML" | "Cloud & FinOps" | "Embedded Systems" | "Research";
  accent: Accent;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  stack: string[];
  features: string[];
  challenges: string[];
  decisions: string[];
  learnings: string[];
  status?: string;
  github?: string;
  liveDemo?: string;
  image?: string;
};

export const projectLinksBySlug: Record<string, { github?: string; liveDemo?: string }> = {
  "enterprise-finops-learning-platform": {
    github: "https://github.com/omchakunde/finops",
    liveDemo: "https://finops-topaz.vercel.app"
  },
  "ai-job-portal": {
    github: "https://github.com/omchakunde/job-hunt",
    liveDemo: "https://job-hunt-three-phi.vercel.app"
  },
  "wanderlust-travel-platform": {
    github: "https://github.com/omchakunde/wanderlust",
    liveDemo: "https://wanderlust-rosy-rho.vercel.app"
  },
  "cloud-cost-optimization-workflows": {
    github: "https://github.com/omchakunde/finops",
    liveDemo: "https://finops-topaz.vercel.app"
  },
  "deep-learning-object-detection": {
    github: "https://github.com/omchakunde/object-detection-using-deep-learning"
  },
  "object-detection-using-deep-learning": {
    github: "https://github.com/omchakunde/object-detection-using-deep-learning"
  },
  "employee-database-management-system": {
   // github: "",
    //liveDemo: ""
  },
  "diabetes-prediction-system": {
   // github: "",
   // liveDemo: ""
  },
  "autonomous-human-detection-drone": {
   // github: "",
    //liveDemo: ""
  },
  "arduino-emf-detector": {
    github: "https://github.com/omchakunde/arduino-emf-detector",
    liveDemo: "https://drive.google.com/file/d/1alpZpuCEhKrDYAUBEMBMaheJRb49fmvE/view?usp=drive_link"
  },
  "stm32-led-control": {
   // github: "",
   // liveDemo: ""
  },
  "advancements-in-battery-technology": {
    github: "https://github.com/omchakunde/Advancements-in-Battery-Technology-for-Electric-Vehicles-Solid-State-vs.-Lithium-Ion-Batteries-/tree/main",
   // liveDemo: ""
  }
};

function withProjectLinks<T extends { slug: string }>(project: T): T & { github?: string; liveDemo?: string } {
  const links = projectLinksBySlug[project.slug];
  if (!links) return project;

  return {
    ...project,
    github: links.github || undefined,
    liveDemo: links.liveDemo || undefined
  };
}

export const profile = {
  name: "Om Chakunde",
  location: "Pune, Maharashtra, India",
  title: "Full-Stack Software Engineer",
  secondary: "Building scalable web platforms, AI-powered applications, cloud solutions, FinOps products, and embedded systems.",
  intro:
    "I'm Om Chakunde, a software engineer from Pune, India, currently pursuing Electronics & Telecommunication Engineering at MITAOE.",
  longIntro:
    "Over the past four years, I have built full-stack applications, AI systems, cloud projects, FinOps platforms, and embedded solutions through internships, research, and hands-on development. My work spans production-style web platforms, role-based dashboards, computer vision, ML pipelines, cloud cost governance, and hardware prototyping.",
  education: {
    degree: "Bachelor of Engineering",
    branch: "Electronics & Telecommunication Engineering",
    school: "MIT Academy of Engineering (MITAOE)",
    graduation: "Expected Graduation: 2026"
  },
  links: {
    github: "https://github.com/omchakunde",
    linkedin: "https://www.linkedin.com/in/om-chakunde/",
    resume: "/om_resume_final.pdf",
    email: "chakundeo@gmail.com"
  }
};

export const metrics = [
  { value: "4+", label: "Years Learning & Building" },
  { value: "12+", label: "End-to-End Projects" },
  { value: "4", label: "Industry Internships" },
  { value: "Full Stack", label: "Web Development Expertise" },
  { value: "AI + Cloud", label: "AI, ML, Cloud & FinOps" }
];

export const experiences = [
  {
    company: "Meta Craftlab",
    role: "Full Stack Developer Intern",
    period: "2024",
    accent: "blue" as Accent,
    summary:
      "Built and improved full-stack web features using Svelte, SvelteKit, REST APIs, Git workflows, and database optimization practices.",
    stack: ["Svelte", "SvelteKit", "REST APIs", "Git", "GitHub", "Database Optimization"],
    contributions: [
      "Implemented frontend and backend features for web application workflows.",
      "Worked with REST API integration, bug fixing, and maintainable component structure.",
      "Built an SVG placeholder generator and supported agile development tasks."
    ],
    outcomes: ["Improved practical full-stack delivery skills", "Strengthened debugging and version-control workflows"]
  },
  
  {
    company: "Anantam Aerials and Robotics",
    role: "AI and Drone Technology Intern",
    period: "2024",
    accent: "amber" as Accent,
    summary:
      "Developed computer vision and drone technology workflows using YOLO, OpenCV, Raspberry Pi, image processing, and ML concepts.",
    stack: ["YOLO", "OpenCV", "Raspberry Pi", "Computer Vision", "Image Processing"],
    contributions: [
      "Worked on human detection and condition monitoring concepts for drone systems.",
      "Explored object detection pipelines with embedded hardware constraints.",
      "Connected camera input, image processing, and detection outputs for robotics use cases."
    ],
    outcomes: ["Connected AI models with hardware realities", "Built stronger computer vision implementation intuition"]
  },
  {
    company: "CloudEdufy",
    role: "full-stack developer Intern",
    period: "2024",
    accent: "green" as Accent,
    summary:
      "Worked on full-stack web development fundamentals, practical project implementation, and end-to-end software delivery.",
    stack: ["Full-Stack Development", "Web Applications", "Frontend", "Backend", "Practical Software Development"],
    contributions: [
      "Built practical web application features across frontend and backend concepts.",
      "Strengthened project structuring, UI implementation, and deployment awareness.",
      "Practiced real-world software workflows through guided development tasks."
    ],
    outcomes: ["Improved full-stack fundamentals", "Converted learning into shippable project work"]
  }
];

export const skillGroups: { title: string; accent: Accent; icon: LucideIcon; items: string[]; summary: string }[] = [
  {
    title: "Frontend",
    accent: "blue",
    icon: Code2,
    summary: "Responsive product interfaces, dashboards, and polished SaaS-style UI.",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Svelte", "SvelteKit", "Responsive Design", "UI/UX", "Figma", "GSAP", "Three.js"]
  },
  {
    title: "Backend",
    accent: "blue",
    icon: Workflow,
    summary: "APIs, authentication, application modules, and database-backed workflows.",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth", "MVC", "Role-Based Access", "API Integration", "Server-Side Logic"]
  },
  {
    title: "Database",
    accent: "green",
    icon: Database,
    summary: "Structured application data for dashboards, users, jobs, learning content, and operations.",
    items: ["MongoDB", "MongoDB Atlas", "Mongoose", "SQL", "Employee Databases", "Schema Design", "Data Modeling"]
  },
  {
    title: "Cloud & FinOps",
    accent: "green",
    icon: Cloud,
    summary: "Cloud deployment, cost visibility, governance, and operational FinOps workflows.",
    items: ["AWS", "AWS S3", "Firebase", "Vercel", "SharePoint Integration", "Cloud Deployment", "Cloud Cost Optimization", "Budgeting", "Rightsizing", "Cost Allocation", "Governance", "Forecasting", "GreenOps"]
  },
  {
    title: "AI & Data",
    accent: "violet",
    icon: Brain,
    summary: "Machine learning, prediction systems, computer vision, and applied data analysis.",
    items: ["Python", "YOLO", "YOLOv8", "YOLOv10", "OpenCV", "Deep Learning", "Computer Vision", "Machine Learning", "Flask", "NumPy", "Pandas", "Scikit Learn", "Visualization"]
  },
  {
    title: "Embedded Systems",
    accent: "amber",
    icon: Cpu,
    summary: "Microcontrollers, sensors, edge devices, and embedded AI experimentation.",
    items: ["Arduino", "STM32", "Raspberry Pi", "UART", "GPIO", "OLED", "Camera Modules", "Embedded C", "Sensors", "Drone Systems"]
  },
  {
    title: "Tools & Practices",
    accent: "violet",
    icon: Layers3,
    summary: "Engineering workflow, collaboration, testing mindset, and delivery tooling.",
    items: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Figma", "Canva", "Agile Workflows", "Debugging", "Documentation"]
  }
];

const baseFeaturedProjects: Project[] = [
  {
    slug: "enterprise-finops-learning-platform",
    title: "Enterprise FinOps Learning Platform",
    type: "Flagship Case Study",
    category: "Cloud & FinOps",
    accent: "green",
    description:
      "A premium learning platform for FinOps education with authenticated dashboards, administrative workflows, SharePoint integration, and responsive product-grade UI.",
    overview:
      "The platform brings student learning, admin operations, content workflows, internships, webinars, chats, and notifications into one structured full-stack application. It represents the strongest combination of my full-stack, cloud, SaaS, and FinOps thinking.",
    problem:
      "FinOps learning workflows need more than static content. Students need a focused dashboard, admins need operational controls, and platform data needs to stay organized across courses, batches, internships, webinars, communication, and content delivery.",
    solution:
      "A role-aware Next.js, Node.js, and MongoDB platform with JWT authentication, separate student and admin surfaces, reusable management modules, SharePoint integration, and responsive Tailwind UI.",
    architecture:
      "App Router pages compose dashboard modules, protected API workflows, MongoDB collections, JWT-based session checks, SharePoint API integration, and student/admin role boundaries for external content and document operations.",
    stack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT", "SharePoint API", "Vercel", "FinOps"],
    features: ["Authentication", "Role-Based Access", "Student Dashboard", "Admin Dashboard", "Course Management", "Batch Management", "Internship Management", "Webinar Management", "Notifications", "Chat System", "SharePoint Integration", "Responsive Design", "Premium UI"],
    challenges: ["Designing clear admin workflows", "Keeping role access predictable", "Structuring feature modules for maintainability", "Integrating SharePoint without overwhelming the core app", "Keeping SaaS navigation scalable"],
    decisions: ["Separated student and admin experiences", "Used JWT for practical authentication flows", "Modeled management features as reusable modules", "Prioritized responsive layouts for real usage", "Connected FinOps education with operational governance concepts"],
    learnings: ["Operational platforms need strong information architecture", "FinOps products benefit from clear governance surfaces", "Role boundaries simplify both UX and backend logic", "Premium SaaS UI depends on hierarchy, density, and predictable states"],
    status: "Flagship"
  },
  {
    slug: "ai-job-portal",
    title: "AI Job Portal",
    type: "Full-Stack AI Product",
    category: "Full Stack",
    accent: "violet",
    image: "/images/projects/job-portal.png",
    description:
      "A full-stack job platform with authentication, recruiter dashboard, REST APIs, and resume matching workflows.",
    overview:
      "The AI Job Portal combines standard recruitment workflows with resume matching to help organize candidate and recruiter interactions through a practical full-stack product surface.",
    problem:
      "Hiring workflows require authenticated access, recruiter tools, candidate data, and a practical way to compare resumes against opportunities without making the workflow feel disconnected.",
    solution:
      "A MERN-style application using React, Node.js, Express.js, MongoDB, JWT authentication, REST APIs, recruiter dashboard screens, and responsive design.",
    architecture:
      "React pages consume Express REST endpoints, protected by JWT authentication, with MongoDB storing users, recruiter data, jobs, and resume matching inputs.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "Resume Matching"],
    features: ["Authentication", "Resume Matching", "Recruiter Dashboard", "Job Listings", "Candidate Workflows", "REST APIs", "Responsive Design"],
    challenges: ["Creating a useful matching workflow", "Protecting recruiter routes", "Keeping API responses predictable", "Balancing AI features with normal job portal workflows"],
    decisions: ["Used REST APIs for clear client-server boundaries", "Kept recruiter flows dashboard-oriented", "Used JWT for portable authentication", "Attached AI capability to a concrete hiring workflow"],
    learnings: ["AI features work best when attached to clear user workflows", "Recruiter tools need fast scanning and predictable navigation", "Authentication and data structure define product reliability"],
    status: "Flagship"
  },
  {
    slug: "autonomous-human-detection-drone",
    title: "Autonomous Human Detection Drone",
    type: "AI + Embedded System",
    category: "Embedded Systems",
    accent: "amber",
    description:
      "A computer vision and drone technology project using YOLO, OpenCV, Python, and Raspberry Pi for human detection and condition monitoring.",
    overview:
      "The system explores human detection on embedded hardware, combining camera input, image processing, object detection, condition monitoring, and autonomous navigation concepts.",
    problem:
      "Drone systems need efficient perception pipelines that can detect people reliably while working within embedded hardware constraints and real-world operating conditions.",
    solution:
      "A Python-based computer vision pipeline using YOLO and OpenCV on Raspberry Pi, oriented around human detection, image processing, condition monitoring, and autonomous navigation support.",
    architecture:
      "Camera modules capture frames, OpenCV preprocesses image data, YOLO performs detection, and Raspberry Pi coordinates monitoring and navigation-related outputs.",
    stack: ["YOLO", "OpenCV", "Python", "Raspberry Pi", "Computer Vision", "Image Processing"],
    features: ["Human Detection", "Condition Monitoring", "Autonomous Navigation Concepts", "Image Processing", "Machine Learning", "Embedded Deployment"],
    challenges: ["Balancing detection quality with hardware limits", "Managing camera input and inference flow", "Designing for real-world conditions", "Connecting AI outputs to robotics workflows"],
    decisions: ["Used YOLO for practical object detection", "Used OpenCV for image processing control", "Targeted Raspberry Pi for hands-on embedded deployment", "Focused on detection reliability before autonomy complexity"],
    learnings: ["Embedded AI depends on careful pipeline design", "Computer vision projects require both model and hardware thinking", "Robotics systems need clear sensing, inference, and action boundaries"],
    status: "Flagship"
  }
];

const baseProjectCategories: { title: Project["category"]; description: string; projects: Project[] }[] = [
  {
    title: "Full Stack",
    description: "End-to-end web products, dashboards, platforms, APIs, authentication, and database-backed systems.",
    projects: [
      baseFeaturedProjects[1],
      {
        slug: "wanderlust-travel-platform",
        title: "Wanderlust Travel Platform",
        type: "Full-Stack Web App",
        category: "Full Stack",
        accent: "blue",
        image: "/images/projects/wanderlust.png",
        description: "A travel listing and booking-style platform focused on user-facing discovery, responsive UI, and full-stack CRUD workflows.",
        overview: "Built as a practical web application to strengthen end-to-end product development, route structure, data persistence, and reusable UI patterns.",
        problem: "Travel-style platforms need clear listings, detail pages, forms, and predictable data workflows.",
        solution: "Implemented a responsive full-stack application with structured pages, listing data, and user-oriented navigation.",
        architecture: "Frontend routes connect to backend/database-style CRUD workflows with reusable components and product-focused layout.",
        stack: ["JavaScript", "Node.js", "Express.js", "MongoDB", "HTML", "CSS"],
        features: ["Listing UI", "Detail Pages", "CRUD Workflows", "Responsive Layout", "Reusable Components"],
        challenges: ["Structuring product pages", "Managing listing data", "Keeping forms and navigation consistent"],
        decisions: ["Built around clear listing/detail flows", "Prioritized responsive UX", "Practiced maintainable full-stack structure"],
        learnings: ["Product flow matters as much as individual pages", "CRUD apps need clean data and route organization"]
      },
      {
        slug: "weather-dashboard",
        title: "Weather Dashboard",
        type: "API Integration App",
        category: "Full Stack",
        accent: "blue",
        image: "/images/projects/weather.png",
        description: "A weather dashboard using API integration, search-driven UI, and responsive information cards.",
        overview: "Created to practice external API consumption, async data handling, error states, and clear dashboard presentation.",
        problem: "Weather data needs to be readable quickly, with location search and resilient loading states.",
        solution: "Built a dashboard interface that fetches and presents weather conditions in clean, scan-friendly sections.",
        architecture: "Client UI calls weather APIs, transforms response data, and renders cards for current conditions and related metrics.",
        stack: ["JavaScript", "API Integration", "HTML", "CSS", "Responsive UI"],
        features: ["Location Search", "Weather API", "Metric Cards", "Responsive Dashboard", "Error Handling"],
        challenges: ["Handling API responses", "Designing readable data cards", "Managing empty or failed states"],
        decisions: ["Kept the interface card-based", "Focused on fast scanning", "Separated fetch and render logic"],
        learnings: ["External APIs require defensive UI", "Data dashboards benefit from clear hierarchy"]
      },
      {
        slug: "employee-database-management-system",
        title: "Employee Database Management System",
        type: "Database Application",
        category: "Full Stack",
        accent: "green",
        image: "/images/projects/database-management.png",
        description: "A database management project for employee records, CRUD operations, and structured data workflows.",
        overview: "Built to practice database schema thinking, record management, and operational application flows.",
        problem: "Employee records require organized storage, reliable updates, and simple retrieval.",
        solution: "Created a management interface and database workflow for employee data operations.",
        architecture: "Application screens interact with structured database records through create, read, update, and delete operations.",
        stack: ["SQL", "Database Design", "CRUD", "Application Logic"],
        features: ["Employee Records", "CRUD Operations", "Searchable Data", "Structured Storage"],
        challenges: ["Modeling fields clearly", "Maintaining reliable updates", "Keeping records organized"],
        decisions: ["Focused on schema clarity", "Prioritized predictable CRUD flows"],
        learnings: ["Database structure shapes application reliability", "Operational apps need simple, dependable flows"]
      }
    ]
  },
  {
    title: "AI/ML",
    description: "Prediction systems, deep learning, object detection, computer vision, and applied data science.",
    projects: [
      {
        slug: "diabetes-prediction-system",
        title: "Diabetes Prediction System",
        type: "Machine Learning Project",
        category: "AI/ML",
        accent: "violet",
        image: "/images/projects/diabetes-prediction.png",
        description: "A prediction system that applies ML workflows to health-related classification using Python and data preprocessing.",
        overview: "Built to practice end-to-end ML workflow thinking, from dataset preparation through model evaluation and prediction output.",
        problem: "Prediction systems need reliable preprocessing, model selection, evaluation, and understandable outputs.",
        solution: "Implemented a supervised learning pipeline for diabetes prediction using Python ML tooling.",
        architecture: "Dataset ingestion and preprocessing feed model training, evaluation, and prediction logic.",
        stack: ["Python", "Pandas", "NumPy", "Scikit Learn", "Machine Learning"],
        features: ["Data Preprocessing", "Model Training", "Prediction Output", "Evaluation Metrics"],
        challenges: ["Handling health dataset quality", "Selecting useful features", "Interpreting model behavior"],
        decisions: ["Focused on explainable ML workflow", "Used standard Python data science tools"],
        learnings: ["Good ML depends on preprocessing", "Model output needs context and evaluation"]
      },
      {
        slug: "deep-learning-object-detection",
        title: "Deep Learning Object Detection",
        type: "Computer Vision Project",
        category: "AI/ML",
        accent: "violet",
        image: "/images/projects/object-detection.png",
        description: "A deep learning and object detection project using computer vision concepts for image-based recognition.",
        overview: "Explored object detection foundations, image processing, model inference, and applied computer vision workflows.",
        problem: "Object detection requires balancing model capability, input preprocessing, and inference performance.",
        solution: "Built and studied detection workflows using deep learning and OpenCV-style image pipelines.",
        architecture: "Image inputs move through preprocessing, detection/inference, and output visualization steps.",
        stack: ["Python", "Deep Learning", "OpenCV", "Object Detection", "Computer Vision"],
        features: ["Image Processing", "Detection Pipeline", "Inference Output", "Visualization"],
        challenges: ["Understanding detection accuracy", "Managing image preprocessing", "Evaluating visual outputs"],
        decisions: ["Focused on practical detection flow", "Connected research concepts with implementation"],
        learnings: ["Computer vision quality depends on both model and data pipeline", "Detection systems need careful evaluation"]
      }
    ]
  },
  {
    title: "Cloud & FinOps",
    description: "Cloud deployment, governance, cost optimization, FinOps learning, and SaaS operations.",
    projects: [
      baseFeaturedProjects[0],
      {
        slug: "cloud-cost-optimization-workflows",
        title: "Cloud Cost Optimization Workflows",
        type: "FinOps Practice Area",
        category: "Cloud & FinOps",
        accent: "green",
       image: "/images/projects/finops.png",
        description: "A practical FinOps knowledge area covering budgeting, rightsizing, forecasting, allocation, governance, and GreenOps.",
        overview: "Represents the cloud cost management concepts applied across the FinOps learning platform and continuous learning work.",
        problem: "Cloud teams need visibility, ownership, and governance to control cost while preserving delivery speed.",
        solution: "Studied and modeled FinOps workflows around budgets, cost allocation, optimization, forecasting, and green cloud practices.",
        architecture: "Conceptual workflows connect cloud usage data, governance policies, optimization actions, and educational dashboards.",
        stack: ["AWS", "FinOps", "GreenOps", "Cost Optimization", "Budgeting", "Forecasting"],
        features: ["Cost Visibility", "Budgeting", "Rightsizing", "Cost Allocation", "Governance", "GreenOps"],
        challenges: ["Connecting cloud concepts to usable product flows", "Balancing cost and performance", "Making governance understandable"],
        decisions: ["Focused on practical FinOps education", "Mapped concepts into dashboard-friendly workflows"],
        learnings: ["FinOps is both technical and operational", "Cloud cost work needs ownership and clear communication"]
      }
    ]
  },
  {
    title: "Embedded Systems",
    description: "Microcontroller projects, sensors, hardware control, Raspberry Pi, and robotics-oriented systems.",
    projects: [
      baseFeaturedProjects[2],
      {
        slug: "arduino-emf-detector",
        title: "Arduino EMF Detector",
        type: "Embedded Sensor Project",
        category: "Embedded Systems",
        accent: "amber",
        image: "/images/projects/emf-detector.png",
        description: "An Arduino-based EMF detector using sensor input, embedded control logic, and hardware output.",
        overview: "Built to practice sensor interfacing, microcontroller programming, and translating physical signals into readable output.",
        problem: "Sensor projects need stable readings, simple calibration, and clear output feedback.",
        solution: "Implemented Arduino logic to detect electromagnetic field changes and present usable readings.",
        architecture: "Sensor input is read by Arduino, processed by embedded logic, and surfaced through visual or serial output.",
        stack: ["Arduino", "Embedded C", "Sensors", "Serial Output"],
        features: ["Sensor Reading", "Signal Thresholds", "Embedded Control", "Hardware Output"],
        challenges: ["Stabilizing sensor readings", "Tuning thresholds", "Working with physical noise"],
        decisions: ["Kept the circuit simple", "Focused on readable output and reliable behavior"],
        learnings: ["Physical systems introduce noise", "Embedded projects require careful testing with real inputs"]
      },
      {
        slug: "stm32-led-control",
        title: "STM32 LED Control",
        type: "Microcontroller Project",
        category: "Embedded Systems",
        accent: "amber",
        image: "/images/projects/led-controller.png",
        description: "A low-level STM32 project focused on GPIO control, embedded C, and microcontroller fundamentals.",
        overview: "Created to strengthen low-level hardware control, GPIO configuration, and embedded programming discipline.",
        problem: "Microcontroller work requires precise pin configuration and predictable control logic.",
        solution: "Implemented LED control using STM32 GPIO concepts and embedded C workflows.",
        architecture: "STM32 firmware configures GPIO pins and controls LED state through embedded logic.",
        stack: ["STM32", "Embedded C", "GPIO", "Microcontrollers"],
        features: ["GPIO Control", "LED State Logic", "Firmware Basics", "Hardware Testing"],
        challenges: ["Understanding microcontroller setup", "Managing pin configuration", "Testing hardware behavior"],
        decisions: ["Started with a focused control problem", "Used the project to build embedded fundamentals"],
        learnings: ["Small embedded projects build strong hardware intuition", "GPIO control is the base for larger systems"]
      }
    ]
  },
  {
    title: "Research",
    description: "Academic and technical research across energy systems, batteries, and object detection.",
    projects: [
      {
        slug: "advancements-in-battery-technology",
        title: "Advancements in Battery Technology",
        type: "Research Paper",
        category: "Research",
        accent: "green",
        image: "/images/projects/Advancements-in-Battery-Tech.png",
        description: "Research work studying battery technology advancements, energy storage, efficiency, and future engineering directions.",
        overview: "A research-oriented exploration of battery technology trends and their importance in sustainable engineering systems.",
        problem: "Modern energy systems need better storage, efficiency, reliability, and sustainability.",
        solution: "Studied advancements in battery materials, storage performance, and emerging technology directions.",
        architecture: "Research structure covers background, technical trends, comparison, impact, and future scope.",
        stack: ["Research", "Battery Technology", "Energy Systems", "Sustainability"],
        features: ["Literature Review", "Technology Comparison", "Future Scope", "Energy Storage Analysis"],
        challenges: ["Synthesizing technical sources", "Comparing evolving technologies", "Explaining engineering tradeoffs"],
        decisions: ["Focused on practical energy impact", "Connected technology trends to engineering applications"],
        learnings: ["Battery progress affects mobility, grid systems, and embedded devices", "Energy research needs both materials and systems thinking"]
      },
      {
        slug: "object-detection-using-deep-learning",
        title: "Object Detection Using Deep Learning",
        type: "Research Paper",
        category: "Research",
        accent: "violet",
        image: "/images/projects/Object-Detection-research.png",
        description: "Research work focused on deep learning-based object detection, model behavior, and computer vision applications.",
        overview: "A research exploration connected to my applied computer vision and drone detection projects.",
        problem: "Object detection systems must identify objects accurately under varying input conditions.",
        solution: "Studied deep learning methods, detection models, evaluation ideas, and practical application areas.",
        architecture: "Research flow covers detection concepts, deep learning methods, datasets, evaluation, and use cases.",
        stack: ["Research", "Deep Learning", "Object Detection", "Computer Vision"],
        features: ["Model Study", "Detection Concepts", "Evaluation Discussion", "Application Mapping"],
        challenges: ["Understanding detection tradeoffs", "Explaining model performance", "Connecting research with implementation"],
        decisions: ["Focused on practical computer vision relevance", "Connected academic study to YOLO/OpenCV project work"],
        learnings: ["Research and implementation reinforce each other", "Detection performance depends on data, model, and deployment context"]
      }
    ]
  }
];

export const featuredProjects: Project[] = baseFeaturedProjects.map(withProjectLinks);

export const projectCategories = baseProjectCategories.map((category) => ({
  ...category,
  projects: category.projects.map(withProjectLinks)
}));

export const allProjects = projectCategories.flatMap((category) => category.projects);

export const research = [
  {
    title: "Advancements in Battery Technology",
    area: "Energy Systems",
    accent: "green" as Accent,
    summary:
      "Research into battery technology evolution, storage efficiency, sustainability, and future applications in modern engineering systems.",
    topics: ["Battery Materials", "Energy Storage", "Sustainability", "Efficiency", "Future Scope"]
  },
  {
    title: "Object Detection Using Deep Learning",
    area: "Computer Vision",
    accent: "violet" as Accent,
    summary:
      "Research into object detection methods, deep learning model behavior, evaluation concepts, and practical computer vision applications.",
    topics: ["Deep Learning", "Object Detection", "Computer Vision", "Model Evaluation", "YOLO Concepts"]
  }
];

export const certifications = [
  { title: "Python Essentials", domain: "Programming", issuer: "Python learning credential", accent: "blue" as Accent },
  { title: "AWS Cloud", domain: "Cloud", issuer: "AWS/cloud learning credential", accent: "green" as Accent },
  { title: "AICTE AI & ML", domain: "AI/ML", issuer: "AICTE", accent: "violet" as Accent },
  { title: "TechSaksham MERN", domain: "Full Stack", issuer: "TechSaksham", accent: "blue" as Accent },
  { title: "GreenOps", domain: "Cloud & Sustainability", issuer: "GreenOps learning credential", accent: "green" as Accent },
  { title: "NPTEL", domain: "Academic Learning", issuer: "NPTEL", accent: "amber" as Accent },
  { title: "Delta Web Development", domain: "Web Development", issuer: "Delta", accent: "blue" as Accent },
  { title: "Data Science Internship", domain: "Data Science", issuer: "Internship credential", accent: "violet" as Accent }
];

export const cloudFinOpsCapabilities = [
  "AWS fundamentals",
  "S3 storage concepts",
  "Firebase-backed app workflows",
  "Vercel deployment",
  "SharePoint API integration",
  "Cloud cost optimization",
  "Budgeting and forecasting",
  "Rightsizing",
  "Cost allocation",
  "Governance workflows",
  "GreenOps and sustainability"
];

export const currentLearning = ["AWS", "FinOps", "System Design", "Low Level Design", "High Level Design", "Data Structures", "Algorithms", "UI/UX", "Figma", "Three.js", "GSAP"];

export const philosophy = [
  {
    icon: GraduationCap,
    title: "Learn by Building",
    text: "I learn technical depth by shipping real projects, then improving the architecture as the problem becomes clearer."
  },
  {
    icon: ShieldCheck,
    title: "Practical Engineering",
    text: "I value systems that are understandable, maintainable, and useful to the people who rely on them."
  },
  {
    icon: Rocket,
    title: "Scalable Architecture",
    text: "I look for boundaries that keep features flexible while making the core product easier to reason about."
  },
  {
    icon: Sparkles,
    title: "Problem Solving",
    text: "I enjoy turning ambiguous real-world requirements into structured workflows and working software."
  },
  {
    icon: BriefcaseBusiness,
    title: "Continuous Learning",
    text: "I am actively strengthening AWS, FinOps, system design, DSA, UI/UX, Figma, Three.js, and GSAP."
  }
];

export function getProject(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}

export const accentClasses: Record<Accent | string, string> = {
  blue: "border-blue/25 bg-blue/10 text-blue",
  green: "border-green/25 bg-green/10 text-green",
  violet: "border-violet/25 bg-violet/10 text-violet",
  amber: "border-amber/25 bg-amber/10 text-amber"
};
