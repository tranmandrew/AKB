'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function MembershipAccessSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Top Section - Benefits */}
      <div className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">

            {/* Three Column Benefits */}
            <div className="grid md:grid-cols-3 gap-12 mb-20">

              {/* Global Network */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Global Professional Network
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Senior Vietnamese executives across 16+ international hubs and multinational corporations spanning Singapore, Canada, US, Europe, and Asia-Pacific
                </p>
              </div>

              {/* Government Access */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Government Policy Influence
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Direct platform to Vietnamese policy-makers with policy recommendations under Resolution 36-NQ/TW
                </p>
              </div>

              {/* Sector Leadership */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Sector Committee Leadership
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Chair specialized committees in Finance, ESG, Technology, Education, and Governance to drive strategic development
                </p>
              </div>

            </div>

            {/* Sector Committees Grid */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h4 className="text-xl font-bold text-center text-foreground mb-6">
                Five Strategic Sector Committees
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                <div className="bg-white border-2 border-vietnam-red/20 rounded-lg px-4 py-3 text-center">
                  <span className="text-base font-semibold text-vietnam-red">Finance</span>
                </div>
                <div className="bg-white border-2 border-vietnam-red/20 rounded-lg px-4 py-3 text-center">
                  <span className="text-base font-semibold text-vietnam-red">ESG</span>
                </div>
                <div className="bg-white border-2 border-vietnam-red/20 rounded-lg px-4 py-3 text-center">
                  <span className="text-base font-semibold text-vietnam-red">Technology</span>
                </div>
                <div className="bg-white border-2 border-vietnam-red/20 rounded-lg px-4 py-3 text-center">
                  <span className="text-base font-semibold text-vietnam-red">Education</span>
                </div>
                <div className="bg-white border-2 border-vietnam-red/20 rounded-lg px-4 py-3 text-center col-span-2 md:col-span-1">
                  <span className="text-base font-semibold text-vietnam-red">Governance</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Section - Application Requirements */}
      <div className="py-20 md:py-24 bg-black diagonal-top relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Referral-Only Membership
            </h2>

            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              AKB maintains a specialized network through member referrals, ensuring committed professionals dedicated to Vietnam's strategic development
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 mb-10 max-w-2xl mx-auto">
              <p className="text-lg text-white/95 leading-relaxed">
                All applications require sponsorship from a current AKB member. Include your referring member's information when applying.
              </p>
            </div>

            <a href="/contact">
              <Button
                size="lg"
                className="font-montserrat bg-vietnam-red hover:bg-vietnam-red/90 text-white px-12 py-7 text-xl"
              >
                Submit Application
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}
