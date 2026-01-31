import React from 'react'

const clients = [
    { name: "tynor", color: "#800080" }, // Purple
    { name: "nippo", color: "#FF0000" }, // Red/Blue mix usually, keeping simple
    { name: "Delivery Hero", color: "#D6001C" },
    { name: "Quero Delivery", color: "#8A2BE2" },
    { name: "Flipkart", color: "#047BD5" },
    { name: "Express Delivery", color: "#FF0000" },
    { name: "Delivery Hero", color: "#D6001C" },
    { name: "Quero Delivery", color: "#8A2BE2" },
]

const SatisfiedClients = () => {
    return (
        <section className="bg-white py-10 px-6 mb-10">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center">
                {/* Title Section */}
                <div className="flex items-center gap-3 mb-10">
                    <img src="/shep-design.svg" alt="icon" className="w-10 h-10" />
                    <h2 className="text-3xl md:text-3xl font-medium text-secondary">Our Satisfied Clients</h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 shadow-xl border-t-[4px] border-primary flex items-center justify-center h-32 hover:-translate-y-1 transition duration-300 relative group"
                        >
                            {/* Logo Placeholder - In a real app, use <img> tags here */}
                            {/* We use styled text to mimic the logos as requested previously when images weren't available */}
                            <h3
                                className="text-2xl font-bold group-hover:scale-110 transition duration-300"
                                style={{ color: client.color }}
                            >
                                {client.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SatisfiedClients