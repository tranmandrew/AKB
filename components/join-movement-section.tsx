'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check } from "lucide-react"

export function JoinMovementSection() {
  const benefits = [
    "Direct access to government-level dialogue",
    "Exclusive networking with elite Vietnamese professionals",
    "Platform to drive meaningful policy and business initiatives",
    "Legacy as a founding architect of Vietnam's global integration",
  ]

  return (
    <section id="join" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6 text-balance">
            Be Part of <span className="font-medium text-accent">Vietnam's Future</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-12 text-pretty leading-relaxed">
            This is a once-in-a-generation opportunity to be a founding member of an organization that will shape
            Vietnam's next chapter. We seek distinguished Vietnamese professionals ready to leverage their global
            success for our homeland's prosperity.
          </p>

          <Card className="glass-card border-0 mb-12">
            <CardContent className="p-8">
              <h3 className="text-xl font-medium text-foreground mb-6">Founding Member Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start text-left">
                    <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-muted-foreground text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
              >
                Apply for Founding Membership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg bg-transparent"
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
