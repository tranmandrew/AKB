'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function MembershipHeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Pagoda.jpg"
          alt="Vietnamese Pagoda"
          fill
          className="object-cover object-bottom"
          priority
          quality={75}
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-white">MEMBERSHIP</span>
        </div>

        <div className="max-w-5xl space-y-8">
          <div className="space-y-6">
            <h1 className="heading-primary text-4xl md:text-6xl text-white mb-6 font-bold tracking-tight">
              Founding Membership
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
              Join an exclusive network of Vietnamese professional leaders shaping Vietnam's future on the global stage. Be part of a movement that connects expertise, influence, and opportunity.
            </p>
          </div>

          <a href="/contact" className="inline-block">
            <Button
              size="lg"
              className="bg-vietnam-red hover:bg-vietnam-red/90 text-white px-12 py-7 text-lg font-semibold"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
