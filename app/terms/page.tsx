'use client';

import Link from 'next/link';
import { ArrowLeft, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ResolutionTooltip } from '@/components/resolution-tooltip';

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('acceptance');

  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'organization', title: 'Organization Description' },
    { id: 'membership', title: 'Membership Requirements' },
    { id: 'conduct', title: 'Professional Conduct' },
    { id: 'government', title: 'Government Relations' },
    { id: 'intellectual', title: 'Intellectual Property' },
    { id: 'confidentiality', title: 'Confidentiality' },
    { id: 'networking', title: 'Networking Events' },
    { id: 'termination', title: 'Membership Termination' },
    { id: 'liability', title: 'Limitation of Liability' },
    { id: 'governing', title: 'Governing Law' },
    { id: 'contact', title: 'Contact Information' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're at the bottom of the page
      if (window.scrollY + windowHeight >= documentHeight - 50) {
        // Set to the last section when at bottom
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Professional terms of service header background */}
      <div className="relative py-12 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/5 via-slate-900/5 to-red-900/5"></div>
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.04'%3E%3Cpath d='M50 5l45 25v40L50 95 5 70V30z' stroke='%23dc2626' stroke-width='1' fill='none'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
        <div className="relative z-10">
      <div className="container mx-auto px-4 max-w-7xl lg:px-6">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-2xl lg:text-4xl font-light text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground text-sm lg:text-base">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-80 lg:shrink-0">
            <div className="lg:sticky lg:top-8 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
              <div className="bg-card border border-border rounded-lg p-4 lg:p-6">
                <h3 className="font-medium text-foreground mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        activeSection === section.id
                          ? 'bg-vietnam-red text-white'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <div className="flex-1 prose prose-neutral dark:prose-invert max-w-none lg:prose-lg">
            <section id="acceptance" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                By accessing and using the Association of Professional Kiều Bào website ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree with these terms, please do not use our Service.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                These Terms of Service constitute a legally binding agreement between you and the Association of Professional Kiều Bào, recognized under <ResolutionTooltip>Resolution 36-NQ/TW</ResolutionTooltip> of the Politburo of Vietnam.
              </p>
            </section>

            <section id="organization" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">2. Organization Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                The Association of Professional Kiều Bào is a distinguished organization formally recognized by <ResolutionTooltip>Resolution 36-NQ/TW</ResolutionTooltip> of the Politburo as an integral part of the Vietnamese national community. Our mission is to connect global Vietnamese excellence with Vietnam's strategic development.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                We operate through 13 international hubs, bringing together Vietnamese professionals from leading multinational corporations including Google, Mastercard, UBS, Standard Chartered, Amazon, Microsoft, and other Fortune 500 companies.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                Our organization serves as a vital bridge for Vietnam's international affairs, leveraging collective expertise for Vietnam's robust growth and stability through three key resources: economic development, intellectual capital, and soft power diplomacy.
              </p>
            </section>

            <section id="membership" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">3. Membership Requirements</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                Membership in the Association is exclusively limited to distinguished Vietnamese professionals (Kiều Bào) who meet our stringent criteria:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2 text-sm lg:text-base">
                <li>Vietnamese origin and demonstrated commitment to Vietnam's development</li>
                <li>Senior-level positions at multinational corporations or equivalent professional standing</li>
                <li>Proven track record of professional excellence and leadership</li>
                <li>Commitment to participating in government and policy dialogue initiatives</li>
                <li>Ability to contribute meaningful expertise to Vietnam's strategic priorities</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                All membership applications undergo thorough review by our founding board members, representing our international hubs across Canada, Singapore, Malaysia, France, and Czech Republic.
              </p>
            </section>

            <section id="conduct" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">4. Professional Conduct</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                Members are expected to maintain the highest standards of professional conduct and represent the Association with dignity in all government and business engagements. This includes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2 text-sm lg:text-base">
                <li>Upholding ethical business practices in all professional dealings</li>
                <li>Maintaining confidentiality of sensitive government and business discussions</li>
                <li>Representing Vietnam and the Association with honor and integrity</li>
                <li>Contributing positively to policy dialogue and development initiatives</li>
                <li>Adhering to all applicable laws and regulations in their respective countries</li>
              </ul>
            </section>

            <section id="government" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">5. Government Relations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                The Association operates in accordance with Vietnamese law and maintains transparent relationships with government ministries and departments for policy dialogue and development initiatives. Our government engagement includes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2 text-sm lg:text-base">
                <li>Direct dialogue with Ministry of Foreign Affairs and Ministry of Planning and Investment</li>
                <li>Participation in strategic discussions with Ho Chi Minh City, Hanoi, and Da Nang governments</li>
                <li>Collaboration with National Chambers of Commerce including BeluxCham, EuroCham, SingCham, and AmCham</li>
                <li>Contributing to Vietnam's international trade and development policies</li>
              </ul>
            </section>

            <section id="intellectual" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                All content on this website, including but not limited to text, graphics, logos, corporate partnerships displays, and images, is the property of the Association of Professional Kiều Bào and is protected by applicable intellectual property laws.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                Members retain ownership of their professional contributions but grant the Association non-exclusive rights to use such contributions for organizational purposes, policy documents, and government presentations.
              </p>
            </section>

            <section id="confidentiality" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">7. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                Members may have access to confidential information regarding government policy discussions, business development initiatives, and strategic planning. All members agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2 text-sm lg:text-base">
                <li>Maintain strict confidentiality of all sensitive information</li>
                <li>Use confidential information solely for Association purposes</li>
                <li>Not disclose confidential information to unauthorized parties</li>
                <li>Return or destroy confidential materials upon request or membership termination</li>
              </ul>
            </section>

            <section id="networking" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">8. Networking Events</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                The Association organizes exclusive networking events, policy forums, and government engagement sessions. Participation in these events requires:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2 text-sm lg:text-base">
                <li>Advance registration and confirmation of attendance</li>
                <li>Compliance with dress code and professional etiquette standards</li>
                <li>Respect for all participants, government officials, and business leaders</li>
                <li>Adherence to Chatham House Rules when specified</li>
              </ul>
            </section>

            <section id="termination" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">9. Membership Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                Membership may be terminated by either party with 30 days written notice. The Association reserves the right to immediately terminate membership for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2 text-sm lg:text-base">
                <li>Violation of professional conduct standards</li>
                <li>Breach of confidentiality agreements</li>
                <li>Actions that damage the Association's reputation or mission</li>
                <li>Non-participation in Association activities for extended periods</li>
              </ul>
            </section>

            <section id="liability" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">10. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                The Association shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service or participation in Association activities. This includes but is not limited to business losses, professional opportunities, or government policy outcomes.
              </p>
            </section>

            <section id="governing" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">11. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                These Terms of Service are governed by the laws of Vietnam and the international legal frameworks applicable to overseas Vietnamese communities. Disputes shall be resolved through mediation, with preference for resolution through Vietnamese diplomatic channels when appropriate.
              </p>
            </section>

            <section id="contact" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                For questions about these Terms of Service, membership applications, or Association activities, please contact us:
              </p>
              <ul className="list-none text-muted-foreground mb-4 space-y-2 text-sm lg:text-base">
                <li><strong>Email:</strong> contact@akieubao.com</li>
                <li><strong>Website:</strong> AKieuBao.com</li>
                <li><strong>LinkedIn:</strong> Association of Professional Kiều Bào</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                We maintain offices through our 13 international hubs and welcome inquiries from qualified Vietnamese professionals worldwide.
              </p>
            </section>
          </div>
        </div>
      </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              {/* Organization Info */}
              <div className="mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Image
                    src="/AKB.png"
                    alt="AKB Logo"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                  <h4 className="font-semibold text-foreground">Association of Professional Kiều Bào</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Connecting Vietnamese professionals worldwide to advance Vietnam's development through expertise and global partnerships.
                </p>
              </div>

              {/* Contact Button */}
              <div className="mb-6">
                <Link href="/contact">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Contact Us
                  </Button>
                </Link>
              </div>

              {/* Social Media Links */}
              <div>
                <p className="text-sm font-medium text-foreground mb-3">Follow Our Journey</p>
                <div className="flex justify-center gap-3">
                  <a
                    href="#"
                    className="flex items-center justify-center w-9 h-9 bg-singapore-blue/10 hover:bg-singapore-blue/20 rounded-lg text-singapore-blue hover:text-singapore-blue/80 transition-all duration-200 hover:scale-105"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-9 h-9 bg-pink-500/10 hover:bg-pink-500/20 rounded-lg text-pink-500 hover:text-pink-500/80 transition-all duration-200 hover:scale-105"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-9 h-9 bg-blue-600/10 hover:bg-blue-600/20 rounded-lg text-blue-600 hover:text-blue-600/80 transition-all duration-200 hover:scale-105"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-6 border-t border-border">
              <p className="text-muted-foreground text-sm mb-2">
                © 2025 Association of Professional Kiều Bào. All rights reserved.
              </p>
              <div className="flex justify-center gap-4 text-xs text-muted-foreground">
                <a href="/terms" className="hover:text-vietnam-red transition-colors">Terms of Service</a>
                <span>•</span>
                <a href="/privacy" className="hover:text-vietnam-red transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}