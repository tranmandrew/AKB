'use client';

import Link from 'next/link';
import { ArrowLeft, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FooterSection } from '@/components/footer-section';
import Image from 'next/image';
import { useState } from 'react';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // Create mailto link with form data
    const subject = encodeURIComponent('AKB Membership Application');
    const body = encodeURIComponent(
      `Name: ${formData.get('firstName')} ${formData.get('lastName')}\n` +
      `Email: ${formData.get('email')}\n` +
      `Phone: ${formData.get('phone')}\n` +
      `LinkedIn Profile: ${formData.get('linkedInProfile')}\n\n` +
      `Industry: ${formData.get('industry')}\n` +
      `Area of Interest: ${formData.get('areaOfInterest')}\n` +
      `Overseas Experience: ${formData.get('overseasExperience')}\n\n` +
      `Referral Member: ${formData.get('referralMember')}\n\n` +
      `Message:\n${formData.get('message')}`
    );

    window.location.href = `mailto:kimble@akieubao.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Contact header with diagonal theme */}
      <div className="relative pt-32 pb-16 overflow-hidden bg-black" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 4vw), 0 100%)'
      }}>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='45' y='0' width='10' height='100'/%3E%3Crect x='0' y='45' width='100' height='10'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <span>/</span>
              <span className="text-white">CONTACT</span>
            </div>
            <div className="max-w-6xl mx-auto">
            <h1 className="heading-primary text-3xl md:text-4xl text-white mb-3">Get in Touch</h1>
            <p className="text-base text-white/90">
              Connect with AKB leadership for membership inquiries and strategic partnerships.
            </p>
            <p className="text-sm text-white/70 mt-1">
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
        <div className="container mx-auto px-4 max-w-6xl">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Personal & Professional */}
            <div className="space-y-8">
              {/* Personal Information Section */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b-2 border-gray-200">
                  Personal Information
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">
                        First Name <span className="text-vietnam-red">*</span>
                      </label>
                      <Input
                        name="firstName"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">Last Name</label>
                      <Input
                        name="lastName"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">
                        Email <span className="text-vietnam-red">*</span>
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">Phone</label>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">
                      LinkedIn Profile <span className="text-vietnam-red">*</span>
                    </label>
                    <Input
                      type="url"
                      name="linkedInProfile"
                      placeholder="https://www.linkedin.com/in/yourprofile"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Professional Background Section */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b-2 border-gray-200">
                  Professional Background
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">
                        Industry
                      </label>
                      <Input
                        name="industry"
                        placeholder="e.g., Finance, Technology, ESG, Consulting"
                      />
                    </div>
                    <div>
                      <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">
                        Area of Interest
                      </label>
                      <select
                        name="areaOfInterest"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select an area...</option>
                        <option value="policy">Policy Engagement</option>
                        <option value="business">Business Development</option>
                        <option value="networking">Professional Networking</option>
                        <option value="finance">Finance & Investment</option>
                        <option value="esg">ESG & Sustainability</option>
                        <option value="technology">Technology</option>
                        <option value="education">Education</option>
                        <option value="governance">Governance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">
                      Overseas Experience or Nationality (Country)
                    </label>
                    <Input
                      name="overseasExperience"
                      placeholder="e.g., United States, Singapore, United Kingdom"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Membership Details */}
            <div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 h-full flex flex-col">
                <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b-2 border-gray-200">
                  Membership Details
                </h3>
                <div className="space-y-4 flex-1 flex flex-col">
                  <div>
                    <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">
                      Referral Member
                    </label>
                    <Input
                      name="referralMember"
                      placeholder="Full name of AKB member who referred you"
                      className="bg-white"
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <label className="font-montserrat text-sm font-medium text-foreground mb-2 block">
                      Message <span className="text-vietnam-red">*</span>
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Share your professional background, current role, and interest in AKB membership. Include any referring member information if applicable."
                      rows={14}
                      required
                      className="bg-white flex-1"
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <h4 className="font-semibold text-sm text-blue-900 mb-1">What to Include:</h4>
                    <ul className="text-xs text-blue-800 space-y-0.5">
                      <li>• Your current professional role and company</li>
                      <li>• Areas of expertise relevant to Vietnam's development</li>
                      <li>• Specific interest areas (policy, business, networking)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button
              type="submit"
              className="w-full font-montserrat bg-vietnam-red hover:bg-vietnam-red/90 text-white py-6 text-lg"
            >
              Submit Inquiry
            </Button>
          </div>
        </form>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}