import { FaReact } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiMongodb, SiExpress, SiRedux, SiCplusplus, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Next.js", level: 80, icon: <SiNextdotjs className="text-white text-xl" /> },
    { name: "React.js", level: 80, icon: <FaReact className="text-cyan-400 text-xl" /> },
    { name: "JavaScript", level: 70, icon: <SiJavascript className="text-yellow-400 text-xl" /> },
    { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-cyan-300 text-xl" /> },
    { name: "Redux", level: 70, icon: <SiRedux className="text-purple-400 text-xl" /> },
    { name: "Express.js", level: 65, icon: <SiExpress className="text-gray-300 text-xl" /> },
    { name: "MongoDB", level: 60, icon: <SiMongodb className="text-green-400 text-xl" /> },
    { name: "C / C++", level: 60, icon: <SiCplusplus className="text-blue-400 text-xl" /> },
  ];

  return (
    <div className="border border-gray-700 border-t-purple-400 p-8 rounded-lg mt-8 bg-[#0f172a]">
      <h1 className="text-xl font-bold mb-8 flex items-center gap-2">
      <span className=" rounded-2xl bg-radial-[at_25%_25%] from-[#212A37] to-zinc-900 to-75% border-gray-700 p-2">🚀 </span>  
        Technical Skills
      </h1>

      <div className="grid grid-cols-1  gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/5 border border-gray-600 rounded-xl p-5 shadow-md hover:shadow-purple-500/20 transition hover:rotate-6"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                {skill.icon}
                <span className="font-semibold text-gray-200">{skill.name}</span>
              </div>
              <span className="text-purple-400 font-semibold">{skill.level}%</span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
