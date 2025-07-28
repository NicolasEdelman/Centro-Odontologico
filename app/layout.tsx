import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const fontVariables = {
  "--font-avenir": "Avenir, system-ui, sans-serif",
  "--font-now": "Now, system-ui, sans-serif",
};

export const metadata: Metadata = {
  title: "Centro Odontológico | Dra. Fabiana Zelpo y Dra. Nadia Pérez",
  description:
    "Centro Odontológico especializado en cirugía, estética facial, implantología, ortodoncia, ortopedia y rehabilitación.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="light" style={{ colorScheme: "light" }}>
      <head>
        <link rel="icon" href="/images/Logo.png" type="image/png" />
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
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
