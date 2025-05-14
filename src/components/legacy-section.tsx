'use client'

import React from 'react'
import { Heading } from './ui/heading'
import { Paragraph } from './ui/paragraph'
import { AlfredImage } from './ui/image'

interface FeatureItemProps {
  icon: string
  text: string
}

const FeatureItem = ({ icon, text }: FeatureItemProps) => (
  <div className="flex flex-row items-center gap-[8px]">
    <div className="h-[20px] w-[20px] flex-shrink-0">
      <AlfredImage
        src={icon}
        alt={text}
        width={20}
        height={20}
        imgClassName="w-full h-full object-contain"
      />
    </div>
    <span className="text-[14px] leading-[1.5] font-medium tracking-[-0.01em] text-[#475F6B]">
      {text}
    </span>
  </div>
)

export const LegacySection = () => {
  const features = [
    {
      icon: '/assets/images/volunteer_activism.svg',
      text: 'Supporting Gulf economic diversification',
    },
    {
      icon: '/assets/images/layers.svg',
      text: 'Investing in sustainable, scalable ventures',
    },
    {
      icon: '/assets/images/stream.svg',
      text: 'Partnering with trusted regional players',
    },
  ]

  return (
    <section className="w-full bg-white pt-[80px] md:pt-[160px]">
      <div className="mx-auto max-w-screen-2xl px-[16px] lg:px-[120px]">
        <div className="md:gap-auto flex flex-col-reverse gap-[40px] md:items-center md:justify-between lg:flex-row lg:gap-[80px]">
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
          <div className="w-full space-y-[24px] md:max-w-[637px] md:flex-1">
            {/* Main content */}
            <div className="flex flex-col gap-[16px]">
              <Heading
                as="h2"
                className="text-[24px] leading-[1.2] font-normal tracking-[-0.03em] text-[#132B39] lg:text-[48px]"
              >
                Built on Legacy, <span className="text-[#0080C9]">Driven by Innovation</span>
              </Heading>

              <Paragraph className="text-[14px] leading-[1.625] font-normal tracking-[-0.01em] text-[#475F6B] md:text-[16px]">
                Born from the success of InsuranceMarket.ae, Alfred Holdings expands a legacy of
                trust into new industries. Our beloved mascot, Alfred, once simplified insurance—now
                he symbolises our broader purpose: creating long-term regional value through
                ethical, innovative investment.
              </Paragraph>
            </div>

            {/* Strategic investments */}
            <div className="mt-[8px] flex flex-col gap-[12px]">
              <Heading
                as="h3"
                className="text-[16px] leading-[1.4] font-medium tracking-[-0.02em] text-[#132B39] md:text-[20px]"
              >
                Strategic Investments with Purpose
              </Heading>

              <Paragraph className="text-[14px] leading-[1.625] font-normal tracking-[-0.01em] text-[#475F6B] md:text-[15px]">
                Our focus goes beyond returns. Every investment is a step toward shaping the
                Gulf&apos;s diversified, innovation-first future.
              </Paragraph>
            </div>

            {/* Features list */}
            <div className="mt-[16px] grid grid-cols-1 gap-[16px] md:grid-cols-3">
              {features.map((feature, index) => (
                <FeatureItem key={index} icon={feature.icon} text={feature.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
