'use client'

import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import Image from "next/image"

interface BoardMember {
  name: string
  title: string
  country: string
  countryFlag: string
  description: string
  profileImage?: string
  initials: string
}

const boardMembers: BoardMember[] = [
  {
    name: "Kimble Ngo",
    title: "Canadian Founding Member",
    country: "Canada",
    countryFlag: "🇨🇦",
    initials: "KN",
    description: "Canadian-Vietnamese with fintech and ESG expertise from UBS and Standard Chartered Ventures. Regularly advises government bodies and corporates across Vietnam and SEA, bridging international business relations for strategic development.",
    profileImage: "/profiles/kimble-ngo.jpg"
  },
  {
    name: "Tam Nguyen",
    title: "American Founding Member",
    country: "United States",
    countryFlag: "🇺🇸",
    initials: "TN",
    description: "American-Vietnamese expert on circular economy (ESG) with The Alliance to End Plastic Waste (AEPW), covering Vietnam, Thailand, and China. His work with the Minister of Agriculture and Environment (VN) and Multi-national Organization (World Bank, UNDP, ADB, WEF) deploy capital and support policies that promote green development.",
    profileImage: "/profiles/tam-nguyen.jpg"
  },
  {
    name: "Alexandre Ho Thanh",
    title: "French Founding Member",
    country: "France",
    countryFlag: "🇫🇷",
    initials: "AHT",
    description: "French-Vietnamese is a Legal and Tax Advisor, as a Director of RBA Group, specializing in IP, M&A, and FDI investment. He is also an International Arbitrator at Vietnam Traders Arbitration Centre (VTA) and Myanmar International Arbitration Centre (MIAC)",
    profileImage: "/profiles/alex.jpg"
  },
  {
    name: "Corina Trang Luong",
    title: "Romanian Founding Member",
    country: "Romania",
    countryFlag: "🇷🇴",
    initials: "CTL",
    description: "Romanian-Vietnamese seasoned business professional with over a decade of experience across the marketing, advertising, and technology sectors. She has built a dynamic career spanning multiple markets—including Europe, Southeast Asia, and Vietnam—driving growth and innovation for both global tech companies and startups. Her expertise lies in go-to-market strategy, digital media, and navigating fast-changing, high-growth markets.",
    profileImage: "/profiles/corina.jpg"
  }
]

function BoardMembersSection() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {boardMembers.map((member, index) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Member Header */}
                <div className="flex items-center gap-5 mb-5">
                  {/* Avatar with Initials */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
                  >
                    {member.initials}
                  </div>

                  {/* Name and Location */}
                  <div className="flex-1">
                    <h3 className="font-montserrat text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-sm flex items-center gap-1">
                      <span className="text-lg">{member.countryFlag}</span>
                      {member.country}
                    </p>
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-montserrat text-base font-semibold text-vietnam-red mb-4">
                  {member.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AdvisoryCommitteeSection() {
  const advisoryMembers = [
    {
      name: "Dr. Ngô Dương Hoàng Thao",
      title: "Advisory Committee Chair",
      country: "Denmark",
      countryFlag: "🇩🇰",
      initials: "DT",
      description: "Chairman & Founder of GROUP GLOBAL ONE, Danish Kieu Bao, with over 35 years in ICT, Telecom, and Energy experience in Denmark, Germany, America, and Vietnam.",
      profileImage: "/profiles/dr-thao.jpg"
    },
    {
      name: "Thy Tang",
      title: "Advisory Committee Member",
      country: "United States",
      countryFlag: "🇺🇸",
      initials: "TT",
      description: "FinTech innovator with 20+ years of experience building technology driven financial platforms across the U.S., UK, EU, Asia, and Vietnam. Co-Founder of Acquired.com and CTO of Qunit Group, a global Fintech Company.",
      profileImage: "/profiles/thy-tang.jpg"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-3xl md:text-4xl text-foreground mb-3">
              Advisory Committee
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced leaders providing strategic guidance to AKB's mission and activities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisoryMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-5 mb-5">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}
                  >
                    {member.initials}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-sm flex items-center gap-1">
                      <span className="text-lg">{member.countryFlag}</span>
                      {member.country}
                    </p>
                  </div>
                </div>
                <h4 className="font-montserrat text-base font-semibold text-golden-yellow mb-4">
                  {member.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
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
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section for Board Page */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/boardroomback.png"
            alt="Boardroom"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="heading-primary text-4xl md:text-5xl text-white mb-6">
            Founding Board Members
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leaders guiding the Association of Professional Kiều Bào
            towards a future of global Vietnamese excellence and strategic partnerships.
          </p>
        </div>
      </section>

      <BoardMembersSection />
      <AdvisoryCommitteeSection />
      <FooterSection />
    </main>
  )
}