'use client'

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Users } from "lucide-react"

interface RegionData {
  name: string
  members: number
  coordinates: { x: number; y: number }
  color: string
  cities: string[]
}

const regions: RegionData[] = [
  {
    name: "North America",
    members: 35,
    coordinates: { x: 20, y: 30 },
    color: "#EB2300",
    cities: ["Los Angeles", "San Francisco", "New York", "Toronto"]
  },
  {
    name: "Western Europe",
    members: 28,
    coordinates: { x: 48, y: 25 },
    color: "#EAFF00",
    cities: ["London", "Paris", "Amsterdam", "Brussels"]
  },
  {
    name: "Eastern Europe",
    members: 12,
    coordinates: { x: 58, y: 28 },
    color: "#00D9FF",
    cities: ["Prague", "Bucharest", "Warsaw", "Moscow"]
  },
  {
    name: "Southeast Asia",
    members: 45,
    coordinates: { x: 75, y: 52 },
    color: "#00FF88",
    cities: ["Singapore", "Ho Chi Minh City", "Hanoi", "Bangkok"]
  },
  {
    name: "East Asia",
    members: 18,
    coordinates: { x: 82, y: 35 },
    color: "#FF6B00",
    cities: ["Tokyo", "Seoul", "Shanghai", "Hong Kong"]
  },
  {
    name: "Middle East",
    members: 8,
    coordinates: { x: 60, y: 42 },
    color: "#9D00FF",
    cities: ["Dubai", "Tel Aviv", "Riyadh"]
  }
]

export function NetworkMapSection() {
  const [activeRegion, setActiveRegion] = useState<RegionData | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const totalMembers = regions.reduce((sum, region) => sum + region.members, 0)

  return (
    <section ref={sectionRef} className="relative py-20 bg-slate-900 text-white overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900/50 to-slate-900" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="heading-primary text-4xl md:text-5xl mb-4 text-white">
              Global <span className="text-vietnam-red">Network</span> Distribution
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Our members span across continents, creating a truly global network of Vietnamese excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Visualization */}
            <div className="lg:col-span-2">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="relative w-full aspect-[16/9] bg-slate-900/50 rounded-lg overflow-hidden">
                    {/* World Map Simplified SVG */}
                    <svg
                      viewBox="0 0 100 60"
                      className="w-full h-full"
                      style={{ filter: 'drop-shadow(0 0 20px rgba(235, 35, 0, 0.3))' }}
                    >
                      {/* Simplified world map paths */}
                      <path
                        d="M 10,25 L 35,22 L 38,28 L 32,35 L 25,38 L 18,35 Z"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="0.5"
                      />
                      <path
                        d="M 42,20 L 62,18 L 65,25 L 60,32 L 52,35 L 45,30 Z"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="0.5"
                      />
                      <path
                        d="M 70,30 L 85,28 L 88,38 L 82,48 L 75,50 L 68,45 Z"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="0.5"
                      />

                      {/* Connection Lines */}
                      {isVisible && regions.map((region, index) => (
                        <g key={`connection-${index}`}>
                          {/* Pulsing circles for each region */}
                          <circle
                            cx={region.coordinates.x}
                            cy={region.coordinates.y}
                            r="0.5"
                            fill={region.color}
                            className="animate-pulse"
                            style={{ animationDelay: `${index * 0.2}s` }}
                          />
                          <circle
                            cx={region.coordinates.x}
                            cy={region.coordinates.y}
                            r="1.5"
                            fill="none"
                            stroke={region.color}
                            strokeWidth="0.2"
                            className="animate-ping"
                            style={{ animationDelay: `${index * 0.2}s` }}
                          />
                        </g>
                      ))}

                      {/* Interactive Region Markers */}
                      {regions.map((region, index) => (
                        <g
                          key={index}
                          className="cursor-pointer transition-transform hover:scale-150"
                          onMouseEnter={() => setActiveRegion(region)}
                          onMouseLeave={() => setActiveRegion(null)}
                          style={{
                            transformOrigin: `${region.coordinates.x}% ${region.coordinates.y}%`,
                            opacity: isVisible ? 1 : 0,
                            transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.2s ease`
                          }}
                        >
                          {/* Marker Pin */}
                          <circle
                            cx={region.coordinates.x}
                            cy={region.coordinates.y}
                            r="2"
                            fill={region.color}
                            stroke="white"
                            strokeWidth="0.3"
                          />

                          {/* Member Count Badge */}
                          <circle
                            cx={region.coordinates.x + 3}
                            cy={region.coordinates.y - 3}
                            r="1.8"
                            fill="white"
                          />
                          <text
                            x={region.coordinates.x + 3}
                            y={region.coordinates.y - 2.5}
                            fontSize="1.5"
                            fontWeight="bold"
                            fill={region.color}
                            textAnchor="middle"
                          >
                            {region.members}
                          </text>
                        </g>
                      ))}
                    </svg>

                    {/* Active Region Tooltip */}
                    {activeRegion && (
                      <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-sm text-slate-900 p-4 rounded-lg shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: activeRegion.color }}
                          />
                          <h3 className="font-bold text-lg">{activeRegion.name}</h3>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                          <Users className="w-4 h-4" />
                          <span>{activeRegion.members} Members</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {activeRegion.cities.map((city, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-slate-100 px-2 py-1 rounded"
                            >
                              {city}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Legend */}
                  <div className="mt-6 flex items-center justify-center gap-4 flex-wrap text-sm text-white/80">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-vietnam-red" />
                      <span>Regional Hub</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-xs font-bold text-slate-900">
                        #
                      </div>
                      <span>Member Count</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Regional Stats */}
            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-vietnam-red to-vietnam-red/80 border-0 text-white">
                <CardContent className="p-6 text-center">
                  <p className="text-5xl font-bold mb-2">{totalMembers}+</p>
                  <p className="text-white/90 font-medium">Total Members Worldwide</p>
                </CardContent>
              </Card>

              {regions.map((region, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors cursor-pointer"
                  onMouseEnter={() => setActiveRegion(region)}
                  onMouseLeave={() => setActiveRegion(null)}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.5s ease ${index * 0.1}s`
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: region.color }}
                        />
                        <div>
                          <p className="font-semibold text-white text-sm">{region.name}</p>
                          <p className="text-xs text-white/60">{region.cities[0]} & more</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-white">{region.members}</p>
                        <p className="text-xs text-white/60">members</p>
                      </div>
                    </div>
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
