'use client'

import { useState } from 'react'
import { Info } from 'lucide-react'

interface ResolutionTooltipProps {
  children: React.ReactNode
  className?: string
}

export function ResolutionTooltip({ children, className = "" }: ResolutionTooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <span className="relative inline-block">
      <span
        className={`cursor-help underline decoration-dotted underline-offset-2 hover:text-vietnam-red transition-colors duration-200 ${className}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
      >
        {children}
        <Info className="inline-block w-3 h-3 ml-1 opacity-60" />
      </span>

      {isVisible && (
        <div className="absolute z-50 w-96 p-4 mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl">
          <div className="text-sm">
            <h4 className="font-semibold text-vietnam-red mb-2">
              Resolution No. 36-NQ/TW (March 26, 2004)
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>Official Recognition:</strong> Issued by the Politburo on overseas Vietnamese affairs,
              recognizing overseas Vietnamese as "an integral part and resource of the Vietnamese nation."
            </p>

            <div className="space-y-2 text-gray-600 dark:text-gray-400 text-xs">
              <div>
                <strong>Key Principles:</strong>
                <ul className="list-disc list-inside ml-2 mt-1 space-y-1">
                  <li>Overseas Vietnamese are welcomed regardless of nationality, religion, or origin</li>
                  <li>Recognized as valuable contributors to national development</li>
                  <li>Acknowledges their economic, intellectual, and cultural contributions</li>
                </ul>
              </div>

              <div>
                <strong>Impact:</strong> This resolution formalized Vietnam's "Great Unity" (Đại Đoàn Kết) policy,
                promoting national reconciliation and recognizing the overseas Vietnamese community
                (5.3+ million in 130+ countries) as an important resource for national construction.
              </div>
            </div>
          </div>
        </div>
      )}
    </span>
  )
}