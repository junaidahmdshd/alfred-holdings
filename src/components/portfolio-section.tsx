'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Container } from './ui/container'
import './portfolio-slider.css' // Import custom styles for portfolio slider

interface PortfolioItemProps {
  id: number
  title: string
  description: string
  logo: string
  image: string
  buttonText?: string
  buttonLink?: string
  bgColor?: string
}

const portfolioItems: PortfolioItemProps[] = [
  // InsuranceMarket.ae
  {
    id: 1,
    title: 'InsuranceMarket.ae',
    description:
      "The UAE's largest digital insurance platform. Serving over 200,000 policyholders with 25+ years of trusted market presence.",
    logo: '/assets/images/insurance_market_logo.png',
    image: '/assets/images/alfred_insurance_market.png',
    buttonText: 'Visit Website',
    buttonLink: '#',
    bgColor: '#FFFFFF',
  },
  // CreditMarket.ae
  {
    id: 2,
    title: 'CreditMarket.ae (Coming Soon)',
    description:
      'Compare and apply for top UAE credit cards and loans—all in one intelligent, easy-to-use hub.',
    logo: '/assets/images/credit_market_logo.png',
    image: '/assets/images/credit_market_icon.png',
    bgColor: '#FFFFFF',
  },
  // HolidayMarket.ae
  {
    id: 3,
    title: 'HolidayMarket.ae',
    description:
      'From flights to staycations, our travel portal offers handpicked experiences tailored for UAE travelers.',
    logo: '/assets/images/holiday_market_logo.png',
    image: '/assets/images/travel_holiday_market.png',
    buttonText: 'Visit Website',
    buttonLink: '#',
    bgColor: '#EBFDFB',
  },
  // InvestmentMarket.ae
  {
    id: 4,
    title: 'InvestmentMarket.ae (Coming Soon)',
    description:
      'A smart platform for curated UAE investment opportunities, backed by data-driven insights and expert research.',
    logo: '/assets/images/investment_market_logo.png',
    image: '/assets/images/alfred_with_coins.png',
    bgColor: '#FFFFFF',
  },
  // InsuranceMarket.bh
  {
    id: 5,
    title: 'InsuranceMarket.bh (Coming Soon)',
    description:
      "Bringing the UAE's most trusted digital insurance experience to Bahrain. InsuranceMarket.bh is set to revolutionize how residents compare and buy insurance—fast, simple, and fully online.",
    logo: '/assets/images/insurance_market_bh_logo.png',
    image: '/assets/images/bahrain_flag.png',
    bgColor: '#FFFFFF',
  },
  // myAlfred.com
  {
    id: 6,
    title: 'myAlfred.com',
    description:
      'A premium lifestyle platform offering curated savings on dining, wellness, and more—used by UAE individuals and corporates alike.',
    logo: '/assets/images/my_alfred_logo.png',
    image: '/assets/images/my_alfred_full.png',
    buttonText: 'Visit Website',
    buttonLink: '#',
    bgColor: '#FFFFFF',
  },
]

