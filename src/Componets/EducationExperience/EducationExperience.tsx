"use client";

import { motion } from "framer-motion";
import { education, experiences } from "@/data/data";

interface TimelineData {
  title: string;
  company: string;
  duration: string;
  description: string;
}


const TimelineItem = ({ item }: { item:  TimelineData}) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative pl-8 border-l border-gray-700"
    >
        {/* Animated Node */}
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="absolute -left-[10px] top-2 w-4 h-4 rounded-full 
                 bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md animate-pulse"
        ></motion.div>

        <span className="text-xs text-gray-400">{item.duration}</span>
        <h3 className="text-lg font-semibold text-cyan-400">{item.title}</h3>
        <p className="text-sm text-gray-300">{item.company}</p>
        <p className="text-gray-400 text-sm mt-2">{item.description}</p>
    </motion.div>
);

const Timeline = () => {
    return (
        <section className="py-16 px-6 bg-[#111827] text-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Experience Column */}
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-8 text-cyan-400">Experience</h2>
                    <div className="space-y-10">
                        {experiences.map((item, index) => (
                            <TimelineItem key={index} item={item} />
                        ))}
                    </div>
                </div>

                {/* Education Column */}
                <div>
                    <h2 className="text-2xl  md:text-4xl font-bold mb-8 text-blue-400">Education</h2>
                    <div className="space-y-10">
                        {education.map((item, index) => (
                            <TimelineItem key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
