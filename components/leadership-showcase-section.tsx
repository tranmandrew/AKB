'use client'

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, MapPin, GraduationCap, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LeaderProfile {
  id: string
  name: string
  title: string
  company: string
  location: string
  education: string
  expertise: string[]
  bio: string
  linkedinUrl: string
  imageUrl?: string
  achievements?: string[]
}

const foundingMembers: LeaderProfile[] = [
  {
    id: "joe-nguyen",
    name: "Joe Nguyen",
    title: "Strategic Advisor",
    company: "Singapore / HCMC",
    location: "Singapore",
    education: "MIT Sloan Executive Education",
    expertise: ["Digital Strategy", "Business Development", "AI & ML"],
    bio: "Senior management professional with extensive experience in digital industries across Southeast Asia.",
    linkedinUrl: "https://www.linkedin.com/in/joenguyenht/",
  },
  {
    id: "thy-tang",
    name: "Thy Tang",
    title: "CEO & Founder, Treker",
    company: "EdTech & FinTech",
    location: "Los Angeles",
    education: "U.S. Marine Veteran",
    expertise: ["EdTech", "FinTech", "Student Safety"],
    bio: "U.S. Marine veteran and FinTech innovator with 20+ years of experience building technology solutions.",
    linkedinUrl: "https://www.linkedin.com/in/thytang/",
  },
  {
    id: "alex-ho-thanh",
    name: "Alex Ho Thanh",
    title: "Professional Member",
    company: "Global",
    location: "International",
    education: "Professional Background",
    expertise: ["Leadership", "Strategy"],
    bio: "Professional contributing to Vietnam's development initiatives.",
    linkedinUrl: "https://www.linkedin.com/in/alexhothanh/",
  },
  {
    id: "corina-trang-luong",
    name: "Corina Trang Luong",
    title: "Professional Member",
    company: "Global",
    location: "International",
    education: "Professional Background",
    expertise: ["Strategy", "Innovation"],
    bio: "Professional supporting Vietnam's global network development.",
    linkedinUrl: "https://www.linkedin.com/in/corinatrangluong/",
  },
  {
    id: "tam-nguyen",
    name: "Tam Nguyen",
    title: "Professional Member",
    company: "Vietnam",
    location: "Vietnam",
    education: "Professional Background",
    expertise: ["Business Development", "Strategy"],
    bio: "Professional with expertise in business strategy and operations.",
    linkedinUrl: "https://vn.linkedin.com/in/tamnguyen",
  },
  {
    id: "kimble-ngo",
    name: "Kimble Ngo",
    title: "Professional Member",
    company: "Vietnam",
    location: "Vietnam",
    education: "Professional Background",
    expertise: ["Technology", "Innovation"],
    bio: "Technology professional supporting digital transformation.",
    linkedinUrl: "https://vn.linkedin.com/in/kimblengo",
  }
]

export function LeadershipShowcaseSection() {
  const [selectedMember, setSelectedMember] = useState<LeaderProfile | null>(null)

  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="heading-primary text-3xl md:text-4xl mb-3">
              <span className="text-vietnam-red">Founding Members</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Professionals with experience at leading global organizations, working together to support Vietnam's development.
            </p>
          </div>

          {/* Leadership Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {foundingMembers.map((member) => (
              <Card
                key={member.id}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-vietnam-red/30 bg-white"
                onClick={() => setSelectedMember(member)}
              >
                <CardContent className="p-6">
                  {/* Member Avatar */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-vietnam-red to-golden-yellow flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg text-foreground mb-1 truncate">
                        {member.name}
                      </h3>
                      <p className="text-sm text-vietnam-red font-medium mb-2 line-clamp-2">
                        {member.title}
                      </p>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="w-4 h-4 text-golden-yellow flex-shrink-0" />
                      <span className="truncate">{member.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-jade-green flex-shrink-0" />
                      <span className="truncate">{member.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <GraduationCap className="w-4 h-4 text-vietnam-red flex-shrink-0" />
                      <span className="truncate">{member.education}</span>
                    </div>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.slice(0, 3).map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs bg-slate-100 text-slate-700"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Bio Preview */}
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {member.bio}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group-hover:border-vietnam-red group-hover:text-vietnam-red transition-colors"
                    >
                      View Profile
                      <ExternalLink className="ml-2 w-3 h-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="hover:bg-blue-50 hover:text-blue-600"
                    >
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center pt-8 border-t">
            <p className="text-sm text-muted-foreground mb-4">
              Referral required for membership
            </p>
            <Button
              size="lg"
              className="bg-vietnam-red hover:bg-vietnam-red/90 text-white"
              asChild
            >
              <a href="/membership">Learn About Membership</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Modal for detailed view - would need Dialog component from radix-ui */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-vietnam-red to-golden-yellow flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                  {selectedMember.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    {selectedMember.name}
                  </h2>
                  <p className="text-lg text-vietnam-red font-medium mb-4">
                    {selectedMember.title}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      {selectedMember.company}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {selectedMember.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      {selectedMember.education}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">About</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {selectedMember.achievements && (
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Key Achievements</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {selectedMember.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <Button
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    asChild
                  >
                    <a href={selectedMember.linkedinUrl} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 w-4 h-4" />
                      View LinkedIn Profile
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedMember(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  )
}