export const PortfolioSection = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className={`${isMobile ? 'px-4' : ''} mb-12 text-left md:mb-16`}>
          <h2 className="mb-3 text-[32px] leading-[1.3125] font-normal tracking-[-0.04em] text-[#132B39] md:mb-4 md:text-[48px] md:leading-[1.1666] md:font-medium">
            A Portfolio of Trust-Driven Innovation
          </h2>
          <p className="max-w-3xl text-[16px] leading-[1.625] font-medium text-[#475F6B] md:text-[20px] md:leading-[1.5]">
            Alfred Holdings powers a dynamic portfolio of ventures designed to simplify, enhance,
            and transform everyday experiences in the UAE and beyond.
          </p>
        </div>

        {/* Mobile Carousel */}
        {isMobile && (
          <div className="portfolio-slider">
            <Swiper
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={'auto'}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet custom-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
              }}
              className="w-full"
            >
              {portfolioItems.map((item) => (
                <SwiperSlide key={item.id} className="!w-[280px] !max-w-[280px]">
                  <PortfolioCardMobile item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Desktop Grid - Using Tailwind's grid with row-span */}
        {!isMobile && (
          <div className="mx-auto hidden w-full max-w-[1200px] md:block">
            <div className="grid auto-rows-min grid-cols-12 gap-7">
              {/* InsuranceMarket.ae - spans 8 columns (791px) */}
              <div className="col-span-8 h-[362px]">
                <PortfolioCard item={portfolioItems[0]} isHorizontal />
              </div>

              {/* CreditMarket.ae - spans 4 columns (384px) */}
              <div className="col-span-4 h-[362px]">
                <PortfolioCard item={portfolioItems[1]} />
              </div>

              {/* HolidayMarket.ae - spans 4 columns (384px), row span 2 (taller card) */}
              <div className="col-span-4 row-span-2 h-[584px]">
                <PortfolioCard item={portfolioItems[2]} />
              </div>

              {/* InvestmentMarket.ae - spans 4 columns (384px), row span 2 (taller card) */}
              <div className="col-span-4 row-span-2 h-[584px]">
                <PortfolioCard item={portfolioItems[3]} />
              </div>

              {/* Empty space - spans 4 columns */}
              <div className="col-span-4 row-span-2">
                {/* Empty space to maintain grid layout */}
              </div>

              {/* InsuranceMarket.bh - spans 8 columns (791px) */}
              <div className="col-span-8 h-[362px]">
                <PortfolioCard item={portfolioItems[4]} isHorizontal />
              </div>

              {/* myAlfred.com - spans 4 columns (384px) */}
              <div className="col-span-4 h-[362px]">
                <PortfolioCard item={portfolioItems[5]} />
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}

interface PortfolioCardProps {
  item: PortfolioItemProps
  isHorizontal?: boolean
}

const PortfolioCard = ({ item, isHorizontal = false }: PortfolioCardProps) => {
  const isCreditMarket = item.id === 2
  const isHolidayMarket = item.id === 3
  const isInvestmentMarket = item.id === 4
  const isInsuranceMarketBh = item.id === 5
  const isMyAlfred = item.id === 6

  // Determine character image styles
  const getCharacterImageStyles = () => {
    if (isHorizontal) {
      return {
        position: 'absolute' as const,
        right: 0,
        bottom: 0,
        width: '50%',
        height: '100%',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
    }

    if (isMyAlfred) {
      return {
        position: 'absolute' as const,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '70%',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
    }

    if (isCreditMarket) {
      return {
        position: 'absolute' as const,
        right: '30px',
        bottom: '30px',
        width: '160px',
        height: '160px',
        zIndex: 1,
      }
    }

    if (isInvestmentMarket) {
      return {
        position: 'absolute' as const,
        right: '40px',
        bottom: '40px',
        width: '280px',
        height: '280px',
        zIndex: 1,
      }
    }

    if (isHolidayMarket) {
      return {
        position: 'absolute' as const,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '50%',
        zIndex: 1,
      }
    }

    // Default for vertical cards
    return {
      position: 'absolute' as const,
      right: 0,
      bottom: 0,
      width: '70%',
      height: '70%',
      zIndex: 1,
    }
  }

  // Determine content container styles based on card type
  const getContentContainerStyles = () => {
    if (isHorizontal) {
      return {
        position: 'relative' as const,
        zIndex: 2,
        maxWidth: '50%',
        padding: '40px',
      }
    }

    if (isInvestmentMarket) {
      return {
        position: 'relative' as const,
        zIndex: 2,
        width: '100%',
        padding: '32px',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'flex-start' as const,
      }
    }

    if (isHolidayMarket) {
      return {
        position: 'relative' as const,
        zIndex: 2,
        width: '100%',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column' as const,
        height: '100%',
      }
    }

    return {
      position: 'relative' as const,
      zIndex: 2,
      width: '100%',
      padding: '32px',
    }
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-[#DFE3E7] shadow-[0px_4px_6px_rgba(0,0,0,0.02),0px_1px_3px_rgba(0,0,0,0.03)]">
      {/* Content Container */}
      <div style={getContentContainerStyles()} className="flex h-full flex-col justify-between">
        {/* Logo */}
        <div className="mb-4 border-b border-[#DFE3E7] pb-4">
          <Image
            src={item.logo}
            alt={`${item.title} logo`}
            width={160}
            height={28}
            className="h-[32px] object-contain object-left"
          />
        </div>

        <div>
          {/* Title */}
          <h3 className="mb-3 text-[32px] leading-[1.3125em] font-normal tracking-[-0.04em] text-[#132B39]">
            {item.title}
          </h3>

          {/* Description */}
          <p className="mb-6 text-[16px] leading-[1.625em] font-medium tracking-[-0.01em] text-[#475F6B]">
            {item.description}
          </p>
        </div>

        {/* Button */}
        {item.buttonText && (
          <Link href={item.buttonLink || '#'} className="mt-auto">
            <div className="inline-flex items-center gap-[8px]">
              <p className="text-[16px] leading-[1.25em] font-semibold tracking-[-0.02em] text-[#132B39]">
                {item.buttonText}
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.78 3.5L13.3067 8.02667M13.3067 8.02667L8.78 12.5533M13.3067 8.02667H2.66667"
                  stroke="#132B39"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        )}
      </div>

      {/* Character Image */}
      <div style={getCharacterImageStyles()}>
        <div className="relative h-full w-full">
          <Image
            src={item.image}
            alt={`${item.title} illustration`}
            fill
            sizes={isHorizontal ? '50vw' : isInsuranceMarketBh ? '100%' : '70vw'}
            priority
            style={{ objectFit: 'contain', objectPosition: 'bottom right' }}
          />
        </div>
      </div>
    </div>
  )
}

// PortfolioCardMobile component specifically for mobile view
const PortfolioCardMobile = ({ item }: { item: PortfolioItemProps }) => {
  const isCreditMarket = item.id === 2

  // Get image size based on card type
  const getImageStyle = () => {
    if (item.id === 3) {
      return {
        width: '100%',
        height: '220px',
      }
    }

    if (item.id === 6) {
      return {
        width: '200px',
        height: '220px',
      }
    }

    if (isCreditMarket) {
      return {
        width: '180px',
        height: '180px',
      }
    }

    if (item.id === 4) {
      return {
        width: '200px',
        height: '220px',
      }
    }

    // Default
    return {
      width: '180px',
      height: '200px',
    }
  }

  const imageStyle = getImageStyle()

  return (
    <div className="relative flex h-[592px] w-full flex-col overflow-hidden rounded-[22px] border border-[#DFE3E7] bg-white shadow-[0px_4px_6px_rgba(0,0,0,0.02),0px_1px_3px_rgba(0,0,0,0.03)]">
      {/* Content at the top */}
      <div className="flex flex-grow flex-col px-4 pt-6 pb-8">
        {/* Logo */}
        <div className="mb-4 border-b border-[#DFE3E7] pb-4">
          <Image
            src={item.logo}
            alt={`${item.title} logo`}
            width={120}
            height={24}
            className="h-[24px] object-contain object-left"
          />
        </div>

        <div>
          {/* Title */}
          <h3 className="mb-3 text-[24px] leading-[1.333em] font-normal tracking-[-0.04em] text-[#132B39]">
            {item.title}
          </h3>

          {/* Description */}
          <p className="mb-6 text-[14px] leading-[1.5em] font-medium tracking-[-0.01em] text-[#475F6B]">
            {item.description}
          </p>
        </div>

        {/* Button */}
        {item.buttonText && (
          <Link href={item.buttonLink || '#'} className="mt-auto">
            <div className="inline-flex items-center gap-[8px]">
              <p className="text-[16px] leading-[1.25em] font-semibold tracking-[-0.02em] text-[#132B39]">
                {item.buttonText}
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.78 3.5L13.3067 8.02667M13.3067 8.02667L8.78 12.5533M13.3067 8.02667H2.66667"
                  stroke="#132B39"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        )}
      </div>

      {/* Character Image Container - Fixed height at bottom */}
      <div className="relative flex h-[230px] w-full items-end justify-center pb-8">
        <div
          style={{
            width: imageStyle.width,
            height: imageStyle.height,
          }}
          className="relative"
        >
          <Image
            src={item.image}
            alt={`${item.title} illustration`}
            fill
            sizes={imageStyle.width.toString()}
            priority
            style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
          />
        </div>
      </div>
    </div>
  )
}
