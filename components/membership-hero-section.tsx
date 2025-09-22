'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function MembershipHeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
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

      {/* Vietnamese flag accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-vietnam-red via-golden-yellow to-vietnam-red z-[15]"></div>

      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-8 font-noto-sans max-w-4xl">
            Trusted by Vietnamese executives, government advisors, and global leaders —
            <span className="block text-vietnam-red mt-3">AKB is where strategic minds converge</span>
            <span className="block mt-2">to strengthen Vietnam's future.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
            Global Vietnamese professionals, policy dialogue, international networks bridging Vietnam with the world.
          </p>

          <a href="/contact" className="inline-block">
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
    </section>
  )
}