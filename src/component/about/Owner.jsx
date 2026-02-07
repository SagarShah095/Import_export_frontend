import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";

const Owner = () => {
    return (
        <section className="bg-white py-10 px-6">
            <div className="max-w-[76rem] mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">

                {/* Image Section */}
                <div className="relative w-full max-w-sm flex flex-col items-center">
                    {/* Top Orange Bar - positioned relative to the box */}
                    {/* <div className="w-[90%] h-1.5 bg-primary mb-0 z-10"></div> */}

                    {/* Gray Background Box */}
                    <img
                        src="/about/Owner_bg.jpeg"
                        alt="Mr. Ramesh Kathat"
                        className="w-[83%] h-[20rem] object-cover block mix-blend-darken bg-blend-multiply"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full max-w-[34rem] text-center md:text-left">
                    <h2 className="text-3xl md:text-3xl font-bold text-primary mb-2 uppercase">
                        Mr. Ramesh Kathat
                    </h2>
                    <h3 className="text-md md:text-md font-bold text-secondary mb-6">
                        Founder - Rohit Cargo and Logistics
                    </h3>
                    <p className="text-[#6c757d] text-base font-[500] md:text-lg leading-relaxed mb-6">
                        Mr. RAMESH KATHAT is the founder of the company. He has 20+ years of experience in Courier and Cargo Industries.
                    </p>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6">
                        <a href="tel:9351719090" className="flex items-center gap-2 text-secondary font-bold hover:text-primary transition duration-300">
                            <FaPhoneAlt className="text-primary text-lg" />
                            <span>+91 93517 19090</span>
                        </a>
                        <a href="tel:9829674277" className="flex items-center gap-2 text-secondary font-bold hover:text-primary transition duration-300">
                            <FaPhoneAlt className="text-primary text-lg" />
                            <span>+91 98296 74277</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Owner;