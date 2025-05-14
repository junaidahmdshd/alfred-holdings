'use client';

import React from 'react';
import { Container } from './ui/container';
import { Button } from './ui/button';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#4AACE3] via-[#69BBF5] to-[#69BBF5] md:bg-gradient-to-b md:from-[#4AACE3] md:via-[#4AACE3] md:to-white pt-10 md:pt-16 relative overflow-hidden">
      <Container className="relative z-10">
        <div className="flex flex-col items-center">
          {/* Hero content */}
          <div className="w-full max-w-[343px] md:max-w-[949px] text-center">
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <div className="w-full">
                <h2 className="text-white font-normal text-[36px] md:text-[64px] leading-[1.2em] md:leading-[1.15625em] tracking-tight md:tracking-tighter text-center">
                  Empowering GCC&apos;s Future – One Strategic Investment at a Time
                </h2>
              </div>
              
              <div className="w-full md:max-w-[673px] mt-3 md:mt-4">
                <p className="text-white font-medium text-base leading-[1.625em] tracking-tight text-center">
                  Alfred Holdings is a visionary investment group based in Dubai, UAE, driving strategic growth across the GCC through innovation and trust.
                </p>
              </div>
            </div>
            
            <div className="mt-6 md:mt-10">
              <Button 
                variant="secondary" 
                size="default"
                className="border-[#F4F5F5] border-2 rounded-[30px] bg-white text-[#132B39] font-semibold text-base tracking-tighter h-12 px-7 py-3 hover:bg-transparent hover:text-white"
              >
                EXPLORE OUR VISION
              </Button>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Hero image section */}
      <div className="w-full mt-8 md:mt-0">
        {/* Mobile image (hidden on md screens and above) */}
        <div className="relative w-full h-[450px] block md:hidden">
          <Image
            src="/assets/images/hero-section-bg-mobile.png"
            alt="Alfred Holdings hero mobile"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center center'
            }}
          />
          {/* Gradient overlay for smooth transition */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F4F5F5] to-transparent"></div>
        </div>
        
        {/* Desktop image (hidden on screens below md) */}
        <div className="relative w-full h-[1000px] hidden md:block">
          <Image
            src="/assets/images/hero-section-bg.png"
            alt="Alfred Holdings hero desktop"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 30%'
            }}
          />
          {/* Gradient overlay for smooth transition */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F4F5F5] to-transparent"></div>
        </div>
      </div>
    </section>
  );
}; 