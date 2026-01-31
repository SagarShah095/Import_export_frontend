"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import { RiTruckLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { TbTruck } from "react-icons/tb";
import { useRef } from "react";
import AuthModal from "@/component/auth/AuthModal";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/service" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Tracking", href: "#tracking-section" },
];

export default function Navbar() {
  // ✅ HOOKS MUST BE HERE (INSIDE FUNCTION)
  const pathname = usePathname();
  const router = useRouter();
  const barRef = useRef(null);
  const [step, setStep] = useState(0);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Global Scroll Handler for Hash Links
  useEffect(() => {
    // Small timeout to ensure DOM is ready and page/hash update has processed
    const handleScroll = () => {
      if (window.location.hash) {
        const hash = window.location.hash;
        const id = hash.replace('#', '');
        const element = document.getElementById(id);

        if (element) {
          // Standard visible scroll
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Delay to allow page transition
    const timeoutId = setTimeout(handleScroll, 100);
    return () => clearTimeout(timeoutId);
  }, [pathname]); // Re-run on path change

  const getIndexFromPath = () =>
    navItems.findIndex((item) => item.href === pathname);

  const [activeIndex, setActiveIndex] = useState(getIndexFromPath);

  useEffect(() => {
    if (!barRef.current) return;

    const updateStep = () => {
      const barWidth = barRef.current?.offsetWidth || 0;
      const totalItems = navItems.length;
      setStep(barWidth / totalItems);
    };

    updateStep();
    window.addEventListener("resize", updateStep);

    return () => window.removeEventListener("resize", updateStep);
  }, []);

  useEffect(() => {
    const newIndex = getIndexFromPath();
    if (newIndex !== -1) {
      setActiveIndex(newIndex);
    }
  }, [pathname]);

  const handleNavClick = (item) => {
    if (item.name === "Tracking") {
      if (pathname === "/") {
        const section = document.getElementById("tracking-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push("/#tracking-section");
      }
    } else {
      router.push(item.href);
    }
    setStep(0); // Close mobile drawer if open
  };

  return (
    <div className="fixed bg-white top-0 left-0 right-0 z-50 mx-auto max-w-screen-xl rounded-xl mt-4 h-20 md:h-[6rem] shadow-md md:shadow-none">
      <div className="flex justify-between items-center md:items-end h-full px-4 md:px-0">

        {/* Logo */}
        <div className="cursor-pointer md:pl-[5rem]" onClick={() => router.push('/')}>
          <img src="/Logo.jpeg" alt="logo" className="h-16 md:h-24 object-contain" />
        </div>

        {/* Desktop Nav Items (Hidden on Mobile) */}
        <div
          ref={barRef}
          className="hidden md:block absolute top-0 right-0 rounded-bl-xl rounded-tr-xl bg-primary w-[80%] h-12 overflow-hidden"
        >
          {/* 🚚 Animated Truck */}
          <motion.div
            className="absolute left-[32.5%] top-2 -translate-y-1/2 z-10"
            animate={{ x: activeIndex * 120 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 21,
            }}
          >
            <TbTruck className="hidden lg:block text-white text-5xl" />
          </motion.div>

          {/* Social Icons */}
          <div className="flex justify-end items-center px-5 h-full gap-3 relative z-20">
            <FaFacebook className="h-5 w-5 text-white hover:scale-110 transition cursor-pointer" />
            <PiInstagramLogoFill className="h-5 w-5 text-white hover:scale-110 transition cursor-pointer" />
            <FaLinkedinIn className="h-5 w-5 text-white hover:scale-110 transition cursor-pointer" />
            <RiTwitterXLine className="h-5 w-5 text-white hover:scale-110 transition cursor-pointer" />
          </div>
        </div>

        <div className="hidden md:flex justify-between w-[55%] items-end h-full pb-0">
          {navItems.map((item, index) => (
            <div key={item.name} className="flex">
              <button
                onClick={() => handleNavClick(item)}
                className={clsx(
                  "mx-4 pb-3 font-medium transition",
                  index === activeIndex
                    ? "text-primary"
                    : "text-black hover:text-primary",
                )}
              >
                {item.name}
              </button>
            </div>
          ))}

          <button
            onClick={() => setIsAuthOpen(true)}
            className="px-10 py-3 rounded-br-xl text-white bg-[#2f3456] transition hover:bg-opacity-90"
          >
            Login
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setStep(prev => !prev ? 1 : 0)} className="text-3xl text-secondary">
            <RiTruckLine className="hidden" /> {/* Dummy to keep import used if strict */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <div
        className={clsx(
          "fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 md:hidden",
          step === 1 ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
        onClick={() => setStep(0)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={clsx(
            "fixed top-0 right-0 h-full w-[250px] bg-white shadow-2xl transition-transform duration-300 transform flex flex-col pt-10 px-6",
            step === 1 ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Close Button */}
          <button onClick={() => setStep(0)} className="self-end mb-8 text-secondary">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={clsx(
                  "text-left text-lg font-medium border-b border-gray-100 pb-2",
                  item.href === pathname ? "text-primary" : "text-secondary"
                )}
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => {
                setStep(0);
                setIsAuthOpen(true);
              }}
              className="mt-4 w-full py-3 bg-secondary text-white rounded-lg font-medium"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}

// "use client";

// import { usePathname, useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import clsx from "clsx";
// import { RiTruckLine } from "react-icons/ri";
// import { useEffect, useState } from "react";

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "About Us", href: "/about" },
//   { name: "Services", href: "/services" },
//   { name: "Contact Us", href: "/contact" },
// ];

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();

//   const getIndexFromPath = () =>
//     navItems.findIndex((item) => item.href === pathname);

//   const [activeIndex, setActiveIndex] = useState(getIndexFromPath);

//   useEffect(() => {
//     const newIndex = getIndexFromPath();
//     if (newIndex !== -1) setActiveIndex(newIndex);
//   }, [pathname]);

//   return (
//     <nav className="sticky top-0 z-50 bg-orange-500 shadow-lg">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo / Brand */}
//           <div className="flex items-center gap-2">
//             <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center font-bold text-white">
//               LOGO
//             </div>
//             <span className="text-white font-semibold text-lg tracking-wide">
//               YourBrand
//             </span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-6">
//             <a
//               href="#"
//               className="text-white/90 hover:text-white font-medium transition"
//             >
//               Home
//             </a>
//             <a
//               href="#"
//               className="text-white/90 hover:text-white font-medium transition"
//             >
//               Templates
//             </a>
//             <a
//               href="#"
//               className="text-white/90 hover:text-white font-medium transition"
//             >
//               Categories
//             </a>
//             <a
//               href="#"
//               className="text-white/90 hover:text-white font-medium transition"
//             >
//               Pricing
//             </a>
//           </div>

//           {/* Right Actions */}
//           <div className="hidden md:flex items-center gap-3">
//             <button className="px-4 py-2 text-white border border-white/30 rounded-lg hover:bg-white/10 transition">
//               Login
//             </button>
//             <button className="px-4 py-2 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-100 transition">
//               Get Started
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button className="text-white hover:bg-white/10 p-2 rounded-lg transition">
//               ☰
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
