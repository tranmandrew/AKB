import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Globe, Handshake } from "lucide-react"
import { CorporateLogos } from "./corporate-logos"
import Image from "next/image"
import { ResolutionTooltip } from "./resolution-tooltip"

export function WhoWeAreSection() {
  const companies = [
    "Google",
    "Mastercard",
    "UBS",
    "SAP",
    "BOSCH",
    "Amazon",
    "Microsoft",
    "DBS",
    "Standard Chartered",
    "JPMorgan",
    "Visa",
    "Applied Materials",
    "UOB",
    "Ant International",
    "Grab",
    "ACCA",
  ]

  const countries = [
    { name: "Singapore", code: "SG" },
    { name: "Canada", code: "CA" },
    { name: "United States", code: "US" },
    { name: "France", code: "FR" },
    { name: "United Kingdom", code: "GB" },
    { name: "Germany", code: "DE" },
    { name: "Russia", code: "RU" },
    { name: "Czech Republic", code: "CZ" },
    { name: "Romania", code: "RO" },
    { name: "Japan", code: "JP" },
  ]

  const governmentEngagements = [
    "Ministry of Foreign Affairs",
    "Ministry of Planning and Investment",
    "Ho Chi Minh City Government",
    "Hanoi City Government",
    "Da Nang City Government",
  ]

  const chambers = [
    {
      name: "BeluxCham",
      src: "/beluxcham_logo.jpg",
      alt: "BeluxCham Logo"
    },
    {
      name: "EuroCham",
      src: "/eurocham_vietnam_logo.jpg",
      alt: "EuroCham Vietnam Logo"
    },
    {
      name: "SingCham",
      src: "/singapore_chamber_of_commerce_vietnam_logo.jpg",
      alt: "Singapore Chamber of Commerce Vietnam Logo"
    }
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Professional business background with Vietnamese flag accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-yellow-50/30 to-emerald-50/30 dark:from-red-950/10 dark:via-yellow-950/10 dark:to-emerald-950/10"></div>

      {/* Global network pattern overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.06'%3E%3Cpath d='M40 0l40 40-40 40L0 40z'/%3E%3Cpath d='M20 20l20 20-20 20-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px'
      }}></div>

      <div className="relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6 text-balance">
              An Integral Part of the{" "}
              <span className="font-medium text-vietnam-red">Vietnamese National Community</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Recognized by <ResolutionTooltip>Resolution 36-NQ/TW</ResolutionTooltip> of the Politburo as a vital bridge for global affairs, leveraging collective expertise for Vietnam's robust growth and stability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="executive-card hover-elevate">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-6 w-6 text-vietnam-red" />
                  <h3 className="text-xl font-medium text-foreground">KIỀU BÀO DEFINITION</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  People of Vietnamese origin living outside Vietnam, formally recognized as an inseparable part of the Vietnamese national community and a key resource for national development through:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-vietnam-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <strong className="text-foreground">Economic Resources</strong> - Foreign currency, direct investment, business development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-golden-yellow rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <strong className="text-foreground">Intellectual Capital</strong> - "Gray matter" expertise, knowledge transfer, innovation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-jade-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <strong className="text-foreground">Soft Power & Diplomacy</strong> - Cultural ambassadors, bilateral relationships
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="executive-card hover-elevate">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="h-6 w-6 text-singapore-blue" />
                  <h3 className="text-xl font-medium text-foreground">GOVERNMENT ENGAGEMENT</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Active dialogue with Vietnamese authorities through substantive forums for policy suggestions, investment opportunities, and strategic development initiatives.
                </p>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">MINISTERIAL & DEPARTMENTAL PARTNERSHIPS</h4>
                  <div className="flex flex-wrap gap-2">
                    {governmentEngagements.map((entity, index) => (
                      <span key={index} className="px-3 py-1 bg-singapore-blue/10 text-singapore-blue text-sm rounded-full">
                        {entity}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="executive-card hover-elevate">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="h-6 w-6 text-golden-yellow" />
                  <h3 className="text-xl font-medium text-foreground">GLOBAL CORPORATE NETWORK</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Distinguished professionals from world-renowned multinational corporations across 13 international hubs, bringing decades of executive experience and global perspectives.
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-4">MAJOR SPONSORS & MEMBER CORPORATIONS</h4>
                  <CorporateLogos variant="section" showTitle={false} maxLogos={10} />
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">INTERNATIONAL PRESENCE</h4>
                  <div className="flex flex-wrap gap-2">
                    {countries.map((country, index) => (
                      <div
                        key={index}
                        className="relative px-3 py-2 h-10 bg-card text-muted-foreground text-xs rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 border border-border/50 hover:border-golden-yellow/40 hover:shadow-lg group"
                      >
                        {/* Flag background */}
                        <div className="absolute inset-0 opacity-15 group-hover:opacity-25 flex items-center justify-center transition-opacity duration-300">
                          <Image
                            src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                            alt={`${country.name} flag`}
                            width={40}
                            height={30}
                            className="object-cover w-full h-full scale-125"
                            style={{
                              filter: 'blur(0.5px) brightness(0.7)',
                            }}
                          />
                        </div>
                        {/* Small flag icon in corner */}
                        <div className="absolute top-1 right-1 w-4 h-3 rounded-sm overflow-hidden opacity-70 group-hover:opacity-90 transition-opacity duration-300">
                          <Image
                            src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                            alt={`${country.name} flag`}
                            width={16}
                            height={12}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        {/* Country name overlay - positioned at bottom */}
                        <div className="relative z-10 flex items-end h-full">
                          <span className="font-medium text-foreground group-hover:text-golden-yellow transition-colors duration-300">
                            {country.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="executive-card hover-elevate">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Handshake className="h-6 w-6 text-jade-green" />
                  <h3 className="text-xl font-medium text-foreground">CHAMBERS OF COMMERCE</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Strategic partnerships with leading National Chambers of Commerce to bridge international business with local opportunities and facilitate meaningful trade relationships.
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">CHAMBER PARTNERSHIPS</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {chambers.map((chamber, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center p-4 bg-card rounded-lg border border-border hover:border-jade-green/20 transition-all duration-300 hover:shadow-lg executive-card"
                      >
                        <Image
                          src={chamber.src}
                          alt={chamber.alt}
                          width={320}
                          height={160}
                          className={`object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 ${
                            chamber.name === 'EuroCham' ? 'h-44 w-auto' : 'h-36 w-auto'
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Cultural Engagement:</strong> Active participation in Tet celebrations, National Day events, and strategic dialogues in Ho Chi Minh City, Hanoi, and Da Nang.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
