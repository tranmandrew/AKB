"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false) // Close mobile menu after clicking
    }
  }

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          setScrollY(currentScrollY)
          setIsScrolled(currentScrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate smooth values based on scroll position
  const scrollProgress = Math.min(scrollY / 100, 1) // 0 to 1 over first 100px

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out"
      style={{
        paddingTop: `${1.5 - scrollProgress * 0.75}rem`,
        paddingBottom: `${1.5 - scrollProgress * 0.75}rem`,
        backgroundColor: `rgba(var(--background), ${0.8 + scrollProgress * 0.15})`,
        backdropFilter: `blur(${8 + scrollProgress * 8}px)`,
        borderBottomColor: `rgba(var(--border), ${scrollProgress * 0.4})`,
        borderBottomWidth: '1px',
        boxShadow: scrollProgress > 0.5 ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      {/* Modern gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-vietnam-red/5 via-transparent to-singapore-blue/5"
        style={{ opacity: 0.3 + scrollProgress * 0.2 }}
      />

      {/* Animated border bottom */}
      <div
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-vietnam-red via-accent to-singapore-blue transition-all duration-500 ease-out"
        style={{
          width: `${scrollProgress * 100}%`,
          opacity: scrollProgress > 0.7 ? 1 : 0
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-3 items-center">
          {/* Left: Logo and Brand */}
          <div className="flex items-center space-x-3 justify-self-start">
            <a href="/" className="flex items-center space-x-3 group">
              <div
                className="rounded-lg flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-lg overflow-hidden"
                style={{
                  width: `${3 - scrollProgress * 0.5}rem`,
                  height: `${3 - scrollProgress * 0.5}rem`
                }}
              >
                <Image
                  src="/AKB.png"
                  alt="Association of Professional Kiều Bào"
                  width={48}
                  height={48}
                  className="object-contain transition-all duration-300"
                  style={{
                    width: `${3 - scrollProgress * 0.5}rem`,
                    height: `${3 - scrollProgress * 0.5}rem`
                  }}
                />
              </div>
              <div className="overflow-hidden hidden sm:block">
                <span
                  className="font-semibold text-foreground transition-all duration-300 ease-out whitespace-nowrap block"
                  style={{
                    fontSize: `${1.125 - scrollProgress * 0.125}rem`,
                    opacity: scrollProgress > 0.8 ? 0.8 : 1
                  }}
                >
                  Association of Professional Kiều Bào
                </span>
              </div>
            </a>
          </div>

          {/* Center: Navigation - Perfectly centered and contracts/expands in place */}
          <nav className="hidden lg:flex items-center justify-center">
            <div
              className="flex items-center transition-all duration-300 ease-out"
              style={{
                gap: `${1.25 - scrollProgress * 0.25}rem`
              }}
            >
              {[
                { id: 'about', label: 'About' },
                { id: 'mission', label: 'Mission' },
                { id: 'join', label: 'Join' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-muted-foreground hover:text-foreground font-medium hover:scale-105 group text-sm flex items-center justify-center min-h-[2.5rem] transition-colors duration-200"
                  style={{
                    paddingLeft: `${0.75 - scrollProgress * 0.125}rem`,
                    paddingRight: `${0.75 - scrollProgress * 0.125}rem`
                  }}
                >
                  {item.label}
                  <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-vietnam-red transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
              <a
                href="/contact"
                className="relative text-muted-foreground hover:text-foreground font-medium hover:scale-105 group text-sm flex items-center justify-center min-h-[2.5rem] transition-colors duration-200"
                style={{
                  paddingLeft: `${0.75 - scrollProgress * 0.125}rem`,
                  paddingRight: `${0.75 - scrollProgress * 0.125}rem`
                }}
              >
                Contact
                <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-vietnam-red transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </nav>

          {/* Right: Action Buttons */}
          <div className="hidden md:flex items-center justify-self-end">
            <div
              className="flex items-center transition-all duration-500 ease-out"
              style={{
                gap: `${0.5 - scrollProgress * 0.125}rem`
              }}
            >
              <Button
                variant="outline"
                className="transition-all duration-500 ease-out hover:scale-105 border-border/50 hover:border-vietnam-red/50 hover:bg-vietnam-red/5 font-medium overflow-hidden"
                style={{
                  paddingLeft: `${1 - scrollProgress * 0.25}rem`,
                  paddingRight: `${1 - scrollProgress * 0.25}rem`,
                  fontSize: `${0.875 - scrollProgress * 0.0625}rem`,
                  opacity: Math.max(0, 1 - scrollProgress * 1.5),
                  transform: `translateX(${scrollProgress * 20}px) scale(${1 - scrollProgress * 0.2})`,
                  maxWidth: `${6 - scrollProgress * 6}rem`,
                  height: '2.25rem',
                  transformOrigin: 'right center'
                }}
                onClick={() => scrollToSection('about')}
              >
                <span
                  style={{
                    transform: `translateX(${scrollProgress * -10}px)`,
                    transition: 'transform 500ms ease-out'
                  }}
                >
                  Learn More
                </span>
              </Button>
              <a href="/contact">
                <Button
                  className="bg-vietnam-red hover:bg-vietnam-red/90 text-white font-semibold transition-all duration-500 ease-out hover:scale-105 shadow-lg hover:shadow-xl relative border-0"
                  style={{
                    paddingLeft: `${1.5 - scrollProgress * 0.375}rem`,
                    paddingRight: `${1.5 - scrollProgress * 0.375}rem`,
                    paddingTop: `${0.75 - scrollProgress * 0.125}rem`,
                    paddingBottom: `${0.75 - scrollProgress * 0.125}rem`,
                    fontSize: `${1 - scrollProgress * 0.125}rem`,
                    minWidth: `${10 - scrollProgress * 5}rem`,
                    height: `${2.75 - scrollProgress * 0.375}rem`,
                    transformOrigin: 'center',
                    backgroundColor: '#dc2626',
                    boxShadow: '0 4px 14px 0 rgba(220, 38, 38, 0.3)'
                  }}
                >
                  <span
                    className="transition-all duration-500 ease-out absolute inset-0 flex items-center justify-center font-semibold"
                    style={{
                      opacity: scrollProgress > 0.4 ? 0 : 1,
                      transform: `translateX(${scrollProgress * -10}px)`
                    }}
                  >
                    Join the Movement
                  </span>
                  <span
                    className="transition-all duration-500 ease-out absolute inset-0 flex items-center justify-center font-semibold"
                    style={{
                      opacity: scrollProgress > 0.4 ? 1 : 0,
                      transform: `translateX(${scrollProgress < 0.4 ? 15 : 0}px)`
                    }}
                  >
                    Join
                  </span>
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button - Only show on small screens, positioned in right column */}
          <div className="flex lg:hidden items-center justify-self-end">
            <Button
              variant="ghost"
              size="sm"
              className="transition-all duration-200 hover:bg-vietnam-red/10 hover:scale-105"
              style={{
                padding: `${0.5 - scrollProgress * 0.125}rem`
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-5 h-5">
                <Menu
                  className={`
                    absolute inset-0 w-5 h-5 transition-all duration-300
                    ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}
                  `}
                />
                <X
                  className={`
                    absolute inset-0 w-5 h-5 transition-all duration-300
                    ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}
                  `}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Modern sliding menu */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-500 ease-out
            ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <nav className="pt-4 pb-2">
            <div className="border-t border-border/30 pt-4">
              <div className="flex flex-col space-y-1">
                {[
                  { id: 'about', label: 'About' },
                  { id: 'mission', label: 'Mission' },
                  { id: 'join', label: 'Join' }
                ].map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      text-left py-3 px-2 rounded-lg text-muted-foreground hover:text-foreground
                      hover:bg-vietnam-red/5 transition-all duration-200 font-medium
                      transform transition-transform duration-300
                      ${isMenuOpen ? 'translate-x-0' : '-translate-x-4'}
                    `}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="/contact"
                  className={`
                    text-left py-3 px-2 rounded-lg text-muted-foreground hover:text-foreground
                    hover:bg-vietnam-red/5 transition-all duration-200 font-medium
                    transform transition-transform duration-300
                    ${isMenuOpen ? 'translate-x-0' : '-translate-x-4'}
                  `}
                  style={{ transitionDelay: '150ms' }}
                >
                  Contact
                </a>
              </div>

              <div
                className={`
                  flex flex-col space-y-3 pt-6 mt-4 border-t border-border/30
                  transform transition-all duration-300
                  ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                `}
                style={{ transitionDelay: '200ms' }}
              >
                <Button
                  variant="outline"
                  className="justify-start border-border/50 hover:border-vietnam-red/50 hover:bg-vietnam-red/5"
                  onClick={() => scrollToSection('about')}
                >
                  Learn More
                </Button>
                <a href="/contact">
                  <Button className="w-full bg-gradient-to-r from-vietnam-red to-vietnam-red/90 hover:from-vietnam-red/90 hover:to-vietnam-red text-white font-medium shadow-lg">
                    Join the Movement
                  </Button>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
