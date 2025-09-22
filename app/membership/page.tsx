import { Header } from "@/components/header"
import { MembershipHeroSection } from "@/components/membership-hero-section"
import { MembershipAccessSection } from "@/components/membership-access-section"
import { FooterSection } from "@/components/footer-section"

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <MembershipHeroSection />
      <MembershipAccessSection />
      <FooterSection />
    </main>
  )
}