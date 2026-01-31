import React from 'react'

const OurVision = () => {
    return (
        <section className="bg-white py-10 px-6">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
                {/* Title Section */}
                <div className="flex items-center gap-3 mb-6">
                    <img src="/shep-design.svg" alt="icon" className="w-10 h-10" />
                    <h2 className="text-3xl md:text-3xl font-medium text-secondary">Our Vision</h2>
                </div>

                {/* Content */}
                <div className="text-[#9092a0] text-lg md:text-xl leading-relaxed max-w-[78rem] space-y-6 font-[400]">
                    <p>
                        At SHOBHA LOGISTICS, our vision is to revolutionize the cargo industry by becoming the most trusted and preferred logistics partner globally. We strive to redefine the standards of express delivery through innovation, advanced technology, and a relentless commitment to customer satisfaction.
                    </p>
                    <p className='px-10'>
                        To be a leader in the supply chain industry, providing reliable world class supply chain solutions and become the most valuable organization for all stakeholders.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default OurVision