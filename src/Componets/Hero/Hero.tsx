'use client'
import Image from "next/image"
import './style/style.css'
import { useEffect, useState } from "react";
import Link from "next/link";

const Hero = () => {
    const [quote, setQuote] = useState("")

    const quotes = [
        "Every challenge shapes me into something stronger and brighter.",
        "Progress matters more than perfection; growth is my true journey.",
        "I turn small steps into big achievements, one line of code at a time.",
        "Confidence begins when I embrace who I already am.",
        "Creativity isn’t about being perfect, it’s about being fearless."
    ];

    useEffect(() => {
        if (!quote) {
            setQuote(quotes[0])
        }
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * quotes.length)
            setQuote(quotes[randomIndex]);
        }, 60000)
        return () => clearInterval(interval);
    }, [])

    return (
        <div className="grid grid-cols-2 gap-4 justify-between py-14 hero-gradient">
            {/* <div className="hero-gradient"></div> */}

            <section className="animate__animated  animate__slideInLeft  pl-6  mx-auto max-w-2xl ">

                <h1 className=" text-4xl leading-16 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Hii,  I am a Developer Crafting Digital Solutions with Creativity & Precision
                </h1 >
                <p className="mt-10  text-gray-400 text-xl  leading-8 ">Through strategic development and innovative thinking, I craft web solutions that go beyond functionality. My goal is to design experiences that not only work flawlessly but also leave a lasting impression.</p>
                <div className="flex items-center gap-14 text-white my-8 ">
                   <Link href='/project'> <button className="btn-grad px-6 py-3 rounded-lg cursor-pointer">View My Work</button></Link>
                    <button className=" border-2 border-[#06b6d4] px-6 py-3 rounded-lg cursor-pointer hover:bg-[#222e46] hover:shadow-md active:text-gray-300">Get in Touch</button>
                </div>
                <div className="flex items-center text-white max-w-xl   justify-between  text-lg   font-semibold gradient-subtext">
                    <div className="flex flex-col items-center">
                        10+
                        <span>Projects</span>
                    </div>
                    <div className="flex flex-col items-center">
                        1.5+
                        <span>Years Experience</span>
                    </div>
                    <div className="flex flex-col items-center">
                        7.33
                        <span>CGPA</span>
                    </div>

                </div>

            </section>
            <div className="flex flex-col  gap-10 justify-center items-center">
                <Image src={`/assets/img.jpeg`} width={250} height={200} alt="img" className=" rounded-lg  animate__animated animate__slideInRight   transition-all delay-200 ease-in-out  hover:rotate-6 " style={{ boxShadow: "2px 4px 20px #26a0da" }}></Image>


                {quote && <div className="flex flex-col justify-center items-center gap-2 w-[550px] p-2 h-[150px]  shiny-box animate__animated  animate__fadeInUp shadow-lg shadow-[#3D444E]  text-white  border border-[#3D444E] rounded-2xl   bg-white/10 backdrop-blur-md ">
                    <span className="text-center"> "{quote}"</span>
                    <span className="text-center"> - SAKSHI</span>

                </div>
                }

            </div>


        </div>
    )
}

export default Hero