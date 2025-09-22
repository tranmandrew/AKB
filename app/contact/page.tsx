'use client';

import Link from 'next/link';
import { ArrowLeft, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Header } from '@/components/header';
import Image from 'next/image';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Contact header with diagonal theme */}
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
          <h1 className="heading-primary text-4xl text-white mb-4">Get in Touch</h1>
          <p className="text-lg text-white/90 mb-2">
            Connect with AKB leadership for membership inquiries and strategic partnerships.
          </p>
          <p className="text-sm text-white/70">
            Response within 48 hours • Professional guidance
          </p>
        </div>
      </div>
      </div>
      </div>

      {/* Form section on white background */}
      <div className="py-16 bg-white" style={{
        marginTop: '-4vw'
      }}>
        <div className="container mx-auto px-4 max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">
                First Name <span className="text-vietnam-red">*</span>
              </label>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Your first name"
                required
              />
            </div>
            <div>
              <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">Last Name</label>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Your last name"
              />
            </div>
          </div>

          <div>
            <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">
              Email <span className="text-vietnam-red">*</span>
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@company.com"
              required
            />
          </div>

          <div>
            <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">Phone</label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">
              Message <span className="text-vietnam-red">*</span>
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share your professional background, current role, and interest in AKB membership. Include any referring member information if applicable."
              rows={6}
              required
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-sm text-blue-900 mb-2">What to Include:</h4>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>• Your current professional role and company</li>
              <li>• Areas of expertise relevant to Vietnam's development</li>
              <li>• Referring AKB member (if applicable)</li>
              <li>• Specific interest areas (policy, business, networking)</li>
            </ul>
          </div>

          <Button
            type="submit"
            className="w-full font-montserrat bg-vietnam-red hover:bg-vietnam-red/90 text-white py-6 text-lg"
          >
            Submit Inquiry
          </Button>
        </form>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              {/* Organization Info */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Image
                    src="/AKB.png"
                    alt="AKB Logo"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                  <h4 className="font-montserrat font-semibold text-white">Association of Professional Kiều Bào</h4>
                </div>
                <p className="text-sm text-white/80 leading-relaxed max-w-2xl mx-auto">
                  Connecting Vietnamese professionals worldwide to advance Vietnam's development through expertise and global partnerships.
                </p>
              </div>

              {/* Copyright */}
              <div className="pt-6 border-t border-white/20">
                <p className="text-white/70 text-sm mb-2">
                  © 2025 Association of Professional Kiều Bào. All rights reserved.
                </p>
                <div className="flex justify-center gap-4 text-xs text-white/60">
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