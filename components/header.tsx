"use client"

import { useMemo } from 'react'
import CardNav from './card-nav'

export function Header() {
  const items = useMemo(() => [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Who We Are", href: "/#who-we-are", ariaLabel: "About our organization" },
        { label: "Global Coverage", href: "/#geographic-coverage", ariaLabel: "Our global presence" },
        { label: "Our Mandate", href: "/#strategy", ariaLabel: "Our mandate and pillars" }
      ]
    },
    {
      label: "Network",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Membership", href: "/membership", ariaLabel: "Join our network" },
        { label: "Our Activities", href: "/activities", ariaLabel: "Our strategic activities" },
        { label: "Board & Advisory", href: "/board", ariaLabel: "Board and advisory members" }
      ]
    },
    {
      label: "Engage",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Contact Us", href: "/contact", ariaLabel: "Get in touch" }
      ]
    }
  ], []);

  return (
    <CardNav
      logo="/AKB2.png"
      logoAlt="Association of Professional Kiều Bào"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
}
