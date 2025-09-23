'use client'

import { Handshake, Megaphone, Settings, Flag, Target, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function ActivitiesSection() {
  const activities = [
    {
      icon: Handshake,
      title: "Strategic Policy Engagement",
      description: "We foster direct, high-level dialogue with Vietnamese Ministries and government departments. Our members contribute new ideas, investment opportunities, and policy recommendations to champion Vietnam's strategic priorities and facilitate easier integration for Kiều Bào.",
      accent: "vietnam-red"
    },
    {
      icon: Megaphone,
      title: "Global Advocacy & Influence",
      description: "Serving as a unified voice for Kiều Bào leaders, we actively promote Vietnam's national interests on the international stage. We coordinate with Kiều Bào communities, overseas businesses, and leading Chambers of Commerce to build stronger global ties.",
      accent: "golden-yellow"
    },
    {
      icon: Settings,
      title: "Specialized Sector Leadership",
      description: "Our Sector Committees, chaired by expert members, dive deep into critical areas like Finance, ESG, Technology, Education, and Governance. These committees develop strategic insights and provide sector-specific recommendations vital for Vietnam's long-term development.",
      accent: "jade-green"
    },
    {
      icon: Flag,
      title: "Promotion of Vietnamese National Interest",
      description: "We actively champion Vietnam's strategic priorities and national objectives across international forums and business networks. Our global presence amplifies Vietnam's voice in critical discussions that shape regional and global economic policies.",
      accent: "vietnam-red"
    },
    {
      icon: Target,
      title: "Active Contribution to National Priorities",
      description: "Our members directly contribute expertise, resources, and strategic guidance to support Vietnam's key development goals. We align our initiatives with government priorities to maximize impact and accelerate national progress.",
      accent: "golden-yellow"
    },
    {
      icon: Users,
      title: "Voice for Kiều Bào Leader Network",
      description: "We serve as the unified representative body for Vietnamese professional leaders worldwide, coordinating across communities and ensuring Kiều Bào perspectives are heard in policy discussions and strategic planning at the highest levels.",
      accent: "jade-green"
    }
  ]

  return (
    <>
      {/* Main Activities Section */}
      <section id="activities" className="relative py-16 md:py-20 overflow-hidden">
        {/* Dark background with subtle pattern */}
        <div className="absolute inset-0 bg-black z-0"></div>
        <div className="absolute inset-0 opacity-10 z-[1]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='45' y='0' width='10' height='100'/%3E%3Crect x='0' y='45' width='100' height='10'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>

        <div className="relative z-[2]">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-16 md:mb-20">
                <h2 className="heading-primary text-3xl md:text-5xl text-white mb-6 text-balance">
                  Six Core <span className="text-vietnam-red">Activities</span>
                </h2>
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    Serving as Vietnam's strategic channel for global expertise and professional excellence across critical development sectors
                  </p>
                </div>

                {/* Decorative divider */}
                <div className="flex items-center justify-center mt-8 mb-12">
                  <div className="h-px bg-gradient-to-r from-transparent via-vietnam-red to-transparent w-48 md:w-64"></div>
                  <div className="mx-4 w-2 h-2 bg-vietnam-red rounded-full"></div>
                  <div className="h-px bg-gradient-to-r from-vietnam-red via-transparent to-transparent w-48 md:w-64"></div>
                </div>
              </div>

              {/* Activities Grid - Alternating Layout with Diagonal Sections */}
              <div className="space-y-0">
                {activities.map((activity, index) => {
                  const IconComponent = activity.icon
                  const isEven = index % 2 === 0
                  const accentColor = activity.accent
                  const isLast = index === activities.length - 1

                  return (
                    <div key={index}>
                      {/* Activity Section */}
                      <div className={`relative py-16 md:py-20 ${
                        isEven
                          ? 'bg-gradient-to-r from-black to-gray-900'
                          : 'bg-gradient-to-r from-gray-900 to-black'
                      } ${
                        index === 0 ? '' : isEven ? 'diagonal-top' : 'diagonal-top-flip'
                      } ${
                        isLast ? '' : isEven ? 'diagonal-bottom' : 'diagonal-bottom-flip'
                      }`}>
                        <div className="container mx-auto px-4">
                          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto ${!isEven ? 'lg:text-right' : ''}`}>
                            {/* Content Side */}
                            <div className={`lg:col-span-7 ${!isEven ? 'lg:order-2' : ''}`}>
                              <Card className="glass-card border-0 hover-elevate transition-all duration-300 group">
                                <CardContent className="p-6 md:p-8">
                                  <div className={`flex items-start gap-6 ${!isEven ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                                    {/* Icon */}
                                    <div className={`flex-shrink-0 w-16 h-16 bg-${accentColor}/20 rounded-xl flex items-center justify-center group-hover:bg-${accentColor}/30 transition-colors border border-${accentColor}/30`}>
                                      <IconComponent className={`h-8 w-8 text-${accentColor}`} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                      <h3 className="heading-secondary text-xl md:text-2xl font-semibold text-white mb-4 leading-tight">
                                        {activity.title}
                                      </h3>
                                      <p className="text-white/80 leading-relaxed text-sm md:text-base">
                                        {activity.description}
                                      </p>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>

                            {/* Visual Accent Side */}
                            <div className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : ''}`}>
                              <div className={`flex ${!isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                                <div className="relative">
                                  {/* Large decorative number */}
                                  <div className="text-8xl md:text-9xl font-black text-white/40 leading-none select-none">
                                    {String(index + 1).padStart(2, '0')}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Diagonal Transition */}
      <section className="relative bg-white diagonal-top pt-24 pb-16 md:pb-20">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EB2300' fill-opacity='0.1'%3E%3Cpath d='M50 50L25 25h50L50 50zM50 50L75 75H25L50 50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px'
        }}></div>

        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="heading-primary text-2xl md:text-4xl text-foreground mb-6">
                Ready to Shape <span className="text-vietnam-red">Vietnam's Future</span>?
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
                Join an elite network of professional leaders driving meaningful change for Vietnam's development on the global stage
              </p>

              {/* Single CTA */}
              <div className="max-w-md mx-auto mb-8">
                <a href="/membership" className="inline-block w-full">
                  <button className="bg-vietnam-red hover:bg-vietnam-red/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 w-full text-lg">
                    Apply for Founding Membership
                  </button>
                </a>
              </div>

              {/* Additional info */}
              <p className="text-sm text-muted-foreground">
                <strong>Referral required</strong> • Professional directory access • Newsletter with government programs
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}