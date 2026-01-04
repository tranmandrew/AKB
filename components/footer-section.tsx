'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Linkedin } from "lucide-react"
import Image from "next/image"

export function FooterSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-4">
            {/* Organization Info */}
            <div className="flex items-center gap-3">
              <Image
                src="/AKB2.png"
                alt="AKB Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <div>
                <h4 className="font-montserrat font-semibold text-foreground text-sm whitespace-nowrap">Association of Professional Kiều Bào</h4>
                <p className="text-xs text-muted-foreground">
                  Connecting Vietnamese professionals worldwide
                </p>
              </div>
            </div>

            {/* Social Links - Centered */}
            <div className="flex justify-center gap-3">
              <a
                href="https://www.linkedin.com/company/akieubao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 hover:opacity-80 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-foreground" />
              </a>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-montserrat text-sm font-medium text-foreground mb-2">Newsletter</h5>
              <div className="flex gap-2">
                <Input placeholder="Enter email" className="flex-1 h-8 text-xs" />
                <Button size="sm" className="font-montserrat bg-accent hover:bg-accent/90 text-accent-foreground h-8 px-3 text-xs">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Copyright and Links - Moved Below */}
          <div className="text-center pt-3 border-t border-border">
            <p className="text-muted-foreground text-xs mb-1">
              © 2025 AKB. All rights reserved.
            </p>
            <div className="flex justify-center gap-3 text-xs text-muted-foreground">
              <a href="/terms" className="hover:text-vietnam-red transition-colors">Terms</a>
              <span>•</span>
              <a href="/privacy" className="hover:text-vietnam-red transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}