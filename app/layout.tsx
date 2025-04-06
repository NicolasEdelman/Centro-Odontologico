import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

// Definimos variables CSS personalizadas para las fuentes locales
const fontVariables = {
  "--font-avenir": "Avenir, system-ui, sans-serif",
  "--font-now": "Now, system-ui, sans-serif",
}

export const metadata: Metadata = {
  title: "Centro Odontológico | Dra. Fabiana Zelpo y Dra. Nadia Pérez",
  description:
    "Centro Odontológico especializado en cirugía, estética facial, implantología, ortodoncia, ortopedia y rehabilitación.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          :root {
            ${Object.entries(fontVariables)
              .map(([key, value]) => `${key}: ${value};`)
              .join("\n")}
          }
        `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'