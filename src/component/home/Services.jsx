"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsArrowUpRight } from 'react-icons/bs';

const servicesData = [
    {
        bgImage: "/home/img-1.png",
        title: "Express Service",
        description: "Swift Express Service ensures prompt delivery, tailored for urgent shipments with reliability and efficiency.",
        link: "/service#express-service"
    },
    {
        bgImage: "/home/img-2.png",
        title: "Domestic Cargo Service",
        description: "Reliable Domestic Shipping offers hassle-free transportation solutions nationwide, ensuring safe and timely delivery of goods with trust and efficiency.",
        link: "/service#domestic-cargo-service"
    },
    {
        bgImage: "/home/img-3.png",
        title: "B2B Cargo Service",
        description: "Efficient B2B Cargo facilitates seamless freight forwarding, optimizing business supply chains with reliability and cost-effectiveness.",
        link: "/service#b2b-cargo-service"
    },
    {
        bgImage: "/home/img-4.png",
        title: "By Air Service",
        description: "Experience the speed and efficiency of air transportation with Rohit Cargo and Logistics Services, ensuring your shipments reach their destination promptly.",
        link: "/service#by-air-service"
    },
    {
        bgImage: "/home/img-5.png",
        title: "By Road Service",
        description: "With our reliable road transportation services, we guarantee timely deliveries while prioritizing safety and efficiency.",
        link: "/service#by-road-service"
    },
];

const Services = () => {
    const router = useRouter();

    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
            once: false,
            mirror: true,
            offset: 100,
            anchorPlacement: "top-bottom",
        });

        AOS.refresh();
    }, []);


    return (
        <section className="py-16 mt-20 bg-white w-full">
            <div className="max-w-screen-xl mx-auto px-6 text-center flex flex-col items-center">
                {/* Title */}
                <div
                    className="flex items-center justify-center gap-3 mb-4"
                    data-aos="fade-down"
                >
                    <img src="/shep-design.svg" alt="icon" className="w-10 h-10" />
                    <h2 className="text-3xl font-medium text-secondary">Services</h2>
                </div>

                {/* Subtitle */}
                <h3
                    className="text-lg md:text-xl text-[#9092a0] mb-4"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Rohit Cargo and Logistics Services: Your Trusted Partner in Transportation
                </h3>

                {/* Description */}
                <p
                    className="text-[#9092a0] text-xl max-w-[61rem] mx-auto leading-relaxed text-center mb-16"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Rohit Cargo and Logistics Services excels in express shipping, domestic cargo transport, and B2B logistics, offering swift and reliable solutions for your transportation needs, tailored to ensure efficient delivery and seamless business operations.
                </p>

                {/* Services Grid */}
                <div className="flex flex-wrap justify-center gap-8 w-full">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="group relative h-[400px] w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] overflow-hidden rounded-lg shadow-lg"
                            data-aos={
                                index === 3 ? "fade-right" :
                                    index === 4 ? "fade-left" :
                                        "zoom-in"
                            }
                            data-aos-delay={index * 100}
                        >
                            {/* Background Image */}
                            <div
                                style={{
                                    backgroundImage: `url(${service.bgImage})`,
                                    backgroundSize: "cover", // Changed to cover for better fill
                                    backgroundPosition: "center",
                                }}
                                className={`absolute inset-0 bg-no-repeat transition-transform duration-500 group-hover:scale-110`}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-[#2f3456]/90 group-hover:bg-[#2f3456]/80 transition-colors duration-300" />

                            {/* Top Bar Decoration */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-[#4a4f73] rounded-b-md z-20"></div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-center pt-10">
                                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>

                                <p className="text-white text-base leading-relaxed mb-8 opacity-90">
                                    {service.description}
                                </p>

                                <button
                                    onClick={() => router.push(service.link)}
                                    className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded hover:bg-orange-600 transition duration-300 font-medium group/btn"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100 + 200} // delayed relative to card
                                >
                                    Read More
                                    <BsArrowUpRight className="text-lg group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
