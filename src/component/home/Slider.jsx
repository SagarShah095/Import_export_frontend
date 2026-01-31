"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Dummy data for logos since actual images aren't present
const clientLogos = [
    { name: "Delivery Hero", color: "#D6001C" },
    { name: "Quero Delivery", color: "#8A2BE2" },
    { name: "Flipkart", color: "#047BD5" },
    { name: "Express Delivery", color: "#D6001C" },
    { name: "Amazon", color: "#FF9900" },
    { name: "DHL", color: "#FC0" }
];

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 -right-12 -translate-y-1/2 bg-[#1e293b] text-white p-3 rounded-full cursor-pointer hover:bg-primary transition z-10"
            onClick={onClick}
        >
            <FaArrowRight />
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 -left-12 -translate-y-1/2 bg-[#1e293b] text-white p-3 rounded-full cursor-pointer hover:bg-primary transition z-10"
            onClick={onClick}
        >
            <FaArrowLeft />
        </div>
    );
};

const ClientSlider = () => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    };

    if (!mounted) return null;

    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-10 mb-10">
            <Slider {...settings} className="slider-custom-dots">
                {clientLogos.map((logo, index) => (
                    <div key={index} className="px-2 md:px-3 py-4">
                        <div
                            style={{
                                boxShadow: "0 12px 12px -10px rgba(0,0,0,1)",
                            }}
                            className="bg-white p-4 md:p-6 border-t-[3px] border-primary flex items-center justify-center h-20 relative group hover:-translate-y-1 transition duration-300">
                            {/* 
                 Since real logos aren't available, using styled text to mimic the cards 
                 Replace <h2> with <img src={logo.src} /> when available 
               */}
                            <h3 className="font-bold text-lg md:text-xl group-hover:scale-110 transition text-center leading-tight" style={{ color: logo.color }}>
                                {logo.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Custom Styles for Dots to match 'orange' active state */}
            <style jsx global>{`
        .slider-custom-dots .slick-dots li button:before {
            font-size: 12px;
            color: #d1d5db; /* gray-300 */
            opacity: 1;
        }
        .slider-custom-dots .slick-dots li.slick-active button:before {
            color: #f97316; /* primary orange */
            opacity: 1;
        }
        .slider-custom-dots .slick-dots {
            bottom: -30px;
        }
        @media (min-width: 768px) {
            .slider-custom-dots .slick-dots {
                bottom: -40px;
            }
        }
      `}</style>
        </div>
    );
};

export default ClientSlider;