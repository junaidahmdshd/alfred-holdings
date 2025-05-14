'use client'

import React from 'react'
import { Container } from './ui/container'
import Image from 'next/image'

export const CTASection = () => {
  return (
    <section className="w-full bg-[#3498db] relative overflow-hidden">
      <Container className="px-4">
        <div className="flex flex-col md:flex-row items-center  relative z-10">
          {/* Left Content */}
          <div className="w-full md:w-2/3 mb-8 md:mb-0">
            <div className="space-y-5 max-w-lg">
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                Let's Build the Future,<br />
                Together <span>🚀</span>
              </h2>
              
              <p className="text-white/90 text-sm">
                Connect with us to explore investment possibilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-2">
                <a 
                  href="mailto:contact@alfredholdings.com" 
                  className="group flex items-center gap-3 text-white text-sm"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  <span>contact@alfredholdings.com</span>
                </a>
                
                <a 
                  href="tel:+123456789" 
                  className="group flex items-center gap-3 text-white text-sm"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  <span>Phone: 123-456-789</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-[520px] h-[340px] w-full ">
              <Image
                src="/assets/images/cta-section.png"
                alt="Alfred Holdings Mascot"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
      
      {/* City Skyline */}
     
    </section>
  )
}
