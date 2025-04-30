import type React from "react"
import "./globals.css"
import { Inter, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata = {
  title: "Design Portfolio",
  description: "A modern, immersive portfolio showcasing Figma projects, designs, videos, and interactive prototypes.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans antialiased", inter.variable, spaceGrotesk.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} themes={["light", "dark"]}>
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
