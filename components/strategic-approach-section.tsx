import { Card, CardContent } from "@/components/ui/card"
import { Building2, Globe2, MessageCircle } from "lucide-react"

export function StrategicApproachSection() {
  const pillars = [
    {
      icon: Building2,
      title: "Government Engagement",
      description:
        "Direct engagement with Vietnam's Ministry levels, advocating for Kiều Bào integration policies and supporting national strategic priorities",
    },
    {
      icon: Globe2,
      title: "International Business Bridge",
      description:
        "Partnerships with leading Chambers of Commerce (Beluxcham, EuroCham, SingCham) connecting international business with local opportunities",
    },
    {
      icon: MessageCircle,
      title: "Cultural & Strategic Dialogue",
      description:
        "Active participation in Ministry of Foreign Affairs activities, national celebrations, and strategic dialogue with governments in Ho Chi Minh City, Hanoi, Da Nang",
    },
  ]

  return (
    <section id="strategy" className="relative py-16 md:py-20 bg-black overflow-hidden">
      {/* Dark architectural pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='45' y='0' width='10' height='100'/%3E%3Crect x='0' y='45' width='100' height='10'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }}></div>

      <div className="relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-primary text-3xl md:text-5xl text-white mb-6 text-balance">
              Three Pillars of <span className="heading-primary text-accent">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Pillar Base */}
                <div className="flex flex-col items-center">
                  {/* Top Cap */}
                  <div className="w-20 md:w-24 h-4 md:h-6 bg-gradient-to-b from-white/30 to-white/20 rounded-t-lg mb-1 transform group-hover:scale-105 transition-transform duration-300"></div>

                  {/* Main Pillar Column */}
                  <div className="w-16 md:w-20 h-64 md:h-80 bg-gradient-to-b from-white/20 via-white/15 to-white/10 border border-white/30 rounded-sm relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-white/20 transition-all duration-300">
                    {/* Pillar Texture/Details */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <div className="absolute top-3 md:top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-10 md:w-12 h-10 md:h-12 bg-accent/30 rounded-lg flex items-center justify-center group-hover:bg-accent/50 transition-colors border border-white/20">
                        <pillar.icon className="h-5 md:h-6 w-5 md:w-6 text-white" />
                      </div>
                    </div>

                    {/* Horizontal accent lines for pillar detail */}
                    <div className="absolute top-16 md:top-20 left-2 right-2 h-px bg-white/20"></div>
                    <div className="absolute top-24 md:top-32 left-2 right-2 h-px bg-white/20"></div>
                    <div className="absolute top-32 md:top-44 left-2 right-2 h-px bg-white/20"></div>
                    <div className="absolute top-40 md:top-56 left-2 right-2 h-px bg-white/20"></div>
                    <div className="absolute top-48 md:top-68 left-2 right-2 h-px bg-white/20"></div>
                  </div>

                  {/* Bottom Base */}
                  <div className="w-24 md:w-28 h-6 md:h-8 bg-gradient-to-t from-white/30 to-white/20 rounded-b-lg mt-1 transform group-hover:scale-105 transition-transform duration-300"></div>
                </div>

                {/* Content Card below pillar */}
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-center mt-8 group-hover:scale-105 group-hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-montserrat text-xl font-semibold text-red-500 mb-4">{pillar.title}</h3>
                    <p className="text-white/80 leading-relaxed text-sm">{pillar.description}</p>
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
