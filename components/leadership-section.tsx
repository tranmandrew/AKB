import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"
import Image from "next/image"

export function LeadershipSection() {
  const leaders = [
    {
      name: "Kimble Ngo",
      role: "Canadian Founding Member",
      image: "/Kimble.jpg",
      description: "Prominent Canadian Vietnamese leader (Kiều Bào) with fintech and ESG expertise from UBS and Standard Chartered Ventures. Regularly advises government bodies and corporates across Vietnam and SEA, bridging Canadian-Vietnamese business relations for strategic development."
    },
    {
      name: "Tam Nguyen",
      role: "Singaporean Founding Member",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      description: "Distinguished professional contributing expertise to the Association's mission of connecting Vietnamese excellence globally for Vietnam's prosperity."
    },
    {
      name: "Như",
      role: "Malaysian Founding Member",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      description: "Malaysian Vietnamese community leader bringing valuable insights from Southeast Asian markets and fostering Vietnam-Malaysia business partnerships for regional development."
    },
    {
      name: "Alex",
      role: "French Founding Member",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      description: "French Vietnamese professional with extensive European market experience, facilitating Vietnam-EU business relations and contributing to cross-continental strategic initiatives."
    },
    {
      name: "Corina",
      role: "Czech Founding Member",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      description: "Czech Vietnamese leader with deep Central European expertise, bridging Vietnam and EU markets while advancing collaborative opportunities in emerging European economies."
    },
  ]

  return (
    <section id="leadership" className="relative py-24 bg-muted/30 overflow-hidden">
      {/* Professional networking pattern background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-slate-50/50 to-emerald-50/50 dark:from-blue-950/10 dark:via-slate-950/10 dark:to-emerald-950/10"></div>

      {/* Subtle professional pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3Ccircle cx='10' cy='10' r='3'/%3E%3Ccircle cx='50' cy='10' r='3'/%3E%3Ccircle cx='10' cy='50' r='3'/%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6 text-balance">
              Founding <span className="font-medium text-accent">Board Members</span>
            </h2>
          </div>

          <div className="space-y-12 max-w-7xl mx-auto">
            {/* First row - 2 members */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-center">
              {leaders.slice(0, 2).map((leader, index) => (
                <Card key={index} className="glass-card border-0 text-center max-w-md mx-auto w-full">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                      <Image
                        src={leader.image}
                        alt={`${leader.name} profile picture`}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-2">{leader.name}</h3>
                    <p className="text-vietnam-red text-sm font-medium mb-3">{leader.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{leader.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Second row - 3 members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-center">
              {leaders.slice(2).map((leader, index) => (
                <Card key={index + 2} className="glass-card border-0 text-center max-w-sm mx-auto w-full">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                      <Image
                        src={leader.image}
                        alt={`${leader.name} profile picture`}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-2">{leader.name}</h3>
                    <p className="text-vietnam-red text-sm font-medium mb-3">{leader.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{leader.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  )
}
