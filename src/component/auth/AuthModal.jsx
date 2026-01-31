"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FaUser, FaEnvelope, FaLock, FaPhoneAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';

const AuthModal = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        if (!formData.email.trim()) return "Email is required";
        if (!/\S+@\S+\.\S+/.test(formData.email)) return "Email is invalid";
        if (!formData.password.trim()) return "Password is required";
        if (formData.password.length < 6) return "Password must be at least 6 characters";

        if (!isLogin) {
            if (!formData.username.trim()) return "Username is required";
            if (!formData.phone.trim()) return "Phone number is required";
            if (formData.phone.length < 10) return "Phone number must be at least 10 digits";
        }
        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const error = validate();
        if (error) {
            toast.error(error, {
                style: {
                    background: '#fee2e2',
                    color: '#b91c1c',
                    fontWeight: '500',
                }
            });
            return;
        }

        // Simulate API Call
        const successMessage = isLogin ? "Logged in Successfully!" : "Account Created Successfully!";
        toast.success(successMessage, {
            duration: 4000,
            position: 'top-center',
            style: {
                background: '#2f3456',
                color: '#fff',
                border: '1px solid #ee7f02',
                padding: '16px',
                fontWeight: 'bold',
            },
            iconTheme: {
                primary: '#ee7f02',
                secondary: '#fff',
            },
        });

        // Reset and Close
        setTimeout(() => {
            setFormData({ username: '', email: '', password: '', phone: '' });
            onClose();
        }, 1000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden z-20"
                    >
                        {/* Header / Toggle */}
                        <div className="flex relative">

                            <button
                                onClick={() => setIsLogin(true)}
                                className={`flex-1 py-4 text-center font-bold text-lg transition-colors duration-300 relative z-10 ${isLogin ? 'text-white' : 'text-gray-500 bg-gray-100 hover:bg-gray-200'}`}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setIsLogin(false)}
                                className={`flex-1 py-4 text-center font-bold text-lg transition-colors duration-300 relative z-10 ${!isLogin ? 'text-white' : 'text-gray-500 bg-gray-100 hover:bg-gray-200'}`}
                            >
                                Sign Up
                            </button>

                            {/* Sliding Background for Header */}
                            <motion.div
                                className="absolute top-0 bottom-0 bg-primary z-0"
                                initial={false}
                                animate={{
                                    left: isLogin ? '0%' : '50%',
                                    width: '50%'
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 z-30 bg-white/20 hover:bg-white/40 text-secondary p-1 rounded-full transition"
                        >
                            <IoClose size={24} />
                        </button>


                        {/* Form Content */}
                        <div className="p-8 pt-10">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-secondary mb-2">
                                    {isLogin ? 'Welcome Back!' : 'Join Us Today'}
                                </h2>
                                <p className="text-gray-500 text-sm">
                                    {isLogin ? 'Enter your credentials to access your account.' : 'Fill in your details to create a new account.'}
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">

                                {!isLogin && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden space-y-5"
                                    >
                                        <div className="relative">
                                            <FaUser className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="Username"
                                                value={formData.username}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-400 text-gray-700"
                                            />
                                        </div>
                                        <div className="relative">
                                            <FaPhoneAlt className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-400 text-gray-700"
                                            />
                                        </div>
                                    </motion.div>
                                )}

                                <div className="relative">
                                    <FaEnvelope className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-400 text-gray-700"
                                    />
                                </div>

                                <div className="relative">
                                    <FaLock className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-400 text-gray-700"
                                    />
                                </div>

                                {isLogin && (
                                    <div className="flex justify-end">
                                        <button type="button" className="text-sm text-primary hover:underline">
                                            Forgot Password?
                                        </button>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="w-full bg-secondary text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-[#202442] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    {isLogin ? 'Login' : 'Sign Up'}
                                </button>
                            </form>

                            <div className="mt-8 text-center text-sm text-gray-500">
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                                <button
                                    onClick={() => setIsLogin(!isLogin)}
                                    className="text-primary font-bold hover:underline"
                                >
                                    {isLogin ? 'Sign Up' : 'Login'}
                                </button>
                            </div>
                        </div>

                        {/* Decorative bottom bar */}
                        <div className="h-1.5 w-full bg-gradient-to-r from-secondary via-primary to-secondary"></div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AuthModal;
