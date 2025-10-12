"use client"; // if you're in Next.js App Router
import { services } from "@/data/data";
import Card from "./Card/Card";
import { useEffect, useRef, useState } from "react";

const Service = () => {
    const [isScrolling, setIsScrolling] = useState(true);

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isScrolling) {
            interval = setInterval(() => {
                if (scrollRef.current) {
                    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

                    // Scroll continuously
                    scrollRef.current.scrollLeft += 1;

                    // Seamlessly continue by adjusting scroll position when nearing the end
                    if (scrollLeft + clientWidth >= scrollWidth) {
                        scrollRef.current.scrollLeft = scrollLeft % clientWidth;
                    }
                }
            }, 10); // Adjust speed by changing the interval duration
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isScrolling]);

    const handleMouseEnter = () => setIsScrolling(false);
    const handleMouseLeave = () => setIsScrolling(true);


    return (
        <section className=" py-14 mt-10  w-full bg-[#111827] text-white text-center ">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">My Quality Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-sm p-2">
                I offer end-to-end development solutions that combine creativity, strategy,
                and technology. My goal is to craft applications that are not only functional
                but also deliver impactful digital experiences.
            </p>
            <div ref={scrollRef} className="flex items-center gap-x-4  overflow-x-scroll scrollbar-hide mt-4"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>

                {services.map((service, index) => (
                    <div key={index} className="p-10 flex">
                        <Card service={service} />
                    </div>
                ))}
            </div>

        </section >

    )
}

export default Service;