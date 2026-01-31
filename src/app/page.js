import { TbTruck, TbPackage } from "react-icons/tb";
import Services from "@/component/home/Services";
import Client from "@/component/home/Client";

const Page = () => {
  return (
    <main className="w-full min-h-screen mt-20 md:mt-0 bg-white">
      <section className="relative w-full min-h-[50rem] md:min-h-0 md:h-[42rem] bg-[url('/home-bg.png')] bg-cover bg-center bg-no-repeat">
        {/* Content Container */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:pl-[5rem] grid grid-cols-1 h-full items-center pt-10 md:pt-20 pb-32 md:pb-0">
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-2xl lg:text-[2rem] 2xl:text-6xl 2xl:w-[40rem] font-bold leading-tight">
              <span className="text-primary">Logistics Mastery:</span> Delivering
              Your Packages with Precision
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-[500] max-w-4xl">
              Precision delivery guaranteed: Our logistics mastery ensures your
              packages reach their destination reliably and on time, exceeding
              expectations with every shipment.
            </p>
          </div>
        </div>

        {/* Bottom Shapes Decoration */}
        <div className="absolute bottom-0 w-full h-24 md:h-48 z-10 pointer-events-none overflow-hidden">

        </div>

        {/* Floating Tracking Card */}
        <div id="tracking-section" className="relative z-20 container mx-auto px-6 -mt-20 md:-mt-40 mb-20 flex justify-center md:justify-end">
          <div className="absolute md:bg-primary z-10 rounded-2xl -top-1 w-full h-10 max-w-[31.9rem] opacity-100"></div>
          <div className="bg-white pt-5 rounded-2xl shadow-2xl z-50 p-6 md:p-8 w-full max-w-lg relative overflow-hidden">
            {/* Top Border Accent */}

            {/* Card Header */}
            <div className="flex items-center gap-2 mb-6">
              {/* Diamond Icon Placeholder for design match */}
              <div className="relative flex items-center justify-center">
                <img src="/shep-design.svg" alt="icon" className="w-8 h-8" />

              </div>
              <h3 className="text-2xl font-bold text-secondary">Track Your Shipment</h3>
            </div>

            {/* Radio Options */}
            <div className="flex gap-8 mb-8">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center justify-center w-5 h-5">
                  <input
                    type="radio"
                    name="shipmentType"
                    defaultChecked
                    className="peer appearance-none w-5 h-5 border-2 border-primary rounded-full checked:border-primary checked:bg-white z-10 cursor-pointer"
                  />
                  <div className="w-2.5 h-2.5 bg-primary rounded-full absolute opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
                <span className="text-gray-500 font-medium group-hover:text-secondary transition">Single Shipment</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center justify-center w-5 h-5">
                  <input
                    type="radio"
                    name="shipmentType"
                    className="peer appearance-none w-5 h-5 border-2 border-primary rounded-full checked:border-primary checked:bg-white z-10 cursor-pointer"
                  />
                  <div className="w-2.5 h-2.5 bg-primary rounded-full absolute opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
                <span className="text-gray-500 font-medium group-hover:text-secondary transition">Multiple Shipment</span>
              </label>
            </div>

            {/* Input & Action */}
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1 w-full border-b border-gray-300 pb-2">
                <input
                  type="text"
                  placeholder="Enter Shipment Number..."
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
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Client />
    </main>
  );
};

export default Page;