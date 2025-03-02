'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'
import { memo } from 'react'

// Lazy load Navbar
const Navbar = dynamic(() => import('@/components/navbar'), {
    ssr: true,
    loading: () => <div className="h-16" /> // Placeholder height
})

const inter = Inter({ 
    subsets: ['latin'],
    display: 'swap'  // Optimize font loading
})

const metadata = {
    title: "PRIMA SENTOSA",
    description: "Dibuat oleh ketua koperasi dan developer Muhammad Luqman Al Hakim",
};

const MainContent = memo(({ children }) => {
    return <main>{children}</main>
});

MainContent.displayName = 'MainContent';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body className={`${inter.className}`}>
                <Navbar />
                <MainContent>{children}</MainContent>
            </body>
        </html>
    )
}
