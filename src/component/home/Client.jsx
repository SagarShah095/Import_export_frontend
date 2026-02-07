import React from 'react'
import ClientSlider from './Slider'

const Client = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-6 mt-10 text-center flex flex-col items-center">
            {/* Title */}
            <div
                className="flex items-center justify-center gap-3 mb-4"
            >
                <img src="/shep-design.svg" alt="icon" className="w-10 h-10" />
                <h2 className="text-3xl font-medium text-secondary">Clients</h2>
            </div>

            <p
                className="text-[#9092a0] text-lg max-w-[56rem] mx-auto  text-center mb-16"
            >
                "At Rohit Cargo and Logistics, client satisfaction is paramount. We cater to a diverse clientele, offering tailored logistics solutions that prioritize efficiency and cost-effectiveness. Our commitment is to exceed expectations, supporting businesses of all sizes in achieving their logistics goals."
            </p>

            <ClientSlider />
        </div>
    )
}

export default Client