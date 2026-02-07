import React from 'react';

const WhatWeDo = () => {
    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-screen-xl mx-auto space-y-20">

                {/* Header Section */}
                <div className="text-center max-w-[73rem] mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <img src="/shep-design.svg" alt="icon" className="w-10 h-10" />
                        <h2 className="text-3xl md:text-3xl font-medium text-secondary">What we do for You</h2>
                    </div>
                    <p className="text-[#6c757d] text-base md:text-xl  text-center font-normal">
                        "Rohit Cargo and Logistics provides comprehensive transportation solutions: Shipway for flexible shipping, By Road for reliable ground transport, and By Air for swift deliveries, ensuring seamless shipment management tailored to your needs."
                    </p>
                </div>

                {/* Section 1: Express Service (Image Left, Text Right) */}
                <div id="express-service" className="flex md:w-[95%] w-[100%] mx-auto flex-col md:flex-row items-center gap-10 md:gap-2">
                    <div className="w-full md:w-1/2 flex justify-center relative flex-col items-center">
                        {/* Decoration Line - Positioned relative to the gray box container */}
                        <img src="/home/img-1.png" alt="Express Service" className="w-[80%] h-auto object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary">Express Service</h3>
                        <p className="text-[#6c757d] text-lg font-medium  text-justify">
                            Swift Express Service ensures prompt delivery, tailored for urgent shipments with reliability and efficiency. Rohit Cargo and Logistics Express Service is a testament to our commitment to swift and efficient logistics solutions. With globalization driving the need for rapid deliveries, our Express Service stands as a beacon of reliability. Utilizing a blend of advanced technology and a dedicated workforce, we guarantee expedited deliveries, even within the tightest timelines. Whether it's urgent documents, perishable goods, or time-sensitive packages, our Express Service ensures they reach their destination promptly, enabling businesses and individuals to stay ahead in today's fast-paced world.
                        </p>
                    </div>
                </div>

                {/* Section 2: Domestic Cargo Service (Text Left, Image Right) */}
                <div id="domestic-cargo-service" className="flex md:w-[95%] w-[100%] mx-auto flex-col md:flex-row-reverse items-center gap-10 md:gap-2">
                    <div className="w-full md:w-1/2 flex justify-center relative flex-col items-center">
                        {/* Decoration Line */}
                        <img src="/home/img-2.png" alt="Domestic Cargo Service" className="w-[80%] h-auto object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary">Domestic Cargo Service</h3>
                        <p className="text-[#6c757d] text-lg font-medium  text-justify">
                            Reliable Domestic Shipping offers hassle-free transportation solutions nationwide, ensuring safe and timely delivery of goods with trust and efficiency. Navigating the intricacies of domestic logistics requires a partner with a deep understanding of local dynamics and a robust infrastructure. Rohit Cargo and Logistics Domestic Cargo Service stands as a trusted ally for businesses and individuals seeking seamless transportation solutions within the country. Leveraging our extensive network, modern fleet, and seasoned professionals, we offer end-to-end cargo management services tailored to meet diverse needs. From doorstep pickup to timely delivery, our comprehensive approach ensures the safe and efficient transit of goods, fostering trust and satisfaction among our clientele.
                        </p>
                    </div>
                </div>

                {/* Section 3: B2B Cargo Service (Image Left, Text Right) */}
                <div id="b2b-cargo-service" className="flex md:w-[95%] w-[100%] mx-auto flex-col md:flex-row items-center gap-10 md:gap-2">
                    <div className="w-full md:w-1/2 flex justify-center relative flex-col items-center">
                        {/* Decoration Line */}
                        <img src="/home/img-3.png" alt="B2B Cargo Service" className="w-[80%] h-auto object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary">B2B Cargo Service</h3>
                        <p className="text-[#6c757d] text-lg font-medium  text-justify">
                            Efficient B2B Cargo facilitates seamless freight forwarding, optimizing business supply chains with reliability and cost-effectiveness. In the realm of business-to-business transactions, efficient cargo management plays a pivotal role in maintaining supply chain integrity. Rohit Cargo and Logistics B2B Cargo Service addresses this need with tailor-made solutions designed to streamline freight forwarding processes for businesses. Our comprehensive service portfolio covers a spectrum of industries, offering seamless transportation solutions for goods of all sizes and types. With a focus on reliability, transparency, and cost-effectiveness, we empower businesses to optimize their logistics operations, enhance productivity, and drive growth.
                        </p>
                    </div>
                </div>

                {/* Section 4: By Air Service (Text Left, Image Right) */}
                <div id="by-air-service" className="flex md:w-[95%] w-[100%] mx-auto flex-col md:flex-row-reverse items-center gap-10 md:gap-2">
                    <div className="w-full md:w-1/2 flex justify-center relative flex-col items-center">
                        {/* Decoration Line */}
                        <img src="/home/img-4.png" alt="By Air Service" className="w-[80%] h-auto object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary">By Air Service</h3>
                        <p className="text-[#6c757d] text-lg font-medium text-justify">
                            Experience the speed and efficiency of air transportation with Rohit Cargo and Logistics. Our By Air service ensures your time-sensitive shipments reach their global or domestic destinations promptly. Whether it's high-value cargo, urgent documentation, or perishable goods, our dedicated air freight solutions offer real-time tracking, secure handling, and the fastest transit times available, connecting you to markets worldwide with ease.
                        </p>
                    </div>
                </div>

                {/* Section 5: By Road Service (Image Left, Text Right) */}
                <div id="by-road-service" className="flex md:w-[95%] w-[100%] mx-auto flex-col md:flex-row items-center gap-10 md:gap-2">
                    <div className="w-full md:w-1/2 flex justify-center relative flex-col items-center">
                        {/* Decoration Line */}
                        <img src="/home/img-5.png" alt="By Road Service" className="w-[80%] h-auto object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary">By Road Service</h3>
                        <p className="text-[#6c757d] text-lg font-medium text-justify">
                            With our reliable road transportation services, we guarantee timely deliveries while prioritizing safety and efficiency. Our By Road transportation service is designed to provide cost-effective and reliable delivery solutions for shipments that require ground transportation. From local deliveries to long-haul freight, our fleet of vehicles and experienced drivers are equipped to handle a wide range of cargo, ensuring timely deliveries while prioritizing safety and security. With real-time tracking and personalized customer support, you can rest assured that your shipments are in good hands every step of the way.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhatWeDo;