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
  icon?:string
}

export const projects: IProject[] = [
  {
    name: "HowToAlgo",
    description:
      "A comprehensive learning platform for Data Structures & Algorithms, System Design, and Machine Learning. Features interactive coding challenges, tutorials, and contest preparation materials with a built-in coding playground.",
    tags: ["Next.js", "Strapi", "Tailwind CSS", "TypeScript", "Coding Playground"],
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
