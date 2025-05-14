'use client'

import React from 'react'
import { Container } from './ui/container'
import { AlfredImage } from './ui/image'

export const LeadershipSection = () => {
  return (
    <section className="w-full bg-[#132B39] py-[100px] md:py-[120px]">
      <Container className="px-4 md:px-[120px]">
        <div className="flex flex-col gap-10 md:flex-row md:gap-[80px]">
          {/* Mobile heading - visible only on mobile */}
          <div className="mb-4 md:hidden">
            <h2 className="text-[32px] leading-[1.3125] font-normal tracking-[-0.04em] text-[#EEF7FC]">
              Message from the Chairman
            </h2>
          </div>

          {/* Chairman image with border */}
          <div className="w-full md:w-auto md:flex-shrink-0">
            <div className="border-opacity-50 h-[300px] w-full overflow-hidden rounded-[22px] border border-[#1D83BC] md:h-[480px] md:w-[480px] md:rounded-[24px]">
              <AlfredImage
                src="/assets/images/leadership.png"
                alt="Avinash Babur, Founder & Chairman"
                width={480}
                height={480}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Content column */}
          <div className="flex w-full flex-col gap-6 md:gap-[24px]">
            {/* Desktop heading - hidden on mobile */}
            <div className="hidden md:block">
              <h2 className="text-[48px] leading-[1.1666] font-normal tracking-[-0.04em] text-[#EEF7FC]">
                Message from the Chairman
              </h2>
            </div>

            {/* Message content */}
            <div className="mt-0 md:mt-[16px]">
              <p className="text-[24px] leading-[1.3333] font-normal tracking-[-0.04em] text-[#FFFFFF] md:leading-[1.5]">
                At Alfred Holdings, our philosophy is simple: lead with integrity, invest with
                purpose, and grow with the region. From our roots in insurance to our expansion
                across sectors and markets, our goal remains consistent—to create long-term value
                for the communities we serve. As we scale across the GCC, our commitment to trust,
                innovation, and regional impact is stronger than ever.
              </p>
            </div>

            {/* Signature */}
            <p className="mt-[12px] text-[18px] leading-[1.5555] font-[500] tracking-[-0.02em] text-[#FFFFFF] md:mt-0 md:text-[20px] md:leading-[1.4]">
              ⎯ Avinash Babur, Founder & Chairman, Alfred Holdings
            </p>

            {/* Social links */}
            <div className="mt-[12px] flex items-center gap-6 md:mt-0">
              <a
                href="#"
                className="flex h-[24px] w-[24px] items-center justify-center"
                aria-label="Language selection"
              >
                <AlfredImage
                  src="/assets/images/language-icon.svg"
                  alt="Language"
                  width={24}
                  height={24}
                  className="h-full w-full"
                />
              </a>
              <a
                href="#"
                className="flex h-[24px] w-[24px] items-center justify-center"
                aria-label="LinkedIn profile"
              >
                <AlfredImage
                  src="/assets/images/linkedin-icon.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="h-full w-full"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
