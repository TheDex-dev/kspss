'use client'

import React from 'react'
import Image from 'next/image'

const Homepage = () => {
    return (
        <>
            <div className="hero min-h-screen relative">
                <div className="absolute inset-0">
                    <Image
                        src="/images/bank.jpg"
                        alt="Bank background"
                        fill
                        className="object-cover brightness-[0.4] transition-all duration-700"
                        quality={100}
                        priority
                    />
                </div>
                
                <div className="hero-content relative z-10">
                    <div className="max-w-lg backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 p-10 rounded-xl shadow-2xl border border-white/10 motion-safe:animate-fade-up">
                        <h1 className="mb-6 text-6xl font-bold text-white tracking-tight">
                            Hello there
                        </h1>
                        <p className="mb-8 text-lg text-gray-200 leading-relaxed">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className='grid grid-cols-2 gap-6'>
                            <button className="btn btn-primary glass hover:scale-105 transition-transform duration-300">
                                Get Started
                            </button>
                            <button className="btn btn-secondary glass hover:scale-105 transition-transform duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;