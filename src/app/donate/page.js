'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { carouselData } from '@/data/carousel-data'

const DonatePage = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [amount, setAmount] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const nextSlide = currentSlide === carouselData.length ? 1 : currentSlide + 1;
            setCurrentSlide(nextSlide);
            document.getElementById(`slide${nextSlide}`).scrollIntoView({
                behavior: 'smooth'
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle donation submission
        console.log('Donation amount:', amount);
    };

    return (
        <div className="relative h-screen overflow-hidden">
            {/* Enhanced Background Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]
                              animate-pulse-slow" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
            </div>

            {/* Enhanced Donation Form */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-md
                          perspective-1000">
                <form onSubmit={handleSubmit} 
                      className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl p-10 rounded-3xl
                               shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/20
                               motion-safe:animate-float hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]
                               transition-all duration-500 transform hover:scale-[1.02]">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                                 from-white via-primary to-white mb-8 text-center
                                 animate-shimmer">
                        Make a Donation
                    </h2>
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-3">
                            {[50, 100, 200, 500].map((value) => (
                                <button
                                    key={value}
                                    type="button"
                                    onClick={() => setAmount(value.toString())}
                                    className={`relative overflow-hidden py-3 px-6 rounded-2xl transition-all duration-300
                                              transform hover:scale-105 group ${
                                        amount === value.toString()
                                            ? 'bg-gradient-to-r from-primary to-secondary text-black font-bold shadow-lg'
                                            : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                                >
                                    <span className="relative z-10">${value}</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 
                                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </button>
                            ))}
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary 
                                          rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Other amount"
                                className="relative w-full p-4 rounded-xl bg-white/10 text-white placeholder-white/50
                                         focus:outline-none focus:ring-2 focus:ring-primary/50
                                         transition-all duration-300 pl-8"
                            />
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70">$</span>
                        </div>
                        <button
                            type="submit"
                            className="w-full relative overflow-hidden py-4 bg-gradient-to-r from-primary to-secondary
                                     text-black rounded-xl font-bold text-lg transition-all duration-500
                                     hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] transform hover:scale-[1.02]
                                     active:scale-95"
                        >
                            <span className="relative z-10">Donate Now</span>
                            <div className="absolute inset-0 bg-white/20 transform origin-left scale-x-0 
                                          transition-transform duration-500 hover:scale-x-100" />
                        </button>
                    </div>
                </form>
            </div>

            {/* Enhanced Carousel */}
            <div className="carousel w-full h-screen">
                {carouselData.map((item, index) => (
                    <div key={item.id} id={`slide${index + 1}`} 
                         className="carousel-item relative w-full h-full"
                         onMouseEnter={() => setCurrentSlide(index + 1)}>
                        <div className="relative w-full h-full">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80">
                                <div className="absolute bottom-0 left-0 right-0 p-12 text-white
                                              backdrop-blur-sm bg-gradient-to-t from-black/40 to-transparent">
                                    <div className="container mx-auto max-w-6xl">
                                        <h2 className="text-6xl font-bold mb-4 animate-fade-up">
                                            {item.title}
                                        </h2>
                                        <p className="text-xl max-w-2xl text-white/90 animate-fade-up animation-delay-150
                                                  backdrop-blur-sm bg-black/10 p-4 rounded-lg">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DonatePage
