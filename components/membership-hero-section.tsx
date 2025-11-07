'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function MembershipHeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Presidential Palace.webp"
          alt="Vietnamese Presidential Palace"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"></div>

      <div className="container mx-auto px-4 py-16 relative z-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-white">MEMBERSHIP</span>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Join AKB
          </h1>

          <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-10 max-w-3xl mx-auto">
            An exclusive network of Vietnamese professionals driving strategic development through policy influence and global partnerships
          </p>

          <a href="/contact" className="inline-block">
            <Button
              size="lg"
              className="font-montserrat bg-vietnam-red hover:bg-vietnam-red/90 text-white px-12 py-7 text-xl"
            >
              Apply for Membership
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
