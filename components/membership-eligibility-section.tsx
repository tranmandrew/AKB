'use client'

import { CheckCircle, Building2, Globe, Users } from "lucide-react"

export function MembershipEligibilitySection() {
  const eligibilityCategories = [
    {
      icon: Building2,
      title: "Corporate Executives",
      description: "C-Level, Senior Director, or equivalent roles at multinational corporations or Vietnamese companies with international operations."
    },
    {
      icon: Globe,
      title: "Professional Services",
      description: "Partners, Senior Directors, or Managing Directors at leading consulting, financial services, or professional service firms."
    },
    {
      icon: Users,
      title: "Entrepreneurs & Founders",
      description: "Founders or co-founders of companies with significant revenue or strategic importance to Vietnam's development."
    }
  ]

  const requirements = [
    "Vietnamese heritage or strong professional ties to Vietnam",
    "Senior leadership position with decision-making authority",
    "Demonstrated commitment to Vietnam's development and prosperity",
    "Referral from existing APKB member (required)",
    "Willingness to engage in policy dialogue and development activities"
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Eligibility
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              APKB membership is designed for senior Vietnamese professionals who are positioned to influence and contribute to Vietnam's development agenda.
            </p>
          </div>

          {/* Eligibility Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {eligibilityCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-jade-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{category.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                </div>
              )
            })}
          </div>

          {/* Requirements */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Membership Requirements
            </h3>
            <div className="space-y-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-vietnam-red flex-shrink-0 mt-0.5" />
                  <p className="text-foreground leading-relaxed">{requirement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}