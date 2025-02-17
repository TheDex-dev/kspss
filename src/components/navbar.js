'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

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
        <>
            <div className={`navbar fixed top-0 z-50 w-full transition-all duration-300 ${
                scrolled 
                ? 'bg-gradient-to-r from-base-200/95 to-base-200/90 backdrop-blur-sm border-b border-base-300 shadow-lg' 
                : 'bg-transparent'
            }`}>
                <div className="navbar-start">
                    {/* Mobile menu button */}
                    <button 
                        onClick={() => setIsSidebarOpen(true)}
                        className={`btn btn-ghost btn-circle lg:hidden ${!scrolled ? 'text-white' : ''}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div className="navbar-center">
                    <div role="tablist" className="hidden lg:flex tabs tabs-border gap-6">
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

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-50 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-base-200 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <div className="p-4 border-b border-base-300">
                    <button 
                        onClick={() => setIsSidebarOpen(false)}
                        className="btn btn-ghost btn-circle"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <ul className="menu menu-vertical p-4">
                    {tabItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                onClick={() => setIsSidebarOpen(false)}
                                className={pathname === item.href ? 'active' : ''}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Navbar