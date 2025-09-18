'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Linkedin, Instagram, Facebook } from "lucide-react"
import Image from "next/image"

export function FooterSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mt-16 pt-8 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Organization Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/AKB.png"
                    alt="AKB Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                  <h4 className="font-semibold text-foreground">Association of Professional Kiều Bào</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Connecting Vietnamese professionals worldwide to advance Vietnam's development through expertise and global partnerships.
                </p>
              </div>

              {/* Social Links & Newsletter */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Follow Our Journey</h4>
                <div className="flex gap-4 mb-4">
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 bg-singapore-blue/10 hover:bg-singapore-blue/20 rounded-lg text-singapore-blue hover:text-singapore-blue/80 transition-all duration-200 hover:scale-105"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 bg-pink-500/10 hover:bg-pink-500/20 rounded-lg text-pink-500 hover:text-pink-500/80 transition-all duration-200 hover:scale-105"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 bg-blue-600/10 hover:bg-blue-600/20 rounded-lg text-blue-600 hover:text-blue-600/80 transition-all duration-200 hover:scale-105"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
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
    </section>
  )
}