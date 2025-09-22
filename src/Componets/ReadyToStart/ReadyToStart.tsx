import { subText, textColor } from "@/constants/style"
import { classnames } from "@/utils/style"
import './style/style.css'
import Link from "next/link"

const ReadyToStart =()=>{
    return(
         <div className=" animate__animated animate__fadeInUp py-14 mt-10  w-full text-white text-center">
             <h1 className={classnames(textColor, " text-2xl md:text-4xl font-bold mb-4 ")}>Ready to start a project?</h1>
             <p className={classnames(subText, "text-xs lg:text-sm  max-w-2xl mx-auto mb-12 ")}>Let&apos;s collaborate and bring your ideas to life with innovative solutions</p>
             <div className=" flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href='/contact'>  <button className="button px-6 py-2 rounded-lg cursor-pointer w-fit ">Get In Touch</button></Link>
              <Link href='/resume'>  <button className=" border-2 border-[#06b6d4] px-6 py-2 rounded-lg cursor-pointer hover:bg-[#222e46] hover:shadow-md active:text-gray-300  w-fit">View Resume</button></Link>
             </div>
         </div>
    )
}

export default ReadyToStart