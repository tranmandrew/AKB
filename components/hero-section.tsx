'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Users, TrendingUp } from "lucide-react"
import Image from "next/image"
import { Globe3D } from "./globe-3d"
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
          src="/Bitexco.webp"
          alt="Ho Chi Minh City nighttime skyline"
          fill
          className="object-cover"
          priority
          quality={80}
          sizes="100vw"
          unoptimized={false}
        />
      </div>

      {/* 3D Globe Background */}
      <Globe3D className="absolute inset-0 z-[2]" />

      {/* Professional Vietnamese flag-inspired accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-vietnam-red via-golden-yellow to-vietnam-red z-[3]"></div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-20">
        <div className="flex items-center min-h-[70vh] md:min-h-[65vh] pt-16 md:pt-8">
          {/* Hero Content - Clean, elegant design */}
          <div className="w-full max-w-6xl space-y-12">
            {/* Main headline - 2 lines only */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.2]"
              style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
              <span className="inline-block">Uniting Distinguished <span className="text-vietnam-red">Vietnamese</span> Professionals Worldwide</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-white/95 inline-block">
                To Strengthen Vietnam's Future
              </span>
            </h1>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a href="/membership" className="inline-block">
                <Button
                  size="lg"
                  className="font-montserrat bg-vietnam-red hover:bg-vietnam-red/90 text-white px-10 md:px-12 py-6 md:py-7 text-lg md:text-xl font-semibold shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Apply for Membership
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#who-we-are" className="inline-block">
                <Button
                  variant="outline"
                  size="default"
                  className="font-montserrat bg-white/10 hover:bg-white/20 text-white border-white/30 px-6 py-5 text-base font-medium backdrop-blur-sm transition-all duration-300"
                >
                  Learn More
                </Button>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
