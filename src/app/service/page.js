"use client";
import WhatWeDo from '@/component/service/WhatWeDo'
import React, { useEffect } from 'react'
import Services from '@/component/home/Services'

const page = () => {
  return (
    <div>
      <main className="w-full bg-white relative">
        <section className="relative w-full h-[350px] md:h-[450px] bg-[url('/about/aboutus-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
          {/* Overlay */}
          <div className="absolute inset-0"></div>

          <div className="relative z-10 text-center">
            <div className="text-white space-y-4">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight">
                Our <span className="text-primary">Services</span>
              </h1>
            </div>
          </div>
        </section>
      </main>

      {/* Reusing Home Services Component */}
      <WhatWeDo />
    </div>
  )
}

export default page