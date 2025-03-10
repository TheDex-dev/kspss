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
        { name: 'Home', href: '/' },
        { name: 'News', href: '/news' },
        { name: 'Donate', href: '/donate' },
        { name: 'About Us', href: '/about' },
    ]

    return (
        <>
            <div className={`navbar fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
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
                                className={`tab tab-bordered transition-all duration-300 hover:text-primary ${!scrolled ? 'text-white hover:text-white/80' : ''
                                    } ${(pathname === item.href || (pathname?.startsWith(item.href) && item.href !== '/'))
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
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className={`w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 
                                ${scrolled ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gradient-to-r from-primary/80 to-secondary/80'}`}>
                                <span className="flex h-full w-full items-center justify-center font-bold text-white">
                                    D
                                </span>
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52">
                            <li><Link href="/account" className="hover:bg-primary/10 active:bg-primary/20">Login</Link></li>
                            <li><Link href="/account" className="hover:bg-primary/10 active:bg-primary/20">Sign Up</Link></li>
                        </ul>
                    </div>
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
            <div className={`fixed top-0 left-0 h-full z-10 w-80 bg-base-200 z-50 transform transition-all duration-300 ease-in-out lg:hidden ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
                }`}>
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-base-300 bg-base-300/30">
                    <div className="text-xl font-bold">Sentosa SPSS</div>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="btn btn-ghost btn-sm btn-circle hover:rotate-90 transition-transform duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="p-4">
                    <ul className="menu menu-vertical gap-2">
                        {tabItems.map((item, index) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={`flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-base-300 
                                        ${(pathname === item.href || (pathname?.startsWith(item.href) && item.href !== '/'))
                                            ? 'bg-primary text-primary-content font-medium'
                                            : 'hover:translate-x-1'
                                        }`}
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                        animation: isSidebarOpen ? 'slideIn 0.4s ease forwards' : 'none'
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Footer */}
                <div className="absolute bottom-0 w-full p-4 border-t border-base-300 text-center text-sm text-base-content/70">
                    © 2024 Sentosa SPSS
                </div>
            </div>
        </>
    )
}

export default Navbar