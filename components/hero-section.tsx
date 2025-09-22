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
        <div className="flex items-center min-h-[60vh] md:min-h-[65vh]">
          {/* Left side - Content */}
          <div className="space-y-4 md:space-y-6 w-full max-w-full">
            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight break-words tracking-tight font-noto-sans">
              Association of Professional{" "}
              <span className="font-black text-vietnam-red text-shadow-sm">Kiều Bào</span>
            </h1>

            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed max-w-4xl">
              Collective expertise from global Vietnamese professionals influencing policy and strengthening Vietnam's development
            </p>

            {/* Single CTA button */}
            <div className="pt-4">
              <a href="/membership" className="inline-block">
                <Button
                  size="lg"
                  className="font-montserrat bg-vietnam-red hover:bg-vietnam-red/90 text-white px-8 py-6 text-lg hover-elevate"
                >
                  Apply for Membership
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
