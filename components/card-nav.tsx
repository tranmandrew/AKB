"use client"

import React, { useLayoutEffect, useRef, useState, useEffect, useCallback, memo } from 'react';
import { gsap } from 'gsap';
// use your own icon import if react-icons is not available
// import { GoArrowUpRight } from 'react-icons/go';

// Temporary arrow icon component
const GoArrowUpRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="nav-card-link-icon shrink-0"
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

// LinkedIn icon component
const LinkedInIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="shrink-0"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = memo(({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
  buttonBgColor,
  buttonTextColor
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);
  const navLinksRef = useRef<HTMLDivElement | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 300;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const topBar = 80;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 300;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) {
      return null;
    }


    // Don't set height here - it's already set in useLayoutEffect
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;

    // Keep nav at collapsed height initially - don't auto-expand
    gsap.set(navEl, { height: 80, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = createTimeline();
    tlRef.current = tl;


    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      // Debounce resize events to reduce GSAP recalculations
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!tlRef.current) return;

        if (isExpanded) {
          const newHeight = calculateHeight();
          gsap.set(navRef.current, { height: newHeight });

          tlRef.current.kill();
          const newTl = createTimeline();
          if (newTl) {
            newTl.progress(1);
            tlRef.current = newTl;
          }
        } else {
          tlRef.current.kill();
          const newTl = createTimeline();
          if (newTl) {
            tlRef.current = newTl;
          }
        }
      }, 150); // Debounce by 150ms
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, [isExpanded]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const shouldCollapse = scrollY > 50;

          if (shouldCollapse !== isScrolled) {
            setIsScrolled(shouldCollapse);

            if (shouldCollapse && isExpanded) {
              setIsHamburgerOpen(false);
              if (tlRef.current) {
                tlRef.current.eventCallback('onReverseComplete', () => setIsExpanded(false));
                tlRef.current.reverse();
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled, isExpanded]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const hamburger = hamburgerRef.current;
    const logo = logoRef.current;
    const buttons = buttonsRef.current;
    const navLinks = navLinksRef.current;

    if (!container || !hamburger || !logo || !buttons) return;

    // Check if we're on mobile
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    // Only apply compression effect on desktop
    if (!isMobile) {
      // Animate container width, opacity, and element positions
      const tl = gsap.timeline();

      tl.to(container, {
        width: isScrolled ? '60%' : '95%',
        opacity: isScrolled ? 0.65 : 1,
        duration: 0.8,
        ease: 'power2.inOut'
      }, 0)
      .to(hamburger, {
        x: isScrolled ? 60 : 0,
        duration: 0.8,
        ease: 'power2.inOut'
      }, 0)
      .to(buttons, {
        x: isScrolled ? -60 : 0,
        duration: 0.8,
        ease: 'power2.inOut'
      }, 0);

      // Animate nav links opacity
      if (navLinks) {
        tl.to(navLinks, {
          opacity: isScrolled || isExpanded ? 0 : 1,
          duration: 0.8,
          ease: 'power2.inOut'
        }, 0);
      }
    }
  }, [isScrolled, isExpanded]);

  const toggleMenu = useCallback(() => {
    const tl = tlRef.current;
    if (!tl) {
      return;
    }


    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  }, [isExpanded]);

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      ref={containerRef}
      className={`card-nav-container fixed left-1/2 -translate-x-1/2 w-[95%] z-[99] top-[0.8em] md:top-[1.2em] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block h-[80px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height]`}
        style={{ backgroundColor: baseColor }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[80px] flex items-center px-4 md:px-6 z-[2] relative">
          <div
            ref={(el) => { if (el) hamburgerRef.current = el; }}
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group flex flex-col items-center justify-center cursor-pointer gap-[5px] md:gap-[6px] w-[44px] md:w-[48px] h-[44px] md:h-[48px] shrink-0`}
            onClick={toggleMenu}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
              }
            }}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#000' }}
          >
            <div
              className={`hamburger-line w-[26px] md:w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? 'translate-y-[3.5px] md:translate-y-[4px] rotate-45' : ''
              } group-hover:opacity-75`}
            />
            <div
              className={`hamburger-line w-[26px] md:w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? '-translate-y-[3.5px] md:-translate-y-[4px] -rotate-45' : ''
              } group-hover:opacity-75`}
            />
          </div>

          <div
            ref={(el) => { if (el) logoRef.current = el; }}
            className="logo-container flex flex-col items-center gap-0.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 py-2"
          >
            <a href="/" className="flex flex-col items-center gap-0.5">
              <img src={logo} alt={logoAlt} className="logo h-[28px] md:h-[32px] cursor-pointer hover:opacity-80 transition-all duration-300 hover:drop-shadow-lg" />
              <span className="text-[9px] md:text-[10px] font-semibold tracking-tight whitespace-nowrap leading-none" style={{ color: menuColor || '#000' }}>
                Association of Professional Kiều Bào
              </span>
            </a>
          </div>

          <div
            ref={(el) => { if (el) buttonsRef.current = el; }}
            className="flex items-center gap-2 md:gap-3 ml-auto"
          >
            <button
              type="button"
              className="linkedin-button hidden md:inline-flex items-center justify-center w-[40px] h-[40px] cursor-pointer transition-opacity duration-300 hover:opacity-70"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              <LinkedInIcon />
            </button>
            <button
              type="button"
              className="card-nav-cta-button font-montserrat inline-flex items-center justify-center border-0 rounded-lg px-4 md:px-6 py-2 md:py-2.5 font-semibold text-xs md:text-sm cursor-pointer transition-all duration-300 hover:opacity-80 hover:scale-105 shadow-sm hover:shadow-md shrink-0"
              style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
              onClick={() => window.location.href = '/contact'}
            >
              <span className="md:hidden">Apply</span>
              <span className="hidden md:inline">Apply for Membership</span>
            </button>
          </div>
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[80px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-[1] ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          } md:flex-row md:items-end md:gap-[12px]`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[48px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label font-montserrat font-semibold tracking-[-0.5px] text-[18px] md:text-[22px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link font-montserrat inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px]"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                  >
                    <GoArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}2
        </div>
      </nav>
    </div>
  );
});

CardNav.displayName = 'CardNav';

export default CardNav;