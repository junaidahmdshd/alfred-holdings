import React from 'react'
import { Container } from './ui/container'
import { Heading } from './ui/heading'
import { Paragraph } from './ui/paragraph'
import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Leadership', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Insurance', href: '#' },
      { name: 'Travel', href: '#' },
      { name: 'Investment', href: '#' },
      { name: 'Credit', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'FAQs', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Disclaimer', href: '#' },
    ],
  },
]

const socialIcons = [
  {
    name: 'LinkedIn',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="2"
          y="9"
          width="4"
          height="12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="4"
          cy="4"
          r="2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    href: '#',
  },
  {
    name: 'Twitter',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    href: '#',
  },
  {
    name: 'Instagram',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="17.5"
          y1="6.5"
          x2="17.51"
          y2="6.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    href: '#',
  },
]

export const Footer = () => {
  return (
    <footer className="bg-alfred-primary w-full py-16 text-white md:py-20">
      <Container>
        <div className="flex flex-col space-y-20">
          {/* Main Footer */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-6">
            {/* Brand and Description */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Image
                  src="/images/alfred-holdings-logo.png"
                  alt="Alfred Holdings"
                  width={140}
                  height={36}
                  className="h-9 w-auto invert"
                />
              </div>
              <Paragraph variant="white" className="mb-6 opacity-70">
                Alfred Holdings is a forward-thinking group of brands that leads the way in
                connecting consumers to a host of financial and related services.
              </Paragraph>
              <div className="flex space-x-4">
                {socialIcons.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-white transition-colors hover:text-gray-300"
                    aria-label={social.name}
                  >
                    <div className="rounded-full bg-white/10 p-2 hover:bg-white/20">
                      {social.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((column) => (
              <div key={column.title} className="space-y-4">
                <Heading as="h3" level="h5" variant="white" className="mb-4">
                  {column.title}
                </Heading>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-300 transition-colors hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Credits */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <Paragraph variant="white" size="sm" className="text-center opacity-60 md:text-left">
                © {new Date().getFullYear()} Alfred Holdings. All rights reserved.
              </Paragraph>
              <div className="flex space-x-6">
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Cookies Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
