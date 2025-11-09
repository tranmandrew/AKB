'use client'

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Globe, Users, DollarSign } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { ResolutionTooltip } from "./resolution-tooltip"

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
      value: "16+",
      targetValue: 16,
      label: "Countries",
      description: "Global network of Vietnamese professionals",
      suffix: "+"
    },
  ]

  const animateValue = (index: number, targetValue: number) => {
    if (hasAnimated[index]) return

    const duration = 1500 // Reduced duration for mobile
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smoother animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentValue = targetValue * easeOutCubic

      setAnimatedValues(prev => ({
        ...prev,
        [index]: currentValue
      }))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        // Ensure final value is exact
        setAnimatedValues(prev => ({
          ...prev,
          [index]: targetValue
        }))
        setHasAnimated(prev => ({
          ...prev,
          [index]: true
        }))
      }
    }

    requestAnimationFrame(animate)
  }

  useEffect(() => {
    let hasTriggered = false

    const triggerAnimation = () => {
      if (hasTriggered) return
      hasTriggered = true

      stats.forEach((_, index) => {
        setTimeout(() => {
          animateValue(index, stats[index].targetValue)
        }, index * 200) // Stagger the animations
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a small delay to ensure proper rendering on mobile
            setTimeout(() => {
              triggerAnimation()
            }, 100)
          }
        })
      },
      {
        threshold: [0.1, 0.25, 0.5], // Multiple thresholds for better mobile detection
        rootMargin: '0px 0px -100px 0px' // Trigger earlier on mobile
      }
    )

    // Additional scroll listener for mobile fallback
    const handleScroll = () => {
      if (!sectionRef.current || hasTriggered) return

      const rect = sectionRef.current.getBoundingClientRect()
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0

      if (isVisible) {
        triggerAnimation()
      }
    }

    // Fallback: start animation after a delay if intersection observer fails
    const fallbackTimer = setTimeout(() => {
      if (!hasTriggered) {
        triggerAnimation()
      }
    }, 3000)

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Add scroll listener for mobile support
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('touchmove', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('touchmove', handleScroll)
      clearTimeout(fallbackTimer)
    }
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
    <section className="relative py-24 bg-muted/30 overflow-hidden" ref={sectionRef}>
      {/* Vibrant Vietnam-inspired gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-yellow-50 to-red-50 dark:from-emerald-950/20 dark:via-yellow-950/20 dark:to-red-950/20"></div>

      {/* Economic growth pattern overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.08'%3E%3Cpath d='M20 0l20 20-20 20L0 20z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="heading-primary text-3xl md:text-5xl text-foreground mb-6 text-balance">
            <span className="heading-primary text-accent">Independent Vietnam's</span> Moment
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Vietnam's rapid economic growth and global integration creates unprecedented opportunities for international
            expertise and investment. Kiều Bào are recognized as an "inseparable part of
            Vietnamese national community."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card border-0 text-center hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 lg:p-8">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div className="font-montserrat text-2xl lg:text-3xl font-semibold text-foreground mb-2 transition-all duration-300">
                  {hasAnimated[index] ? stat.value : formatValue(index, stat)}
                </div>
                <div className="font-montserrat text-sm font-medium text-foreground mb-2">{stat.label}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
