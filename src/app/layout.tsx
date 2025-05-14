import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Alfred Holdings',
  description: 'Modern Next.js application with Tailwind CSS',
  keywords: ['nextjs', 'react', 'tailwindcss', 'typescript'],
  authors: [{ name: 'Alfred Holdings Team' }],
  creator: 'Alfred Holdings',
  metadataBase: new URL('https://alfred-holdings.example.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans antialiased">{children}</body>
    </html>
  )
}
