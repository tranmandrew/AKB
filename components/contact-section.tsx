'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Globe, Linkedin, Twitter } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6 text-balance">
              Connect With <span className="font-medium text-accent">Us</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to join the founding movement? Let's start the conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-foreground mb-6">Get in Touch</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input type="email" placeholder="your.email@company.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Company</label>
                    <Input placeholder="Your current company" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                    <Textarea placeholder="Tell us about your interest in joining the Association..." rows={4} />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="glass-card border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-medium text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-accent mr-3" />
                      <span className="text-muted-foreground">AKieuBao.com</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-accent mr-3" />
                      <span className="text-muted-foreground">contact@akieubao.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Organization Info */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Association of Professional Kiều Bào</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Connecting Vietnamese professionals worldwide to advance Vietnam's development through expertise and global partnerships.
                </p>
              </div>

              {/* Social Links & Newsletter */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Follow Our Journey</h4>
                <div className="mb-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-singapore-blue transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-foreground mb-2">Newsletter</h5>
                  <div className="flex gap-2">
                    <Input placeholder="Enter your email" className="flex-1 h-8 text-xs" />
                    <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground h-8 px-3 text-xs">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-6 border-t border-border">
              <p className="text-muted-foreground text-sm mb-2">
                © 2024 Association of Professional Kiều Bào. All rights reserved.
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
    </section>
  )
}
