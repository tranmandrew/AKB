import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"

interface BoardMember {
  name: string
  title: string
  country: string
  description: string
  profileImage?: string
}

const boardMembers: BoardMember[] = [
  {
    name: "Kimble Ngo",
    title: "Canadian Founding Member",
    country: "Canada",
    description: "Prominent Canadian Vietnamese leader (Kiều Bào) with fintech and ESG expertise from UBS and Standard Chartered Ventures. Regularly advises government bodies and corporates across Vietnam and SEA, bridging Canadian-Vietnamese business relations for strategic development.",
    profileImage: "/profiles/kimble-ngo.jpg"
  },
  {
    name: "Tam Nguyen",
    title: "Singaporean Founding Member",
    country: "Singapore",
    description: "Distinguished professional contributing expertise to the Association's mission of connecting Vietnamese excellence globally for Vietnam's prosperity.",
    profileImage: "/profiles/tam-nguyen.jpg"
  },
  {
    name: "Như",
    title: "Malaysian Founding Member",
    country: "Malaysia",
    description: "Malaysian Vietnamese community leader bringing valuable insights from Southeast Asian markets and fostering Vietnam-Malaysia business partnerships for regional development.",
    profileImage: "/profiles/nhu.jpg"
  },
  {
    name: "Alex",
    title: "French Founding Member",
    country: "France",
    description: "French Vietnamese professional with extensive European market experience, facilitating Vietnam-EU business relations and contributing to cross-continental strategic initiatives.",
    profileImage: "/profiles/alex.jpg"
  },
  {
    name: "Corina",
    title: "Czech Founding Member",
    country: "Czech Republic",
    description: "Czech Vietnamese leader with deep Central European expertise, bridging Vietnam and EU markets while advancing collaborative opportunities in emerging European economies.",
    profileImage: "/profiles/corina.jpg"
  }
]

function BoardMembersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        <div className="max-w-4xl mx-auto space-y-6">
          {boardMembers.map((member, index) => (
            <div
              key={member.name}
              className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-6">
                {/* Profile Image Placeholder */}
                <div className="w-24 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-md flex items-center justify-center border border-gray-200 flex-shrink-0">
                  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-montserrat text-lg font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <span className="font-montserrat inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                      {member.country}
                    </span>
                  </div>

                  <h4 className="font-montserrat text-sm font-medium text-vietnam-red mb-3">
                    {member.title}
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
      <section className="pt-20 pb-20 relative bg-vietnam-red opacity-70">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="heading-primary text-4xl text-white mb-8">
            Founding Board Members
          </h1>
          <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
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