import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { LegacySection } from '@/components/legacy-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { LeadershipSection } from '@/components/leadership-section'
import { LocationSection } from '@/components/location-section'
import { GlobalPresenceSection } from '@/components/global-presence-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <LegacySection />
        <PortfolioSection />
        <LeadershipSection />
        <GlobalPresenceSection />
       
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
