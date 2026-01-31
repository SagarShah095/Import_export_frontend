import React from 'react';

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
                        src="/about/owner.png"
                        alt="Mr. Bharat Bhogayata"
                        className="w-[83%] h-auto object-cover block mix-blend-darken bg-blend-multiply"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full max-w-[34rem] text-center md:text-left">
                    <h2 className="text-3xl md:text-3xl font-bold text-primary mb-2 uppercase">
                        Mr. Bharat Bhogayata
                    </h2>
                    <h3 className="text-md md:text-md font-bold text-secondary mb-6">
                        Founder - Shobha Logistics
                    </h3>
                    <p className="text-[#6c757d] text-base font-[500] md:text-lg leading-relaxed">
                        Mr. BHARAT BHOGAYATA is the founder of the company. He has 30+ years of experience in Courier and Cargo Industries.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Owner;