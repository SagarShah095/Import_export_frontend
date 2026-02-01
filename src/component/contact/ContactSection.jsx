"use client";
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { BiCurrentLocation } from 'react-icons/bi';
import { GoDotFill } from "react-icons/go";

const locations = [
    {
        city: "BHIWANDI",
        address: "119/120, E-10, Parasnath Complex, Owali, Valpada Road, Bhiwandi",
        phone: "9351719090 / 9829674277"
    },
    {
        city: "Ahmednagar",
        address: "Sukkar Chwok,Beside Udaynraje Hotel,Near Shree Weighbridge Parking, Ahmednagar",
        phone: "7220971111"
    },
    {
        city: "Aurangabad",
        address: "Plot No. 32, Gut No. 143, Satkarm Nagar, Behind Ayyappa Mandir, Beed Bypass Rd, Aurangabad",
        phone: "9970962476"
    }
];

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        isNotRobot: false
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";

        if (!formData.email.trim()) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
        }

        if (!formData.phone.trim()) tempErrors.phone = "Phone is required";
        else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            // Optional: Basic phone regex (10 digits) or just require something
            // sticking to basic required for now unless requested specific format
            // Let's add simple length check
            if (formData.phone.length < 10) tempErrors.phone = "Phone number must be at least 10 digits";
        }

        if (!formData.message.trim()) tempErrors.message = "Message is required";
        if (!formData.isNotRobot) tempErrors.isNotRobot = "Please confirm you are not a robot";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            toast.success("Message Sent Successfully!", {
                duration: 4000,
                position: 'top-center',
                style: {
                    background: '#2f3456', // Secondary color
                    color: '#fff',
                    border: '1px solid #ee7f02', // Primary color border
                    padding: '16px',
                    fontWeight: 'bold',
                },
                iconTheme: {
                    primary: '#ee7f02',
                    secondary: '#fff',
                },
            });
            setFormData({ name: '', email: '', phone: '', message: '', isNotRobot: false });
        } else {
            toast.error("Please Fill all Fields.", {
                style: {
                    background: '#fee2e2',
                    color: '#b91c1c',
                    fontWeight: '500',
                }
            });
        }
    };

    return (
        <section className="bg-white py-16 px-6 relative">
            <Toaster />
            <div className="max-w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">

                {/* Left Column: Locations */}
                <div className='lg:max-w-[80%] mx-auto'>
                    <div className="flex items-center gap-3 mb-8">
                        <img src="/shep-design.svg" alt="icon" className="w-10 h-10" />
                        <h2 className="md:text-3xl text-2xl font-medium text-secondary">Locations</h2>
                    </div>

                    <div className="bg-white shadow-xl border-t-[4px] border-primary p-8">
                        <div className="space-y-8">
                            {locations.map((loc, index) => (
                                <div key={index} className="space-y-3 pb-8 border-b last:border-0 last:pb-0 border-gray-200">
                                    <h3 className="text-2xl uppercase font-bold text-secondary flex items-center gap-2">
                                        <GoDotFill className="text-primary text-xl" />
                                        {loc.city}
                                    </h3>
                                    <div className="flex gap-3 upe text-[#6c757d] text-base">
                                        <FaMapMarkerAlt className="text-primary mt-1 text-xl flex-shrink-0" />
                                        <p>{loc.address}</p>
                                    </div>
                                    <div className="flex gap-3 text-[#6c757d] text-base items-center">
                                        <FaPhoneAlt className="text-primary text-lg flex-shrink-0" />
                                        <p>{loc.phone}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className='mt-5 lg:mt-0'>
                    <div className="flex items-center gap-3 mb-8">
                        <img src="/shep-design.svg" alt="icon" className="w-10 h-10" />
                        <h2 className="md:text-3xl text-2xl font-medium text-secondary">Send Us <span className="text-primary">Message</span></h2>
                    </div>

                    <div className="bg-primary p-8 md:p-10 relative overflow-hidden">
                        {/* Wavy Pattern Overlay (simulated with CSS or opacity) */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]"></div>

                        <div className="relative z-10 text-white mb-6 space-y-2">
                            <p className="font-normal text-base">Connect with Rohit Cargo and Logistics Services: Send us your messages today!
                                We're here to assist you with any inquiries or requests you may have.</p>
                            <p className="font-bold">Get in touch now!</p>
                        </div>

                        <form className="relative z-10 space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full h-12 px-4 rounded-sm text-gray-700 focus:outline-none"
                                />
                                {errors.name && <p className="text-white text-xs mt-1 bg-red-500/80 px-2 py-0.5 rounded w-max">{errors.name}</p>}
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full h-12 px-4 rounded-sm text-gray-700 focus:outline-none"
                                />
                                {errors.email && <p className="text-white text-xs mt-1 bg-red-500/80 px-2 py-0.5 rounded w-max">{errors.email}</p>}
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Your Phone"
                                    className="w-full h-12 px-4 rounded-sm text-gray-700 focus:outline-none"
                                />
                                {errors.phone && <p className="text-white text-xs mt-1 bg-red-500/80 px-2 py-0.5 rounded w-max">{errors.phone}</p>}
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write Message here.."
                                    className="w-full p-4 rounded-sm text-gray-700 focus:outline-none resize-none"
                                ></textarea>
                                {errors.message && <p className="text-white text-xs mt-1 bg-red-500/80 px-2 py-0.5 rounded w-max">{errors.message}</p>}
                            </div>

                            {/* Captcha Placeholder */}
                            <div>
                                <div className="bg-gray-100 p-2 w-max rounded shadow-sm border border-gray-300">
                                    <div className="flex items-center gap-2 px-2">
                                        <input
                                            type="checkbox"
                                            name="isNotRobot"
                                            checked={formData.isNotRobot}
                                            onChange={handleChange}
                                            className="w-5 h-5 rounded border-gray-300 cursor-pointer"
                                        />
                                        <span className="text-sm text-gray-700">I'm not a robot</span>
                                        <div className="ml-4 flex flex-col items-center">
                                            <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="captcha" className="w-8 opacity-50" />
                                            <span className="text-[10px] text-gray-500">reCAPTCHA</span>
                                        </div>
                                    </div>
                                </div>
                                {errors.isNotRobot && <p className="text-white text-xs mt-1 bg-red-500/80 px-2 py-0.5 rounded w-max">{errors.isNotRobot}</p>}
                            </div>

                            <button
                                type="submit"
                                className="bg-secondary text-white font-normal py-3 px-8 rounded flex justify-center items-center gap-2 hover:bg-opacity-90 transition-all mx-auto"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
