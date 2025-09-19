import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      degree: "MCA (Master of Computer Applications)",
      school: "SCSIT, DAVV Indore",
      duration: "2022 – 2024",
      result: "7.33 CGPA",
    },
    {
      degree: "B.C.A (Bachelor of Computer Application)",
      school: "Dayanand Saraswati College, Shajapur",
      duration: "2019 – 2022",
      result: "87%",
    },
    {
      degree: "12th (CBSE)",
      school: "Govt. School, Shajapur",
      duration: "2018 – 2019",
      result: "80%",
    },
    {
      degree: "10th (CBSE)",
      school: "Govt. School, Shajapur",
      duration: "2016 – 2017",
      result: "87%",
    },
  ];

  return (
    <div className="border border-gray-700 border-t-purple-400 p-8 rounded-lg mt-8 bg-[#0f172a]">
      <h1 className="text-xl font-bold mb-8 flex items-center gap-2">
        <FaGraduationCap className="text-purple-400 text-2xl" />
        Education
      </h1>

      <div className="relative border-l-2 border-purple-500/50 ml-4">
        {education.map((edu, index) => (
          <div key={index} className="mb-10 ml-6 relative">
            {/* Timeline Dot */}
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-purple-500 rounded-full ring-4 ring-[#0f172a]"></span>

            {/* Card */}
            <div className="bg-white/5 border border-gray-700 hover:border-purple-400 transition rounded-xl p-6 shadow-lg  hover:shadow-md">
              <h3 className="text-base font-semibold text-white">{edu.degree}</h3>
              <p className="text-gray-400 text-sm">{edu.school}</p>
              <span className="text-sm text-gray-500">{edu.duration}</span>

              {/* Result Badge */}
              <div className="mt-3">
                <span className="px-3 py-1 text-sm rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold">
                  {edu.result}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
