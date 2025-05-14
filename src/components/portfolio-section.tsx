'use client';

import React, { useEffect, useState } from 'react';
import { Heading } from './ui/heading';
import { Paragraph } from './ui/paragraph';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Container } from './ui/container';
import './portfolio-slider.css'; // Import custom styles for portfolio slider

interface PortfolioItemProps {
  id: number;
  title: string;
  description: string;
  logo: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
  bgColor?: string;
}

const portfolioItems: PortfolioItemProps[] = [
  // InsuranceMarket.ae
  {
    id: 1,
    title: "InsuranceMarket.ae",
    description: "The UAE's largest digital insurance platform. Serving over 200,000 policyholders with 25+ years of trusted market presence.",
    logo: "/assets/images/insurance_market_logo.png",
    image: "/assets/images/alfred_insurance_market.png",
    buttonText: "Visit Website",
    buttonLink: "#",
    bgColor: "#FFFFFF"
  },
  // CreditMarket.ae
  {
    id: 2,
    title: "CreditMarket.ae (Coming Soon)",
    description: "Compare and apply for top UAE credit cards and loans—all in one intelligent, easy-to-use hub.",
    logo: "/assets/images/credit_market_logo.png",
    image: "/assets/images/credit_market_icon.png",
    bgColor: "#FFFFFF"
  },
  // HolidayMarket.ae
  {
    id: 3,
    title: "HolidayMarket.ae",
    description: "From flights to staycations, our travel portal offers handpicked experiences tailored for UAE travelers.",
    logo: "/assets/images/holiday_market_logo.png",
    image: "/assets/images/travel_holiday_market.png",
    buttonText: "Visit Website", 
    buttonLink: "#",
    bgColor: "#EBFDFB"
  },
  // InvestmentMarket.ae
  {
    id: 4,
    title: "InvestmentMarket.ae (Coming Soon)",
    description: "A smart platform for curated UAE investment opportunities, backed by data-driven insights and expert research.",
    logo: "/assets/images/investment_market_logo.png",
    image: "/assets/images/alfred_with_coins.png",
    bgColor: "#FFFFFF"
  },
  // InsuranceMarket.bh
  {
    id: 5,
    title: "InsuranceMarket.bh (Coming Soon)",
    description: "Bringing the UAE's most trusted digital insurance experience to Bahrain. InsuranceMarket.bh is set to revolutionize how residents compare and buy insurance—fast, simple, and fully online.",
    logo: "/assets/images/insurance_market_bh_logo.png",
    image: "/assets/images/bahrain_flag.png",
    bgColor: "#FFFFFF"
  },
  // myAlfred.com
  {
    id: 6,
    title: "myAlfred.com",
    description: "A premium lifestyle platform offering curated savings on dining, wellness, and more—used by UAE individuals and corporates alike.",
    logo: "/assets/images/my_alfred_logo.png",
    image: "/assets/images/my_alfred_full.png",
    buttonText: "Visit Website",
    buttonLink: "#",
    bgColor: "#FFFFFF"
  }
];

