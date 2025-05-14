import React from 'react'
import { Container } from './ui/container'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="w-full bg-[#132b39] text-white py-20 md:py-20">
      <Container className="px-4 md:px-8">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 mb-20">
          {/* Left Column */}
          <div className="flex flex-col gap-6 md:w-[643px]">
            {/* Logo and Title */}
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 rounded-sm overflow-hidden bg-white">
                <Image
                  src="/assets/images/alfred-holdings-logo.png"
                  alt="Alfred Holdings"
                  width={32}
                  height={32}
                  className="h-auto w-auto"
                />
              </div>
              <span className="text-white text-2xl font-normal tracking-tight">|  GCC Growth Leader</span>
            </div>

            {/* Description */}
            <div className="w-full">
              <p className="text-[#dfe3e7] text-sm font-medium leading-[1.5em] tracking-tight">
                Alfred Holdings is a Dubai-based investment group behind InsuranceMarket.ae and more. We build trust-driven ventures across the GCC.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 md:flex-grow">
            {/* Navigation Links */}
            <div className="flex flex-wrap md:flex-nowrap justify-between gap-4">
              <Link href="/about-us" className="text-[#eef7fc] text-sm font-semibold py-2">
                About Us
              </Link>
              <Link href="/companies" className="text-[#eef7fc] text-sm font-semibold py-2">
                Companies
              </Link>
              <Link href="/careers" className="text-[#eef7fc] text-sm font-semibold py-2">
                Careers
              </Link>
              <Link href="/contact-us" className="text-[#eef7fc] text-sm font-semibold py-2">
                Contact Us
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6">
              <Link href="#" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77172 3.125C10.6467 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z" fill="#EEF7FC"/>
                </svg>
              </Link>
              <Link href="#" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1.44062C10.1375 1.44062 10.3906 1.45 11.2313 1.4875C12.0125 1.52187 12.4344 1.65313 12.7156 1.7625C13.0875 1.90625 13.3563 2.08125 13.6344 2.35938C13.9156 2.64062 14.0875 2.90625 14.2313 3.27813C14.3406 3.55938 14.4719 3.98438 14.5063 4.76562C14.5438 5.60625 14.5531 5.85938 14.5531 7.99687C14.5531 10.1375 14.5438 10.3906 14.5063 11.2313C14.4719 12.0125 14.3406 12.4344 14.2313 12.7156C14.0875 13.0875 13.9125 13.3563 13.6344 13.6344C13.3531 13.9156 13.0875 14.0875 12.7156 14.2313C12.4344 14.3406 12.0094 14.4719 11.2313 14.5063C10.3906 14.5438 10.1375 14.5531 8 14.5531C5.8625 14.5531 5.60938 14.5438 4.76875 14.5063C3.9875 14.4719 3.56563 14.3406 3.28438 14.2313C2.9125 14.0875 2.64375 13.9125 2.36563 13.6344C2.08438 13.3531 1.9125 13.0875 1.76875 12.7156C1.65938 12.4344 1.52813 12.0094 1.49375 11.2313C1.45625 10.3906 1.44688 10.1375 1.44688 7.99687C1.44688 5.85625 1.45625 5.60625 1.49375 4.76562C1.52813 3.98438 1.65938 3.5625 1.76875 3.28125C1.9125 2.90938 2.0875 2.64062 2.36563 2.3625C2.64688 2.08125 2.9125 1.90937 3.28438 1.76562C3.56563 1.65625 3.99063 1.525 4.76875 1.49063C5.60938 1.45313 5.8625 1.44375 8 1.44375L8 1.44062ZM8 0C5.82813 0 5.55625 0.009375 4.70313 0.046875C3.85313 0.084375 3.26875 0.221875 2.7625 0.42C2.23438 0.625 1.7875 0.896875 1.34375 1.34375C0.896875 1.7875 0.625 2.23438 0.42 2.75938C0.221875 3.26875 0.084375 3.85 0.046875 4.7C0.009375 5.55625 0 5.82812 0 8C0 10.1719 0.009375 10.4438 0.046875 11.2969C0.084375 12.1469 0.221875 12.7313 0.42 13.2375C0.625 13.7656 0.896875 14.2125 1.34375 14.6562C1.7875 15.1 2.23438 15.375 2.75938 15.575C3.26875 15.7781 3.85 15.9156 4.7 15.9531C5.55313 15.9906 5.825 16 7.99688 16C10.1688 16 10.4406 15.9906 11.2938 15.9531C12.1438 15.9156 12.7281 15.7781 13.2344 15.575C13.7594 15.375 14.2063 15.1 14.65 14.6562C15.0938 14.2125 15.3688 13.7656 15.5688 13.2406C15.7719 12.7313 15.9094 12.15 15.9469 11.3C15.9844 10.4469 15.9938 10.175 15.9938 8.00313C15.9938 5.83125 15.9844 5.55938 15.9469 4.70625C15.9094 3.85625 15.7719 3.27188 15.5688 2.76562C15.375 2.23438 15.1031 1.7875 14.6562 1.34375C14.2125 0.9 13.7656 0.625 13.2406 0.42C12.7313 0.221875 12.15 0.084375 11.3 0.046875C10.4438 0.009375 10.1719 0 8 0Z" fill="#EEF7FC"/>
                  <path d="M8 3.89062C5.73125 3.89062 3.89062 5.73125 3.89062 8C3.89062 10.2688 5.73125 12.1094 8 12.1094C10.2688 12.1094 12.1094 10.2688 12.1094 8C12.1094 5.73125 10.2688 3.89062 8 3.89062ZM8 10.6656C6.52813 10.6656 5.33437 9.47188 5.33437 8C5.33437 6.52813 6.52813 5.33437 8 5.33437C9.47188 5.33437 10.6656 6.52813 10.6656 8C10.6656 9.47188 9.47188 10.6656 8 10.6656Z" fill="#EEF7FC"/>
                  <path d="M13.2312 3.72792C13.2312 4.25917 12.8 4.6873 12.2719 4.6873C11.7406 4.6873 11.3125 4.25605 11.3125 3.72792C11.3125 3.19667 11.7438 2.76855 12.2719 2.76855C12.8 2.76855 13.2312 3.19979 13.2312 3.72792Z" fill="#EEF7FC"/>
                </svg>
              </Link>
              <Link href="#" aria-label="X/Twitter">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6001 2.00781H14.8444L10.0409 7.58203L15.8001 15.2578H11.3151L7.86525 10.672L3.86835 15.2578H1.62246L6.76568 9.28984L1.2001 2.00781H5.80144L8.89328 6.17427L12.6001 2.00781ZM11.9548 13.8266H13.1114L5.10288 3.36721H3.85811L11.9548 13.8266Z" fill="#EEF7FC"/>
                </svg>
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85938 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344Z" fill="#EEF7FC"/>
                </svg>
              </Link>
              <Link href="#" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.6656 4.36718C15.5781 4.03593 15.4062 3.73593 15.1687 3.49843C14.9312 3.26093 14.6344 3.08906 14.3062 3.00156C13.0437 2.66406 8 2.66406 8 2.66406C8 2.66406 2.95625 2.66406 1.69375 3.00156C1.36562 3.08906 1.06875 3.26093 0.83125 3.49843C0.59375 3.73593 0.421875 4.03593 0.334375 4.36718C0 5.64218 0 8.26718 0 8.26718C0 8.26718 0 10.8922 0.334375 12.1672C0.421875 12.4984 0.59375 12.7984 0.83125 13.0359C1.06875 13.2734 1.36562 13.4453 1.69375 13.5328C2.95625 13.8703 8 13.8703 8 13.8703C8 13.8703 13.0437 13.8703 14.3062 13.5328C14.6344 13.4453 14.9312 13.2734 15.1687 13.0359C15.4062 12.7984 15.5781 12.4984 15.6656 12.1672C16 10.8922 16 8.26718 16 8.26718C16 8.26718 16 5.64218 15.6656 4.36718ZM6.36563 10.6672V5.86718L10.5469 8.26718L6.36563 10.6672Z" fill="#EEF7FC"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Credits */}
        <div className="flex flex-col gap-8">
          {/* Divider */}
          <div className="h-[1px] w-full bg-[#b6def4] opacity-60"></div>
          
          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-16 pb-8">
            <p className="text-[#dfe3e7] text-sm font-medium">© 2025 Alfred Investments LLC. All rights reserved.</p>
            
            <div className="flex gap-6">
              <Link href="#" className="text-[#dfe3e7] text-sm font-medium">Privacy Policy</Link>
              <Link href="#" className="text-[#dfe3e7] text-sm font-medium">Terms of Use</Link>
              <Link href="#" className="text-[#dfe3e7] text-sm font-medium">Cookies Settings</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
