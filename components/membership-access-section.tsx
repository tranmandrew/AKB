'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function MembershipAccessSection() {
  return (
    <section className="relative overflow-visible">

      {/* Three Benefits Section */}
      <div className="relative py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Three Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-8">

              {/* Card 1: Government Access */}
              <div className="bg-white border border-gray-200 group hover:shadow-lg transition-all duration-300 rounded-lg p-8 text-center h-full flex flex-col">
                <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-vietnam-red mb-4 leading-tight">
                  Government Access
                </h3>
                <p className="text-gray-700 leading-relaxed text-base flex-grow">
                  Platform access to Vietnamese policy-makers to influence development priorities
                </p>
              </div>

              {/* Card 2: Elite Network */}
              <div className="bg-white border border-gray-200 group hover:shadow-lg transition-all duration-300 rounded-lg p-8 text-center h-full flex flex-col">
                <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-vietnam-red mb-4 leading-tight">
                  Elite Network
                </h3>
                <p className="text-gray-700 leading-relaxed text-base flex-grow">
                  Access to a curated network of senior professionals across leading global companies and institutions
                </p>
              </div>

              {/* Card 3: Founding Legacy */}
              <div className="bg-white border border-gray-200 group hover:shadow-lg transition-all duration-300 rounded-lg p-8 text-center h-full flex flex-col">
                <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-vietnam-red mb-4 leading-tight">
                  Founding Legacy
                </h3>
                <p className="text-gray-700 leading-relaxed text-base flex-grow">
                  Be recognized as a founding member shaping the future of Vietnamese diaspora leadership
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Application Section */}
      <div className="py-32 bg-black diagonal-top">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Who Should Apply?
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-white/90 leading-relaxed">
                  If you're a Vietnamese professional with:
                </p>
                <ul className="space-y-4 text-lg text-white/80">
                  <li className="flex items-start gap-4">
                    <span className="text-vietnam-red font-bold text-2xl mt-1">•</span>
                    <span>Senior-level corporate experience</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-vietnam-red font-bold text-2xl mt-1">•</span>
                    <span>Expertise relevant to Vietnam's development</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-vietnam-red font-bold text-2xl mt-1">•</span>
                    <span>Commitment to contributing time and knowledge</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-vietnam-red font-bold text-2xl mt-1">•</span>
                    <span>Referral from current member</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-white/80 leading-relaxed pt-6 border-t border-white/20">
                Membership requires sponsorship from a current AKB member to ensure alignment with Vietnam's strategic development goals
              </p>
            </div>

            <a href="/contact">
              <Button
                size="lg"
                className="bg-vietnam-red hover:bg-vietnam-red/90 text-white px-8 py-4 text-lg font-semibold"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>

          </div>
        </div>
      </div>

    </section>
  )
}
