'use client'

import { Handshake, Megaphone, Settings, Flag, Target, Users, Globe, Lightbulb, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function ActivitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activityRefs = useRef<(HTMLDivElement | null)[]>([])

  const activities = [
    {
      icon: Handshake,
      title: "Strategic Policy Engagement",
      description: "High-level dialogue with Vietnamese Ministries and government departments, facilitating substantive knowledge sharing from our members' global expertise. We advocate for policies that champion Vietnam's strategic priorities and foster greater integration for Kiều Bào contributing to the nation.",
      accent: "vietnam-red",
      image: "/Government-of-Vietnam-banner.jpg"
    },
    {
      icon: Megaphone,
      title: "Global Advocacy & Influence",
      description: "Serving as a unified voice for Kiều Bào leaders, we actively promote Vietnam's national interests on the international stage. We coordinate with Kiều Bào communities, overseas businesses, and leading Chambers of Commerce to build stronger global ties.",
      accent: "golden-yellow",
      image: "/Conference.png"
    },
    {
      icon: Settings,
      title: "Specialized Sector Leadership",
      description: "Our Sector Committees, chaired by expert members, dive deep into critical areas like Finance, ESG, Technology, Education, and Governance. These committees develop strategic insights and provide sector-specific recommendations vital for Vietnam's long-term development.",
      accent: "jade-green",
      image: "/ESG.png"
    },
    {
      icon: Flag,
      title: "Promotion of Vietnamese National Interest",
      description: "We actively champion Vietnam's strategic priorities and national objectives across international forums and business networks. Our global presence amplifies Vietnam's voice in critical discussions that shape regional and global economic policies.",
      accent: "vietnam-red",
      image: "/speech.png"
    },
    {
      icon: Target,
      title: "Active Contribution to National Priorities",
      description: "Our members directly contribute expertise, resources, and strategic guidance to support Vietnam's key development goals. We align our initiatives with government priorities to maximize impact and accelerate national progress.",
      accent: "golden-yellow",
      image: "/DanangGolendHandsBridge.jpg"
    },
    {
      icon: Users,
      title: "Voice for Kiều Bào Leader Network",
      description: "We serve as the unified representative body for Vietnamese professional leaders worldwide, coordinating across communities and ensuring Kiều Bào perspectives are heard in policy discussions and strategic planning at the highest levels.",
      accent: "jade-green",
      image: "/business-agreement-handshake-symbolizing-cooperation-trust-vietnam-close-up-view-two-hands-engaged-firm-context-367137384.webp"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = activityRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setActiveIndex(index)
            }
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px'
      }
    )

    activityRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      activityRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <>
      {/* Main Activities Section */}
      <section id="activities" className="relative py-0 md:py-0 bg-black -mt-8 md:-mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-8 md:mb-8">
              <h2 className="heading-primary text-3xl md:text-5xl text-white mb-4 text-balance">
                Six Core <span className="text-vietnam-red">Activities</span>
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Building a strategic channel for global Vietnamese expertise and professional excellence across critical development sectors
                </p>
              </div>
            </div>

            {/* Desktop: Sticky Image + Scrolling Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Left: Scrolling Content */}
              <div className="space-y-12 md:space-y-12 lg:space-y-12">
                {activities.map((activity, index) => {
                  const IconComponent = activity.icon
                  const accentColor = activity.accent

                  return (
                    <div
                      key={index}
                      ref={(el) => {
                        activityRefs.current[index] = el
                      }}
                      className="scroll-mt-32 lg:h-[calc(100vh-12rem)]"
                    >
                      <Card className={`border-2 transition-all duration-500 h-full ${
                        activeIndex === index
                          ? 'border-vietnam-red shadow-xl scale-[1.02]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <CardContent className="p-6 md:p-10 h-full flex flex-col">
                          {/* Number Badge */}
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`w-14 h-14 md:w-16 md:h-16 bg-vietnam-red/10 rounded-2xl flex items-center justify-center border-2 border-vietnam-red/30 transition-all duration-300 ${
                              activeIndex === index ? `bg-vietnam-red/20 border-vietnam-red` : ''
                            }`}>
                              <span className={`text-2xl md:text-3xl font-bold text-vietnam-red`}>
                                {index + 1}
                              </span>
                            </div>
                            <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-vietnam-red/10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                              activeIndex === index ? `bg-vietnam-red/20` : ''
                            }`}>
                              <IconComponent className={`h-6 w-6 md:h-7 md:w-7 text-vietnam-red`} />
                            </div>
                          </div>

                          {/* Content */}
                          <div>
                            <h3 className="heading-secondary text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4 leading-tight">
                              {activity.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                              {activity.description}
                            </p>
                          </div>

                          {/* Mobile Image */}
                          <div className="mt-6 lg:hidden rounded-xl overflow-hidden">
                            <Image
                              src={activity.image}
                              alt={activity.title}
                              width={800}
                              height={600}
                              className="w-full h-64 object-cover"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )
                })}
              </div>

              {/* Right: Sticky Image Panel (Desktop Only) */}
              <div className="hidden lg:block sticky top-32 h-[calc(100vh-12rem)]">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200">
                  {activities.map((activity, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        activeIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      {/* Overlay gradient for better text readability if needed */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                      {/* Image Caption */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-white font-semibold text-lg">
                          {activity.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Highlights Section */}
      <section className="relative bg-black py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Distinguished Global Network */}
              <Card className="bg-white/10 border border-white/20 group hover:bg-white/15 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 md:p-8 text-center h-full flex flex-col">
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-vietnam-red/20 rounded-xl flex items-center justify-center group-hover:bg-vietnam-red/30 transition-all duration-300">
                      <Globe className="h-7 w-7 md:h-8 md:w-8 text-vietnam-red" />
                    </div>
                  </div>
                  <h3 className="heading-secondary text-lg md:text-xl font-semibold text-white mb-3 leading-tight">
                    A Distinguished Global Network
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">
                    Our members are accomplished leaders and professionals from key international hubs from North America, Western & Eastern Europe, and the Asia Pacific regions.
                  </p>
                </CardContent>
              </Card>

              {/* Card 2: Expertise Forged at Industry Leaders */}
              <Card className="bg-white/10 border border-white/20 group hover:bg-white/15 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 md:p-8 text-center h-full flex flex-col">
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-vietnam-red/20 rounded-xl flex items-center justify-center group-hover:bg-vietnam-red/30 transition-all duration-300">
                      <Lightbulb className="h-7 w-7 md:h-8 md:w-8 text-vietnam-red" />
                    </div>
                  </div>
                  <h3 className="heading-secondary text-lg md:text-xl font-semibold text-white mb-3 leading-tight">
                    Expertise Forged at Industry Leaders
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">
                    We bring a wealth of collective knowledge from experiences at world-renowned corporations across technology, ESG, finance, consulting, and various other industry sectors.
                  </p>
                </CardContent>
              </Card>

              {/* Card 3: A Catalyst for National Progress */}
              <Card className="bg-white/10 border border-white/20 group hover:bg-white/15 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 md:p-8 text-center h-full flex flex-col">
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-vietnam-red/20 rounded-xl flex items-center justify-center group-hover:bg-vietnam-red/30 transition-all duration-300">
                      <Rocket className="h-7 w-7 md:h-8 md:w-8 text-vietnam-red" />
                    </div>
                  </div>
                  <h3 className="heading-secondary text-lg md:text-xl font-semibold text-white mb-3 leading-tight">
                    A Catalyst for National Progress
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">
                    We aim to act as a strategic channel—connecting global insights with local opportunities to drive policy dialogue, foster international cooperation, investments, and capacity building to accelerate Vietnam's economic sovereignty and global competitiveness.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gray-50 py-16 md:py-20 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="heading-primary text-2xl md:text-3xl text-foreground mb-4">
              Ready to Shape <span className="text-vietnam-red">Vietnam's Future</span>?
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
              Participate with a network of professional leaders driving meaningful change for Vietnam's development on the global stage
            </p>

            {/* Single CTA */}
            <div className="max-w-sm mx-auto mb-6">
              <a href="/membership" className="inline-block w-full">
                <button className="bg-vietnam-red hover:bg-vietnam-red/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 w-full text-base md:text-lg">
                  Apply for Membership
                </button>
              </a>
            </div>

            {/* Additional info */}
            <p className="text-xs md:text-sm text-muted-foreground">
              <strong>Referral required</strong> • Professional directory access • Newsletter with government programs
            </p>
          </div>
        </div>
      </section>
    </>
  )
}