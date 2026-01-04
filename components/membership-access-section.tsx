'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Landmark, Users, Award, UserPlus, FileText, Search, CheckCircle } from "lucide-react"
import Image from "next/image"

export function MembershipAccessSection() {
  return (
    <section className="relative overflow-visible">

      {/* Membership Process Timeline */}
      <div className="relative py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              Membership Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {/* Step 1: Get Referral */}
              <div className="relative text-center group">
                <div className="mb-6 relative">
                  <div className="mx-auto w-20 h-20 rounded-full bg-vietnam-red/10 flex items-center justify-center group-hover:bg-vietnam-red/20 transition-colors">
                    <UserPlus className="w-10 h-10 text-vietnam-red" />
                  </div>
                  <div className="absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 hidden md:block" style={{transform: 'translateX(50%)'}}></div>
                </div>
                <div className="bg-gray-100 text-vietnam-red font-bold text-sm px-3 py-1 rounded-full inline-block mb-3">
                  STEP 1
                </div>
                <h3 className="font-montserrat text-xl font-bold text-gray-900 mb-3">
                  Get Referral
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Connect with a current AKB member who can sponsor your application
                </p>
              </div>

              {/* Step 2: Submit Application */}
              <div className="relative text-center group">
                <div className="mb-6 relative">
                  <div className="mx-auto w-20 h-20 rounded-full bg-vietnam-red/10 flex items-center justify-center group-hover:bg-vietnam-red/20 transition-colors">
                    <FileText className="w-10 h-10 text-vietnam-red" />
                  </div>
                  <div className="absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 hidden md:block" style={{transform: 'translateX(50%)'}}></div>
                </div>
                <div className="bg-gray-100 text-vietnam-red font-bold text-sm px-3 py-1 rounded-full inline-block mb-3">
                  STEP 2
                </div>
                <h3 className="font-montserrat text-xl font-bold text-gray-900 mb-3">
                  Submit Application
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Complete your membership application with professional background
                </p>
              </div>

              {/* Step 3: Review Process */}
              <div className="relative text-center group">
                <div className="mb-6 relative">
                  <div className="mx-auto w-20 h-20 rounded-full bg-vietnam-red/10 flex items-center justify-center group-hover:bg-vietnam-red/20 transition-colors">
                    <Search className="w-10 h-10 text-vietnam-red" />
                  </div>
                  <div className="absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 hidden md:block" style={{transform: 'translateX(50%)'}}></div>
                </div>
                <div className="bg-gray-100 text-vietnam-red font-bold text-sm px-3 py-1 rounded-full inline-block mb-3">
                  STEP 3
                </div>
                <h3 className="font-montserrat text-xl font-bold text-gray-900 mb-3">
                  Review Process
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our committee reviews your qualifications and alignment with AKB mission
                </p>
              </div>

              {/* Step 4: Welcome */}
              <div className="relative text-center group">
                <div className="mb-6">
                  <div className="mx-auto w-20 h-20 rounded-full bg-vietnam-red/10 flex items-center justify-center group-hover:bg-vietnam-red/20 transition-colors">
                    <CheckCircle className="w-10 h-10 text-vietnam-red" />
                  </div>
                </div>
                <div className="bg-gray-100 text-vietnam-red font-bold text-sm px-3 py-1 rounded-full inline-block mb-3">
                  STEP 4
                </div>
                <h3 className="font-montserrat text-xl font-bold text-gray-900 mb-3">
                  Welcome to AKB
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Join our network and start contributing to Vietnam's development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Three Benefits Section */}
      <div className="relative py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(218, 30, 40) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">

            {/* Three Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-8">

              {/* Card 1: Government Access */}
              <div className="bg-white border border-gray-200 group hover:shadow-lg transition-all duration-300 rounded-lg p-8 text-center h-full flex flex-col">
                <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-vietnam-red/10 flex items-center justify-center group-hover:bg-vietnam-red/20 transition-colors">
                  <Landmark className="w-8 h-8 text-vietnam-red" />
                </div>
                <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-vietnam-red mb-4 leading-tight">
                  Government Access
                </h3>
                <p className="text-gray-700 leading-relaxed text-base flex-grow">
                  Platform access to Vietnamese policy-makers to influence development priorities
                </p>
              </div>

              {/* Card 2: Elite Network */}
              <div className="bg-white border border-gray-200 group hover:shadow-lg transition-all duration-300 rounded-lg p-8 text-center h-full flex flex-col">
                <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-vietnam-red/10 flex items-center justify-center group-hover:bg-vietnam-red/20 transition-colors">
                  <Users className="w-8 h-8 text-vietnam-red" />
                </div>
                <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-vietnam-red mb-4 leading-tight">
                  Elite Network
                </h3>
                <p className="text-gray-700 leading-relaxed text-base flex-grow">
                  Access to a curated network of senior professionals across leading global companies and institutions
                </p>
              </div>

              {/* Card 3: Founding Legacy */}
              <div className="bg-white border border-gray-200 group hover:shadow-lg transition-all duration-300 rounded-lg p-8 text-center h-full flex flex-col">
                <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-vietnam-red/10 flex items-center justify-center group-hover:bg-vietnam-red/20 transition-colors">
                  <Award className="w-8 h-8 text-vietnam-red" />
                </div>
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
      <div className="py-40 bg-black diagonal-top">
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
