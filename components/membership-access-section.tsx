'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function MembershipAccessSection() {
  return (
    <section className="relative overflow-hidden">

      {/* Benefits Section */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20">

            {/* Three Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-16">

              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">
                  Global Network
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Senior Vietnamese executives across 16+ international hubs spanning Singapore, Canada, US, Europe, and Asia-Pacific
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">
                  Policy Influence
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Direct platform to Vietnamese policy-makers for strategic recommendations and national development initiatives
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">
                  Sector Leadership
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Chair specialized committees driving Finance, ESG, Technology, Education, and Governance initiatives
                </p>
              </div>

            </div>

            {/* Sector Committees */}
            <div className="border-t border-gray-200 pt-16">
              <h4 className="text-2xl font-bold text-center text-foreground mb-12">
                Strategic Sector Committees
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { name: 'Finance', image: '/Finance.png' },
                  { name: 'ESG', image: '/ESG.png' },
                  { name: 'Technology', image: '/Conference.png' },
                  { name: 'Education', image: '/Government-of-Vietnam-banner.jpg' },
                  { name: 'Governance', image: '/speech.png' }
                ].map((sector) => (
                  <Card key={sector.name} className="overflow-hidden border-2 border-gray-200 hover:border-vietnam-red transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-0">
                      {/* Image Container */}
                      <div className="relative aspect-square w-full bg-gray-100">
                        <Image
                          src={sector.image}
                          alt={sector.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* Label */}
                      <div className="p-4 text-center bg-white">
                        <h5 className="text-lg font-semibold text-vietnam-red">{sector.name}</h5>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Application Section */}
      <div className="py-32 bg-black diagonal-top">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">

            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold text-white">
                Referral Only
              </h2>

              <p className="text-2xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto">
                Membership requires sponsorship from a current AKB member to ensure alignment with Vietnam's strategic development goals
              </p>
            </div>

            <a href="/contact">
              <Button
                size="lg"
                className="bg-vietnam-red hover:bg-vietnam-red/90 text-white px-12 py-7 text-lg font-semibold"
              >
                Submit Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>

          </div>
        </div>
      </div>

    </section>
  )
}
