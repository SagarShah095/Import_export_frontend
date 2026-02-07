import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="text-white pt-44 md:pt-60 mt-10 min-h-[40rem] md:h-[40rem] pb-8 relative overflow-hidden bg-center bg-no-repeat bg-cover"
            style={{
                backgroundImage: "url('/footerImg.png')",
            }}>
            {/* Background Overlay or Decoration can go here */}

            <div className="max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            {/* Logo Placeholder */}
                            <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                                <img src="/Logo.jpeg" alt="Logo" className="w-full h-full object-contain mix-blend-multiply" />
                            </div>
                            <h2 className="text-2xl font-bold">Rohit Cargo and Logistics</h2>
                        </div>
                        <p className="text-white mb-6 leading-relaxed">
                            Leading the way in logistics and transportation solutions.
                            Reliable, efficient, and secure delivery services worldwide.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition duration-300"
                                >
                                    <Icon className="text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 relative inline-block">
                            Quick Links
                            {/* <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary rounded-full"></span> */}
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", link: "/" },
                                { name: "About Us", link: "/about" },
                                { name: "Services", link: "/service" },
                                { name: "Contact Us", link: "/contact-us" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.link} className="flex items-center gap-2 text-white hover:text-primary transition group">
                                        <BsArrowRight className="text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition duration-300" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 relative inline-block">
                            Our Services
                            {/* <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary rounded-full"></span> */}
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Express Delivery", link: "/service#express-service" },
                                { name: "Domestic Cargo", link: "/service#domestic-cargo-service" },
                                { name: "B2B Cargo", link: "/service#b2b-cargo-service" },
                                { name: "By Air Service", link: "/service#by-air-service" },
                                { name: "By Road Service", link: "/service#by-road-service" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.link} className="flex items-center gap-2 text-white hover:text-primary transition group">
                                        <BsArrowRight className="text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition duration-300" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 relative inline-block">
                            Contact Us
                            {/* <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary rounded-full"></span> */}
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white">
                                <FaMapMarkerAlt className="text-primary mt-1 text-lg flex-shrink-0" />
                                <span>123 Logistics Way, Transport City, Global 54321</span>
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <FaPhoneAlt className="text-primary flex-shrink-0" />
                                <span>+1 (234) 567-8900</span>
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <FaEnvelope className="text-primary flex-shrink-0" />
                                <span>info@rohitcargo.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-white text-sm">
                    <p>© {new Date().getFullYear()} Rohit Cargo and Logistics. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-primary transition">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;