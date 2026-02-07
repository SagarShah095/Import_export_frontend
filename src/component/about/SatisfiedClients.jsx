import React from 'react'

const clients = [
    { src: "/clients/Logo1.jpeg", alt: "Client 1" },
    { src: "/clients/Logo2.jpeg", alt: "Client 2" },
    { src: "/clients/Logo3.jpeg", alt: "Client 3" },
    { src: "/clients/Logo4.jpeg", alt: "Client 4" },
    { src: "/clients/Logo5.jpeg", alt: "Client 5" },
    { src: "/clients/Logo6.jpeg", alt: "Client 6" },
    { src: "/clients/Logo7.jpeg", alt: "Client 7" },
    { src: "/clients/Logo8.jpeg", alt: "Client 8" },
]

const SatisfiedClients = () => {
    return (
        <section className="bg-white py-10 px-4 md:px-6 mb-10">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center">
                {/* Title Section */}
                <div className="flex items-center gap-3 mb-10">
                    <img src="/shep-design.svg" alt="icon" className="w-10 h-10" />
                    <h2 className="text-3xl md:text-3xl font-medium text-secondary">Our Satisfied Clients</h2>
                </div>

                {/* Grid of Client Logos */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 shadow-xl border-t-[4px] border-primary flex items-center justify-center h-28 sm:h-32 hover:-translate-y-1 transition duration-300 relative group w-full"
                        >
                            <img
                                src={client.src}
                                alt={client.alt}
                                className="max-h-full max-w-full object-contain group-hover:scale-110 transition duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SatisfiedClients