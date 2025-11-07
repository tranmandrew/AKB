import React from 'react'

interface FlagProps {
  countryCode: string
  className?: string
  title?: string
}

export function Flag({ countryCode, className = 'w-6 h-4', title }: FlagProps) {
  const code = countryCode.toUpperCase()

  // SVG flag data for each country
  const flags: Record<string, JSX.Element> = {
    CA: (
      <svg viewBox="0 0 36 24" className={className} title={title}>
        <rect width="36" height="24" fill="#D52B1E"/>
        <rect x="9" y="0" width="18" height="24" fill="#FFFFFF"/>
        <path d="M18 6l1.5 4.5h4.5l-3.5 2.5 1.5 4.5-3.5-2.5-3.5 2.5 1.5-4.5-3.5-2.5h4.5z" fill="#D52B1E"/>
      </svg>
    ),
    US: (
      <svg viewBox="0 0 36 24" className={className} title={title}>
        <rect width="36" height="24" fill="#B22234"/>
        <path d="M0 3h36M0 6h36M0 9h36M0 12h36M0 15h36M0 18h36M0 21h36" stroke="#FFFFFF" strokeWidth="1.8"/>
        <rect width="14.4" height="12.8" fill="#3C3B6E"/>
        <g fill="#FFFFFF">
          <circle cx="2.4" cy="2" r="0.6"/>
          <circle cx="4.8" cy="2" r="0.6"/>
          <circle cx="7.2" cy="2" r="0.6"/>
          <circle cx="9.6" cy="2" r="0.6"/>
          <circle cx="12" cy="2" r="0.6"/>
          <circle cx="3.6" cy="3.5" r="0.6"/>
          <circle cx="6" cy="3.5" r="0.6"/>
          <circle cx="8.4" cy="3.5" r="0.6"/>
          <circle cx="10.8" cy="3.5" r="0.6"/>
          <circle cx="2.4" cy="5" r="0.6"/>
          <circle cx="4.8" cy="5" r="0.6"/>
          <circle cx="7.2" cy="5" r="0.6"/>
          <circle cx="9.6" cy="5" r="0.6"/>
          <circle cx="12" cy="5" r="0.6"/>
          <circle cx="3.6" cy="6.5" r="0.6"/>
          <circle cx="6" cy="6.5" r="0.6"/>
          <circle cx="8.4" cy="6.5" r="0.6"/>
          <circle cx="10.8" cy="6.5" r="0.6"/>
          <circle cx="2.4" cy="8" r="0.6"/>
          <circle cx="4.8" cy="8" r="0.6"/>
          <circle cx="7.2" cy="8" r="0.6"/>
          <circle cx="9.6" cy="8" r="0.6"/>
          <circle cx="12" cy="8" r="0.6"/>
          <circle cx="3.6" cy="9.5" r="0.6"/>
          <circle cx="6" cy="9.5" r="0.6"/>
          <circle cx="8.4" cy="9.5" r="0.6"/>
          <circle cx="10.8" cy="9.5" r="0.6"/>
          <circle cx="2.4" cy="11" r="0.6"/>
          <circle cx="4.8" cy="11" r="0.6"/>
          <circle cx="7.2" cy="11" r="0.6"/>
          <circle cx="9.6" cy="11" r="0.6"/>
          <circle cx="12" cy="11" r="0.6"/>
        </g>
      </svg>
    ),
    FR: (
      <svg viewBox="0 0 36 24" className={className} title={title}>
        <rect width="12" height="24" fill="#002395"/>
        <rect x="12" width="12" height="24" fill="#FFFFFF"/>
        <rect x="24" width="12" height="24" fill="#ED2939"/>
      </svg>
    ),
    RO: (
      <svg viewBox="0 0 36 24" className={className} title={title}>
        <rect width="12" height="24" fill="#002B7F"/>
        <rect x="12" width="12" height="24" fill="#FCD116"/>
        <rect x="24" width="12" height="24" fill="#CE1126"/>
      </svg>
    ),
    DK: (
      <svg viewBox="0 0 36 24" className={className} title={title}>
        <rect width="36" height="24" fill="#C60C30"/>
        <rect x="10" y="0" width="4" height="24" fill="#FFFFFF"/>
        <rect x="0" y="10" width="36" height="4" fill="#FFFFFF"/>
      </svg>
    ),
    SG: (
      <svg viewBox="0 0 36 24" className={className} title={title}>
        <rect width="36" height="12" fill="#ED2939"/>
        <rect y="12" width="36" height="12" fill="#FFFFFF"/>
        <circle cx="9" cy="6" r="3.5" fill="#FFFFFF"/>
        <circle cx="10.5" cy="6" r="3" fill="#ED2939"/>
        <g fill="#FFFFFF">
          <circle cx="7" cy="3.5" r="0.6"/>
          <circle cx="8.5" cy="2.5" r="0.6"/>
          <circle cx="10.5" cy="2.5" r="0.6"/>
          <circle cx="12" cy="3.5" r="0.6"/>
          <circle cx="13" cy="5.5" r="0.6"/>
        </g>
      </svg>
    )
  }

  return flags[code] || null
}
