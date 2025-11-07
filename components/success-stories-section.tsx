'use client'

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Quote, ChevronLeft, ChevronRight, Star, Briefcase, Award } from "lucide-react"

interface Story {
  id: string
  name: string
  title: string
  company: string
  location: string
  category: "Policy Impact" | "Business Development" | "Knowledge Transfer" | "Community Building"
  story: string
  impact: string[]
  quote: string
  imageUrl?: string
}

const successStories: Story[] = [
  {
    id: "1",
    name: "Joe Nguyen",
    title: "Strategic Advisor",
    company: "Multiple Leadership Roles",
    location: "Singapore / Ho Chi Minh City",
    category: "Knowledge Transfer",
    story: "As a digital industry thought leader with extensive experience across Southeast Asia, Joe has been instrumental in bridging global best practices with Vietnam's emerging digital economy. His expertise in AI, platform strategy, and business analytics has guided numerous initiatives connecting Vietnamese startups with international opportunities.",
    impact: [
      "Facilitated 15+ strategic partnerships between Vietnamese and global tech companies",
      "Mentored 50+ emerging Vietnamese technology leaders",
      "Contributed to digital transformation policies through government engagement"
    ],
    quote: "Being part of AKB allows me to amplify the impact of my experience by connecting with like-minded professionals who share the vision of a prosperous, globally integrated Vietnam.",
  },
  {
    id: "2",
    name: "Thy Tang",
    title: "CEO & Founder, Treker",
    company: "EdTech & FinTech Innovator",
    location: "Los Angeles",
    category: "Business Development",
    story: "A U.S. Marine veteran turned FinTech innovator, Thy brings over 20 years of experience in building technology solutions. Through AKB, he has connected his EdTech platform Treker with Vietnamese education stakeholders, exploring opportunities to enhance student safety and transportation management in Vietnam's growing K-12 sector.",
    impact: [
      "Initiated partnerships with Vietnamese education technology providers",
      "Shared best practices in FinTech innovation with local startups",
      "Contributed expertise to AKB's financial sector dialogue initiatives"
    ],
    quote: "AKB provides a unique platform to leverage our global experience for Vietnam's development while building meaningful connections with accomplished professionals who share our heritage.",
  },
  {
    id: "3",
    name: "Strategic Policy Initiative",
    title: "Collective Achievement",
    company: "AKB Network",
    location: "Vietnam",
    category: "Policy Impact",
    story: "Through coordinated efforts across our network, AKB members have engaged with multiple Vietnamese government agencies to provide insights on digital transformation, ESG frameworks, and international business practices. This collective expertise has contributed to policy discussions at the Ministry of Planning and Investment and major city governments.",
    impact: [
      "5+ formal policy consultation sessions with government agencies",
      "Direct engagement with 3 major city governments on development initiatives",
      "Input provided on ESG and sustainability framework development"
    ],
    quote: "Together, we're not just individual professionals—we're a strategic channel for Vietnam's progress on the global stage.",
  },
  {
    id: "4",
    name: "Chamber Partnership Success",
    title: "Network Expansion",
    company: "AKB x Chambers of Commerce",
    location: "Vietnam",
    category: "Community Building",
    story: "AKB's strategic partnerships with EuroCham, BeluxCham, and SingCham have created unprecedented networking opportunities for members. These collaborations have resulted in joint events, business matchmaking sessions, and collaborative initiatives that strengthen both the Vietnamese diaspora community and international business relations.",
    impact: [
      "3 formal chamber partnerships established",
      "20+ joint networking events organized annually",
      "Expanded member access to 1000+ international business contacts"
    ],
    quote: "Our chamber partnerships demonstrate that AKB is serious about creating tangible value and connections for members.",
  }
]

