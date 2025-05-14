'use client'

import React from 'react'
import { Container } from './ui/container'
import { Button } from './ui/button'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#4AACE3] via-[#69BBF5] to-[#69BBF5] pt-10 md:bg-gradient-to-b md:from-[#4AACE3] md:via-[#4AACE3] md:to-white md:pt-16">
      <Container className="relative z-10">
        <div className="flex flex-col items-center">
          {/* Hero content */}
          <div className="w-full max-w-[343px] text-center md:max-w-[949px]">
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <div className="w-full">
                <h2 className="text-center text-[36px] leading-[1.2em] font-normal tracking-tight text-white md:text-[64px] md:leading-[1.15625em] md:tracking-tighter">
                  Empowering GCC&apos;s Future – One Strategic Investment at a Time
                </h2>
              </div>

              <div className="mt-3 w-full md:mt-4 md:max-w-[673px]">
                <p className="text-center text-base leading-[1.625em] font-medium tracking-tight text-white">
                  Alfred Holdings is a visionary investment group based in Dubai, UAE, driving
                  strategic growth across the GCC through innovation and trust.
                </p>
              </div>
            </div>

            <div className="mt-6 md:mt-10">
              <Button
                variant="secondary"
                size="default"
                className="h-12 rounded-[30px] border-2 border-[#F4F5F5] bg-white px-7 py-3 text-base font-semibold tracking-tighter text-[#132B39] hover:bg-transparent hover:text-white"
              >
                EXPLORE OUR VISION
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Hero image section */}
      <div className="mt-8 w-full md:mt-0">
        {/* Mobile image (hidden on md screens and above) */}
        <div className="relative block h-[450px] w-full md:hidden">
          <Image
            src="/assets/images/hero-section-bg-mobile.png"
            alt="Alfred Holdings hero mobile"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
          />
          {/* Gradient overlay for smooth transition */}
          <div className="absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-[#F4F5F5] to-transparent"></div>
        </div>

        {/* Desktop image (hidden on screens below md) */}
        <div className="relative hidden h-[1000px] w-full md:block">
          <Image
            src="/assets/images/hero-section-bg.png"
            alt="Alfred Holdings hero desktop"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 30%',
            }}
          />
          {/* Gradient overlay for smooth transition */}
          <div className="absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-[#F4F5F5] to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
