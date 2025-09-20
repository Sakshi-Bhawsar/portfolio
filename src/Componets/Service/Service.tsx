"use client"; // if you're in Next.js App Router
import { services } from "@/data/data";
import Card from "./Card/Card";
import Slider from "react-slick";

const Service = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px", // removes side gap
        autoplay: true, 
        autoplaySpeed: 3000,  //slide changes every 3 seconds
        pauseOnHover: true,  //stops scrolling when user hovers
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };
    return (
        <section className=" py-14 mt-10  w-full bg-[#111827] text-white text-center ">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">My Quality Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-sm p-2">
                I offer end-to-end development solutions that combine creativity, strategy,
                and technology. My goal is to craft applications that are not only functional
                but also deliver impactful digital experiences.
            </p>
            <div className="max-w-4xl mx-auto p-4">
                <Slider {...settings} className="flex items-stretch">
                    {services.map((service, index) => (
                        <div key={index} className="px-4 flex">
                            <Card service={service} />
                        </div>
                    ))}
                </Slider>
            </div>

        </section >

    )
}

export default Service;