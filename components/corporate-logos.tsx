'use client'

import Image from 'next/image'
import { useState } from 'react'

// Using your downloaded logo files
const corporateLogos = [
  {
    name: 'Google',
    src: '/Google_2015_logo.svg.webp',
    alt: 'Google Logo'
  },
  {
    name: 'Mastercard',
    src: '/Mastercard-logo.svg.png',
    alt: 'Mastercard Logo'
  },
  {
    name: 'Amazon',
    src: '/Amazon_logo.svg.webp',
    alt: 'Amazon Logo'
  },
  {
    name: 'SAP',
    src: '/SAPLogo.png',
    alt: 'SAP Logo'
  },
  {
    name: 'Microsoft',
    src: '/microsoft-logo-microsoft-icon-transparent-free-png.webp',
    alt: 'Microsoft Logo'
  },
  {
    name: 'JPMorgan',
    src: '/jp-morgan-logo-black-and-white.png',
    alt: 'JPMorgan Logo'
  },
  {
    name: 'Bosch',
    src: '/Bosch-Logo.png',
    alt: 'Bosch Logo'
  },
  {
    name: 'Grab',
    src: '/Grab_(application)_logo.svg',
    alt: 'Grab Logo'
  },
  {
    name: 'Visa',
    src: '/Visa_Inc._logo.svg',
    alt: 'Visa Logo'
  },
  {
    name: 'UBS',
    src: '/UBS-logo.png',
    alt: 'UBS Logo'
  },
]

interface CorporateLogosProps {
  variant?: 'hero' | 'section'
  showTitle?: boolean
  maxLogos?: number
  className?: string
}

export function CorporateLogos({
  variant = 'hero',
  showTitle = true,
  maxLogos = 10,
  className = ""
}: CorporateLogosProps) {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null)
  const displayLogos = corporateLogos.slice(0, maxLogos)

  if (variant === 'hero') {
    return (
      <div className={`text-center ${className}`}>
        {showTitle && (
          <p className="text-sm text-muted-foreground mb-6">
            Members and sponsors from leading global corporations
          </p>
        )}
        <div className="space-y-3">
          {/* First row - Main logos */}
          <div className="flex justify-start items-center gap-2 w-full">
            {displayLogos.filter(logo => !['SAP', 'Bosch', 'UBS', 'Grab'].includes(logo.name)).map((logo, index) => (
              <div
                key={logo.name}
                className="flex-1 hover:scale-110 cursor-pointer relative transition-all duration-300 flex items-center justify-center h-14 max-w-[120px]"
                onMouseEnter={() => setHoveredLogo(logo.name)}
                onMouseLeave={() => setHoveredLogo(null)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={50}
                  className={`object-contain transition-all duration-300 ${
                    logo.name === 'Microsoft' || logo.name === 'Bosch'
                      ? 'max-h-40 max-w-80'
                      : logo.name === 'Grab' || logo.name === 'Visa'
                      ? 'max-h-7 max-w-20'
                      : 'max-h-10 max-w-28'
                  }`}
                  priority={index < 6}
                />
                {hoveredLogo === logo.name && (
                  <div className="absolute mt-2 bg-executive-navy text-white px-2 py-1 rounded text-xs opacity-90 pointer-events-none z-10 left-1/2 transform -translate-x-1/2">
                    {logo.name}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Second row - SAP, Bosch, UBS */}
          <div className="flex justify-start items-center gap-2 w-full">
            {displayLogos.filter(logo => ['SAP', 'Bosch', 'UBS', 'Grab'].includes(logo.name)).map((logo, index) => (
              <div
                key={logo.name}
                className="hover:scale-110 cursor-pointer relative transition-all duration-300 flex items-center justify-center h-14 w-[120px]"
                onMouseEnter={() => setHoveredLogo(logo.name)}
                onMouseLeave={() => setHoveredLogo(null)}
                style={{
                  animationDelay: `${(index + 7) * 0.1}s`,
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={50}
                  className={`object-contain transition-all duration-300 ${
                    logo.name === 'Microsoft' || logo.name === 'Bosch'
                      ? 'max-h-40 max-w-80'
                      : logo.name === 'Grab' || logo.name === 'Visa'
                      ? 'max-h-7 max-w-20'
                      : 'max-h-10 max-w-28'
                  }`}
                  priority={false}
                />
                {hoveredLogo === logo.name && (
                  <div className="absolute mt-2 bg-executive-navy text-white px-2 py-1 rounded text-xs opacity-90 pointer-events-none z-10 left-1/2 transform -translate-x-1/2">
                    {logo.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${className}`}>
      {showTitle && (
        <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
          Trusted by Industry Leaders
        </h3>
      )}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
        {displayLogos.map((logo, index) => (
          <div
            key={logo.name}
            className="flex items-center justify-center h-24 w-full"
            onMouseEnter={() => setHoveredLogo(logo.name)}
            onMouseLeave={() => setHoveredLogo(null)}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className={`object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 ${
                logo.name === 'Microsoft' || logo.name === 'Bosch'
                  ? 'h-16 w-auto'
                  : logo.name === 'Grab' || logo.name === 'Visa'
                  ? 'h-4 w-auto'
                  : 'h-6 w-auto'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// Individual logo component for specific use cases
export function LogoDisplay({
  logoName,
  size = 'medium',
  grayscale = false
}: {
  logoName: string
  size?: 'small' | 'medium' | 'large'
  grayscale?: boolean
}) {
  const logo = corporateLogos.find(l => l.name.toLowerCase() === logoName.toLowerCase())

  if (!logo) return null

  const sizeClasses = {
    small: 'h-4 text-xs px-2',
    medium: 'h-8 text-sm px-3',
    large: 'h-12 text-base px-4'
  }

  return (
    <div
      className={`${sizeClasses[size]} flex items-center justify-center rounded ${grayscale ? 'filter grayscale' : ''}`}
      style={{
        backgroundColor: logo.color + '20',
        border: `1px solid ${logo.color}40`
      }}
    >
      <span
        className="font-semibold tracking-wide"
        style={{ color: grayscale ? '#666' : logo.color }}
      >
        {logo.text}
      </span>
    </div>
  )
}