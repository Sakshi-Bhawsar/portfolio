import { subText, textColor } from "@/constants/style"
import { classnames } from "@/utils/style"
import './style/style.css'

const ReadyToStart =()=>{
    return(
         <div className=" animate__animated animate__fadeInUp py-14 mt-10  w-full text-white text-center">
             <h1 className={classnames(textColor, "text-4xl font-bold mb-4 ")}>Ready to start a project?</h1>
             <p className={classnames(subText, "text-xs lg:text-sm  max-w-2xl mx-auto mb-12 ")}>Let's collaborate and bring your ideas to life with innovative solutions</p>
             <div className=" flex gap-6 justify-center">
                <button className="button px-6 py-2 rounded-lg cursor-pointer">Get In Touch</button>
                <button className=" border-2 border-[#06b6d4] px-6 py-2 rounded-lg cursor-pointer hover:bg-[#222e46] hover:shadow-md active:text-gray-300">View Resume</button>
             </div>
         </div>
    )
}

export default ReadyToStart