export const PortfolioSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className={`${isMobile ? 'px-4' : ''} text-left mb-12 md:mb-16`}>
          <h2 className="text-[32px] md:text-[48px] leading-[1.3125] md:leading-[1.1666] font-normal md:font-medium tracking-[-0.04em] text-[#132B39] mb-3 md:mb-4">
            A Portfolio of Trust-Driven Innovation
          </h2>
          <p className="text-[16px] md:text-[20px] leading-[1.625] md:leading-[1.5] text-[#475F6B] max-w-3xl font-medium">
            Alfred Holdings powers a dynamic portfolio of ventures designed to simplify, enhance, and transform everyday experiences in the UAE and beyond.
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
                bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active'
              }}
              className="w-full"
            >
              {portfolioItems.map((item) => (
                <SwiperSlide key={item.id} className="!w-[308px] !max-w-[308px]">
                  <PortfolioCardMobile item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Desktop Grid - Using Tailwind's grid with row-span */}
        {!isMobile && (
          <div className="hidden md:block w-full max-w-[1200px] mx-auto">
            <div className="grid grid-cols-12 gap-7 auto-rows-min">
              {/* InsuranceMarket.ae - spans 8 columns (791px) */}
              <div className="col-span-8 h-[362px]">
                <PortfolioCard item={portfolioItems[0]} isHorizontal />
              </div>
              
              {/* CreditMarket.ae - spans 4 columns (384px) */}
              <div className="col-span-4 h-[362px]">
                <PortfolioCard item={portfolioItems[1]} />
              </div>
              
              {/* HolidayMarket.ae - spans 4 columns (384px), row span 2 (taller card) */}
              <div className="col-span-4 h-[584px] row-span-2">
                <PortfolioCard item={portfolioItems[2]} />
              </div>
              
              {/* InvestmentMarket.ae - spans 4 columns (384px), row span 2 (taller card) */}
              <div className="col-span-4 h-[584px] row-span-2">
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
  );
};

interface PortfolioCardProps {
  item: PortfolioItemProps;
  isHorizontal?: boolean;
}

const PortfolioCard = ({ item, isHorizontal = false }: PortfolioCardProps) => {
  const isInsuranceMarket = item.id === 1;
  const isCreditMarket = item.id === 2;
  const isHolidayMarket = item.id === 3;
  const isInvestmentMarket = item.id === 4;
  const isInsuranceMarketBh = item.id === 5;
  const isMyAlfred = item.id === 6;

  

  // Determine character image styles
  const getCharacterImageStyles = () => {
    if (isHorizontal) {
      return {
        position: 'absolute' as 'absolute',
        right: 0,
        bottom: 0,
        width: '50%',
        height: '100%',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      };
    }
    
    if (isMyAlfred) {
      return {
        position: 'absolute' as 'absolute',
        right: 0,
        bottom: 0,
        width: '100%',
        height: '70%',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      };
    }
    
    if (isCreditMarket) {
      return {
        position: 'absolute' as 'absolute',
        right: '30px',
        bottom: '30px',
        width: '160px',
        height: '160px',
        zIndex: 1
      };
    }
    
    if (isInvestmentMarket) {
      return {
        position: 'absolute' as 'absolute',
        right: '40px',
        bottom: '40px',
        width: '280px',
        height: '280px', 
        zIndex: 1
      };
    }
    
    if (isHolidayMarket) {
      return {
        position: 'absolute' as 'absolute',
        right: 0,
        bottom: 0,
        width: '100%',
        height: '50%',
        zIndex: 1
      };
    }
    
    // Default for vertical cards
    return {
      position: 'absolute' as 'absolute',
      right: 0,
      bottom: 0,
      width: '70%',
      height: '70%',
      zIndex: 1
    };
  };

  // Determine content container styles based on card type
  const getContentContainerStyles = () => {
    if (isHorizontal) {
      return {
        position: 'relative' as 'relative',
        zIndex: 2,
        maxWidth: '50%',
        padding: '40px'
      };
    }
    
    if (isInvestmentMarket) {
      return {
        position: 'relative' as 'relative',
        zIndex: 2,
        width: '100%',
        padding: '32px',
        height: 'auto', 
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'flex-start' as 'flex-start'
      };
    }
    
    if (isHolidayMarket) {
      return {
        position: 'relative' as 'relative',
        zIndex: 2,
        width: '100%',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column' as 'column',
        height: '100%'
      };
    }
    
    return {
      position: 'relative' as 'relative',
      zIndex: 2,
      width: '100%',
      padding: '32px'
    };
  };

  return (
    <div
      className="w-full h-full rounded-[24px] overflow-hidden border border-[#DFE3E7] shadow-[0px_4px_6px_rgba(0,0,0,0.02),0px_1px_3px_rgba(0,0,0,0.03)] relative"
     
    >
      {/* Content Container */}
      <div style={getContentContainerStyles()} className="flex flex-col justify-between h-full">
        {/* Logo */}
        <div className="mb-4 border-b border-[#DFE3E7] pb-4">
          <Image
            src={item.logo}
            alt={`${item.title} logo`}
            width={160}
            height={28}
            className="object-left object-contain h-[32px]"
          />
        </div>
        
        <div>
          {/* Title */}
          <h3 className="font-normal text-[32px] leading-[1.3125em] tracking-[-0.04em] text-[#132B39] mb-3">
            {item.title}
          </h3>
          
          {/* Description */}
          <p className="text-[#475F6B] text-[16px] leading-[1.625em] tracking-[-0.01em] mb-6 font-medium">
            {item.description}
          </p>
        </div>
        
        {/* Button */}
        {item.buttonText && (
          <Link href={item.buttonLink || "#"} className="mt-auto">
            <div className="inline-flex items-center gap-[8px]">
              <p className="text-[#132B39] text-[16px] leading-[1.25em] tracking-[-0.02em] font-semibold">
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
        <div className="relative w-full h-full">
          <Image 
            src={item.image}
            alt={`${item.title} illustration`}
            fill
            sizes={isHorizontal ? "50vw" : isInsuranceMarketBh ? "100%" : "70vw"}
            priority
            style={{ objectFit: 'contain', objectPosition: 'bottom right' }}
          />
        </div>
      </div>
    </div>
  );
};

// PortfolioCardMobile component specifically for mobile view
const PortfolioCardMobile = ({ item }: { item: PortfolioItemProps }) => {
  const isInsuranceMarket = item.id === 1;
  const isCreditMarket = item.id === 2;
  const isHolidayMarket = item.id === 3;
  const isInvestmentMarket = item.id === 4;
  const isInsuranceMarketBh = item.id === 5;
  const isMyAlfred = item.id === 6;
  
  // Get image size based on card type
  const getImageStyle = () => {
    if (isHolidayMarket) {
      return {
        width: '100%',
        height: '220px'
      };
    }
    
    if (isMyAlfred) {
      return {
        width: '200px',
        height: '220px'
      };
    }
    
    if (isCreditMarket) {
      return {
        width: '180px',
        height: '180px'
      };
    }
    
    if (isInvestmentMarket) {
      return {
        width: '200px',
        height: '220px'
      };
    }
    
    // Default
    return {
      width: '180px',
      height: '200px'
    };
  };
  
  const imageStyle = getImageStyle();
  
  return (
    <div
      className="w-full h-[592px] rounded-[22px] overflow-hidden border border-[#DFE3E7] shadow-[0px_4px_6px_rgba(0,0,0,0.02),0px_1px_3px_rgba(0,0,0,0.03)] relative bg-white flex flex-col"
    >
      {/* Content at the top */}
      <div className="flex flex-col px-4 pt-6 pb-8 flex-grow">
        {/* Logo */}
        <div className="mb-4 border-b border-[#DFE3E7] pb-4">
          <Image
            src={item.logo}
            alt={`${item.title} logo`}
            width={120}
            height={24}
            className="object-left object-contain h-[24px]"
          />
        </div>
        
        <div>
          {/* Title */}
          <h3 className="font-normal text-[24px] leading-[1.333em] tracking-[-0.04em] text-[#132B39] mb-3">
            {item.title}
          </h3>
          
          {/* Description */}
          <p className="text-[#475F6B] text-[14px] leading-[1.5em] tracking-[-0.01em] mb-6 font-medium">
            {item.description}
          </p>
        </div>
        
        {/* Button */}
        {item.buttonText && (
          <Link href={item.buttonLink || "#"} className="mt-auto">
            <div className="inline-flex items-center gap-[8px]">
              <p className="text-[#132B39] text-[16px] leading-[1.25em] tracking-[-0.02em] font-semibold">
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
      <div className="w-full h-[230px] relative flex justify-center items-end pb-8">
        <div 
          style={{
            width: imageStyle.width,
            height: imageStyle.height
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
  );
}; 