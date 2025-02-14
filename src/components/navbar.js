'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const tabItems = [
        { name: 'Home', href: '/'},
        { name: 'News', href: '/news' },
        { name: 'Donate', href: '/donate'},
    ]

    return (
        <div className={`navbar fixed top-0 z-50 w-full transition-all duration-300 ${
            scrolled 
            ? 'bg-gradient-to-r from-base-200/95 to-base-200/90 backdrop-blur-sm border-b border-base-300 shadow-lg' 
            : 'bg-transparent'
        }`}>
            <div className="navbar-start">
            </div>
            <div className="navbar-center">
                <div role="tablist" className="tabs tabs-border gap-6">
                    {tabItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            role="tab"
                            className={`tab tab-bordered transition-all duration-300 hover:text-primary ${
                                !scrolled ? 'text-white hover:text-white/80' : ''
                            } ${
                                pathname === item.href 
                                ? 'tab-active font-medium border-primary' 
                                : 'hover:border-primary/50'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    )
}

export default Navbar