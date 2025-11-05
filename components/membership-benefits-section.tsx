'use client'

import { Globe, Users, TrendingUp, MessageSquare, Star, Building2 } from "lucide-react"

export function MembershipBenefitsSection() {
  const reasons = [
    {
      title: "Why APKB, and why now?",
      description: "Vietnam's global influence is expanding, but the bridge between overseas Vietnamese and the homeland needs strengthening. Professional Kiều Bào remain disconnected, and policy dialogue lacks coordinated expertise.",
      highlight: "APKB membership is for leaders who want more than networking. It's about:"
    }
  ]

  const coreValues = [
    {
      icon: Users,
      title: "Peer Network & Accountability",
      description: "Confidential circles, private briefings, and specialized gatherings with fellow Vietnamese professionals."
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "World-class connections and international partnerships bridging Vietnam with global markets."
    },
    {
      icon: MessageSquare,
      title: "Policy Influence",
      description: "Visibility in reports and platforms shaping Vietnam's development agenda and national priorities."
    }
  ]

  const benefits = [
    {
      icon: Users,
      title: "Peer-to-Peer Network",
      description: "Meaningful connections with fellow executives, entrepreneurs, and thought leaders across global Vietnamese communities."
    },
    {
      icon: TrendingUp,
      title: "Policy & Development Insights",
      description: "Global perspectives with Vietnamese relevance, including government program opportunities and development initiatives."
    },
    {
      icon: Star,
      title: "Visibility & Influence",
      description: "Thought leadership opportunities, member spotlights, and recognition in professional Vietnamese networks."
    },
    {
      icon: Building2,
      title: "Business Growth Opportunities",
      description: "Curated introductions, strategic collaborations, and access to Vietnam-focused investment opportunities."
    },
    {
      icon: Globe,
      title: "Professional Events",
      description: "Member-only gatherings, policy briefings, and cultural events for deeper learning and meaningful connections."
    },
    {
      icon: MessageSquare,
      title: "Government Dialogue",
      description: "Direct channels to Vietnamese authorities for policy recommendations and development activity participation."
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Why APKB Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Why APKB, and why now?
            </h2>
            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Vietnam's global influence is expanding, but the bridge between overseas Vietnamese and the homeland needs strengthening. Professional Kiều Bào remain disconnected, and policy dialogue lacks coordinated expertise.
              </p>
              <p className="text-lg font-medium text-foreground">
                APKB membership is for leaders who want more than networking. It's about:
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {coreValues.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-vietnam-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-vietnam-red" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Why Join Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Why Join Association of Professional <span className="text-vietnam-red">Kiều Bào</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 hover-elevate">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-jade-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-jade-green" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
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
  )
}