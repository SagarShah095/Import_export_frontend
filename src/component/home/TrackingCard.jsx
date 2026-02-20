"use client";
import { useState } from "react";

const TrackingCard = () => {
    const [shipmentType, setShipmentType] = useState("single");

    return (
        <div
            id="tracking-section"
            className="relative z-20 container mx-auto px-6 -mt-20 md:-mt-40 mb-20 flex justify-center md:justify-end"
        >
            <div className="absolute md:bg-primary z-10 rounded-2xl -top-1 w-full h-10 max-w-[31.9rem] opacity-100"></div>
            <div className="bg-white pt-5 rounded-2xl shadow-2xl z-50 p-6 md:p-8 w-full max-w-lg relative overflow-hidden">
                {/* Top Border Accent */}

                {/* Card Header */}
                <div className="flex items-center gap-2 mb-6">
                    {/* Diamond Icon Placeholder for design match */}
                    <div className="relative flex items-center justify-center">
                        <img src="/shep-design.svg" alt="icon" className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary">
                        Track Your Shipment
                    </h3>
                </div>

                {/* Radio Options */}
                <div className="flex gap-8 mb-8">
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-5 h-5">
                            <input
                                type="radio"
                                name="shipmentType"
                                checked={shipmentType === "single"}
                                onChange={() => setShipmentType("single")}
                                className="peer appearance-none w-5 h-5 border-2 border-primary rounded-full checked:border-primary checked:bg-white z-10 cursor-pointer"
                            />
                            {/* Added z-20 to ensure dot is visible above the input background */}
                            <div className="w-2.5 h-2.5 bg-primary rounded-full absolute opacity-0 peer-checked:opacity-100 transition-opacity z-20" />
                        </div>
                        <span className={`font-medium transition ${shipmentType === "single" ? "text-secondary" : "text-gray-500 group-hover:text-secondary"}`}>
                            Single Shipment
                        </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-5 h-5">
                            <input
                                type="radio"
                                name="shipmentType"
                                checked={shipmentType === "multiple"}
                                onChange={() => setShipmentType("multiple")}
                                className="peer appearance-none w-5 h-5 border-2 border-primary rounded-full checked:border-primary checked:bg-white z-10 cursor-pointer"
                            />
                            {/* Added z-20 to ensure dot is visible above the input background */}
                            <div className="w-2.5 h-2.5 bg-primary rounded-full absolute opacity-0 peer-checked:opacity-100 transition-opacity z-20" />
                        </div>
                        <span className={`font-medium transition ${shipmentType === "multiple" ? "text-secondary" : "text-gray-500 group-hover:text-secondary"}`}>
                            Multiple Shipment
                        </span>
                    </label>
                </div>

                {/* Input & Action */}
                <div className="flex flex-col md:flex-row gap-4 items-end">
                    <div className="flex-1 w-full border-b border-gray-300 pb-2">
                        <input
                            type="text"
                            placeholder={shipmentType === "single" ? "Enter Shipment Number..." : "Enter Shipment Numbers..."}
                            className="w-full bg-transparent text-secondary placeholder-gray-400 focus:outline-none focus:border-primary transition"
                        />
                    </div>
                    <button
                        className="bg-secondary text-white px-8 py-3 rounded-lg duration-300 font-medium hover:bg-secondary/90 transition md:w-auto w-full flex items-center justify-center gap-2 group"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Track Now
                        <span className="bg-white/20 p-1 rounded group-hover:bg-white/30 transition">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrackingCard;
