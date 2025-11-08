import { Card, CardContent } from "@/components/ui/card"
import { Building2, DollarSign, Brain } from "lucide-react"
import Image from "next/image"
import { ResolutionTooltip } from "./resolution-tooltip"

export function ValuePropositionSection() {
  const services = [
    {
      icon: Building2,
      title: "Government Expertise",
      description: "Direct access to Vietnamese ministerial and departmental networks for policy dialogue",
      bgImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&h=600&fit=crop&auto=format&q=80",
      bgColor: "from-slate-800/10 to-slate-900/10"
    },
    {
      icon: DollarSign,
      title: "Economic Development",
      description: "Foreign currency, direct investment, and business development initiatives for Vietnam",
      bgImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop&auto=format&q=80",
      bgColor: "from-slate-800/10 to-slate-900/10"
    },
    {
      icon: Brain,
      title: "Intellectual Capital",
      description: "Gray matter expertise, knowledge transfer, and innovation from global Vietnamese professionals",
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&auto=format&q=80",
      bgColor: "from-slate-800/10 to-slate-900/10"
    },
  ]

  return (
    <section id="value-proposition" className="relative py-16 md:py-20 overflow-hidden">
      {/* Professional subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 to-slate-100/30 dark:from-slate-900/30 dark:to-slate-800/30"></div>

      {/* Minimal professional pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23475569' fill-opacity='0.03'%3E%3Cpath d='M50 50l20-20v40z'/%3E%3Cpath d='M30 30l20-20v40z'/%3E%3Cpath d='M70 30l20-20v40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }}></div>

      <div className="relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-primary text-3xl md:text-5xl text-foreground mb-6 text-balance">
              Our Strategic <span className="heading-primary text-accent">Value Proposition</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Kiều Bào are recognized as a vital resource for Vietnam's national development through three key areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative glass-card border-0 text-center group hover:scale-105 transition-all duration-500 overflow-hidden h-80">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500">
                  <Image
                    src={service.bgImage}
                    alt={`${service.title} background`}
                    fill
                    className="object-cover"
                    style={{
                      filter: 'blur(1px) brightness(0.7)',
                    }}
                  />
                </div>

                {/* Professional Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} group-hover:opacity-60 transition-opacity duration-500`}></div>

                {/* Content */}
                <CardContent className="relative z-10 p-8 h-full flex flex-col justify-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-slate-100/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-slate-200/90 dark:group-hover:bg-slate-700/90 transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
                      <service.icon className="h-8 w-8 text-slate-700 dark:text-slate-300" />
                    </div>
                  </div>
                  <h3 className="font-montserrat text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service.description}</p>
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
