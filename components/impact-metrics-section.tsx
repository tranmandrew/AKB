'use client'

import { useEffect, useRef, useState } from "react"
import { Users, Globe, Building2, TrendingUp, Handshake, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface MetricProps {
  icon: React.ReactNode
  value: number
  suffix?: string
  label: string
  color: string
  delay?: number
}

function AnimatedCounter({ value, suffix = "", delay = 0 }: { value: number; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      if (currentStep >= steps) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(increment * currentStep))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, value, delay])

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

function MetricCard({ icon, value, suffix, label, color, delay }: MetricProps) {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-opacity-50 bg-white">
      <CardContent className="p-8 text-center">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110 ${color}`}>
          {icon}
        </div>
        <div className="text-foreground mb-2">
          <AnimatedCounter value={value} suffix={suffix} delay={delay} />
        </div>
        <p className="text-muted-foreground font-medium text-lg">
          {label}
        </p>
      </CardContent>
    </Card>
  )
}

export function ImpactMetricsSection() {
  const metrics: MetricProps[] = [
    {
      icon: <Users className="w-8 h-8 text-vietnam-red" />,
      value: 100,
      suffix: "+",
      label: "Founding Members",
      color: "bg-vietnam-red/10",
      delay: 0
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      value: 10,
      suffix: "+",
      label: "Global Hubs",
      color: "bg-blue-50",
      delay: 200
    },
    {
      icon: <Building2 className="w-8 h-8 text-golden-yellow" />,
      value: 3,
      suffix: "",
      label: "Chamber Partnerships",
      color: "bg-golden-yellow/20",
      delay: 400
    },
    {
      icon: <Handshake className="w-8 h-8 text-jade-green" />,
      value: 5,
      suffix: "+",
      label: "Government Dialogues",
      color: "bg-jade-green/10",
      delay: 600
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      value: 20,
      suffix: "+",
      label: "Active Initiatives",
      color: "bg-purple-50",
      delay: 800
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      value: 2024,
      suffix: "",
      label: "Founded",
      color: "bg-orange-50",
      delay: 1000
    }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="heading-primary text-4xl md:text-5xl mb-4">
              Building Vietnam's <span className="text-vietnam-red">Strategic Network</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From Singapore to Silicon Valley, our founding members bring world-class expertise to strengthen Vietnam's economic sovereignty and global integration.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          {/* Key Partnerships Highlight */}
          <div className="bg-gradient-to-r from-vietnam-red/5 via-golden-yellow/5 to-jade-green/5 rounded-2xl p-8 md:p-12 border border-slate-200">
            <h3 className="text-center text-xl font-bold text-foreground mb-8">Recognized Strategic Partners</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-vietnam-red/10 rounded-full mb-3">
                  <Handshake className="w-6 h-6 text-vietnam-red" />
                </div>
                <p className="font-semibold text-foreground mb-1">EuroCham Vietnam</p>
                <p className="text-sm text-muted-foreground">
                  Official Chamber Partner
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-golden-yellow/10 rounded-full mb-3">
                  <Handshake className="w-6 h-6 text-golden-yellow" />
                </div>
                <p className="font-semibold text-foreground mb-1">BeluxCham Vietnam</p>
                <p className="text-sm text-muted-foreground">
                  Strategic Alliance Partner
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-jade-green/10 rounded-full mb-3">
                  <Handshake className="w-6 h-6 text-jade-green" />
                </div>
                <p className="font-semibold text-foreground mb-1">SingCham Vietnam</p>
                <p className="text-sm text-muted-foreground">
                  Collaboration Partner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
