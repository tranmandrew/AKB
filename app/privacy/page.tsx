'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ResolutionTooltip } from '@/components/resolution-tooltip';
import { FooterSection } from '@/components/footer-section';

const SECTIONS = [
  { id: 'collection', title: 'Information Collection' },
  { id: 'usage', title: 'Information Usage' },
  { id: 'sharing', title: 'Information Sharing' },
  { id: 'government', title: 'Government Relations' },
  { id: 'security', title: 'Data Security' },
  { id: 'transfers', title: 'International Transfers' },
  { id: 'rights', title: 'Your Privacy Rights' },
  { id: 'cookies', title: 'Cookie Policy' },
  { id: 'retention', title: 'Data Retention' },
  { id: 'gdpr', title: 'GDPR Compliance' },
  { id: 'changes', title: 'Policy Changes' },
  { id: 'contact', title: 'Contact Information' },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('collection');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're at the bottom of the page
      if (window.scrollY + windowHeight >= documentHeight - 50) {
        // Set to the last section when at bottom
        setActiveSection(SECTIONS[SECTIONS.length - 1].id);
        return;
      }

      for (const section of SECTIONS) {
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
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Professional privacy policy header background */}
      <div className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-emerald-900/5 to-blue-900/5"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.05'%3E%3Cpath d='M20 20h40v40H20z' stroke='%23059669' stroke-width='1' fill='none'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
        <div className="relative z-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-white">PRIVACY POLICY</span>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-light text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm lg:text-base">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <aside className="lg:w-80 lg:shrink-0">
            <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <div className="bg-card border border-border rounded-lg p-4 lg:p-6">
                <h3 className="font-medium text-foreground mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {SECTIONS.map((section) => (
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
            <section id="collection" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">1. Information Collection</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                The Association of Professional Kiều Bào collects information that you provide directly to us when engaging with our services.
              </p>
            </section>

            <section id="usage" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">2. Information Usage</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                We use your information for legitimate organizational purposes aligned with our mission as recognized under <ResolutionTooltip>Resolution 36-NQ/TW</ResolutionTooltip>.
              </p>
            </section>

            <section id="sharing" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                We maintain strict confidentiality standards while enabling legitimate organizational activities.
              </p>
            </section>

            <section id="government" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">4. Government Relations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                As an organization formally recognized by <ResolutionTooltip>Resolution 36-NQ/TW</ResolutionTooltip>, we maintain transparent relationships with Vietnamese government entities.
              </p>
            </section>

            <section id="security" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                We implement comprehensive security measures to protect your personal information.
              </p>
            </section>

            <section id="transfers" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">6. International Transfers</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                Given our global network spanning 13 international hubs, your information may be transferred internationally.
              </p>
            </section>

            <section id="rights" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">7. Your Privacy Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                You have comprehensive rights regarding your personal information.
              </p>
            </section>

            <section id="cookies" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">8. Cookie Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                Our website uses cookies and similar technologies to enhance functionality.
              </p>
            </section>

            <section id="retention" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">9. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                We retain personal information for as long as necessary to fulfill organizational purposes.
              </p>
            </section>

            <section id="gdpr" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">10. GDPR Compliance</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                For members and contacts in the European Union, we comply with the General Data Protection Regulation.
              </p>
            </section>

            <section id="changes" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">11. Policy Changes</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                We may update this Privacy Policy periodically to reflect changes in our practices.
              </p>
            </section>

            <section id="contact" className="mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-3 lg:mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                For questions about this Privacy Policy, please contact us at contact@akieubao.com.
              </p>
            </section>
          </div>
        </div>
      </div>
      </div>
      </div>

      <FooterSection />
    </main>
  );
}