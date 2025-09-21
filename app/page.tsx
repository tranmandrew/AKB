import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { OpportunitySection } from "@/components/opportunity-section"
import { WhoWeAreSection } from "@/components/who-we-are-section"
import { StrategicApproachSection } from "@/components/strategic-approach-section"
import { ValuePropositionSection } from "@/components/value-proposition-section"
import { GeographicCoverageSection } from "@/components/geographic-coverage-section"
import { JoinMovementSection } from "@/components/join-movement-section"
import { FooterSection } from "@/components/footer-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhoWeAreSection />
      <GeographicCoverageSection />
      <StrategicApproachSection />
      <ValuePropositionSection />
      <JoinMovementSection />
      <FooterSection />
    </main>
  )
}
