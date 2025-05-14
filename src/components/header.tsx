'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { AlfredImage } from './ui/image'
import { Link } from './ui/link'

const navLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Our Portfolio', href: '#portfolio' },
  { name: 'Leadership', href: '#leadership' },
]

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative w-full bg-[#4AACE3] py-4">
      {/* Desktop View */}
      <div className="hidden justify-center px-[120px] lg:flex">
        <div className="flex w-[706px] items-center justify-between rounded-[38px] border border-[#4AACE3] bg-white p-2 pl-5">
          <div className="flex items-center justify-center">
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
                  className="px-5 py-3 text-base leading-[1.625em] font-medium tracking-[-0.01em] text-[#132B39]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <Button className="mr-0 h-12 rounded-[30px] bg-[#132B39] px-7 py-3 text-base leading-5 font-semibold tracking-[-0.02em] text-[#EEF7FC] uppercase">
            Contact Us
          </Button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="px-4 py-3 md:px-10 lg:hidden">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center justify-center rounded-full bg-white py-2 pr-4 pl-2">
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
            className="rounded-full bg-white p-3"
            aria-label="Toggle menu"
          >
            <AlfredImage src="/assets/images/menu-icon.svg" alt="Menu" width={24} height={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
          <div className="relative w-full max-w-[343px] rounded-3xl bg-white shadow-lg">
            {/* Close button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 flex items-center justify-center rounded-full bg-[#0D2436] p-1.5"
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

            <div className="flex flex-col px-6 py-8 text-left">
              {/* Nav Links */}
              <nav className="flex w-full flex-col space-y-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="py-1 text-base font-medium text-[#132B39]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="mt-6 w-full">
                <Button
                  className="w-full rounded-full bg-[#0D2436] px-5 py-3 text-base font-semibold text-white"
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
  )
}
