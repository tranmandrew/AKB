'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Users, TrendingUp } from "lucide-react"
import Image from "next/image"
import { Globe3D } from "./globe-3d"
import { CorporateLogos } from "./corporate-logos"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 md:pt-0">
      {/* Ho Chi Minh City Nighttime Skyline Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/free-photo-of-nighttime-skyline-of-ho-chi-minh-city.jpeg"
          alt="Ho Chi Minh City nighttime skyline"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
      </div>

      {/* 3D Globe Background */}
      <Globe3D className="absolute inset-0 z-[2]" />

      {/* Professional Vietnamese flag-inspired accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-vietnam-red via-golden-yellow to-vietnam-red z-[3]"></div>

      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 z-10"></div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-20">
        <div className="flex items-center min-h-[70vh] md:min-h-[65vh] pt-16 md:pt-8">
          {/* Left side - Content */}
          <div className="space-y-3 md:space-y-6 w-full max-w-full">
            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight break-words tracking-tight font-noto-sans">
              Association of Professional{" "}
              <span className="font-black text-vietnam-red text-shadow-sm">Kiều Bào</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium leading-relaxed max-w-4xl">
              A strategic channel connecting Vietnamese professional excellence worldwide to strengthen independent Vietnam's global position and economic prosperity
            </p>

            {/* Single CTA button */}
            <div className="pt-2 md:pt-4">
              <a href="/membership" className="inline-block">
                <Button
                  size="lg"
                  className="font-montserrat bg-vietnam-red hover:bg-vietnam-red/90 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg hover-elevate"
                >
                  Apply for Membership
                  <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                </Button>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
