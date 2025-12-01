import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"]
})

export const metadata: Metadata = {
  title: "Sitembile Ncube-Kaseka - Mining Engineer",
  description:
    "Professional portfolio of Sitembile Ncube-Kaseka, Mining Engineer, Lecturer, and STEM Advocate specializing in training and development",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/engineer_17714324.png",
        type: "image/png",
        sizes: "any",
      },
    ],
    apple: "/engineer_17714324.png",
    shortcut: "/engineer_17714324.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
