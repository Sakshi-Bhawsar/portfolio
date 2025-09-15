import ProjectCard from "@/Componets/MyWork/ProjectCard/ProjectCard"
import { subText, textColor } from "@/constants/style"
import { projects } from "@/data/data"
import { classnames } from "@/utils/style"
import Link from "next/link"

const Projects = () => {
    return (
        <div className="  w-full flex flex-col justify-center  text-center">
            <div className="relative py-20 px-6 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a] overflow-hidden">
                {/* Decorative background glow */}
                <div className="absolute inset-0">
                    <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 text-center">
                    <h1
                        className={classnames(
                            textColor,
                            "text-4xl font-bold mb-4 tracking-tight"
                        )}
                    >
                        Featured Projects
                    </h1>
                    <p
                        className={classnames(
                            subText,
                            "text-base max-w-2xl mx-auto mb-12 leading-relaxed"
                        )}
                    >
                        Explore my journey through innovative solutions, modern technologies,
                        and creative problem-solving. Each project reflects a unique challenge,
                        transformed into impactful digital experiences through strategic
                        development and technical expertise.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-8 max-w-4xl mx-auto mb-5 py-14 mt-10">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

            <Link href='/' className="flex justify-center mb-10">
                <button
                    className="relative cursor-pointer flex items-center justify-center w-48 h-14 rounded-2xl overflow-hidden text-lg font-semibold text-white bg-[#1e293b] border border-cyan-500/40 group transition-transform duration-200 active:scale-95 active:shadow-[0_0_20px_#06b6d4]"
                    type="button"
                >
                    {/* Sliding background only */}
                    <div
                        className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 group-hover:w-full"
                    ></div>

                    {/* Content wrapper */}
                    <div className="relative z-10 flex items-center gap-2">
                        {/* Arrow stays at left side */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1024 1024"
                            height="20px"
                            width="20px"
                            className="text-white"
                        >
                            <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="currentColor" />
                            <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="currentColor" />
                        </svg>

                        {/* Button text */}
                        <span>Back</span>
                    </div>
                </button>
            </Link>



        </div>
    )
}

export default Projects