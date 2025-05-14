"use client";

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Container } from './ui/container';
import { AlfredImage } from './ui/image';
import { Link } from './ui/link';

const navLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Our Portfolio', href: '#portfolio' },
  { name: 'Leadership', href: '#leadership' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full bg-[#4AACE3] py-4">
      {/* Desktop View */}
      <div className="hidden lg:flex justify-center px-[120px]">
        <div className="bg-white rounded-[38px] flex items-center justify-between w-[706px] border border-[#4AACE3] p-2 pl-5">
          <div className="flex items-center justify-center ">
            <AlfredImage
              src="/assets/images/alfred-holdings-logo.png"
              alt="Alfred Holdings"
              width={119}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
          
          <div className="flex items-center">
            <nav className="flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-5 py-3 text-[#132B39] font-medium text-base leading-[1.625em] tracking-[-0.01em]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
          </div>
            <Button 
              className="bg-[#132B39] text-[#EEF7FC] h-12 px-7 py-3 rounded-[30px] font-semibold text-base leading-5 tracking-[-0.02em] uppercase mr-0"
            >
              Contact Us
            </Button>
        </div>
      </div>
    
      {/* Mobile View */}
      <div className="lg:hidden md:px-10 px-4 py-3">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center justify-center bg-white pr-4 pl-2 py-2 rounded-full">
            <AlfredImage
              src="/assets/images/alfred-holdings-logo.png"
              alt="Alfred Holdings"
              width={95}
              height={32}
              className="mx-auto object-contain"
            />
          </div>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-white p-3 rounded-full"
            aria-label="Toggle menu"
          >
            <AlfredImage
              src="/assets/images/menu-icon.svg"
              alt="Menu"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
          <div className="bg-white rounded-3xl shadow-lg w-full max-w-[343px] relative">
            {/* Close button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 bg-[#0D2436] rounded-full p-1.5 flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18"></path>
                <path d="M6 6L18 18"></path>
              </svg>
            </button>

            <div className="flex flex-col text-left py-8 px-6">
              {/* Nav Links */}
              <nav className="flex flex-col w-full space-y-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="py-1 text-[#132B39] font-medium text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              
              {/* CTA Button */}
              <div className="w-full mt-6">
                <Button 
                  className="w-full bg-[#0D2436] text-white rounded-full font-semibold text-base py-3 px-5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}; 