import dynamic from 'next/dynamic'
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"

// Lazy load below-fold sections for faster initial load
const WhoWeAreSection = dynamic(() => import("@/components/who-we-are-section").then(mod => ({ default: mod.WhoWeAreSection })))
const GeographicCoverageSection = dynamic(() => import("@/components/geographic-coverage-section").then(mod => ({ default: mod.GeographicCoverageSection })))
const StrategicApproachSection = dynamic(() => import("@/components/strategic-approach-section").then(mod => ({ default: mod.StrategicApproachSection })))
const ActivitiesTeaserSection = dynamic(() => import("@/components/activities-teaser-section").then(mod => ({ default: mod.ActivitiesTeaserSection })))
const JoinMovementSection = dynamic(() => import("@/components/join-movement-section").then(mod => ({ default: mod.JoinMovementSection })))
const FooterSection = dynamic(() => import("@/components/footer-section").then(mod => ({ default: mod.FooterSection })))

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhoWeAreSection />
      <GeographicCoverageSection />
      <StrategicApproachSection />
      <ActivitiesTeaserSection />
      <JoinMovementSection />
      <FooterSection />
    </main>
  )
}
