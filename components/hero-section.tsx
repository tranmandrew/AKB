'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Users, TrendingUp } from "lucide-react"
import Image from "next/image"
import { Globe3D } from "./globe-3d"
import { CorporateLogos } from "./corporate-logos"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const targetScrollY = useRef(0)
  const currentScrollY = useRef(0)

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const updateParallax = () => {
      // Smooth interpolation
      currentScrollY.current = lerp(currentScrollY.current, targetScrollY.current, 0.1)

      if (parallaxRef.current) {
        const parallaxSpeed = currentScrollY.current * 0.5
        parallaxRef.current.style.transform = `translate3d(0, ${parallaxSpeed}px, 0)`
      }

      // Continue animation if still scrolling
      if (Math.abs(currentScrollY.current - targetScrollY.current) > 0.5) {
        rafRef.current = requestAnimationFrame(updateParallax)
      } else {
        rafRef.current = null
      }
    }

    const handleScroll = () => {
      targetScrollY.current = window.scrollY

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updateParallax)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 md:pt-0">
      {/* Ho Chi Minh City Nighttime Skyline Background with Parallax */}
      <div ref={parallaxRef} className="absolute inset-0 z-0 will-change-transform">
        <Image
          src="/Bitexco.png"
          alt="Ho Chi Minh City nighttime skyline"
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="100vw"
        />
      </div>

      {/* 3D Globe Background */}
      <Globe3D className="absolute inset-0 z-[2]" />

      {/* Professional Vietnamese flag-inspired accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-vietnam-red via-golden-yellow to-vietnam-red z-[3]"></div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-20">
        <div className="flex items-center min-h-[70vh] md:min-h-[65vh] pt-16 md:pt-8">
          {/* Left side - Content */}
          <div className="space-y-6 md:space-y-8 w-full max-w-5xl bg-black/40 backdrop-blur-sm p-8 md:p-12 rounded-2xl">
            {/* Main headline - Improved hierarchy */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] break-words font-inter drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                Association of Professional{" "}
                <span className="text-vietnam-red">Kiều Bào</span>
              </h1>
            </div>

            {/* Subheadline - Better contrast */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-normal leading-relaxed max-w-3xl">
              A strategic channel connecting Vietnamese professional excellence worldwide to strengthen independent Vietnam's global position and economic prosperity
            </p>

            {/* Single CTA button */}
            <div className="pt-4 md:pt-6">
              <a href="/membership" className="inline-block">
                <Button
                  size="lg"
                  className="font-montserrat bg-vietnam-red hover:bg-vietnam-red/90 text-white px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-semibold hover-elevate shadow-xl"
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
