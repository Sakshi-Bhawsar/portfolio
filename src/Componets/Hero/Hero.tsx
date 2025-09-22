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
            // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [])

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 py-14 px-4 md:px-10 hero-gradient">
  {/* Left Section */}
  <section className=" mt-14 animate__animated animate__slideInLeft mx-auto md:mx-0 max-w-2xl">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug sm:leading-12 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
      Hii, I am a Developer Crafting Digital Solutions with Creativity & Precision
    </h1>
    <p className="mt-6 sm:mt-10 text-gray-400 text-lg sm:text-xl leading-7 sm:leading-6">
      Through strategic development and innovative thinking, I craft web solutions that go beyond functionality. My goal is to design experiences that not only work flawlessly but also leave a lasting impression.
    </p>
    <div className="flex flex-col sm:flex-row items-center sm:gap-6 md:gap-14 text-white my-6 sm:my-8">
      <Link href="/project">
        <button className="btn-grad px-6 py-3 rounded-lg cursor-pointer w-full sm:w-auto text-center">View My Work</button>
      </Link>
      <button className="border-2 border-[#06b6d4] px-6 py-3 rounded-lg cursor-pointer hover:bg-[#222e46] hover:shadow-md active:text-gray-300 w-auto text-center mt-4 sm:mt-0">
        Get in Touch
      </button>
    </div>
    <div className="flex flex-col sm:flex-row items-center text-white justify-between text-lg font-semibold gap-4 sm:gap-10 mt-6 gradient-subtext">
      <div className="flex flex-col items-center">
        10+<span>Projects</span>
      </div>
      <div className="flex flex-col items-center">
        1.5+<span>Years Experience</span>
      </div>
      <div className="flex flex-col items-center">
        7.33<span>CGPA</span>
      </div>
    </div>
  </section>

  {/* Right Section */}
  <div className="flex  flex-col gap-6 sm:gap-10 justify-center items-center mt-6 lg:mt-14">
    <Image
      src={`/assets/img.jpeg`}
      width={200}
      height={200}
      alt="img"
      className="rounded-full md:rounded-lg animate__animated animate__slideInRight transition-all delay-200 ease-in-out hover:rotate-6 w-52 sm:w-64 md:w-72"
      style={{ boxShadow: "2px 4px 20px #26a0da" }}
    />
    
    {quote && (
      <div className="flex flex-col justify-center items-center gap-2 w-full max-w-md p-4 h-auto sm:h-[150px] shiny-box animate__animated animate__fadeInUp shadow-lg shadow-[#3D444E] text-white border border-[#3D444E] rounded-2xl bg-white/10 backdrop-blur-md">
        <span className="text-center text-sm sm:text-base">&quot;{quote}&quot;</span>
        <span className="text-center text-sm sm:text-base">- SAKSHI</span>
      </div>
    )}
  </div>
</div>

    )
}

export default Hero