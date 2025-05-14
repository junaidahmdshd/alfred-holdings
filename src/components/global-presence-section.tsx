'use client'

import React from 'react'
import { Container } from './ui/container'
import Image from 'next/image'

export const GlobalPresenceSection = () => {
  return (
    <section className="w-full bg-white">
      {/* Dark blue header */}
      <div className="bg-[#132b39] h-12 w-full"></div>
      
      <div className="bg-[#f7f7f7]">
        <Container className="px-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left side - text content */}
            <div className="px-8 py-12 md:px-16 md:py-16">
              <div className="space-y-12">
                <h2 className="text-[#132b39] text-3xl font-semibold leading-tight">
                  Proudly <span className="text-[#3498db]">Serving the Gulf</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="space-y-1">
                    <p className="text-[#132b39] text-base font-medium leading-tight">
                      United Arab Emirates (UAE)
                    </p>
                    <p className="text-[#666] text-sm leading-normal">
                      Headquarter
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-[#132b39] text-base font-medium leading-tight">
                      Bahrain
                    </p>
                    <p className="text-[#666] text-sm leading-normal">
                      Launch partnerships underway
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - world map */}
            <div className="relative bg-[#f7f7f7]">
              <div className="relative w-full h-full min-h-[280px] md:min-h-[320px]">
                <Image
                  src="/assets/images/section-map.png"
                  alt="Global Presence Map"
                  fill
                  className="object-contain p-4"
                  quality={100}
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      
     
    </section>
  )
} 