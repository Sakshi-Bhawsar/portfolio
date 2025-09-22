import { IProject } from "@/data/data"
import { classnames } from "@/utils/style";
import Image from "next/image"
import Link from "next/link"
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


const ProjectCard = ({ project }: { project: IProject }) => {
    return (
        <div
            className={classnames(
                "group flex flex-col justify-between gap-4 p-3  rounded-xl transition-all duration-300",
                "bg-gradient-to-br from-[#1f2937]/80 to-[#111827]/90", // dark gradient
                "backdrop-blur-lg border border-[#2d3748]", // subtle glass effect
                "hover:shadow-lg hover:shadow-cyan-500/30 hover:border-cyan-500"
            )}
        >
            {project.icon ? (
                <div className="flex h-[150px] p-4 rounded-lg bg-radial-[at_25%_25%] from-[#212A37] to-zinc-900 to-75% border-gray-700  items-center justify-center mb-2 ">
                    <p className="text-7xl     transition-all delay-200 ease-in group-hover:rotate-8 group-hover:scale-105">
                        {project.icon}
                    </p>
                </div>
            ) : (
                <div className="bg-radial-[at_25%_25%] from-[#212A37] to-zinc-900 to-75% border-gray-700 p-4 rounded-lg flex justify-center">
                    <Image
                        className="rounded-xl object-cover"
                        src={project.image || ""}
                        height={200}
                        width={400}
                        alt="img"
                    />
                </div>
            )}

            <p className="text-start p-2 text-sm text-gray-300">{project.description}</p>

            <div className="flex gap-2 p-2 flex-wrap mt-auto">
                {project.tags.map((tag, index) => (
                    <p
                        key={index}
                        className="border rounded-full border-gray-600 py-1 px-4 text-xs text-gray-300 group-hover:border-cyan-400 group-hover:text-cyan-300"
                    >
                        {tag}
                    </p>
                ))}
            </div>

            <Link
                href={project?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center px-6 py-2 mt-2 rounded-lg bg-cyan-600/20 border border-cyan-500 text-cyan-400 hover:bg-cyan-600/30 hover:text-white transition-colors"
            >
                View <FaArrowUpRightFromSquare className="text-cyan-400 group-hover:text-white" />
            </Link>
        </div>

    )
}

export default ProjectCard