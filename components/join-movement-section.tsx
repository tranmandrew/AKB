'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"

export function JoinMovementSection() {
  const benefits = [
    "Direct access to government-level dialogue",
    "Exclusive networking with elite Vietnamese professionals",
    "Platform to drive meaningful policy and business initiatives",
    "Legacy as a founding architect of Vietnam's global integration",
  ]

  const membershipInfo = [
    "Referral is required for membership",
    "Directory of professionals with sector expertise",
    "Newsletter featuring government programs open for Kiều Bào",
    "Professional highlights and exciting developments"
  ]

  return (
    <section id="join" className="relative py-16 md:py-20 overflow-hidden pt-32 z-10">
      {/* Hanoi Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/HanoiStock.jpeg"
          alt="Hanoi cityscape"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-primary text-3xl md:text-5xl text-white mb-6 text-balance">
            Be Part of <span className="heading-primary text-accent">Vietnam's Future</span>
          </h2>

          <p className="text-lg text-white/90 mb-8 text-pretty leading-relaxed">
            Once-in-a-generation opportunity for founding membership. Distinguished Vietnamese professionals leveraging global success for homeland prosperity.
          </p>

          <Card className="glass-card border-0 mb-8 max-w-3xl mx-auto">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start text-left">
                    <div className="w-4 h-4 bg-accent/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-accent" />
                    </div>
                    <span className="text-muted-foreground text-sm leading-tight">{benefit}</span>
                  </div>
                ))}
              </div>

              <hr className="my-4 border-gray-200" />

              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-3">
                  <strong>Referral required</strong> • Professional directory access • Newsletter with government programs
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/membership">
              <Button
                size="lg"
                className="font-montserrat bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
              >
                Apply for Membership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="font-montserrat px-8 py-6 text-lg bg-white text-black border-white hover:bg-white/90"
              >
                Schedule a Consultation
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
