import "@/styles/globals.css"

import localFont from "next/font/local"

import type { Metadata } from "next"

import Blob from "@/components/blob"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Fathom from "@/components/fathom"
import { ReactNode } from "react"

const berkeley = localFont({
  src: "../assets/BerkeleyMono-Regular.woff2",
  display: "swap",
  variable: "--font-berkeley",
})

const gtl = localFont({
  src: "../assets/GTL001.woff2",
  display: "swap",
  variable: "--font-gtl",
})

type Props = { children: ReactNode }

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={`${berkeley.variable} ${gtl.variable}`}>
      <body className="font-mono text-sm md:text-xs leading-normal">
        {/* 
          Loads Fathom Analytics tracking code. 
          Does not render anything on the page. 
        */}
        <Fathom />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex flex-grow">{children}</main>
          <Footer />
        </div>
        <Blob />
      </body>
    </html>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: {
      default: "John Meguerian",
      template: `%s | John Meguerian`,
    },
    description: `Concept to code product design manager`,
    authors: [{ name: "John Meguerian" }],
    openGraph: {
      title: `John Meguerian`,
      siteName: `John Meguerian`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@jmegs",
    },
  }
}
