'use client'

import { Handshake, Megaphone, Settings, Flag, Target, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ActivitiesTeaserSection() {
  const topActivities = [
    {
      icon: Handshake,
      title: "Strategic Policy Engagement"
    },
    {
      icon: Megaphone,
      title: "Global Advocacy & Influence"
    },
    {
      icon: Settings,
      title: "Specialized Sector Leadership"
    }
  ]

  return (
    <section id="activities" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-3xl md:text-4xl text-foreground mb-4">
              Our <span className="text-vietnam-red">Core Activities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Six strategic activities driving Vietnam's development through global professional expertise
            </p>
          </div>

          {/* Top 3 Activities Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {topActivities.map((activity, index) => {
              const IconComponent = activity.icon
              // Use handshake image for first activity (Strategic Policy Engagement)
              if (index === 0) {
                return (
                  <div key={index} className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover-elevate">
                    <div className="relative h-48">
                      <Image
                        src="/business-agreement-handshake-symbolizing-cooperation-trust-vietnam-close-up-view-two-hands-engaged-firm-context-367137384.webp"
                        alt="Business handshake symbolizing cooperation"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h4 className="font-semibold text-white text-base">{activity.title}</h4>
                    </div>
                  </div>
                )
              }

              // Use specific images for other activities
              let imageSrc = "";
              if (index === 1) { // Global Advocacy & Influence
                imageSrc = "/Government-of-Vietnam-banner.jpg";
              } else if (index === 2) { // Specialized Sector Leadership
                imageSrc = "/Boardroom.jpeg";
              }

              if (imageSrc) {
                return (
                  <div key={index} className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover-elevate">
                    <div className="relative h-48">
                      <Image
                        src={imageSrc}
                        alt={activity.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h4 className="font-semibold text-white text-base">{activity.title}</h4>
                    </div>
                  </div>
                )
              }

              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover-elevate">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-vietnam-red/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-vietnam-red" />
                    </div>
                    <h4 className="font-semibold text-foreground text-base">{activity.title}</h4>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-8">
              Advancing Vietnamese National Interests, Contributing to National Development Priorities, and Amplifying the Kiều Bào Leadership Voice
            </p>

            <a href="/activities">
              <Button
                size="lg"
                className="font-montserrat bg-vietnam-red hover:bg-vietnam-red/90 text-white px-8 py-6 text-lg hover-elevate"
              >
                View All Six Activities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}