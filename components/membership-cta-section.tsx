'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function MembershipCTASection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/free-photo-of-nighttime-skyline-of-ho-chi-minh-city.jpeg"
          alt="Vietnam skyline"
          fill
          className="object-cover"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Leadership is Influence. Let's Shape Vietnam's Future Together.
          </h2>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join the global Vietnamese professional network that's bridging expertise with opportunity, connecting diaspora talent with homeland development.
          </p>

          <div className="space-y-4">
            <a href="/contact" className="inline-block">
              <Button
                size="lg"
                className="font-montserrat bg-vietnam-red hover:bg-vietnam-red/90 text-white px-8 py-6 text-lg hover-elevate"
              >
                Apply for Membership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>

            <div className="text-center">
              <p className="text-sm text-white/70">
                Membership by referral only • Professional review required
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-vietnam-red via-golden-yellow to-vietnam-red z-20"></div>
    </section>
  )
}