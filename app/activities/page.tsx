'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ActivitiesSection } from '@/components/activities-section';
import { FooterSection } from '@/components/footer-section';

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Activities section with integrated breadcrumb */}
      <div className="pt-32 bg-black">
        <div className="container mx-auto px-4 pb-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-white">ACTIVITIES</span>
          </div>
        </div>
      </div>
      <ActivitiesSection />

      <FooterSection />
    </main>
  );
}