import { Card, CardContent } from "@/components/ui/card"
import { Users, Megaphone, TrendingUp } from "lucide-react"

export function ValuePropositionSection() {
  const services = [
    {
      icon: Users,
      title: "Government Expertise",
      description: "Direct access to Vietnamese ministerial and departmental networks for policy dialogue",
    },
    {
      icon: Megaphone,
      title: "Economic Development",
      description: "Foreign currency, direct investment, and business development initiatives for Vietnam",
    },
    {
      icon: TrendingUp,
      title: "Intellectual Capital",
      description: "Gray matter expertise, knowledge transfer, and innovation from global Vietnamese professionals",
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6 text-balance">
              Our Strategic <span className="font-medium text-accent">Value Proposition</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              As recognized by Resolution 36-NQ/TW, Kiều Bào are a vital resource for Vietnam's national development through three key areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass-card border-0 text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
