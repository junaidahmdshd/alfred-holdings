'use client';

import React from 'react';
import { Container } from './ui/container';
import { Heading } from './ui/heading';
import { Paragraph } from './ui/paragraph';
import { Button } from './ui/button';
import { AlfredImage } from './ui/image';

export const CTASection = () => {
  return (
    <section className="w-full bg-[#4AACE3] py-20">
      <Container>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <div className="max-w-[568px] space-y-8">
              <Heading as="h2" variant="white" className="text-2xl md:text-4xl">
                Ready to transform your financial journey?
              </Heading>
              
              <Paragraph variant="white" size="lg">
                Join thousands of satisfied customers who have already discovered the Alfred Holdings advantage.
              </Paragraph>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-[#4AACE3] hover:bg-gray-100">
                  Get Started
                </Button>
                <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white/10">
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
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative h-[300px] md:h-[400px] w-full max-w-[500px]">
              {/* Illustration placeholder */}
              <div className="absolute inset-0 bg-white/20 rounded-xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
  );
}; 