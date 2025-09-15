import { subText, textColor } from "@/constants/style"
import { projects } from "@/data/data"
import { classnames } from "@/utils/style"
import ProjectCard from "./ProjectCard/ProjectCard"
import '../Hero/style/style.css'
import Link from "next/link"

const MyWork = () => {
    return (
        <div className="py-14 mt-10  w-full flex flex-col justify-center  text-center">
            <h1 className={classnames(textColor, "text-4xl font-bold mb-4 ")}>Featured Works</h1>
            <p className={classnames(subText, "text-xs lg:text-sm  max-w-2xl mx-auto mb-12 ")}>Here are some of the projects I’ve worked on that highlight my skills in full-stack development, frontend engineering, and problem-solving. Each project reflects my ability to create functional, responsive, and user-focused applications.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-5">
                {projects.slice(0, 2).map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            <div className="flex justify-center py-8">
                <Link href='/project'>  <button className="btn-grad px-6 py-3 rounded-lg cursor-pointer w-fit">View All Projects</button></Link>
            </div>

        </div>
    )
}

export default MyWork