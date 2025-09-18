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

      <div className="container mx-auto px-4 py-32 relative z-20">
        <div className="flex items-center min-h-[60vh]">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
              Vietnam's Global{" "}
              <span className="font-medium text-vietnam-red">Professional Network</span>
            </h1>

            <p className="text-lg md:text-xl text-black leading-relaxed max-w-lg">
              Connecting Vietnamese leaders from Google, Amazon, UBS, and other Fortune 500 companies with Vietnam's government to drive national development through expertise and investment.
            </p>


            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact">
                <Button
                  size="lg"
                  className="bg-vietnam-red hover:bg-vietnam-red/90 text-white px-8 py-6 text-lg hover-elevate"
                >
                  Apply for Membership
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg bg-white/70 border-2 hover-elevate hover:bg-white/80"
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Our Impact
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
