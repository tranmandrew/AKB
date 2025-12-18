'use client'

import { Building2, Users, Globe, Handshake, DollarSign, Brain, Lightbulb, Rocket } from "lucide-react"
import Image from "next/image"
import { ResolutionTooltip } from "./resolution-tooltip"

export function WhoWeAreSection() {
  const companies = [
    "Applied Materials",
    "SEA Group",
    "SAP",
    "BOSCH",
    "Nielsen",
    "UBS",
    "Standard Chartered",
    "Siemens",
    "Ant International",
    "TMA solutions",
    "Google",
    "Mastercard",
    "Amazon",
    "Microsoft",
    "JPMorgan",
    "Visa",
    "Grab",
  ]

  const countries = [
    { name: "Singapore", code: "SG" },
    { name: "Canada", code: "CA" },
    { name: "United States", code: "US" },
    { name: "France", code: "FR" },
    { name: "United Kingdom", code: "GB" },
    { name: "Germany", code: "DE" },
    { name: "Russia", code: "RU" },
    { name: "Czech Republic", code: "CZ" },
    { name: "Romania", code: "RO" },
    { name: "Japan", code: "JP" },
  ]

  const governmentEngagements = [
    "Ministry of Foreign Affairs",
    "Ministry of Planning and Investment",
    "Ho Chi Minh City Government",
    "Hanoi City Government",
    "Da Nang City Government",
  ]

  return (
    <section id="who-we-are" className="relative py-16 md:py-20 overflow-hidden scroll-mt-24">
      {/* Da Nang Golden Hands Bridge Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/DanangGolendHandsBridge.webp"
          alt="Da Nang Golden Hands Bridge"
          fill
          className="object-cover grayscale"
          loading="lazy"
          sizes="100vw"
          quality={80}
          unoptimized={false}
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 z-[1]"></div>

      <div className="relative z-[2]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="heading-secondary text-2xl md:text-4xl font-bold text-white mb-3 text-balance">
                A Vital Strategic Channel for{" "}
                <span className="heading-secondary text-vietnam-red font-bold">Independent Vietnam</span>
              </h2>
              <p className="text-base md:text-lg text-white/90 max-w-4xl mx-auto leading-relaxed mb-6">
                Recognized by the Vietnamese government as an "inseparable part of the Vietnamese national community" under <ResolutionTooltip>Resolution 36-NQ/TW</ResolutionTooltip>, we unite leading Kiều Bào professionals to build a stronger, more independent, and prosperous Vietnam.
              </p>

              <div className="bg-white/10 backdrop-blur-md border border-white/20  p-6">
                <h3 className="font-montserrat text-xl md:text-2xl font-bold text-vietnam-red mb-3 text-center">Our Approach</h3>
                <p className="text-base md:text-lg text-white/90 leading-relaxed text-center">
                  We aim to serve as a strategic channel, leveraging collective expertise from experiences with leading multinational corporations and local businesses to engage in direct dialogue, policy recommendations, and development activities with Vietnamese authorities.
                </p>
              </div>
            </div>

            {/* 3-Column Cards Design */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Card 1: Distinguished Global Network */}
              <div className="bg-white/10 border border-white/20 group hover:bg-white/15 hover:scale-105 transition-all duration-300 rounded-lg p-6 md:p-8 text-center h-full flex flex-col">
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-vietnam-red/20 rounded-xl flex items-center justify-center group-hover:bg-vietnam-red/30 transition-all duration-300">
                    <Globe className="h-7 w-7 md:h-8 md:w-8 text-vietnam-red" />
                  </div>
                </div>
                <h3 className="font-montserrat text-lg md:text-xl font-semibold text-white mb-3 leading-tight">
                  A Distinguished Global Network
                </h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base flex-grow">
                  Our members are accomplished leaders and professionals from key international hubs across North America, Western & Eastern Europe, and the Asia Pacific regions.
                </p>
              </div>

              {/* Card 2: Expertise Forged at Industry Leaders */}
              <div className="bg-white/10 border border-white/20 group hover:bg-white/15 hover:scale-105 transition-all duration-300 rounded-lg p-6 md:p-8 text-center h-full flex flex-col">
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-vietnam-red/20 rounded-xl flex items-center justify-center group-hover:bg-vietnam-red/30 transition-all duration-300">
                    <Lightbulb className="h-7 w-7 md:h-8 md:w-8 text-vietnam-red" />
                  </div>
                </div>
                <h3 className="font-montserrat text-lg md:text-xl font-semibold text-white mb-3 leading-tight">
                  Expertise Forged at Industry Leaders
                </h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base flex-grow">
                  We bring a wealth of collective knowledge from experiences at world-renowned corporations across technology, ESG, finance, consulting, and various other industry sectors.
                </p>
              </div>

              {/* Card 3: A Catalyst for National Progress */}
              <div className="bg-white/10 border border-white/20 group hover:bg-white/15 hover:scale-105 transition-all duration-300 rounded-lg p-6 md:p-8 text-center h-full flex flex-col">
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-vietnam-red/20 rounded-xl flex items-center justify-center group-hover:bg-vietnam-red/30 transition-all duration-300">
                    <Rocket className="h-7 w-7 md:h-8 md:w-8 text-vietnam-red" />
                  </div>
                </div>
                <h3 className="font-montserrat text-lg md:text-xl font-semibold text-white mb-3 leading-tight">
                  A Catalyst for National Progress
                </h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base flex-grow">
                  Connecting global insights with local opportunities to drive policy dialogue, foster international cooperation, investments, and capacity building that accelerate Vietnam's economic sovereignty and global competitiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
