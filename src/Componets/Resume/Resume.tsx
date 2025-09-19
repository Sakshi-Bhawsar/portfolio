"use client";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import './style/style.css'
import Skills from "./Skills";
import Education from "./Education";
import Languages from "./Language";

const experiences = [
    {
        role: "SDE",
        company: "anurittiksha edtech private limited",
        type: "Full-Time",
        duration: "Nov 2024 – Jul 2025",
        points: [
            "Developed HowToAlgo, a platform offering courses on DSA, system design, behavioral skills, and algorithm problem-solving.",
            "Implemented SEO-friendly, responsive UI with server-side rendering and dynamic routing for structured content delivery",
            "Created documentation for the front-end team",
        ],
        tags: ["React.js", "Next.js", "Context Api", "Tailwind CSS", "Node js", "AWS"],
    },
    {
        role: "React.js Trainee",
        company: "StackInfinite",
        type: "INTERNSHIP",
        duration: "Mar 2024 – Sep 2024",
        points: [
            "Developed and maintained web applications using React.js and Next.js",
            "Collaborated with team to design and implement new features",
            "Created documentation for the front-end team",
        ],
        tags: ["React.js", "Next.js", "Redux", "JavaScript", "Teamwork"],
    },
    {
        role: "web Developer intern",
        company: "oasis infobyte",
        type: "INTERNSHIP",
        duration: "Feb 2024 – Mar 2024",
        points: [
            "Worked on developing and optimizing responsive web applications",
            "Enhanced UI/UX using modern frameworks and clean, reusable components",
            "Gained hands-on experience with version control, debugging, and deployment",
        ],
        tags: ["HTML", "CSS", "Javascript", "React js"],
    },
];

const Resume = () => {
    return (
        <section className="  space-y-10  bg-[#0f172a] text-gray-200 py-16 px-6 md:px-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:justify-between border border-gray-700  border-t-purple-400 p-8 rounded-lg">
                <div className=" space-y-2">
                    <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                        Sakshi Bhawsar</h1>
                    <p className=" text-gray-300 text-sm">software developer engineer</p>
                    <p className=" text-gray-400 text-xs">Passionate about crafting innovative tech solutions</p>
                </div>
                <div className=" space-y-6">
                    <p className="space-x-2">
                        <span className=" border text-lg rounded-2xl p-2  bg-gradient-to-r from-cyan-700 to-purple-600 ">📍</span>
                        <span className="text-sm ">Shajapur,Madhya Pradesh</span>

                    </p>
                    <p className="space-x-2">
                        <span className=" border text-lg rounded-2xl p-2  bg-gradient-to-r from-cyan-700 to-purple-600 ">📧</span>
                        <span className="text-sm ">sakshi5bhawsar@gmail.com</span>
                    </p>

                    <p className="space-x-2">
                        <a href="https://github.com/Sakshi-Bhawsar"
                            target="_blank"> <span className="button">💻GitHub</span></a>
                        <a href="https://www.linkedin.com/in/sakshi-bhawsar/"
                            target="_blank">  <span className="button">👨‍💼linkedin</span></a>
                    </p>

                </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 " >

                <div>
                    <div className=" h-fit col-span-1 border border-gray-700   border-t-purple-400 p-8 rounded-lg">
                        <h1 className="text-xl text-center font-bold mb-8 flex items-center gap-2">
                           <span className=" rounded-2xl bg-radial-[at_25%_25%] from-[#212A37] to-zinc-900 to-75% border-gray-700 p-2">✨</span> 
                             About Me
                        </h1>
                        <p className="text-xs text-gray-400">A passionate and detail-oriented developer with strong problem-solving skills and a creative approach to challenges. I thrive in dynamic environments, quickly adapting to new technologies and methodologies while maintaining a focus on delivering high-quality results. With a growth mindset and dedication to continuous learning, I aim to craft impactful solutions that combine innovation, precision, and user value.</p>
                    </div>
                    <Skills />
                    <Languages/>


                </div>

                <div className="col-span-2 ">
                    <section className=" h-fit border border-gray-700  border-t-purple-400 rounded-lg p-8 text-white">
                        <h2 className="text-3xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            💼 Experience
                        </h2>

                        <div className="space-y-6 max-w-4xl mx-auto">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="border border-gray-700 rounded-xl p-6 bg-white/5 backdrop-blur-md hover:shadow-lg hover:shadow-cyan-500/20 transition"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-lg font-semibold">{exp.role}</h3>
                                            <p className="text-gray-400 text-sm">{exp.company}</p>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium">
                                                {exp.type}
                                            </span>
                                            <p className="text-gray-400 text-sm mt-1">{exp.duration}</p>
                                        </div>
                                    </div>

                                    <ul className="list-disc text-sm list-inside space-y-2 text-gray-300">
                                        {exp.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {exp.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs rounded-md bg-[#1e293b] border border-gray-600 text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                    <Education />
                </div>
            </div>

        </section>
    );
};

export default Resume;
