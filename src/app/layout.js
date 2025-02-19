'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import { getImagePath } from '@/utils/imagePath'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: "KSPSS",
  description: "Dibuat oleh ketua koperasi dan developer Muhammad Luqman Al Hakim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="relative min-h-screen z-0">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
