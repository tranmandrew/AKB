'use client'

import { UserCheck, Users, Mail, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MembershipSection() {
  return (
    <section id="membership" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-3xl md:text-4xl text-foreground mb-4">
              <span className="text-vietnam-red">Membership</span> & Professional Directory
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join our specialized network of Vietnamese professionals making an impact globally
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Membership Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover-elevate">
              <div className="bg-gradient-to-r from-vietnam-red to-vietnam-red/80 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Membership</h3>
                    <p className="text-white/90">Access by referral</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-vietnam-red/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="h-4 w-4 text-vietnam-red" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Referral Required</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        New members must be referred by existing members to maintain our network's professional standards and trust.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-golden-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="h-4 w-4 text-golden-yellow" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Professional Excellence</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Members from leading multinational corporations and local businesses with proven track records.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      className="w-full bg-vietnam-red hover:bg-vietnam-red/90 text-white"
                      size="lg"
                    >
                      Apply for Membership
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Directory of Professionals Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover-elevate">
              <div className="bg-gradient-to-r from-jade-green to-jade-green/80 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Directory of Professionals</h3>
                    <p className="text-white/90">Stay connected & informed</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Newsletter Includes:</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-jade-green rounded-full flex-shrink-0 mt-2"></div>
                        <span>Government programs open for Kiều Bào participation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-jade-green rounded-full flex-shrink-0 mt-2"></div>
                        <span>Exciting news from Vietnam's development initiatives</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-jade-green rounded-full flex-shrink-0 mt-2"></div>
                        <span>Professional highlights and member achievements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-jade-green rounded-full flex-shrink-0 mt-2"></div>
                        <span>Networking opportunities and events</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button
                      variant="outline"
                      className="w-full border-jade-green text-jade-green hover:bg-jade-green hover:text-white"
                      size="lg"
                    >
                      Join Newsletter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}