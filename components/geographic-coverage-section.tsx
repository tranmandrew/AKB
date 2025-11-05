"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface CountryTooltip {
  name: string;
  x: number;
  y: number;
}

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
  { name: "Japan", x: 80.5, y: 54 },
  { name: "Korea", x: 77.5, y: 55 },
  { name: "Switzerland", x: 50, y: 49 },
  { name: "China", x: 72, y: 56 },
  { name: "Thailand", x: 71.5, y: 65 },
  { name: "Australia", x: 79, y: 82 },
  { name: "New Zealand", x: 88, y: 91 }
];

const vietnamLocation = { name: "Vietnam", x: 72.5, y: 62 };

interface DataCard {
  title: string;
  value: string;
  description: string;
  icon: string;
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
    description: "Diaspora community we bridge to Vietnam",
    icon: ""
  },
  {
    title: "Annual Remittances",
    value: "$17B",
    description: "Economic contribution to Vietnam",
    icon: ""
  },
];

export function GeographicCoverageSection() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [gdpValue, setGdpValue] = useState(0);
  const [globalValue, setGlobalValue] = useState(0);
  const [remittanceValue, setRemittanceValue] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animate numbers when visible
  useEffect(() => {
    if (!isVisible) return;

    const animateValue = (
      start: number,
      end: number,
      duration: number,
      setter: (value: number) => void
    ) => {
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = start + (end - start) * easeOutQuart;

        setter(Math.round(current * 10) / 10);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    // Animate each value
    animateValue(0, 7.5, 2000, setGdpValue);
    animateValue(0, 5, 2000, setGlobalValue);
    animateValue(0, 17, 2000, setRemittanceValue);
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="geographic-coverage" className="scroll-snap-section py-8 md:py-12 bg-gray-50 diagonal-bottom scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 mt-8">
          <h2 className="heading-primary text-3xl md:text-4xl text-gray-900 mb-2">
            Geographic Coverage
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting Vietnamese professionals worldwide through our extensive network of Kiều Bào communities across 16+ countries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 items-start">
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

                {redCountries.map((country, index) => (
                  <div
                    key={country.name}
                    className="absolute cursor-pointer transition-all duration-[1500ms] ease-out"
                    style={{
                      left: `${country.x}%`,
                      top: isVisible ? `${country.y}%` : '110%',
                      transform: "translate(-50%, -50%)",
                      opacity: isVisible ? 1 : 0,
                      transitionDelay: `${index * 80}ms`
                    }}
                    onMouseEnter={() => setHoveredCountry(country.name)}
                    onMouseLeave={() => setHoveredCountry(null)}
                  >
                    <div className="relative">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-ping absolute"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-red-600 rounded-full relative border border-white shadow-md"></div>
                    </div>

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

                <div
                  className="absolute cursor-pointer transition-all duration-[1500ms] ease-out"
                  style={{
                    left: `${vietnamLocation.x}%`,
                    top: isVisible ? `${vietnamLocation.y}%` : '110%',
                    transform: "translate(-50%, -50%)",
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${redCountries.length * 80}ms`
                  }}
                  onMouseEnter={() => setHoveredCountry(vietnamLocation.name)}
                  onMouseLeave={() => setHoveredCountry(null)}
                >
                  <div className="relative">
                    <div className="w-2 h-2 md:w-3 md:h-3 text-yellow-400 animate-ping absolute flex items-center justify-center text-xs">
                      ⭐
                    </div>
                    <div className="w-2 h-2 md:w-3 md:h-3 text-yellow-500 relative flex items-center justify-center text-xs border border-white rounded-full bg-white shadow-md">
                      ⭐
                    </div>
                  </div>

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

              <div className="mt-4 text-center">
                <p className="text-xs text-black">
                  Vietnam, Singapore, Canada, the United States, France, the UK, Germany, Russia, Czech Republic, Romania, Japan, Korea, Switzerland, China, Thailand, Australia, and New Zealand
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 border-l-4 border-vietnam-red">
              <h3 className="font-montserrat text-lg md:text-xl font-bold text-gray-900 mb-3">
                Independent Vietnam's Moment
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Vietnam's rapid economic growth and global integration creates unprecedented opportunities for international expertise and investment. Government Resolution 36-NQ/TW recognizes Kiều Bào as an "inseparable part of Vietnamese national community."
              </p>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-rotate-1 hover:scale-105 p-4">
                <div className="text-center">
                  <div className="font-montserrat text-2xl font-bold text-vietnam-red mb-1">
                    {isVisible ? `${gdpValue.toFixed(1)}%` : '7.5%'}
                  </div>
                  <h4 className="font-montserrat text-base font-semibold text-gray-900 mb-1">
                    GDP Growth Rate
                  </h4>
                  <p className="text-gray-600 text-xs">
                    Vietnam's robust economic expansion
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-rotate-1 hover:scale-105 p-4">
                <div className="text-center">
                  <div className="font-montserrat text-2xl font-bold text-vietnam-red mb-1">
                    {isVisible ? `${globalValue.toFixed(0)}M+` : '5M+'}
                  </div>
                  <h4 className="font-montserrat text-base font-semibold text-gray-900 mb-1">
                    Global Vietnamese
                  </h4>
                  <p className="text-gray-600 text-xs">
                    Diaspora community we bridge to Vietnam
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-rotate-1 hover:scale-105 p-4">
                <div className="text-center">
                  <div className="font-montserrat text-2xl font-bold text-vietnam-red mb-1">
                    {isVisible ? `$${remittanceValue.toFixed(0)}B` : '$17B'}
                  </div>
                  <h4 className="font-montserrat text-base font-semibold text-gray-900 mb-1">
                    Annual Remittances
                  </h4>
                  <p className="text-gray-600 text-xs">
                    Economic contribution to Vietnam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}