export function SuccessStoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const categories = ["All", "Policy Impact", "Business Development", "Knowledge Transfer", "Community Building"]

  const filteredStories = activeCategory === "All"
    ? successStories
    : successStories.filter(story => story.category === activeCategory)

  const currentStory = filteredStories[activeIndex] || successStories[0]

  const nextStory = () => {
    setActiveIndex((prev) => (prev + 1) % filteredStories.length)
  }

  const prevStory = () => {
    setActiveIndex((prev) => (prev - 1 + filteredStories.length) % filteredStories.length)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Policy Impact": return "bg-vietnam-red/10 text-vietnam-red border-vietnam-red/20"
      case "Business Development": return "bg-golden-yellow/10 text-golden-yellow border-golden-yellow/20"
      case "Knowledge Transfer": return "bg-blue-600/10 text-blue-600 border-blue-600/20"
      case "Community Building": return "bg-jade-green/10 text-jade-green border-jade-green/20"
      default: return "bg-slate-100 text-slate-700 border-slate-200"
    }
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vietnam-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-golden-yellow/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-vietnam-red/10 px-4 py-2 rounded-full mb-4">
              <Award className="w-5 h-5 text-vietnam-red" />
              <span className="text-sm font-semibold text-vietnam-red">Member Success Stories</span>
            </div>
            <h2 className="heading-primary text-4xl md:text-5xl mb-4">
              Real <span className="text-vietnam-red">Impact</span>, Real Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our members are driving meaningful change for Vietnam through strategic initiatives, partnerships, and knowledge transfer.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setActiveCategory(category)
                  setActiveIndex(0)
                }}
                className={activeCategory === category ? "bg-vietnam-red hover:bg-vietnam-red/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Main Story Display */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
            {/* Story Card */}
            <Card className="lg:col-span-3 border-2 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-vietnam-red to-golden-yellow flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                      {currentStory.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-foreground mb-1">
                        {currentStory.name}
                      </h3>
                      <p className="text-sm text-vietnam-red font-medium mb-1">
                        {currentStory.title}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Briefcase className="w-3 h-3" />
                        {currentStory.company} • {currentStory.location}
                      </p>
                    </div>
                  </div>
                  <Badge className={`${getCategoryColor(currentStory.category)} border`}>
                    {currentStory.category}
                  </Badge>
                </div>

                {/* Story Content */}
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {currentStory.story}
                  </p>

                  {/* Impact Metrics */}
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-vietnam-red" />
                      Key Impact
                    </h4>
                    <ul className="space-y-2">
                      {currentStory.impact.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Star className="w-4 h-4 text-golden-yellow mt-0.5 flex-shrink-0" fill="currentColor" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quote */}
                  <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-lg border-l-4 border-vietnam-red relative">
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-vietnam-red/20" />
                    <p className="text-foreground italic leading-relaxed relative z-10">
                      "{currentStory.quote}"
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t">
                  <div className="text-sm text-muted-foreground">
                    Story {activeIndex + 1} of {filteredStories.length}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevStory}
                      disabled={filteredStories.length <= 1}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextStory}
                      disabled={filteredStories.length <= 1}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Story Thumbnails */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-semibold text-lg mb-4">More Success Stories</h3>
              {filteredStories.map((story, index) => (
                <Card
                  key={story.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    index === activeIndex
                      ? 'border-2 border-vietnam-red shadow-lg'
                      : 'border hover:border-slate-300 hover:shadow-md'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-vietnam-red to-golden-yellow flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {story.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-foreground mb-1 truncate">
                          {story.name}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {story.title}
                        </p>
                        <Badge className={`${getCategoryColor(story.category)} text-xs mt-2`}>
                          {story.category}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-vietnam-red/5 via-golden-yellow/5 to-jade-green/5 p-8 rounded-2xl">
            <p className="text-lg font-semibold text-foreground mb-2">
              Ready to Make Your Impact?
            </p>
            <p className="text-muted-foreground mb-6">
              Join our distinguished network and contribute to Vietnam's future
            </p>
            <Button
              size="lg"
              className="bg-vietnam-red hover:bg-vietnam-red/90 text-white"
              asChild
            >
              <a href="/membership">Apply for Membership</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
