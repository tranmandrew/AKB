"use client"

import dynamic from 'next/dynamic'

const CardNav = dynamic(() => import('./card-nav'), { ssr: false })

export function Header() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Who We Are", href: "/#who-we-are", ariaLabel: "About our organization" },
        { label: "Our Activities", href: "/activities", ariaLabel: "Our strategic activities" },
        { label: "Global Coverage", href: "/#geographic-coverage", ariaLabel: "Our global presence" }
      ]
    },
    {
      label: "Network",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Membership", href: "/membership", ariaLabel: "Join our network" },
        { label: "Board", href: "/board", ariaLabel: "Board members" }
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
  ];

  return (
    <CardNav
      logo="/AKB.png"
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
