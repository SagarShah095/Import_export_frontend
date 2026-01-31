import Who from '@/component/about/Who'
import Owner from '@/component/about/Owner'
import OurVision from '@/component/about/OurVision'
import SatisfiedClients from '@/component/about/SatisfiedClients'
import React from 'react'

const page = () => {
  return (
    <div>
      <main className="w-full bg-white relative">
        <section className="relative w-full h-[350px] md:h-[450px] bg-[url('/about/aboutus-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
          <div className="absolute inset-0"></div>
          <div className="relative z-10 text-center">
            <div className="text-white space-y-4">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight">
                About <span className="text-primary">Us</span>
              </h1>
              {/* Breadcrumb or subtitle could go here if needed */}
            </div>
          </div>
        </section>
      </main>
      <Who />
      <Owner />
      <OurVision />
      <SatisfiedClients />
    </div>
  )
}

export default page