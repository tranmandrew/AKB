'use client'

import { Quote } from "lucide-react"

export function MembershipTestimonialsSection() {
  const testimonials = [
    {
      quote: "Vietnam's future depends on bridging the gap between our global diaspora and homeland development. Professional Kiều Bào are Vietnam's competitive advantage.",
      author: "Kimble Ngo",
      title: "Co-Founder & Chairman, APKB"
    },
    {
      quote: "We build networks not just to prosper, but to last. Connecting Vietnamese professionals globally strengthens our collective voice in shaping Vietnam's future.",
      author: "Member Executive",
      title: "Fortune 500 Company"
    },
    {
      quote: "The biggest opportunity for Vietnam is not just economic growth — it's leveraging our global talent network. That is what APKB helps accomplish.",
      author: "Senior Member",
      title: "Multinational Corporation Leadership"
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Shaping Vietnam's Global Leadership Identity Together
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            APKB is not just a professional network — it's a platform for evolving Vietnamese leadership culture, influencing how Vietnamese professionals are perceived globally.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 hover-elevate">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-vietnam-red mb-4" />
                  <p className="text-lg text-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}