'use client'

import React from 'react'
import { Container } from './ui/container'
import Image from 'next/image'

export const GlobalPresenceSection = () => {
  return (
    <section className="w-full bg-white">
      {/* Dark blue header */}
      <div className="h-12 w-full bg-[#132b39]"></div>

      <div className="bg-[#f7f7f7]">
        <Container className="px-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left side - text content */}
            <div className="px-8 py-12 md:px-16 md:py-16">
              <div className="space-y-12">
                <h2 className="text-3xl leading-tight font-semibold text-[#132b39]">
                  Proudly <span className="text-[#3498db]">Serving the Gulf</span>
                </h2>

                <div className="space-y-8">
                  <div className="space-y-1">
                    <p className="text-base leading-tight font-medium text-[#132b39]">
                      United Arab Emirates (UAE)
                    </p>
                    <p className="text-sm leading-normal text-[#666]">Headquarter</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-base leading-tight font-medium text-[#132b39]">Bahrain</p>
                    <p className="text-sm leading-normal text-[#666]">
                      Launch partnerships underway
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - world map */}
            <div className="relative bg-[#f7f7f7]">
              <div className="relative h-full min-h-[280px] w-full md:min-h-[320px]">
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
