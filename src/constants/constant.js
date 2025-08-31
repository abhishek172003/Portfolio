// Portfolio Constants for Abhishek Palve
// This file contains all the data that can be easily modified for future updates

// Personal Information
export const PERSONAL_INFO = {
  name: "Abhishek Palve",
  title: "Data Scientist & Full-Stack Developer",
  email: "abhishekpalve55@gmail.com",
  phone: "+91 7709665497",
  address: "Ambad, Nashik, 422010, Maharashtra",
  location: "Nashik, Maharashtra, India",
  github: "https://github.com/abhishek172003",
  linkedin: "https://www.linkedin.com/in/abhishek-palve-652ba91b1/",
  twitter: "https://x.com/AbhishekPalve8",
  leetcode: "https://leetcode.com/u/KhushiMhasange19/",
  freecodecamp: "https://www.freecodecamp.org/certification/Khushi_Mhasange/back-end-development-and-apis",
  coursera: "https://www.coursera.org/account/accomplishments/verify/2YSKFZMP5NWS"
};

// Hero Section Content
export const HERO_CONTENT = {
  title: "Hey there! 🧑‍💻😎",
  subtitle: "B.E. Computer Science graduate with a strong foundation in data science and programming, seeking an entry-level Data Scientist role to drive data-driven solutions.",
  description: "Combining technical expertise with a passion for innovation to create impactful web applications. Enthusiastic about collaborating on projects and contributing to the developer community."
};

// my data for temp data About Section example in future you can remove it
export const ABOUT_CONTENT = {
  title: "About Me",
  description: "I am a results-oriented Full-Stack Developer with a knack for turning ideas into reality. My journey into the world of technology has been fueled by a desire to create user-centric solutions. In addition to my technical skills, I am a skilled video editor and have successfully completed numerous video projects. I have also had the opportunity to participate in hackathons, such as Sunhacks, where I collaborated with talented individuals to develop innovative solutions. I am constantly seeking new challenges and opportunities to expand my skill set."
};

// Skills Data
export const SKILLS = {
  programmingLanguages: [
    { name: "Python", icon: "faPython" },
    { name: "SQL", icon: "faDatabase" },
    { name: "C++", icon: "faCode" },
    { name: "JavaScript", icon: "faJs" }
  ],
  dataScience: [
    { name: "Pandas", icon: "faChartLine" },
    { name: "NumPy", icon: "faCode" },
    { name: "Matplotlib", icon: "faChartLine" },
    { name: "Seaborn", icon: "faChartLine" },
    { name: "Plotly", icon: "faChartLine" }
  ],
  machineLearning: [
    { name: "Scikit-learn", icon: "faBrain" },
    { name: "Feature Engineering", icon: "faTools" },
    { name: "Model Evaluation", icon: "faBrain" },
    { name: "Hyperparameter Tuning", icon: "faTools" }
  ],
  deepLearning: [
    { name: "TensorFlow", icon: "faBrain" },
    { name: "Keras", icon: "faBrain" },
    { name: "PyTorch", icon: "faBrain" },
    { name: "Neural Networks", icon: "faBrain" },
    { name: "CNNs", icon: "faBrain" },
    { name: "Transfer Learning", icon: "faBrain" }
  ],
  computerVision: [
    { name: "OpenCV", icon: "faEye" },
    { name: "Image Preprocessing", icon: "faEye" },
    { name: "Data Augmentation", icon: "faEye" }
  ],
  webDevelopment: [
    { name: "HTML", icon: "faCode" },
    { name: "CSS", icon: "faCode" },
    { name: "ReactJS", icon: "faReact" },
    { name: "Node.js", icon: "faNode" },
    { name: "Bootstrap", icon: "faBootstrap" }
  ],
  tools: [
    { name: "Git", icon: "faGitAlt" },
    { name: "GitHub", icon: "faGithub" },
    { name: "Google Colab", icon: "faLaptopCode" },
    { name: "VS Code", icon: "faLaptopCode" },
    { name: "Jupyter Notebook", icon: "faLaptopCode" }
  ]
};

// temporary Experience Data, you can alter it in future
export const EXPERIENCES = [
  {
    year: "SEPTEMBER 2024 - JANUARY 2025",
    role: "ABB Project Developer/Intern",
    company: "ABB India Ltd",
    description: "Designed and implemented software tools that are now actively implemented and will be used in ABB India Ltd.",
    technologies: ["Python", "OpenCV", "Power Apps", "Power Pages", "SharePoint"]
  },
  {
    year: "JANUARY 2024 - MARCH 2024",
    role: "AI-ML Virtual Internship",
    company: "Google for Developers",
    description: "Learned Latest development Technologies and Tools for AI-ML",
    technologies: ["Python", "Matplotlib", "Sci-Py"]
  },
  {
    year: "DECEMBER 2023 - JANUARY 2024",
    role: "Frontend Developer - Internship",
    company: "NeelSindhu Industry",
    description: "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Worked closely with backend developers to integrate frontend components with Node.js APIs. Collaborated with stakeholders to define project requirements and timelines.",
    technologies: ["JavaScript", "ReactJS", "Bootstrap", "CSS3", "HTML5"]
  },
  {
    year: "MAY 2023 - JULY 2023",
    role: "AWS Cloud Virtual- Internship",
    company: "AWS Academy",
    description: "Learned Latest development Technologies and Tools for AWS",
    technologies: ["AWS", "S3", "EC2", "DynamoDB"]
  },
  {
    year: "MAY 2023 - JUNE 2023",
    role: "Web Developer - Internship",
    company: "TechnoHacks EduTech",
    description: "Designed and developed user interfaces for web applications using HTML and CSS. Implemented responsive designs and optimized frontend performance.",
    technologies: ["HTML", "CSS", "JavaScript"]
  }
];

