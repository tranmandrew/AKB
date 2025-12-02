import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Board Members | Association of Professional Kiều Bào",
  description: "Meet the visionary founding board members and advisory committee guiding AKB towards global Vietnamese excellence and strategic partnerships.",
  openGraph: {
    title: "Board Members | Association of Professional Kiều Bào",
    description: "Meet the founding board members and advisory committee of the Association of Professional Kiều Bào",
    type: "website",
    url: "https://akb-vietnam.org/board",
    images: [
      {
        url: "/AKB2Clear.png",
        width: 1200,
        height: 630,
        alt: "AKB Board Members"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Board Members | Association of Professional Kiều Bào",
    description: "Meet the founding board members and advisory committee",
    images: ["/AKB2Clear.png"]
  }
}

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
