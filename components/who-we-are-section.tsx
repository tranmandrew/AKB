'use client'

import { Building2, Users, Globe, Handshake, DollarSign, Brain } from "lucide-react"
import { CorporateLogos } from "./corporate-logos"
import Image from "next/image"
import { ResolutionTooltip } from "./resolution-tooltip"
import GradientText from "./GradientText"
import { useEffect, useRef, useState } from "react"

export function WhoWeAreSection() {
  const partnersRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  // Corporate logos for the slider
  const corporateLogos = [
    {
      name: 'Google',
      src: '/Google_2015_logo.svg.webp',
      alt: 'Google Logo'
    },
    {
      name: 'Mastercard',
      src: '/Mastercard-logo.svg.png',
      alt: 'Mastercard Logo'
    },
    {
      name: 'Amazon',
      src: '/Amazon_logo.svg.webp',
      alt: 'Amazon Logo'
    },
    {
      name: 'SAP',
      src: '/SAPLogo.png',
      alt: 'SAP Logo'
    },
    {
      name: 'BOSCH',
      src: '/Bosch-Logo.png',
      alt: 'Bosch Logo'
    },
    {
      name: 'UBS',
      src: '/UBS-logo.png',
      alt: 'UBS Logo'
    },
    {
      name: 'Microsoft',
      src: '/microsoft-logo-microsoft-icon-transparent-free-png.webp',
      alt: 'Microsoft Logo'
    },
    {
      name: 'JPMorgan',
      src: '/jp-morgan-logo-black-and-white.png',
      alt: 'JPMorgan Logo'
    },
    {
      name: 'Grab',
      src: '/Grab_(application)_logo.svg',
      alt: 'Grab Logo'
    },
    {
      name: 'Visa',
      src: '/Visa_Inc._logo.svg',
      alt: 'Visa Logo'
    }
  ]

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

  const chambers = [
    {
      name: "BeluxCham",
      src: "/beluxcham_logo__1_-removebg-preview.png",
      alt: "BeluxCham Logo"
    },
    {
      name: "EuroCham",
      src: "/eurochamclear.png",
      alt: "EuroCham Vietnam Logo"
    },
    {
      name: "SingCham",
      src: "/singapore_chamber_of_commerce_vietnam_logo-removebg-preview.png",
      alt: "Singapore Chamber of Commerce Vietnam Logo"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    )

    if (partnersRef.current) {
      observer.observe(partnersRef.current)
    }

    return () => {
      if (partnersRef.current) {
        observer.unobserve(partnersRef.current)
      }
    }
  }, [])

  return (
    <>
      <section id="who-we-are" className="relative py-16 md:py-20 overflow-hidden">
        {/* Da Nang Golden Hands Bridge Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/DanangGolendHandsBridge.jpg"
            alt="Da Nang Golden Hands Bridge"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 z-[1]"></div>

        <div className="relative z-[2]">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="heading-secondary text-2xl md:text-3xl text-white mb-3 text-balance">
                  A Vital Strategic Channel for{" "}
                  <span className="heading-secondary text-vietnam-red">Independent Vietnam</span>
                </h2>
                <p className="text-sm md:text-base text-white/90 max-w-4xl mx-auto leading-relaxed mb-6">
                  Officially recognized by the Vietnamese government as an "inseparable part of the Vietnamese national community" under <ResolutionTooltip>Resolution 36-NQ/TW</ResolutionTooltip>, we unite the world's leading Kiều Bào professionals. Our mission is to serve as a strategic channel leveraging collective expertise to strengthen independent Vietnam's sovereignty, economic development, and global influence.
                </p>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 max-w-4xl mx-auto">
                  <h3 className="font-montserrat text-lg font-semibold text-golden-yellow mb-3 text-center">Our Strategic Channel</h3>
                  <p className="text-sm text-white/90 leading-relaxed text-center">
                    We serve as a strategic channel, leveraging collective expertise from experiences with leading multinational corporations and local businesses to engage in direct dialogue, policy recommendations, and development activities with Vietnamese authorities.
                  </p>
                </div>
              </div>

              {/* Horizontal Stacked Cards Design */}
              <div className="space-y-3">
                {/* Global Professional Network Card */}
                <div className="hover-elevate border-l-4 border-l-vietnam-red bg-transparent">
                  <div className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-vietnam-red/10 rounded-lg flex items-center justify-center">
                        <Users className="h-5 w-5 text-vietnam-red" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-montserrat text-lg font-semibold text-white mb-2">A Distinguished Global Network</h3>
                        <p className="text-sm text-white/80 leading-relaxed">
                          Our members are accomplished leaders and professionals from key international hubs from North America, Western & Eastern Europe, and the Asia Pacific regions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Global Corporate Excellence Card */}
                <div className="hover-elevate border-l-4 border-l-golden-yellow bg-transparent">
                  <div className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-golden-yellow/10 rounded-lg flex items-center justify-center">
                        <Building2 className="h-5 w-5 text-golden-yellow" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-montserrat text-lg font-semibold text-white mb-2">Expertise Forged at Industry Leaders</h3>
                        <p className="text-sm text-white/80 leading-relaxed break-words">
                          We bring a wealth of collective knowledge from experiences at world-renowned corporations across technology, ESG, finance, consulting, and various other industry sectors.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bridge for Global Affairs Card */}
                <div className="hover-elevate border-l-4 border-l-jade-green bg-transparent">
                  <div className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-jade-green/10 rounded-lg flex items-center justify-center">
                        <Globe className="h-5 w-5 text-jade-green" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-montserrat text-lg font-semibold text-white mb-2">A Catalyst for National Progress</h3>
                        <p className="text-sm text-white/80 leading-relaxed">
                          We act as a strategic channel—connecting global insights with local opportunities to drive policy dialogue, foster international cooperation, investments, and capacity building to accelerate Vietnam's economic sovereignty and global competitiveness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships Section - Full Width */}
      <section
        ref={partnersRef}
        className={`bg-stone-100 py-8 px-4 w-full transition-all duration-1000 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className={`heading-primary text-2xl md:text-3xl mb-6 tracking-tight transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <GradientText
                colors={["#EB2300", "#EAFF00", "#EB2300", "#EB2300", "#EB2300", "#EB2300", "#EB2300"]}
                animationSpeed={3.5}
                showBorder={false}
                className="heading-primary text-2xl md:text-3xl tracking-tight"
              >
                Partnered with Vietnam's Leading<br /><span className="font-bold">Chambers of Commerce</span>
              </GradientText>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-items-center">
              {chambers.map((chamber, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  <Image
                    src={chamber.src}
                    alt={chamber.alt}
                    width={500}
                    height={300}
                    className={`object-contain transition-opacity duration-300 hover:opacity-80 ${
                      chamber.name === 'EuroCham' ? 'h-56 w-auto' : 'h-48 w-auto'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
