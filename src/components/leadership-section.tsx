'use client';

import React from 'react';
import { Container } from './ui/container';
import { Heading } from './ui/heading';
import { Paragraph } from './ui/paragraph';
import { AlfredImage } from './ui/image';

export const LeadershipSection = () => {
  return (
    <section className="w-full bg-[#132B39] py-[100px] md:py-[120px]">
      <Container className="px-4 md:px-[120px]">
        <div className="flex flex-col md:flex-row gap-10 md:gap-[80px]">
          {/* Mobile heading - visible only on mobile */}
          <div className="md:hidden mb-4">
            <h2 className="text-[#EEF7FC] text-[32px] font-normal leading-[1.3125] tracking-[-0.04em]">
              Message from the Chairman
            </h2>
          </div>
          
          {/* Chairman image with border */}
          <div className="w-full md:w-auto md:flex-shrink-0">
            <div className="rounded-[22px] md:rounded-[24px] border border-[#1D83BC] border-opacity-50 h-[300px] md:h-[480px] w-full md:w-[480px] overflow-hidden">
              <AlfredImage
                src="/assets/images/leadership.png"
                alt="Avinash Babur, Founder & Chairman"
                width={480}
                height={480}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content column */}
          <div className="flex flex-col gap-6 md:gap-[24px] w-full">
            {/* Desktop heading - hidden on mobile */}
            <div className="hidden md:block">
              <h2 className="text-[#EEF7FC] text-[48px] font-normal leading-[1.1666] tracking-[-0.04em]">
                Message from the Chairman
              </h2>
            </div>

            {/* Message content */}
            <div className="mt-0 md:mt-[16px]">
              <p className="text-[#FFFFFF] text-[24px] font-normal leading-[1.3333] md:leading-[1.5] tracking-[-0.04em]">
                At Alfred Holdings, our philosophy is simple: lead with integrity, invest with purpose, and grow with the region. From our roots in insurance to our expansion across sectors and markets, our goal remains consistent—to create long-term value for the communities we serve. As we scale across the GCC, our commitment to trust, innovation, and regional impact is stronger than ever.
              </p>
            </div>

            {/* Signature */}
            <p className="text-[#FFFFFF] text-[18px] md:text-[20px] font-[500] leading-[1.5555] md:leading-[1.4] tracking-[-0.02em] mt-[12px] md:mt-0">
              ⎯ Avinash Babur, Founder & Chairman, Alfred Holdings
            </p>

            {/* Social links */}
            <div className="flex items-center gap-6 mt-[12px] md:mt-0">
              <a 
                href="#" 
                className="w-[24px] h-[24px] flex items-center justify-center"
                aria-label="Language selection"
              >
                <AlfredImage
                  src="/assets/images/language-icon.svg"
                  alt="Language"
                  width={24}
                  height={24}
                  className="w-full h-full"
                />
              </a>
              <a 
                href="#" 
                className="w-[24px] h-[24px] flex items-center justify-center"
                aria-label="LinkedIn profile"
              >
                <AlfredImage
                  src="/assets/images/linkedin-icon.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="w-full h-full"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}; 