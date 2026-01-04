'use client'

import { useEffect, useState } from 'react'
import { Languages } from 'lucide-react'

declare global {
  interface Window {
    google: any
    googleTranslateElementInit: () => void
  }
}

export function LanguageSelector() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check if script is already loaded
    if (window.google?.translate) {
      setIsLoaded(true)
      return
    }

    // Define the callback function
    window.googleTranslateElementInit = function() {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,vi',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      )
      setIsLoaded(true)
    }

    // Load Google Translate script
    const script = document.createElement('script')
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup
      delete window.googleTranslateElementInit
    }
  }, [])

  return (
    <div className="fixed top-20 right-4 z-50">
      <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-vietnam-red to-red-600">
          <Languages className="h-4 w-4 text-white" />
          <span className="text-sm font-semibold text-white">Translate</span>
        </div>
        <div id="google_translate_element" className="p-2"></div>
      </div>

      <style jsx global>{`
        /* Hide Google Translate banner */
        .goog-te-banner-frame {
          display: none !important;
        }

        body {
          top: 0 !important;
        }

        /* Style the Google Translate dropdown */
        #google_translate_element select {
          background-color: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.375rem;
          padding: 0.5rem;
          font-size: 0.875rem;
          color: #374151;
          cursor: pointer;
          width: 100%;
        }

        #google_translate_element select:focus {
          outline: none;
          border-color: #dc2626;
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
        }

        /* Hide the Google Translate logo in the dropdown */
        .goog-te-gadget {
          color: transparent !important;
          font-size: 0 !important;
        }

        .goog-te-gadget img {
          display: none !important;
        }

        .goog-te-gadget-simple {
          background-color: transparent !important;
          border: none !important;
          padding: 0 !important;
        }

        .goog-te-gadget-simple .goog-te-menu-value {
          color: #374151 !important;
        }

        .goog-te-gadget-simple .goog-te-menu-value span {
          color: #374151 !important;
        }
      `}</style>
    </div>
  )
}
