'use client'

import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar'

const Homepage = () => {
    return (
        <>
            <Navbar />
            <div className="hero min-h-screen relative pt-16">
                <Image
                    src="/images/bank.jpg"
                    alt="Bank background"
                    fill
                    className="object-cover"
                    quality={80}
                    priority
                />
                <div className="hero-content relative text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;