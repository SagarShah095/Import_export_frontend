import React from 'react'

const Who = () => {
    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
                {/* Title Section */}
                <div className="flex items-center gap-3 mb-6">
                    <img src="/shep-design.svg" alt="icon" className="w-10 h-10" />
                    <h2 className="text-22xl md:text-3xl font-medium text-secondary">Who We Are</h2>
                </div>

                {/* Content */}
                <p className="text-[#6c757d] text-lg md:text-xl leading-relaxed max-w-[78rem] text-center">
                    SHOBHA LOGISTICS was started on 01/02/2023 with a mission to provide the most efficient and cost-effective logistics solutions to its customers. SHOBHA LOGISTICS is a leading provider of logistics services for a various industries like e-commerce, retail and manufacturing. With its highly experienced team of professionals, SHOBHA Logistics offers a wide range of services that are tailored to meet the needs of each individual customer. The company is dedicated to providing superior customer service and quality solutions that are designed to help businesses succeed.
                </p>
            </div>
        </section>
    )
}

export default Who