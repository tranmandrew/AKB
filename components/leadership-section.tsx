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
      image: "/professional-headshot.png",
      description: "Distinguished professional contributing expertise to the Association's mission of connecting Vietnamese excellence globally for Vietnam's prosperity."
    },
    {
      name: "Như",
      role: "Malaysian Founding Member",
      image: "/professional-headshot.png",
      description: "Malaysian Vietnamese community leader bringing valuable insights from Southeast Asian markets and fostering Vietnam-Malaysia business partnerships for regional development."
    },
    {
      name: "Alex",
      role: "French Founding Member",
      image: "/professional-headshot.png",
      description: "French Vietnamese professional with extensive European market experience, facilitating Vietnam-EU business relations and contributing to cross-continental strategic initiatives."
    },
    {
      name: "Corina",
      role: "Czech Founding Member",
      image: "/professional-headshot.png",
      description: "Czech Vietnamese leader with deep Central European expertise, bridging Vietnam and EU markets while advancing collaborative opportunities in emerging European economies."
    },
  ]

  return (
    <section id="leadership" className="py-24 bg-muted/30">
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
    </section>
  )
}
