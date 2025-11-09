'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Hide loading screen after page load
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true)
        setTimeout(() => {
          setIsLoading(false)
        }, 800) // Wait for fade animation to complete
      }, 300) // Small delay before starting fade
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-700 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* AKB Logo */}
        <div className="mb-6 animate-fade-in">
          <Image
            src="/AKB2.png"
            alt="AKB Logo"
            width={120}
            height={120}
            className="mx-auto"
            priority
          />
        </div>

        {/* Loading Spinner */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 border-4 border-vietnam-red border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <p className="text-white text-sm font-montserrat animate-pulse">Loading...</p>
      </div>
    </div>
  )
}
