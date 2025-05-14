'use client';

import React from 'react';
import { Container } from './ui/container';
import { Heading } from './ui/heading';
import { Paragraph } from './ui/paragraph';
import { Button } from './ui/button';
import { AlfredImage } from './ui/image';
import Image from 'next/image';

const locations = [
  {
    city: 'Dubai',
    address: 'One Central, Dubai World Trade Centre, Dubai, UAE',
  },
  {
    city: 'Abu Dhabi',
    address: 'Etihad Towers, Corniche Road, Abu Dhabi, UAE',
  },
  {
    city: 'Manama',
    address: 'Bahrain Financial Harbour, Manama, Bahrain',
  },
];

export const LocationSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <Container>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="max-w-[508px] space-y-12">
              <div className="space-y-4">
                <Heading as="h2" className="text-alfred-primary text-3xl md:text-4xl font-bold">
                  Our Locations
                </Heading>
                <Paragraph size="lg" className="text-alfred-secondary">
                  Alfred Holdings operates from strategic locations across the Middle East, serving customers throughout the region with our innovative services.
                </Paragraph>
              </div>
              
              <div className="space-y-4">
                {locations.map((location) => (
                  <div 
                    key={location.city} 
                    className="p-6 bg-white rounded-card shadow-sm border border-alfred-border hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0C3.6 0 0 3.6 0 8C0 13.4 7.05 19.5 7.35 19.76C7.53 19.92 7.76 20 8 20C8.24 20 8.47 19.92 8.65 19.76C8.95 19.5 16 13.4 16 8C16 3.6 12.4 0 8 0ZM8 17.65C6.33 16.08 2 11.35 2 8C2 4.7 4.7 2 8 2C11.3 2 14 4.7 14 8C14 11.35 9.67 16.08 8 17.65ZM8 4C5.79 4 4 5.79 4 8C4 10.21 5.79 12 8 12C10.21 12 12 10.21 12 8C12 5.79 10.21 4 8 4ZM8 10C6.9 10 6 9.1 6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8C10 9.1 9.1 10 8 10Z" fill="#132B39"/>
                        </svg>
                      </div>
                      <div>
                        <Heading as="h3" level="h5" className="text-alfred-primary mb-1 font-semibold">
                          {location.city}
                        </Heading>
                        <Paragraph variant="muted" size="sm" className="text-alfred-secondary">
                          {location.address}
                        </Paragraph>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="secondary" size="lg" className="px-8">
                Contact Us
              </Button>
            </div>
          </div>
          
          {/* Right Map */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative w-full h-[300px] md:h-[500px] rounded-card overflow-hidden">
              <Image
                src="/assets/images/alfred-map.png"
                alt="Alfred Holdings Office Locations"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              
              {/* Dubai Location Pin */}
              <div className="absolute top-[40%] left-[55%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-brand-500 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-brand-500 rounded-full mt-1 opacity-70" />
                </div>
              </div>
              
              {/* Abu Dhabi Location Pin */}
              <div className="absolute top-[45%] left-[52%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-brand-500 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-brand-500 rounded-full mt-1 opacity-70" />
                </div>
              </div>
              
              {/* Bahrain Location Pin */}
              <div className="absolute top-[37%] left-[57%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-brand-500 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-brand-500 rounded-full mt-1 opacity-70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}; 