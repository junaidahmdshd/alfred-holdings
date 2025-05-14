'use client'

import React from 'react'
import { Container } from './ui/container'
import { Heading } from './ui/heading'
import { Paragraph } from './ui/paragraph'
import { Button } from './ui/button'

export const CTASection = () => {
  return (
    <section className="w-full bg-[#4AACE3] py-20">
      <Container>
        <div className="flex flex-col items-center md:flex-row">
          {/* Left Content */}
          <div className="mb-12 w-full md:mb-0 md:w-1/2">
            <div className="max-w-[568px] space-y-8">
              <Heading as="h2" variant="white" className="text-2xl md:text-4xl">
                Ready to transform your financial journey?
              </Heading>

              <Paragraph variant="white" size="lg">
                Join thousands of satisfied customers who have already discovered the Alfred
                Holdings advantage.
              </Paragraph>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-white text-[#4AACE3] hover:bg-gray-100">
                  Get Started
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>

              <div className="pt-4">
                <Paragraph variant="white" size="sm" className="opacity-80">
                  Have questions? <span className="underline">Contact our support team</span>
                </Paragraph>
              </div>
            </div>
          </div>

          {/* Right Image (Placeholder) */}
          <div className="flex w-full justify-center md:w-1/2">
            <div className="relative h-[300px] w-full max-w-[500px] md:h-[400px]">
              {/* Illustration placeholder */}
              <div className="absolute inset-0 rounded-xl bg-white/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                  <rect width="12" height="8" x="8" y="11" rx="2"></rect>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
