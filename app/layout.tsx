import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from 'next/script'
 
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TachyonLabs - Accelerating Innovation",
  description:
        "TachyonLabs Innovations Pvt. Ltd. - Developing Public Interest Artificial Intelligence Technology.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex flex-col min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
      
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4FVXP6NPMT"></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-4FVXP6NPMT');
        `}
      </Script>
    </html>
  )
}



import './globals.css'