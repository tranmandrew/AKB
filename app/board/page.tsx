'use client'

import { FooterSection } from "@/components/footer-section"
import Image from "next/image"
import { Linkedin, Facebook } from "lucide-react"
import Link from "next/link"
import { Flag } from "@/components/flag"
import { useState } from "react"

interface BoardMember {
  name: string
  title: string
  country: string
  countryFlag: string
  countryCode: string
  description: string
  profileImage?: string
  initials: string
  linkedinUrl?: string
  twitterUrl?: string
  facebookUrl?: string
}

const boardMembers: BoardMember[] = [
  {
    name: "Kimble Ngo",
    title: "Canadian Founding Member",
    country: "Canada",
    countryFlag: "🇨🇦",
    countryCode: "CA",
    initials: "KN",
    description: "Canadian-Vietnamese with fintech and ESG expertise from UBS and Standard Chartered Ventures. Regularly advises government bodies and corporates across Vietnam and SEA, bridging international business relations for strategic development.",
    profileImage: "/Kimble.jpg",
    linkedinUrl: "https://www.linkedin.com/in/kimblengo/"
  },
  {
    name: "Corina Trang Luong",
    title: "Romanian Founding Member",
    country: "Romania",
    countryFlag: "🇷🇴",
    countryCode: "RO",
    initials: "CTL",
    description: "Romanian-Vietnamese seasoned business professional with over a decade of experience across the marketing, advertising, and technology sectors. She has built a dynamic career spanning multiple markets—including Europe, Southeast Asia, and Vietnam—driving growth and innovation for both global tech companies and startups. Her expertise lies in go-to-market strategy, digital media, and navigating fast-changing, high-growth markets.",
    profileImage: "/Corina.jpg",
    linkedinUrl: "https://www.linkedin.com/in/corinatrangluong/"
  },
  {
    name: "Tam Nguyen",
    title: "American Founding Member",
    country: "United States",
    countryFlag: "🇺🇸",
    countryCode: "US",
    initials: "TN",
    description: "American-Vietnamese expert on circular economy (ESG) with The Alliance to End Plastic Waters (AEPW), covering Vietnam, Thailand, and China. His work with the Minister of Agriculture and Environment (VN) and Multi-national Organization (World Bank, UNDP, ADB, WEF) deploy capital and support policies that promote green development.",
    profileImage: "/Tam.jpg",
    linkedinUrl: "https://www.linkedin.com/in/tamnguyen/"
  },
  {
    name: "Alexandre Ho Thanh",
    title: "French Founding Member",
    country: "France",
    countryFlag: "🇫🇷",
    countryCode: "FR",
    initials: "AHT",
    description: "French-Vietnamese is a Legal and Tax Advisor, as a Director of RBA Group, specializing in IP, M&A, and FDI investment. He is also an International Arbitrator at Vietnam Traders Arbitration Centre (VTA) and Myanmar International Arbitration Centre (MIAC)",
    profileImage: "/Alexandre.jpg",
    linkedinUrl: "https://www.linkedin.com/in/alexhothanh/"
  },
  {
    name: "Gia Thi Nguyen",
    title: "Singaporean Founding Member",
    country: "Singapore",
    countryFlag: "🇸🇬",
    countryCode: "SG",
    initials: "GTN",
    description: "20+ years working globally for German conglomerates Siemens and SAP in 7 countries, solving complex challenges by bringing People, Process, Applications and Data together. Former CIO, CFO, Head of Operational Excellence and Head of Service Business. Experience across all business stages from start-up, hyper growth, maturity, restructuring, acquisition and divestment.",
    profileImage: "/GiaThi.jpg",
    linkedinUrl: "https://www.linkedin.com/in/teawiththi/"
  }
]

function BoardMembersSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  const toggleCard = (memberName: string) => {
    setActiveCard(activeCard === memberName ? null : memberName)
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Responsive Grid: 5 cols on xl, 3 on lg, 2 on md, 1 on sm */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden bg-gray-800 md:hover:transform md:hover:scale-105 transition-all duration-300 cursor-pointer shadow-[0_-8px_16px_rgba(0,0,0,0.3),0_8px_16px_rgba(0,0,0,0.3)]"
                onClick={() => toggleCard(member.name)}
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  {/* Profile Image */}
                  {member.profileImage ? (
                    <Image
                      src={member.profileImage}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                      <div className="text-6xl font-bold text-white/20">
                        {member.initials}
                      </div>
                    </div>
                  )}

                  {/* Dark overlay gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                  {/* Social Icons - Vertical Stack (only on hover/active) */}
                  <div className={`absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 transition-opacity duration-300 ${activeCard === member.name ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-900/80 hover:bg-blue-600 rounded flex items-center justify-center text-white transition-colors duration-200"
                        aria-label={`${member.name}'s LinkedIn`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.twitterUrl && (
                      <a
                        href={member.twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-900/80 hover:bg-gray-700 rounded flex items-center justify-center text-white transition-colors duration-200"
                        aria-label={`${member.name}'s Twitter`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    )}
                    {member.facebookUrl && (
                      <a
                        href={member.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-900/80 hover:bg-blue-700 rounded flex items-center justify-center text-white transition-colors duration-200"
                        aria-label={`${member.name}'s Facebook`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  {/* LinkedIn Icon - Bottom Right Corner (always visible) */}
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-0 right-0 w-10 h-10 bg-transparent flex items-center justify-center text-white hover:bg-[#0A66C2] transition-all duration-300 z-10"
                      aria-label={`${member.name}'s LinkedIn profile`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}

                  {/* Content Overlay - Bottom Left */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">
                      {member.name}
                    </h3>
                    <p className="text-[#FF6B6B] text-[10px] font-medium uppercase tracking-wide line-clamp-2">
                      {member.title}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-gray-300 text-xs">
                      {member.countryCode === "GLOBAL" ? (
                        <span className="text-lg">🌍</span>
                      ) : (
                        <Flag countryCode={member.countryCode} className="w-6 h-4" title={member.country} />
                      )}
                      <span>{member.country}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Description Overlay */}
                <div className={`absolute inset-0 bg-black/95 transition-opacity duration-300 p-6 flex flex-col ${activeCard === member.name ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#FF6B6B] text-[10px] font-medium mb-3 uppercase tracking-wide leading-tight">
                    {member.title}
                  </p>
                  <p className="text-gray-300 text-[10px] leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function BoardMembersSecondRowSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  const toggleCard = (memberName: string) => {
    setActiveCard(activeCard === memberName ? null : memberName)
  }

  const boardMembersRow2 = [
    {
      name: "John Vu",
      title: "American Founding Member",
      country: "United States",
      countryFlag: "🇺🇸",
      countryCode: "US",
      initials: "JV",
      description: "Associate Partner at CL2B, a leading circular economy and sustainability consultancy in Ho Chi Minh City. Specializes in building sustainable supply chains for international brands across Vietnam and Southeast Asia. Manages SVK (Saigon Viet Kieus), a community of 6,000+ overseas Vietnamese returnees. Former Vice Chair of AmCham Vietnam's ESG Committee.",
      profileImage: "/JohnVu.jpg",
      linkedinUrl: "https://www.linkedin.com/in/johnvu22/"
    },
    {
      name: "Danh Bui",
      title: "American Founding Member",
      country: "United States",
      countryFlag: "🇺🇸",
      countryCode: "US",
      initials: "DB",
      description: "Business Development Manager at CADDi with expertise in supply chain management and AI platform solutions. Former Quality and Lean Leader at Simpson Strong-Tie, with extensive engineering and BIM experience. Lean Six Sigma Green Belt certified with strong focus on problem-solving and innovation.",
      profileImage: "/DanhBui.jpg",
      linkedinUrl: "https://www.linkedin.com/in/danhcbui/"
    },
    {
      name: "Thang Ha",
      title: "Chinese Founding Member",
      country: "China",
      countryFlag: "🇨🇳",
      countryCode: "CN",
      initials: "TH",
      description: "Business Representative for CreditTech at Ant International, spearheading lending business in Vietnam. Over 13 years of proven track record in fintech, digital banking, and strategic partnerships. Former Head of Partnership at TNEX and Business Strategy Head at TIKI. MBA and PMP certified, with expertise in e-commerce finance, digital lending, and supply chain financing across Southeast Asia.",
      profileImage: "/ThangHa.jpg",
      linkedinUrl: "https://www.linkedin.com/in/thangha/"
    },
    {
      name: "Lan P. Nguyen",
      title: "American Founding Member",
      country: "United States",
      countryFlag: "🇺🇸",
      countryCode: "US",
      initials: "LPN",
      description: "Vietnamese-American lawyer at Baker McKenzie, representing and advising leading Vietnamese conglomerates and global multinational companies in high profile projects and matters. Lecturer at Diplomatic Academy of Vietnam and Professor at City University of Seattle in MBA joint program with the Banking Academy of Vietnam.",
      profileImage: "/LanNguyen.jpg",
      linkedinUrl: "https://www.linkedin.com/in/lannguyenesq/",
      objectPosition: "center top"
    }
  ]

  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Responsive Grid: 5 cols on xl, 3 on lg, 2 on md, 1 on sm */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {boardMembersRow2.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden bg-gray-800 md:hover:transform md:hover:scale-105 transition-all duration-300 cursor-pointer shadow-[0_-8px_16px_rgba(0,0,0,0.3),0_8px_16px_rgba(0,0,0,0.3)]"
                onClick={() => toggleCard(member.name)}
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  {/* Profile Image */}
                  {member.profileImage ? (
                    <Image
                      src={member.profileImage}
                      alt={member.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: member.objectPosition || 'center' }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                      <div className="text-6xl font-bold text-white/20">
                        {member.initials}
                      </div>
                    </div>
                  )}

                  {/* Dark overlay gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                  {/* LinkedIn Icon - Bottom Right Corner (always visible) */}
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-0 right-0 w-10 h-10 bg-transparent flex items-center justify-center text-white hover:bg-[#0A66C2] transition-all duration-300 z-10"
                      aria-label={`${member.name}'s LinkedIn profile`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}

                  {/* Content Overlay - Bottom Left */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">
                      {member.name}
                    </h3>
                    <p className="text-[#FF6B6B] text-[10px] font-medium uppercase tracking-wide line-clamp-2">
                      {member.title}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-gray-300 text-xs">
                      {member.countryCode === "GLOBAL" ? (
                        <span className="text-lg">🌍</span>
                      ) : (
                        <Flag countryCode={member.countryCode} className="w-6 h-4" title={member.country} />
                      )}
                      <span>{member.country}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Description Overlay */}
                <div className={`absolute inset-0 bg-black/95 transition-opacity duration-300 p-6 flex flex-col ${activeCard === member.name ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#FF6B6B] text-[10px] font-medium mb-3 uppercase tracking-wide leading-tight">
                    {member.title}
                  </p>
                  <p className="text-gray-300 text-[10px] leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AdvisoryCommitteeSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  const toggleCard = (memberName: string) => {
    setActiveCard(activeCard === memberName ? null : memberName)
  }

  const advisoryMembers = [
    {
      name: "Dr. Ngô Dương Hoàng Thao",
      title: "Advisory Committee Member",
      country: "Denmark",
      countryFlag: "🇩🇰",
      countryCode: "DK",
      initials: "DT",
      description: "Chairman & Founder of GROUP GLOBAL ONE, Danish Kieu Bao, with over 35 years in ICT, Telecom, and Energy experience in Denmark, Germany, America, and Vietnam.",
      profileImage: "/Thao.jpg",
      linkedinUrl: "https://www.linkedin.com/in/drthaodhngo/"
    },
    {
      name: "Thy Tang",
      title: "Advisory Committee Member",
      country: "United States",
      countryFlag: "🇺🇸",
      countryCode: "US",
      initials: "TT",
      description: "FinTech innovator with 20+ years of experience building technology driven financial platforms across the U.S., UK, EU, Asia, and Vietnam. Co-Founder of Acquired.com and CTO of Qunit Group, a global Fintech Company.",
      profileImage: "/Thy.jpg",
      linkedinUrl: "https://www.linkedin.com/in/thytang/"
    },
    {
      name: "Joe Nguyen",
      title: "Advisory Committee Member",
      country: "Singapore",
      countryFlag: "🇸🇬",
      countryCode: "SG",
      initials: "JN",
      description: "Senior Strategic Advisor for Hakuhodo/DAC, served as Chair of the Interactive Advertising Bureau (IAB) Singapore and also currently on the Advisory Board of the Mobile Marketing Association (APAC), he is an expert in data analytics and marketing in consumer brands, online behaviour,\nand advertising technology.",
      profileImage: "/Joe.jpg",
      linkedinUrl: "https://www.linkedin.com/in/joenguyenht/"
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-3xl md:text-4xl text-white mb-3 font-bold tracking-tight">
              ADVISORY COMMITTEE
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto whitespace-nowrap">
              Experienced leaders providing strategic guidance to AKB's mission and activities
            </p>
          </div>
          {/* Responsive Grid: 5 cols on xl, 3 on lg, 2 on md, 1 on sm */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {advisoryMembers.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden bg-gray-900 md:hover:transform md:hover:scale-105 transition-all duration-300 cursor-pointer shadow-[0_-8px_16px_rgba(0,0,0,0.3),0_8px_16px_rgba(0,0,0,0.3)]"
                onClick={() => toggleCard(member.name)}
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  {/* Profile Image */}
                  {member.profileImage ? (
                    <Image
                      src={member.profileImage}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-orange-900 flex items-center justify-center">
                      <div className="text-6xl font-bold text-white/20">
                        {member.initials}
                      </div>
                    </div>
                  )}

                  {/* Dark overlay gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                  {/* LinkedIn Icon - Bottom Right Corner (always visible) */}
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-0 right-0 w-10 h-10 bg-transparent flex items-center justify-center text-white hover:bg-[#0A66C2] transition-all duration-300 z-10"
                      aria-label={`${member.name}'s LinkedIn profile`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}

                  {/* Content Overlay - Bottom Left */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">
                      {member.name}
                    </h3>
                    <p className="text-[#FF6B6B] text-[10px] font-medium uppercase tracking-wide line-clamp-2">
                      {member.title}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-gray-300 text-xs">
                      {member.countryCode === "GLOBAL" ? (
                        <span className="text-lg">🌍</span>
                      ) : (
                        <Flag countryCode={member.countryCode} className="w-6 h-4" title={member.country} />
                      )}
                      <span>{member.country}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Description Overlay */}
                <div className={`absolute inset-0 bg-black/95 transition-opacity duration-300 p-6 flex flex-col ${activeCard === member.name ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#FF6B6B] text-[10px] font-medium mb-3 uppercase tracking-wide leading-tight">
                    {member.title}
                  </p>
                  <p className="text-gray-300 text-[10px] leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function BoardPage() {
  return (
    <>
      <style jsx global>{`
        .emoji-flag {
          font-family: 'Segoe UI Emoji', 'Segoe UI Symbol', 'Apple Color Emoji', 'Noto Color Emoji', 'Twemoji Mozilla', sans-serif;
          font-style: normal;
          font-variant: normal;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        @supports (font-variation-settings: normal) {
          .emoji-flag {
            font-family: 'Segoe UI Emoji', system-ui, -apple-system, sans-serif;
          }
        }
      `}</style>
    <main className="min-h-screen bg-background">
      {/* Hero Section for Board Page */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/boardroomback.png"
            alt="Boardroom"
            fill
            className="object-cover object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-white">BOARD MEMBERS</span>
          </div>

          <h1 className="heading-primary text-4xl md:text-5xl text-white mb-6 font-bold tracking-tight">
            Founding Board Members
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
            Meet the visionary leaders guiding the Association of Professional Kiều Bào
            towards a future of global Vietnamese excellence and strategic partnerships.
          </p>
        </div>
      </section>

      <BoardMembersSection />
      <BoardMembersSecondRowSection />
      <AdvisoryCommitteeSection />
      <FooterSection />
    </main>
    </>
  )
}