export const services = [
  {
    icon: "🎨",
    title: "Frontend Development",
    description:
      "Creating responsive, interactive user interfaces with modern frameworks. From concept to deployment, I build engaging web experiences.",
    tags: ["Next.js", "React", "JavaScript", "Tailwind CSS", "More +"],
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    description:
      "Building secure, scalable, and efficient server-side applications with Node.js, Express.js, and MongoDB to power seamless digital experiences.",
    tags: ["Node.js", "Express.js", "MongoDB", "More +"],
  },
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Delivering full-stack web applications by integrating frontend design with powerful backend systems, ensuring smooth performance across platforms.",
    tags: ["Next.js", "React", "Express.js", "MongoDB", "More +"],
  },
  {
    icon: "🔗",
    title: "API Integration & Optimization",
    description:
      "Connecting third-party services, REST APIs, and payment gateways while optimizing performance for speed, scalability, and reliability.",
    tags: ["REST APIs", "Payment Gateways", "Third-Party Services"],
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description:
      "Improving website speed, responsiveness, and overall performance to create efficient and reliable digital solutions.",
    tags: ["Lighthouse", "Caching", "Code Splitting"],
  },
  {
    icon: "🧩",
    title: "Creative Problem-Solving",
    description:
      "Transforming complex challenges into innovative solutions by combining logical thinking with creativity and technical expertise.",
    tags: ["Design Thinking", "Debugging", "Innovation"],
  },
];


export interface IProject {
  name: string;
  description: string;
  tags: string[];
  image?: string; // optional thumbnail
  link: string;  // optional GitHub or live demo link
  icon?: string
}

export const projects: IProject[] = [
  {
    name: "HowToAlgo",
    description:
      "A comprehensive learning platform for Data Structures & Algorithms, System Design, and Machine Learning. Features interactive coding challenges, tutorials, and contest preparation materials with a built-in coding playground.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Node js", "AWS"],
    image: "/assets/howtoalgo.png",
    link: "https://www.howtoalgo.com/",
  },
  {
    name: "StudyNotion",
    description:
      "An EdTech platform enabling users to create, consume, and rate educational content with secure authentication, payments, and course management.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Razorpay"],
    image: "/assets/study.png",
    link: "https://github.com/Sakshi-Bhawsar/online_course_managmentSystem.git",
  },
  {
    name: "Portfolio Website",
    description:
      "My personal portfolio built with Next.js and Tailwind CSS, showcasing projects, skills, and contact form integration with Firebase for user messages.",
    tags: ["Next.js", "Tailwind CSS", "Firebase", "React.js"],
    icon: "🌐",
    link: "https://github.com/Sakshi-Bhawsar/portfolio.git",
  },
  {
    name: "Netflix GPT",
    description:
      "A Netflix-inspired movie browsing app with Firebase authentication and AI-powered search using TMDB and OpenAI APIs.",
    tags: ["React.js", "Tailwind CSS", "Firebase", "TMDB API", "OpenAI"],
    icon: "🎬",
    link: "https://github.com/Sakshi-Bhawsar/Netflix-gpt.git",
  },
  {
    name: "Weather App",
    description:
      "A responsive weather app that fetches real-time weather data from a public API with a clean, minimal interface.",
    tags: ["React.js", "Tailwind CSS", "Weather API"],
    icon: "🌥️",
    link: "https://github.com/Sakshi-Bhawsar/wetherapp.git",
  },
  {
    name: "Shopping Cart",
    description:
      "A shopping cart application built with React and Redux, allowing users to add and remove items with smooth state management.",
    tags: ["React.js", "Redux", "Tailwind CSS"],
    icon: "🛒",
    link: "https://github.com/Sakshi-Bhawsar/shopping-cart.git",
  },
];


export const experiences = [
  {
    title: "SDE - Software Developer Engineer",
    company: "anurittiksha edtech private limited",
    duration: "Nov 2024 – Jul 2025",
    description:
      "Developed HowToAlgo, a platform offering courses on DSA, system design, behavioral skills, and algorithm problem-solving , Implemented SEO-friendly, responsive UI with server-side rendering and dynamic routing for structured content delivery"
  },
  {
    title: "React.js Trainee",
    company: "StackInfinite",
    duration: "Mar 2024 – Sep 2024",
    description:
      "Developed and maintained web applications using React.js and Next.js, collaborated with team, and created documentation.",
  },
];

export const education = [
  {
    title: "MCA - Master of Computer Applications",
    company: "SCSIT, DAVV Indore",
    duration: "2022 – 2024",
    description: "Graduated with a CGPA of 7.33, focused on web development and software engineering.",
  },
  {
    title: "B.C.A - Bachelor of Computer Application",
    company: "Dayanand Saraswati College, Shajapur",
    duration: "2019 – 2022",
    description: "Graduated with 87%, learned core programming and computer fundamentals.",
  },
  {
    title: "12th (Higher Secondary)",
    company: "MP Board",
    duration: "2019",
    description: "Completed 12th with a focus on science and mathematics.",
  },
  {
    title: "10th (High School)",
    company: "MP Board",
    duration: "2017",
    description: "Completed 10th with strong academic performance.",
  },
];