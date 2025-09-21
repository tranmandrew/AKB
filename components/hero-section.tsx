'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Users, TrendingUp } from "lucide-react"
import Image from "next/image"
import { Globe3D } from "./globe-3d"
import { CorporateLogos } from "./corporate-logos"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ho Chi Minh City Nighttime Skyline Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/free-photo-of-nighttime-skyline-of-ho-chi-minh-city.jpeg"
          alt="Ho Chi Minh City nighttime skyline"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 3D Globe Background */}
      <Globe3D className="absolute inset-0 z-[2]" />

      {/* Professional Vietnamese flag-inspired accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-vietnam-red via-golden-yellow to-vietnam-red z-[3]"></div>

      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/40 z-10"></div>

      <div className="container mx-auto px-4 py-20 md:py-24 relative z-20">
        <div className="flex items-center min-h-[50vh] md:min-h-[55vh]">
          {/* Left side - Content */}
          <div className="space-y-6 md:space-y-8 w-full max-w-full">
            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight break-words tracking-tight font-noto-sans">
              Association of Professional{" "}
              <span className="font-black text-vietnam-red text-shadow-sm">Kiều Bào</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed max-w-full md:max-w-lg break-words">
              A distinguished organization of Vietnamese diaspora professionals acting as a vital bridge for global affairs, harnessing collective expertise from Google, Mastercard, UBS, SAP, BOSCH, and Amazon to support Vietnam's robust growth and stability.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full">
              <a href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-vietnam-red hover:bg-vietnam-red/90 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg hover-elevate w-full sm:w-auto"
                >
                  Apply for Membership
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="px-4 md:px-8 py-4 md:py-6 text-sm md:text-lg bg-white/70 border-2 hover-elevate hover:bg-white/80 w-full sm:w-auto whitespace-nowrap"
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Impact
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8">
              <CorporateLogos variant="hero" showTitle={false} className="justify-start" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
