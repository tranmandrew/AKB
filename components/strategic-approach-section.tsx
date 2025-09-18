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
    <section id="mission" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6 text-balance">
              Three Pillars of <span className="font-medium text-accent">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card
                key={index}
                className="glass-card border-0 text-center group hover:scale-105 transition-transform duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <pillar.icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
