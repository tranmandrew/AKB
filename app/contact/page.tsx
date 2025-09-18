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
      <div className="py-12 pt-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-light text-foreground mb-4">Contact Us</h1>
          <p className="text-muted-foreground">
            Ready to join the founding movement? Let's start the conversation.
          </p>
        </div>

        <Card className="glass-card border-0">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
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
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
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
                <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message <span className="text-vietnam-red">*</span>
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interest in joining the Association..."
                  rows={6}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
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
    </main>
  );
}