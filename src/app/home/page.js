'use client'

import React from 'react'
import Image from 'next/image'

const Homepage = () => {
    return (
        <div className="hero min-h-screen relative">
            <Image
                src="/images/bank.jpg"
                alt="Bank background"
                fill
                className="object-cover"
                quality={80}
                priority
            />
            <div className="hero-overlay absolute inset-0"></div>
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
    );
}

export default Homepage;