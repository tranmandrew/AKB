import { MembershipHeroSection } from "@/components/membership-hero-section"
import { MembershipAccessSection } from "@/components/membership-access-section"
import { FooterSection } from "@/components/footer-section"

export const metadata = {
  title: 'Membership | AKB - Join Distinguished Vietnamese Professionals',
  description: 'Join the Association of Professional Kiều Bào. Specialized network of Vietnamese diaspora professionals driving Vietnam\'s development.',
}

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-background">
      <MembershipHeroSection />
      <MembershipAccessSection />
      <FooterSection />
    </main>
  )
}