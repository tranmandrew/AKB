import { Card, CardContent } from "@/components/ui/card"
import { Flag, Users, DollarSign } from "lucide-react"
import { ResolutionTooltip } from "./resolution-tooltip"

export function StrategicApproachSection() {
  const mandatePillars = [
    {
      icon: Flag,
      title: "An Integral Part of the Nation",
      description:
        "The government officially recognizes the Kiều Bào community as \"an inseparable part of the Vietnamese national community,\" fostering a spirit of inclusion and shared identity.",
    },
    {
      icon: Users,
      title: "A Force for Great National Unity",
      description:
        "We are committed to the overarching goal of national unity (Đại Đoàn Kết Dân Tộc), encouraging all Vietnamese to look towards a common future of building a prosperous and strong Vietnam.",
    },
    {
      icon: DollarSign,
      title: "A Key Resource for Development",
      description:
        "The government identifies the Kiều Bào community as a crucial resource across three key domains: Economic Capital, Intellectual & Tech Resources, and Diplomatic \"Soft Power\" as cultural ambassadors.",
    },
  ]

  return (
    <section id="strategy" className="scroll-snap-section relative py-16 md:py-20 bg-black overflow-hidden h-screen diagonal-top-bottom flex items-center">
      {/* Dark architectural pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='45' y='0' width='10' height='100'/%3E%3Crect x='0' y='45' width='100' height='10'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }}></div>

      <div className="relative z-10">
      <div className="w-full px-16 md:px-24 lg:px-32">
        <div className="w-full">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-3xl md:text-5xl text-white mb-4 text-balance">
              Our Mandate: The Pillars of <span className="heading-primary text-accent">National Unity</span>
            </h2>
            <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
              Our association operates in alignment with the Vietnamese government's landmark <ResolutionTooltip>Resolution 36-NQ/TW</ResolutionTooltip>. This policy establishes the foundational principles for engaging the Kiều Bào community as a vital component of the nation's future.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-16 lg:gap-20 xl:gap-24 w-full">
            {mandatePillars.map((pillar, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Pillar Base */}
                <div className="flex flex-col items-center">
                  {/* Top Cap */}
                  <div className="w-20 md:w-24 h-4 md:h-6 bg-gradient-to-b from-white/30 to-white/20 rounded-t-lg mb-1 transform group-hover:scale-105 transition-transform duration-300"></div>

                  {/* Main Pillar Column */}
                  <div className="w-16 md:w-20 h-48 md:h-56 bg-gradient-to-b from-white/20 via-white/15 to-white/10 border border-white/30 rounded-sm relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-white/20 transition-all duration-300">
                    {/* Pillar Texture/Details */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <div className="absolute top-3 md:top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-10 md:w-12 h-10 md:h-12 bg-accent/30 rounded-lg flex items-center justify-center group-hover:bg-accent/50 transition-colors border border-white/20">
                        <pillar.icon className="h-5 md:h-6 w-5 md:w-6 text-white" />
                      </div>
                    </div>

                    {/* Horizontal accent lines for pillar detail */}
                    <div className="absolute top-14 md:top-16 left-2 right-2 h-px bg-white/20"></div>
                    <div className="absolute top-20 md:top-24 left-2 right-2 h-px bg-white/20"></div>
                    <div className="absolute top-26 md:top-32 left-2 right-2 h-px bg-white/20"></div>
                    <div className="absolute top-32 md:top-40 left-2 right-2 h-px bg-white/20"></div>
                    <div className="absolute top-38 md:top-48 left-2 right-2 h-px bg-white/20"></div>
                  </div>

                  {/* Bottom Base */}
                  <div className="w-24 md:w-28 h-6 md:h-8 bg-gradient-to-t from-white/30 to-white/20 rounded-b-lg mt-1 transform group-hover:scale-105 transition-transform duration-300"></div>
                </div>

                {/* Content Card below pillar */}
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-center mt-6 group-hover:scale-105 group-hover:bg-white/15 transition-all duration-300">
                  <CardContent className="px-4 py-5">
                    <h3 className="font-montserrat text-lg font-semibold text-red-500 mb-3">{pillar.title}</h3>
                    <p className="text-white/80 leading-relaxed text-xs">{pillar.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