// Projects Data, you can add more projects here in future same structure
export const PROJECTS = [
  {
    title: "Skin Cancer Detection For Early Intervention Using Deep Learning",
    description: "Built a skin lesion classification system using Python and Xception CNN trained on the HAM10000 dataset to identify 7 lesion types with 89% accuracy. Designed a user-friendly interface enabling image upload, segmentation, prediction, and downloadable PDF reports for clinical support and patient prioritization.",
    technologies: ["Python", "SQL", "Machine Learning", "Deep Learning", "NLP", "Statistics"],
    year: "2025",
    github: "https://github.com/abhishek172003/Skin-Cancer-Detection",
    liveDemo: "https://huggingface.co/spaces/abhishekpalve55/skinCancerDetection",
    image: "project-1.jpg"
  },
  {
    title: "Content-Based Movie Recommender System using Cosine Similarity",
    description: "Built a personalized movie recommender system using content-based filtering and cosine similarity. Analyzed movie metadata like genres, cast, and directors to recommend similar movies based on user input.",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Cosine Similarity"],
    year: "2024",
    github: "https://github.com/abhishek172003/Movie-Recommendation-System",
    liveDemo: "https://huggingface.co/spaces/abhishekpalve55/Movie-recommendation-system",
    image: "project-2.jpg"
  },
  // {
  //   title: "AI Mock Interview Platform",
  //   description: "Built AI powered mock interview platform for students to practice interviews.",
  //   technologies: ["ReactJS/NextJS", "JavaScript", "TailwindCSS", "PostgreSQL", "Drizzle ORM", "NodeJS"],
  //   year: "2024",
  //   github: "https://github.com/abhishek172003/AI-Interview-Prep",
  //   liveDemo: "https://ai-interviewprep-aman.vercel.app",
  //   image: "project-3.jpg"
  // },
];

// Education & Certifications
export const EDUCATION = [
  {
    degree: "Bachelor of Technology - Computer Science(Data Science)",
    institution: "Acropolis Institute of Technology and Research",
    duration: "2021-present",
    description: "Currently pursuing B.Tech in Computer Science with specialization in Data Science"
  }
];

// thre is no as such ui for this if you want we can add it.
export const CERTIFICATIONS = [
  {
    name: "FreeCodeCamp's Backend Development and APIs",
    issuer: "FreeCodeCamp",
    duration: "2024-2025",
    link: "https://www.freecodecamp.org/certification/Khushi_Mhasange/back-end-development-and-apis"
  },
  {
    name: "Meta's Frontend Development Professional",
    issuer: "Coursera",
    duration: "2023-2024",
    link: "https://www.coursera.org/account/accomplishments/verify/2YSKFZMP5NWS"
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Solved 200+ DSA Questions",
    platform: "Leetcode",
    duration: "2024-present",
    link: "https://leetcode.com/u/KhushiMhasange19/"
  }
];

// Contact Information
export const CONTACT_INFO = {
  email: "abhishekpalve55@gmail.com",
  phone: "+91 7709665497",
  address: "Ambad, Nashik, 422010, Maharashtra",
  socialLinks: {
    github: "https://github.com/abhishek172003",
    linkedin: "https://www.linkedin.com/in/abhishek-palve-652ba91b1/",
    twitter: "https://x.com/AbhishekPalve8"
  }
};

// Navigation Menu
export const NAVIGATION_MENU = [
  { name: "Projects", path: "/Projects" },
  { name: "Resume", path: "/Resume" },
  { name: "Contact", path: "/Contact" }
];

// Footer Information
export const FOOTER_INFO = {
  text: "Crafted with passion by Abhishek Palve",
  year: "2025"
};

// Resume File Path
export const RESUME_FILE = {
  path: "./src/assets/AbhishekPalve.pdf",
  filename: "AbhishekPalve.pdf"
};

// Theme Configuration
export const THEME_CONFIG = {
  light: "light",
  dark: "dark",
  default: "light"
};

// Animation Variants (for framer-motion)
export const ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0, ease: "easeOut" },
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delay: 0.2
      }
    }
  }
};

