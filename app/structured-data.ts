// Structured data for SEO
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Association of Professional Kiều Bào (AKB)",
  "alternateName": "AKB",
  "url": "https://akb-vietnam.org",
  "logo": "https://akb-vietnam.org/logo.png",
  "description": "Distinguished Vietnamese diaspora professionals network driving Vietnam's development through collective expertise, strategic partnerships, and global connectivity.",
  "foundingDate": "2024",
  "areaServed": {
    "@type": "Place",
    "name": "Global"
  },
  "memberOf": [
    {
      "@type": "Organization",
      "name": "EuroCham Vietnam"
    },
    {
      "@type": "Organization",
      "name": "BeluxCham Vietnam"
    },
    {
      "@type": "Organization",
      "name": "Singapore Chamber of Commerce Vietnam"
    }
  ],
  "knowsAbout": [
    "Business Development",
    "Technology Transfer",
    "Policy Consultation",
    "International Relations",
    "Economic Development",
    "Professional Networking"
  ],
  "sameAs": [
    "https://www.linkedin.com/company/akb-vietnam"
  ]
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Association of Professional Kiều Bào",
  "url": "https://akb-vietnam.org",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://akb-vietnam.org/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export const professionalOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Association of Professional Kiều Bào",
  "description": "Specialized network of distinguished Vietnamese professionals from leading global corporations, united to strengthen Vietnam's economic development and global integration.",
  "serviceType": "Professional Networking and Development",
  "provider": {
    "@type": "Organization",
    "name": "AKB"
  },
  "areaServed": [
    "Vietnam",
    "Singapore",
    "United States",
    "United Kingdom",
    "France",
    "Germany",
    "Canada",
    "Japan"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Membership Benefits",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Strategic Policy Dialogue Access",
          "description": "Direct engagement with Vietnamese government agencies and policymakers"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Global Professional Network",
          "description": "Connect with distinguished professionals from Fortune 500 companies"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Development Opportunities",
          "description": "Access to strategic partnerships and investment opportunities"
        }
      }
    ]
  }
}

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

export const eventSchema = (event: {
  name: string
  description: string
  startDate: string
  endDate: string
  location: string
  organizer: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": event.name,
  "description": event.description,
  "startDate": event.startDate,
  "endDate": event.endDate,
  "location": {
    "@type": "Place",
    "name": event.location
  },
  "organizer": {
    "@type": "Organization",
    "name": event.organizer
  }
})

export const personSchema = (person: {
  name: string
  jobTitle: string
  worksFor: string
  alumniOf?: string
  description: string
  url?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": person.name,
  "jobTitle": person.jobTitle,
  "worksFor": {
    "@type": "Organization",
    "name": person.worksFor
  },
  ...(person.alumniOf && {
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": person.alumniOf
    }
  }),
  "description": person.description,
  ...(person.url && { "url": person.url })
})
