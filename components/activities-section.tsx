'use client'

import { Handshake, Megaphone, Settings } from "lucide-react"

export function ActivitiesSection() {
  const coreActivities = [
    {
      icon: Handshake,
      title: "Strategic Policy Engagement",
      description: "We foster direct, high-level dialogue with Vietnamese Ministries and government departments. Our members contribute new ideas, investment opportunities, and policy recommendations to champion Vietnam's strategic priorities and facilitate easier integration for Kiều Bào."
    },
    {
      icon: Megaphone,
      title: "Global Advocacy & Influence",
      description: "Serving as a unified voice for Kiều Bào leaders, we actively promote Vietnam's national interests on the international stage. We coordinate with Kiều Bào communities, overseas businesses, and leading Chambers of Commerce to build stronger global ties."
    },
    {
      icon: Settings,
      title: "Specialized Sector Leadership",
      description: "Our Sector Committees, chaired by expert members, dive deep into critical areas like Finance, ESG, Technology, Education, and Governance. These committees develop strategic insights and provide sector-specific recommendations vital for Vietnam's long-term development."
    }
  ]


  return (
    <section id="activities" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-3xl md:text-4xl text-foreground mb-4">
              Our <span className="text-vietnam-red">Activities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Driving impact through strategic initiatives and professional expertise across key sectors
            </p>
          </div>

          {/* Core Activities */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coreActivities.map((activity, index) => {
                const IconComponent = activity.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover-elevate">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-vietnam-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-vietnam-red" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2 text-lg">{activity.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
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