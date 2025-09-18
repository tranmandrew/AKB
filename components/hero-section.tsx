'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Users, TrendingUp } from "lucide-react"
import { Globe3D } from "./globe-3d"
import { CorporateLogos } from "./corporate-logos"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Globe Background */}
      <Globe3D className="absolute inset-0 z-0" />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 z-10"></div>

      <div className="container mx-auto px-4 py-32 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-executive-card rounded-full mb-8 text-sm font-medium">
            <Globe className="h-4 w-4 text-vietnam-red" />
            <span className="text-executive-navy">Association of Professional Kiều Bào</span>
          </div>

          {/* Main headline with strategic messaging */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-8 text-balance leading-tight">
            Bridging Global Vietnamese Excellence{" "}
            <span className="font-medium text-vietnam-red">with National Development</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto text-pretty leading-relaxed">
            Distinguished organization of Vietnamese professionals from Google, Mastercard, UBS, SAP, BOSCH, and Amazon across
            13 countries, fostering substantive knowledge sharing and policy dialogue with Vietnamese ministries to advance
            Vietnam's strategic priorities through direct government engagement.
          </p>

          {/* Key stats aligned with organization */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Users className="h-4 w-4 text-jade-green" />
              <span className="text-muted-foreground">Global Kiều Bào Professionals</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Globe className="h-4 w-4 text-singapore-blue" />
              <span className="text-muted-foreground">13 International Hubs</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <TrendingUp className="h-4 w-4 text-golden-yellow" />
              <span className="text-muted-foreground">Ministerial & Departmental Dialogue</span>
            </div>
          </div>

          {/* CTA buttons with business-focused messaging */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              className="px-8 py-6 text-lg bg-transparent border-2 hover-elevate"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Our Impact
            </Button>
          </div>

          {/* Trust indicators with actual logos */}
          <div className="mt-16">
            <CorporateLogos variant="hero" showTitle={true} className="mb-6" />
            <div className="text-center">
              <p className="text-xs text-muted-foreground"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
