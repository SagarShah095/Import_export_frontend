
import Services from "@/component/home/Services";
import Client from "@/component/home/Client";

import TrackingCard from "@/component/home/TrackingCard";

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
        <TrackingCard />
      </section>
      <Services />
      <Client />
    </main>
  );
};

export default Page;