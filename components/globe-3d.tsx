'use client'

import { useEffect, useState } from 'react'

// Global cities where Kieu Bao members are located
const memberCities = [
  { name: 'Ho Chi Minh City', country: 'Vietnam', lat: 10.8231, lng: 106.6297, members: 150 },
  { name: 'Hanoi', country: 'Vietnam', lat: 21.0285, lng: 105.8542, members: 120 },
  { name: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198, members: 85 },
  { name: 'Toronto', country: 'Canada', lat: 43.6532, lng: -79.3832, members: 65 },
  { name: 'San Francisco', country: 'USA', lat: 37.7749, lng: -122.4194, members: 78 },
  { name: 'New York', country: 'USA', lat: 40.7128, lng: -74.0060, members: 92 },
  { name: 'London', country: 'UK', lat: 51.5074, lng: -0.1278, members: 56 },
  { name: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522, members: 43 },
  { name: 'Berlin', country: 'Germany', lat: 52.5200, lng: 13.4050, members: 38 },
  { name: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503, members: 47 },
]

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-golden-yellow rounded-full opacity-30 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  )
}

// International hub positions for better visual spread
const internationalHubs = [
  { name: 'Singapore', x: 70, y: 60, members: 85 },
  { name: 'Canada', x: 20, y: 25, members: 65 },
  { name: 'United States', x: 15, y: 45, members: 170 },
  { name: 'United Kingdom', x: 45, y: 20, members: 56 },
  { name: 'France', x: 48, y: 25, members: 43 },
  { name: 'Germany', x: 52, y: 28, members: 38 },
  { name: 'Russia', x: 65, y: 15, members: 25 },
  { name: 'Czech Republic', x: 50, y: 30, members: 20 },
  { name: 'Romania', x: 55, y: 35, members: 18 },
  { name: 'Japan', x: 85, y: 35, members: 47 },
  { name: 'South Korea', x: 82, y: 40, members: 35 },
  { name: 'Australia', x: 75, y: 80, members: 42 },
  { name: 'Netherlands', x: 46, y: 22, members: 28 }
];

// Enhanced Network connections visualization
function NetworkConnections() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
          </linearGradient>
          <filter id="connectionGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Animated connection lines from Vietnam to international hubs */}
        {internationalHubs.map((hub, i) => (
          <g key={hub.name}>
            <line
              x1="50" // Vietnam center
              y1="50"
              x2={hub.x}
              y2={hub.y}
              stroke="url(#connectionGradient)"
              strokeWidth="0.3"
              opacity="0.6"
              filter="url(#connectionGlow)"
              className="animate-pulse"
              style={{
                animationDelay: `${i * 0.3}s`,
                animationDuration: '3s'
              }}
            />

            {/* Hub nodes */}
            <circle
              cx={hub.x}
              cy={hub.y}
              r="1"
              fill="#3b82f6"
              className="animate-pulse"
              style={{
                animationDelay: `${i * 0.3}s`,
              }}
            />

            {/* Data flow particles */}
            <circle
              cx={hub.x}
              cy={hub.y}
              r="0.5"
              fill="#ffffff"
              opacity="0.8"
              className="animate-ping"
              style={{
                animationDelay: `${i * 0.5 + 1}s`,
                animationDuration: '2s'
              }}
            />
          </g>
        ))}

        {/* Central Vietnam pulse */}
        <circle
          cx="50"
          cy="50"
          r="3"
          fill="#dc2626"
          opacity="0.8"
          className="animate-ping"
        />
        <circle
          cx="50"
          cy="50"
          r="1.5"
          fill="#ffffff"
        />
      </svg>
    </div>
  )
}

// Vietnam map outline SVG with enhanced visibility
function VietnamMapSVG() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg width="200" height="280" viewBox="0 0 200 280" className="text-vietnam-red opacity-30">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          d="M100 30 C110 40, 120 60, 115 80 L120 100 C125 120, 120 140, 115 160 L110 180 C110 200, 105 220, 100 240 L95 260 C90 275, 85 270, 80 280 L70 280 C65 270, 60 260, 65 240 L70 220 C75 200, 80 180, 85 160 L90 140 C95 120, 90 100, 85 80 L80 60 C75 40, 85 30, 100 30 Z"
          fill="currentColor"
          stroke="rgba(220, 38, 38, 0.8)"
          strokeWidth="2"
          filter="url(#glow)"
          className="animate-pulse-slow"
        />
        {/* Ho Chi Minh City marker */}
        <circle cx="100" cy="200" r="4" fill="#dc2626" className="animate-ping" />
        <circle cx="100" cy="200" r="2" fill="#ffffff" />
        {/* Hanoi marker */}
        <circle cx="100" cy="80" r="4" fill="#dc2626" className="animate-ping" style={{animationDelay: '1s'}} />
        <circle cx="100" cy="80" r="2" fill="#ffffff" />
      </svg>
    </div>
  )
}

// Main exported component - Clean background
export function Globe3D({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={`absolute inset-0 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>
    )
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
    </div>
  )
}