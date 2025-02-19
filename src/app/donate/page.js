'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { carouselData } from '@/data/carousel-data'

const DonatePage = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextSlide = currentSlide === carouselData.length ? 1 : currentSlide + 1;
            setCurrentSlide(nextSlide);
            document.getElementById(`slide${nextSlide}`).scrollIntoView({
                behavior: 'smooth'
            });
        }, 3000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <>
            <div className="min-h-screen pt-24 bg-gradient-to-b from-black via-[#130F40] to-black">
                {/* Enhanced Carousel */}
                <div className="carousel w-full h-[600px] relative">
                    {carouselData.map((item, index) => (
                        <div key={item.id} id={`slide${index + 1}`} 
                             className="carousel-item relative w-full transition-all duration-500"
                             onMouseEnter={() => setCurrentSlide(index + 1)}>
                            <div className="relative w-full h-full">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                                        <h2 className="text-5xl font-bold mb-6 motion-safe:animate-fade-up">
                                            {item.title}
                                        </h2>
                                        <p className="text-xl max-w-2xl text-center motion-safe:animate-fade-up" 
                                           style={{ animationDelay: '0.2s' }}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href={`#slide${index === 0 ? carouselData.length : index}`} 
                                   className="btn btn-circle bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/30 text-white">❮</a> 
                                <a href={`#slide${index === carouselData.length - 1 ? 1 : index + 2}`} 
                                   className="btn btn-circle bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/30 text-white">❯</a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enhanced Donation Section */}
                <div className="container mx-auto px-4 py-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16 motion-safe:animate-fade-up">
                            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Support Our Mission
                            </h1>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* One-time Donation Card */}
                            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 
                                          hover:scale-[1.02] backdrop-blur-sm bg-white/90 motion-safe:animate-fade-up"
                                 style={{ animationDelay: '0.2s' }}>
                                <div className="card-body">
                                    <h2 className="card-title text-black text-2xl font-bold mb-4">One-time Donation</h2>
                                    <p className="text-gray-600 mb-6">Make an immediate impact with a one-time contribution to support our cause.</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary btn-lg text-black glass hover:scale-105 transition-transform duration-300">
                                            Donate Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Monthly Giving Card */}
                            <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 shadow-xl hover:shadow-2xl 
                                          transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm motion-safe:animate-fade-up"
                                 style={{ animationDelay: '0.4s' }}>
                                <div className="card-body">
                                    <div className="absolute top-4 right-4">
                                        <span className="badge badge-secondary">Popular Choice</span>
                                    </div>
                                    <h2 className="card-title text-2xl font-bold mb-4">Monthly Giving</h2>
                                    <p className="text-gray-600 mb-6">Join our community of monthly donors and create lasting change.</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-secondary btn-lg glass hover:scale-105 transition-transform duration-300">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DonatePage
