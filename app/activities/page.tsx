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

      {/* Activities section */}
      <div className="pt-20">
        <ActivitiesSection />
      </div>

      <FooterSection />
    </main>
  );
}