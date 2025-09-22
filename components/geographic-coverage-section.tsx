"use client"

import { useState } from 'react'
import Image from 'next/image'

interface CountryTooltip {
  name: string
  x: number // percentage from left
  y: number // percentage from top
}

// Coordinates for the specified red countries based on the map image
const redCountries: CountryTooltip[] = [
  { name: "Singapore", x: 72, y: 71 },
  { name: "Canada", x: 23, y: 43 },
  { name: "United States", x: 26, y: 52 },
  { name: "France", x: 49, y: 49 },
  { name: "United Kingdom", x: 48, y: 45 },
  { name: "Germany", x: 51, y: 46 },
  { name: "Russia", x: 70, y: 39 },
  { name: "Czech Republic", x: 52, y: 48 },
  { name: "Romania", x: 54, y: 50 },
  { name: "Japan", x: 80, y: 54 },
  { name: "Korea", x: 77.5, y: 55 },
  { name: "Switzerland", x: 50, y: 49 },
  { name: "China", x: 72, y: 56 },
  { name: "Thailand", x: 71.5, y: 65 },
  { name: "Australia", x: 79, y: 82 },
  { name: "New Zealand", x: 88, y: 91 }
]

// Vietnam location (home country) - gets a special star marker
const vietnamLocation = { name: "Vietnam", x: 72.5, y: 62 }

interface DataCard {
  title: string
  value: string
  description: string
  icon: string
}

const dataCards: DataCard[] = [
  {
    title: "GDP Growth Rate",
    value: "7.5%",
    description: "Vietnam's robust economic expansion",
    icon: ""
  },
  {
    title: "Global Vietnamese",
    value: "5M+",
    description: "Professionals worldwide",
    icon: ""
  },
  {
    title: "Annual Remittances",
    value: "$17B",
    description: "Economic contribution to Vietnam",
    icon: ""
  },
  {
    title: "International Hubs",
    value: "16",
    description: "Global network of Vietnamese professionals",
    icon: ""
  }
]

export function GeographicCoverageSection() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  return (
    <section id="geographic-coverage" className="scroll-snap-section py-12 md:py-16 bg-gray-50 min-h-screen diagonal-bottom">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="heading-primary text-4xl text-gray-900 mb-3">
            Geographic Coverage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting Vietnamese professionals worldwide through our extensive network of Kiều Bào communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* Map Section - 3/4 width */}
          <div className="lg:col-span-3">
            <div className="relative">
              <div className="relative inline-block w-full">
                <Image
                  src="/MapChart_Map.png"
                  alt="World Map showing Kiều Bào presence"
                  width={2200}
                  height={1100}
                  className="w-full h-auto rounded-lg"
                />

                {/* Pulsing tooltips for red countries */}
                {redCountries.map((country, index) => (
                  <div
                    key={country.name}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${country.x}%`,
                      top: `${country.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onMouseEnter={() => setHoveredCountry(country.name)}
                    onMouseLeave={() => setHoveredCountry(null)}
                  >
                    {/* Pulsing dot */}
                    <div className="relative">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute"></div>
                      <div className="w-4 h-4 bg-red-600 rounded-full relative border-2 border-white shadow-lg"></div>
                    </div>

                    {/* Tooltip */}
                    {hoveredCountry === country.name && (
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                          {country.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Vietnam star marker */}
                <div
                  className="absolute cursor-pointer"
                  style={{
                    left: `${vietnamLocation.x}%`,
                    top: `${vietnamLocation.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onMouseEnter={() => setHoveredCountry(vietnamLocation.name)}
                  onMouseLeave={() => setHoveredCountry(null)}
                >
                  {/* Gold star with pulsing effect */}
                  <div className="relative">
                    <div className="w-3 h-3 text-yellow-400 animate-ping absolute flex items-center justify-center">
                      ⭐
                    </div>
                    <div className="w-3 h-3 text-yellow-500 relative flex items-center justify-center text-sm border border-white rounded-full bg-white shadow-lg">
                      ⭐
                    </div>
                  </div>

                  {/* Tooltip */}
                  {hoveredCountry === vietnamLocation.name && (
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-yellow-600 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                        {vietnamLocation.name} (Home)
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-yellow-600"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Country list under the map */}
              <div className="mt-4 text-center">
                <p className="text-xs text-black">
                  Vietnam, Singapore, Canada, the United States, France, the UK, Germany, Russia, Czech Republic, Romania, Japan, Korea, Switzerland, China, Thailand, Australia, and New Zealand
                </p>
              </div>
            </div>
          </div>

          {/* Vietnam Info and Data Cards Section - 1/4 width */}
          <div className="space-y-4">
            <h3 className="font-montserrat text-xl font-bold text-gray-900 mb-4">
              Vietnam's Moment is Now
            </h3>

            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Vietnam's rapid economic growth and global integration creates unprecedented opportunities for international expertise and investment. Government Resolution 36-NQ/TW recognizes Kiều Bào as an "inseparable part of Vietnamese national community."
            </p>

            {dataCards.map((card, index) => (
              <div
                key={card.title}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-rotate-1 hover:scale-105"
              >
                <div className="text-center">
                  <div className="font-montserrat text-2xl font-bold text-vietnam-red mb-1">
                    {card.value}
                  </div>
                  <h4 className="font-montserrat text-base font-semibold text-gray-900 mb-1">
                    {card.title}
                  </h4>
                  <p className="text-gray-600 text-xs">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}