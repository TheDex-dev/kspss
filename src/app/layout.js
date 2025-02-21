'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: "PRIMA SENTOSA",
  description: "Dibuat oleh ketua koperasi dan developer Muhammad Luqman Al Hakim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.className}`}>
        <div className="relative min-h-screen z-0">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
