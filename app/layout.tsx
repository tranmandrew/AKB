import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { organizationSchema, websiteSchema, professionalOrganizationSchema } from "./structured-data"
import "./globals.css"

const notoSans = Noto_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-noto-sans",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://akb-vietnam.org'),
  title: {
    default: "Association of Professional Kiều Bào | Connecting Vietnamese Excellence Globally",
    template: "%s | AKB - Association of Professional Kiều Bào"
  },
  description:
    "Distinguished Vietnamese diaspora professionals network driving Vietnam's development. Join leaders from Google, Mastercard, UBS, and Fortune 500 companies in strategic partnerships with Vietnamese government.",
  keywords: [
    "Vietnamese professionals",
    "Kiều Bào network",
    "Vietnam development",
    "Vietnamese diaspora",
    "professional network",
    "strategic partnerships",
    "policy dialogue",
    "business development Vietnam",
    "international cooperation",
    "EuroCham",
    "BeluxCham",
    "SingCham"
  ],
  authors: [{ name: "Association of Professional Kiều Bào" }],
  creator: "Association of Professional Kiều Bào",
  publisher: "Association of Professional Kiều Bào",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akb-vietnam.org",
    siteName: "Association of Professional Kiều Bào",
    title: "Association of Professional Kiều Bào | Connecting Vietnamese Excellence Globally",
    description: "Distinguished network of Vietnamese professionals driving Vietnam's global development through strategic partnerships and expertise.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AKB - Association of Professional Kiều Bào"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Association of Professional Kiều Bào",
    description: "Distinguished Vietnamese professionals driving Vietnam's global development",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ]
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalOrganizationSchema) }}
        />
      </head>
      <body className={`${notoSans.className}`}>
        <Header />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
