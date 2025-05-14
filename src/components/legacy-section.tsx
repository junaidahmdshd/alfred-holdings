'use client';

import React from 'react';
import { Heading } from './ui/heading';
import { Paragraph } from './ui/paragraph';
import { AlfredImage } from './ui/image';

interface FeatureItemProps {
  icon: string;
  text: string;
}

const FeatureItem = ({ icon, text }: FeatureItemProps) => (
  <div className="flex flex-row items-center gap-[8px]">
    <div className="w-[20px] h-[20px] flex-shrink-0">
      <AlfredImage 
        src={icon} 
        alt={text} 
        width={20} 
        height={20}
        imgClassName="w-full h-full object-contain"
      />
    </div>
    <span className="text-[14px] leading-[1.5] tracking-[-0.01em] text-[#475F6B] font-medium">
      {text}
    </span>
  </div>
);

export const LegacySection = () => {
  const features = [
    {
      icon: '/assets/images/volunteer_activism.svg',
      text: 'Supporting Gulf economic diversification'
    },
    {
      icon: '/assets/images/layers.svg',
      text: 'Investing in sustainable, scalable ventures'
    },
    {
      icon: '/assets/images/stream.svg',
      text: 'Partnering with trusted regional players'
    }
  ];

  return (
    <section className="w-full bg-white pt-[80px] md:pt-[160px]">
      <div className="px-[16px] lg:px-[120px] max-w-screen-2xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row md:justify-between md:items-center gap-[40px] lg:gap-[80px] md:gap-auto">
          {/* Image - Left side */}
          <div className="w-full md:w-auto">
            <AlfredImage 
              src="/assets/images/legacy-section-v1.png" 
              alt="Alfred Holdings Character"
              imgClassName="object-cover rounded-[20px]"
              height={480}
              width={400}
              priority
            />
          </div>
          
          {/* Content - Right side */}
          <div className="w-full md:flex-1 md:max-w-[637px] space-y-[24px]">
            {/* Main content */}
            <div className="flex flex-col gap-[16px]">
              <Heading as="h2" className="text-[24px] lg:text-[48px] leading-[1.2] tracking-[-0.03em] text-[#132B39] font-normal">
                Built on Legacy, <span className="text-[#0080C9]">Driven by Innovation</span>
              </Heading>
              
              <Paragraph className="text-[14px] md:text-[16px] leading-[1.625] tracking-[-0.01em] text-[#475F6B] font-normal">
                Born from the success of InsuranceMarket.ae, Alfred Holdings expands a legacy of trust into new industries. Our beloved mascot, Alfred, once simplified insurance—now he symbolises our broader purpose: creating long-term regional value through ethical, innovative investment.
              </Paragraph>
            </div>
            
            {/* Strategic investments */}
            <div className="flex flex-col gap-[12px] mt-[8px]">
              <Heading as="h3" className="text-[16px] md:text-[20px] leading-[1.4] tracking-[-0.02em] text-[#132B39] font-medium">
                Strategic Investments with Purpose
              </Heading>
              
              <Paragraph className="text-[14px] md:text-[15px] leading-[1.625] tracking-[-0.01em] text-[#475F6B] font-normal">
                Our focus goes beyond returns. Every investment is a step toward shaping the Gulf's diversified, innovation-first future.
              </Paragraph>
            </div>
            
            {/* Features list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] mt-[16px]">
              {features.map((feature, index) => (
                <FeatureItem 
                  key={index}
                  icon={feature.icon}
                  text={feature.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 