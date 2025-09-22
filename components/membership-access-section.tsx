'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Globe, MessageSquare, Shield, Star, Building2, CheckCircle } from "lucide-react"

export function MembershipAccessSection() {
  const accessPoints = [
    {
      icon: Globe,
      title: "Global Professional Network",
      description: "Senior Vietnamese executives across 16+ hubs and multinational corporations. Singapore, Canada, US, Europe, Asia-Pacific.",
      features: ["16+ International Hubs", "Multinational Corporation Executives", "Cross-Industry Leadership Network"]
    },
    {
      icon: MessageSquare,
      title: "Government Policy Influence & Sector Leadership",
      description: "Direct policy recommendations with Vietnamese authorities under Resolution 36-NQ/TW.",
      features: ["Direct Ministry Access", "Sector Committee Leadership", "National Priority Development"]
    }
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Header Section */}
      <div className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="absolute inset-0 lotus-pattern opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 heading-primary">
                Membership Provides
                <span className="block text-vietnam-red">Privileged Access</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed body-text">
                Promote Vietnamese national interests through exclusive networks and direct government influence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Access Points */}
      <div className="space-y-0 bg-gradient-to-b from-white to-gray-50">
            {accessPoints.map((access, index) => {
              const IconComponent = access.icon
              const isEven = index % 2 === 0
              const isFirst = index === 0
              const isLast = index === accessPoints.length - 1

              return (
                <div key={index} className="relative bg-gradient-to-b from-white to-gray-50">
                  <div
                    className={`${isFirst ? 'py-12' : index % 2 === 1 ? 'py-28' : 'py-20'} relative w-full overflow-hidden ${
                      isFirst
                        ? 'bg-white'
                        : index % 2 === 1
                          ? 'bg-gradient-to-r from-stone-200 from-10% via-vietnam-red/80 via-60% to-black diagonal-top-bottom'
                          : 'bg-white diagonal-bottom'
                    }`}
                  >
                    <div className="container mx-auto px-4 relative z-10">
                      <div className={`flex flex-col ${
                        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                      } items-center gap-12 lg:gap-16 max-w-7xl mx-auto`}>
                        {/* Visual Element */}
                        <div className="flex-1 relative">
                          <div className={`relative space-y-6 ${
                            index % 2 === 1 ? 'text-white' : 'text-foreground'
                          }`}>

                            {/* Features List */}
                            <div className="space-y-4">
                              {access.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-4">
                                  <div className={`w-2 h-2 rounded-full ${
                                    index % 2 === 1 ? 'bg-white/80' : 'bg-vietnam-red'
                                  }`} />
                                  <span className={`text-lg font-medium ${
                                    index % 2 === 1 ? 'text-white/90' : 'text-muted-foreground'
                                  }`}>{feature}</span>
                                </div>
                              ))}

                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-6">
                          <div className="space-y-4">
                            <h3 className={`text-3xl md:text-4xl font-bold heading-secondary leading-tight ${
                              index % 2 === 1 ? 'text-white drop-shadow-lg' : 'text-foreground'
                            }`}>
                              {access.title}
                            </h3>
                            <p className={`text-lg leading-relaxed body-text ${
                              index % 2 === 1 ? 'text-white drop-shadow-md' : 'text-muted-foreground'
                            }`}>
                              {access.description}
                            </p>

                            {/* Sector Leadership Text */}
                            {index === 1 && (
                              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                <h4 className="text-xl font-bold text-amber-300 mb-2">Five Sector Committees:</h4>
                                <p className="text-lg leading-relaxed">
                                  Lead committees in <span className="text-amber-300 font-bold underline">Finance</span>, <span className="text-amber-300 font-bold underline">ESG</span>, <span className="text-amber-300 font-bold underline">Technology</span>, <span className="text-amber-300 font-bold underline">Education</span>, <span className="text-amber-300 font-bold underline">Governance</span>.
                                </p>
                              </div>
                            )}
                          </div>

                          {/* Subtle accent line */}
                          <div className={`w-24 h-1 rounded-full ${
                            index % 2 === 1
                              ? 'bg-white/60'
                              : 'bg-vietnam-red/40'
                          }`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
      </div>

      {/* Referral Requirement */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Left Content */}
              <div className="flex-1 space-y-8">
                <div className="space-y-6">
                  <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                    Membership by
                    <span className="block text-vietnam-red underline">Referral Only</span>
                  </h3>

                  <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    Exclusive network through member referrals only. Committed Vietnamese professionals dedicated to Vietnam's strategic development.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    Members sponsor applicants aligned with strengthening Vietnam through global expertise and policy engagement.
                  </p>
                </div>

                <div className="pt-6">
                  <a href="/contact" className="inline-block">
                    <Button
                      size="lg"
                      className="font-montserrat bg-vietnam-red hover:bg-vietnam-red/90 text-white px-12 py-6 text-xl hover-elevate"
                    >
                      Apply for Membership
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                  </a>
                  <p className="text-muted-foreground mt-4 text-sm">
                    Include your referring member's information in your application
                  </p>
                </div>
              </div>

              {/* Right Benefits */}
              <div className="flex-1 space-y-8">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="w-2 h-2 bg-vietnam-red rounded-full"></div>
                    <h4 className="text-2xl font-bold text-foreground">Verified Professional Network</h4>
                    <p className="text-lg text-muted-foreground">Senior Vietnamese executives across industries and continents</p>
                  </div>

                  <div className="space-y-4">
                    <div className="w-2 h-2 bg-vietnam-red rounded-full"></div>
                    <h4 className="text-2xl font-bold text-foreground">Sector Committee Leadership</h4>
                    <p className="text-lg text-muted-foreground">Chair committees in Finance, ESG, Technology, Education, Governance</p>
                  </div>

                  <div className="space-y-4">
                    <div className="w-2 h-2 bg-vietnam-red rounded-full"></div>
                    <h4 className="text-2xl font-bold text-foreground">Exclusive Global Access</h4>
                    <p className="text-lg text-muted-foreground">16+ international hubs and multinational corporations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}