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
    description: "Prominent Canadian Vietnamese leader (Kiều Bào) with fintech and ESG expertise from UBS and Standard Chartered Ventures. Regularly advises government bodies and corporates across Vietnam and SEA, bridging Canadian-Vietnamese business relations for strategic development.",
    profileImage: "/profiles/kimble-ngo.jpg"
  },
  {
    name: "Tam Nguyen",
    title: "Singaporean Founding Member",
    country: "Singapore",
    countryFlag: "🇸🇬",
    initials: "TN",
    description: "Distinguished professional contributing expertise to the Association's mission of connecting Vietnamese excellence globally for Vietnam's prosperity.",
    profileImage: "/profiles/tam-nguyen.jpg"
  },
  {
    name: "Như",
    title: "Malaysian Founding Member",
    country: "Malaysia",
    countryFlag: "🇲🇾",
    initials: "N",
    description: "Malaysian Vietnamese community leader bringing valuable insights from Southeast Asian markets and fostering Vietnam-Malaysia business partnerships for regional development.",
    profileImage: "/profiles/nhu.jpg"
  },
  {
    name: "Alex",
    title: "French Founding Member",
    country: "France",
    countryFlag: "🇫🇷",
    initials: "A",
    description: "French Vietnamese professional with extensive European market experience, facilitating Vietnam-EU business relations and contributing to cross-continental strategic initiatives.",
    profileImage: "/profiles/alex.jpg"
  },
  {
    name: "Corina",
    title: "Czech Founding Member",
    country: "Czech Republic",
    countryFlag: "🇨🇿",
    initials: "C",
    description: "Czech Vietnamese leader with deep Central European expertise, bridging Vietnam and EU markets while advancing collaborative opportunities in emerging European economies.",
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
      <FooterSection />
    </main>
  )
}