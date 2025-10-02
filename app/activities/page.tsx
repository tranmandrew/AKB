'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { ActivitiesSection } from '@/components/activities-section';
import { FooterSection } from '@/components/footer-section';

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Activities header with diagonal theme */}
      <div className="relative py-12 pt-32 pb-20 overflow-hidden bg-black" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 4vw), 0 100%)'
      }}>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='45' y='0' width='10' height='100'/%3E%3Crect x='0' y='45' width='100' height='10'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-8">
              <Link href="/">
                <Button variant="ghost" className="mb-6 text-white hover:text-white/80 hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <h1 className="heading-primary text-3xl md:text-4xl text-white mb-4">Our Activities</h1>
              <p className="text-lg text-white/90 mb-2">
                Serving as Vietnam's strategic channel for global expertise and professional excellence across critical development sectors.
              </p>
              <p className="text-sm text-white/70">
                Six core activities driving meaningful impact for Vietnam's development
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Activities section on white background */}
      <div className="bg-white" style={{
        marginTop: '-4vw'
      }}>
        <ActivitiesSection />
      </div>

      <FooterSection />
    </main>
  );
}