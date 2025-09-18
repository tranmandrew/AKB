'use client'

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Globe, Users, DollarSign } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function OpportunitySection() {
  const [animatedValues, setAnimatedValues] = useState<{ [key: number]: number }>({})
  const [hasAnimated, setHasAnimated] = useState<{ [key: number]: boolean }>({})
  const sectionRef = useRef<HTMLDivElement>(null)

  const stats = [
    {
      icon: TrendingUp,
      value: "7.5%",
      targetValue: 7.5,
      label: "GDP Growth Rate",
      description: "Vietnam's robust economic expansion",
      suffix: "%"
    },
    {
      icon: Globe,
      value: "5M+",
      targetValue: 5,
      label: "Global Vietnamese",
      description: "Professionals worldwide",
      suffix: "M+"
    },
    {
      icon: DollarSign,
      value: "$17B",
      targetValue: 17,
      label: "Annual Remittances",
      description: "Economic contribution to Vietnam",
      prefix: "$",
      suffix: "B"
    },
    {
      icon: Users,
      value: "13",
      targetValue: 13,
      label: "International Hubs",
      description: "Global network of Vietnamese professionals",
      suffix: ""
    },
  ]

  const animateValue = (index: number, targetValue: number) => {
    if (hasAnimated[index]) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepValue = targetValue / steps
    let currentValue = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      currentValue = Math.min(stepValue * step, targetValue)

      setAnimatedValues(prev => ({
        ...prev,
        [index]: currentValue
      }))

      if (step >= steps) {
        clearInterval(timer)
        setHasAnimated(prev => ({
          ...prev,
          [index]: true
        }))
      }
    }, duration / steps)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.forEach((_, index) => {
              setTimeout(() => {
                animateValue(index, stats[index].targetValue)
              }, index * 200) // Stagger the animations
            })
          }
        })
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const formatValue = (index: number, stat: any) => {
    const currentValue = animatedValues[index] || 0
    const prefix = stat.prefix || ""
    const suffix = stat.suffix || ""

    if (suffix === "%") {
      return `${prefix}${currentValue.toFixed(1)}${suffix}`
    } else if (suffix.includes("M") || suffix.includes("B")) {
      return `${prefix}${Math.round(currentValue)}${suffix}`
    } else {
      return `${prefix}${Math.round(currentValue)}${suffix}`
    }
  }

  return (
    <section className="py-24 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6 text-balance">
            Vietnam's Moment is <span className="font-medium text-accent">Now</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Vietnam's rapid economic growth and global integration creates unprecedented opportunities for international
            expertise and investment. Government Resolution 36-NQ/TW recognizes Kiều Bào as an "inseparable part of
            Vietnamese national community."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card border-0 text-center hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div className="text-3xl font-light text-foreground mb-2 transition-all duration-300">
                  {hasAnimated[index] ? stat.value : formatValue(index, stat)}
                </div>
                <div className="text-sm font-medium text-foreground mb-2">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
