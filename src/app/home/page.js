'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getImagePath } from '@/utils/imagePath'
import { newsData } from '@/data/news-data'
import { useInView } from 'react-intersection-observer'

const Homepage = () => {
    const companyStats = [
        { number: "13+", label: "Anggota Aktif" },
        { number: "5+", label: "Tahun Pengalaman" },
        { number: "100%", label: "Pembiayaan Terjamin" },
        { number: "24/7", label: "Layanan Konsultasi" }
    ];

    const recentNews = [...newsData.news]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3)
        .map(news => ({
            id: news.id,
            title: news.title,
            date: new Date(news.date).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            }),
            excerpt: news.description,
            image: news.image
        }));

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % recentNews.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + recentNews.length) % recentNews.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    },);

    // Add these scroll animation hooks
    const { ref: newsRef, inView: newsIsVisible } = useInView({ threshold: 0.2, triggerOnce: true });
    const { ref: visionRef, inView: visionIsVisible } = useInView({ threshold: 0.2, triggerOnce: true });
    const { ref: statsRef, inView: statsIsVisible } = useInView({ threshold: 0.2, triggerOnce: true });
    const { ref: infoRef, inView: infoIsVisible } = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <>
            {/* Hero Section */}
            <div className="hero min-h-screen relative bg-opacity-50">
                <div className="absolute inset-0">
                    <Image
                        src={getImagePath('/images/utils/sentosa.jpg')}
                        alt="Bank background"
                        fill
                        className="object-cover brightness-[0.3] transition-all duration-700 animate-pulse-soft"
                        quality={100}
                        priority
                    />
                    {/* Overlay patterns */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
                </div>
                
                <div className="hero-content text-center relative z-10 max-w-5xl mx-auto px-4">
                    <div className="space-y-8 animate-float">
                        <div className="space-y-4 motion-safe:animate-fade-up">
                            <h1 className="text-7xl font-bold text-white tracking-tight">
                                KSPSS BMT 
                                <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                    PRIMA SENTOSA
                                </span>
                            </h1>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                        </div>
                        
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto motion-safe:animate-fade-up"
                           style={{ animationDelay: '0.2s' }}>
                           KSPPS BMT Prima Sentosa adalah koperasi simpan pinjam dan pembiayaan syariah yang berbasis di Desa Kerjo Lor Kecamatan Ngadirojo Kabupaten Wonogiri.
                        </p>
                    </div>
                </div>

                {/* Decorative bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
            </div>

            {/* Recent News Carousel Section */}
            <div ref={newsRef} className="bg-gradient-to-b from-black via-[#130F40] to-black py-12 md:py-24">
                <div className={`container mx-auto px-4 transition-all duration-1000 ${newsIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Berita Terkini
                    </h2>

                    <div className="relative max-w-5xl mx-auto">
                        <div className="overflow-hidden rounded-xl animate-glow">
                            <div className="relative flex transition-transform duration-500 ease-in-out"
                                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                {recentNews.map((item) => (
                                    <div key={item.id} className="w-full flex-shrink-0">
                                        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 items-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 md:p-8 rounded-xl border border-gray-700">
                                            <div className="relative w-full h-48 md:h-64">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover rounded-lg"
                                                />
                                            </div>
                                            <div className="space-y-3 md:space-y-4">
                                                <span className="text-primary text-sm">{item.date}</span>
                                                <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
                                                <p className="text-sm md:text-base text-gray-300 line-clamp-3">{item.excerpt}</p>
                                                <Link className="btn btn-primary btn-sm md:btn-md" href={`/news/${item.id}`}>
                                                    Baca Selengkapnya
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button 
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 btn btn-circle btn-primary btn-sm md:btn-md">
                            ❮
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 btn btn-circle btn-primary btn-sm md:btn-md">
                            ❯
                        </button>

                        {/* Indicators */}
                        <div className="flex justify-center gap-2 mt-4 md:mt-6">
                            {recentNews.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-colors duration-300 ${
                                        currentSlide === index ? 'bg-primary' : 'bg-gray-600'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision & Mission Section */}
            <div ref={visionRef} className="bg-gradient-to-b from-black via-[#130F40] to-black py-20">
                <div className={`container mx-auto px-4 transition-all duration-1000 ${visionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Vision Card */}
                        <div className="card bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm 
                                      shadow-xl border border-gray-700 motion-safe:animate-fade-up animate-float"
                             style={{ animationDelay: '0s' }}>
                            <div className="card-body">
                                <h2 className="card-title text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                    Visi
                                </h2>
                                <ul className="space-y-4 text-gray-300">
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Mewujudkan masyarakat yang adil dan sejahtera dengan mengembangkan lembaga dan usaha Koperasi  yang maju, berkembang, terpercaya, aman, nyaman, transparan, dan berkehati-hatian.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Mission Card */}
                        <div className="card bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm 
                                      shadow-xl border border-gray-700 motion-safe:animate-fade-up animate-float"
                             style={{ animationDelay: '0.5s' }}>
                            <div className="card-body">
                                <h2 className="card-title text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                    Misi
                                </h2>
                                <ul className="space-y-4 text-gray-300">
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-secondary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Memberikan layanan keuangan syariah yang professional dan amanah
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-secondary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Mendorong pemberdayaan ekonomi masyarakat berbasis syariah
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-secondary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Membangun kemitraan yang kuat dengan berbagai pihak
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Company Information Section */}
            <div className="bg-gradient-to-b from-black via-[#130F40] to-black py-24">
                {/* Stats Grid */}
                <div ref={statsRef} className={`container mx-auto px-4 transition-all duration-1000 ${statsIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                        {companyStats.map((stat, index) => (
                            <div key={index} 
                                 className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 
                                           rounded-lg border border-gray-700 backdrop-blur-sm
                                           motion-safe:animate-fade-up animate-float"
                                 style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-300">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Info Grid */}
                <div ref={infoRef} className={`container mx-auto px-4 mt-20 transition-all duration-1000 ${infoIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* About Us */}
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl 
                                      border border-gray-700 backdrop-blur-sm motion-safe:animate-fade-up">
                            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Tentang Kami
                            </h2>
                            <div className="prose prose-lg prose-invert">
                                <p className="text-gray-300">
                                    KSPSS BMT Prima Sentosa hadir sebagai solusi keuangan syariah yang terpercaya. 
                                    Kami berkomitmen untuk memberikan layanan terbaik dengan prinsip syariah yang kuat.
                                </p>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl 
                                      border border-gray-700 backdrop-blur-sm motion-safe:animate-fade-up"
                             style={{ animationDelay: '0.2s' }}>
                            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Layanan Kami
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Pembiayaan Syariah
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Simpanan Mudharabah
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Konsultasi Keuangan
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;