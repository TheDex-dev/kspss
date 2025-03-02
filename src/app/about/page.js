'use client'

import React from 'react'
import Image from 'next/image'
import { getImagePath } from '@/utils/imagePath'
import { useInView } from 'react-intersection-observer'
import ParticleBackground from '@/components/ParticleBackground'

const AboutPage = () => {
    const teamMembers = [
        {
            name: "H. Agus Sumadi, S.Pd",
            role: "Ketua",
            image: "/images/teams/profile.jpg"
        },
        {
            name: "Dra. Sri Hartini",
            role: "Sekretaris",
            image: "/images/teams/profile.jpg"
        },
        {
            name: "Hj. Ria Wijayanti, S.E",
            role: "Bendahara",
            image: "/images/teams/profile.jpg"
        }
    ];

    const milestones = [
        {
            year: "2018",
            title: "Pendirian",
            description: "KSPSS BMT Prima Sentosa resmi didirikan"
        },
        {
            year: "2019",
            title: "Pengembangan Layanan",
            description: "Implementasi sistem keuangan syariah modern"
        },
        {
            year: "2020",
            title: "Ekspansi",
            description: "Pembukaan cabang baru dan peningkatan layanan"
        },
        {
            year: "2023",
            title: "Digitalisasi",
            description: "Pengembangan platform digital untuk layanan keuangan"
        }
    ];

    const { ref: historyRef, inView: historyIsVisible } = useInView({ threshold: 0.2, triggerOnce: true });
    const { ref: logoRef, inView: logoIsVisible } = useInView({ threshold: 0.2, triggerOnce: true });
    const { ref: milestonesRef, inView: milestonesIsVisible } = useInView({ threshold: 0.2, triggerOnce: true });
    const { ref: teamRef, inView: teamIsVisible } = useInView({ threshold: 0.2, triggerOnce: true });
    const { ref: valuesRef, inView: valuesIsVisible } = useInView({ threshold: 0.2, triggerOnce: true });
    const { ref: developerRef, inView: developerIsVisible } = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <>
            {/* Add ParticleBackground at the top */}
            <ParticleBackground />
            
            {/* Hero Section */}
            <div className="hero min-h-screen relative bg-opacity-50">
                <div className="absolute inset-0">
                    <Image
                        src={getImagePath('/images/utils/heroabout.jpg')}
                        alt="About Us"
                        fill
                        className="object-cover brightness-[0.3] transition-all duration-700 animate-scale-in"
                        quality={100}
                        priority
                    />
                    {/* Overlay patterns */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 animate-fade-in" />
                </div>

                <div className="relative z-10 container mx-auto px-4 py-32">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-5xl font-bold text-white mb-6 animate-slide-in-left">Tentang Kami</h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8 animate-scale-in" />
                        <p className="text-xl text-gray-300 animate-slide-in-right">
                            Membangun masa depan finansial yang lebih baik melalui prinsip keuangan syariah
                        </p>
                    </div>
                </div>
                {/* Decorative bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
            </div>

            {/* History Section */}
            <div ref={historyRef} className="bg-gradient-to-b from-black via-[#130F40] to-black py-24">
                <div className={`container mx-auto px-4 transition-all duration-1000 ${historyIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Sejarah Kami
                        </h2>
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700 animate-gradient">
                            <p className="text-gray-300 leading-relaxed mb-6">
                                KSPSS BMT Prima Sentosa didirikan pada tahun 2018 dengan visi untuk memberikan layanan keuangan syariah yang terpercaya kepada masyarakat. Bermula dari sebuah inisiatif kecil, kami terus berkembang menjadi institusi keuangan syariah yang dipercaya oleh masyarakat.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Dalam perjalanan kami, kami telah melayani ribuan nasabah dan terus berinovasi dalam layanan keuangan syariah. Komitmen kami pada prinsip-prinsip syariah dan pelayanan profesional menjadi landasan kesuksesan kami.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logo Section */}
            <div ref={logoRef} className="bg-gradient-to-b from-black via-[#130F40] to-black py-24">
                <div className={`container mx-auto px-4 transition-all duration-1000 ${logoIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Logo Kami
                        </h2>
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700">
                            <div className="relative w-64 h-64 mx-auto mb-10 rounded-full overflow-hidden animate-bounce-soft">
                                <Image
                                    src={getImagePath('/images/utils/logo.png')}
                                    alt="KSPSS BMT Prima Sentosa Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="space-y-6 text-gray-300">
                                <p>
                                    Logo KSPSS BMT Prima Sentosa menggambarkan komitmen kami terhadap 
                                    prinsip-prinsip keuangan syariah dan pemberdayaan ekonomi masyarakat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Milestones Section */}
            <div ref={milestonesRef} className="bg-gradient-to-b from-black via-[#130F40] to-black py-24">
                <div className={`container mx-auto px-4 transition-all duration-1000 ${milestonesIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Perjalanan Kami
                    </h2>
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            {milestones.map((milestone, index) => (
                                <div key={index} 
                                     className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl 
                                               border border-gray-700 hover:border-primary transition-colors
                                               motion-safe:animate-fade-up"
                                     style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="text-primary text-xl font-bold mb-2">{milestone.year}</div>
                                    <h3 className="text-white text-lg font-semibold mb-2">{milestone.title}</h3>
                                    <p className="text-gray-300">{milestone.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div ref={teamRef} className="bg-gradient-to-b from-black via-[#130F40] to-black py-24">
                <div className={`container mx-auto px-4 transition-all duration-1000 ${teamIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Tim Kami
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div key={index} 
                                 className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl 
                                           border border-gray-700 overflow-hidden motion-safe:animate-fade-up
                                           hover:transform hover:scale-105 transition-all duration-300"
                                 style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="relative h-64">
                                    <Image
                                        src={getImagePath(member.image)}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                                    <p className="text-primary">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div ref={valuesRef} className="bg-gradient-to-b from-black via-[#130F40] to-black py-24">
                <div className={`container mx-auto px-4 transition-all duration-1000 ${valuesIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Nilai-Nilai Kami
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl 
                                          border border-gray-700 motion-safe:animate-fade-up">
                                <h3 className="text-2xl font-semibold text-white mb-4">Profesionalisme</h3>
                                <p className="text-gray-300">
                                    Kami berkomitmen untuk memberikan layanan profesional dengan standar tertinggi 
                                    dalam setiap aspek operasional kami.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl 
                                          border border-gray-700 motion-safe:animate-fade-up"
                                 style={{ animationDelay: '0.1s' }}>
                                <h3 className="text-2xl font-semibold text-white mb-4">Integritas</h3>
                                <p className="text-gray-300">
                                    Kejujuran dan transparansi adalah fondasi dari setiap layanan dan interaksi 
                                    yang kami lakukan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Developer Information Section */}
            <div ref={developerRef} className="bg-gradient-to-b from-black via-[#130F40] to-black py-24">
                <div className={`container mx-auto px-4 transition-all duration-1000 ${developerIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl 
                                      border border-gray-700 backdrop-blur-sm motion-safe:animate-fade-up">
                            <div className="space-y-6">
                                <div className="relative w-32 h-32 mx-auto">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
                                    <Image
                                        src={getImagePath('/images/developer.jpg')} // Add your photo here
                                        alt="Developer"
                                        width={128}
                                        height={128}
                                        className="rounded-full border-4 border-gray-800 relative z-10 object-cover"
                                    />
                                </div>
                                
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-2">
                                        Muhammad Luqman Al-Hakim
                                    </h2>
                                    <p className="text-gray-400 mb-4">Full Stack Developer</p>
                                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                                </div>

                                <p className="text-gray-300 leading-relaxed">
                                    Passionate developer specializing in creating modern web applications 
                                    with focus on user experience and clean code.
                                </p>

                                <div className="flex justify-center gap-4 pt-4">
                                    <a href="https://github.com/TheDex-dev" 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="btn btn-circle btn-ghost text-gray-300 hover:text-primary">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="https://www.linkedin.com/in/muhammad-luqman-al-hakim-433105280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="btn btn-circle btn-ghost text-gray-300 hover:text-primary">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                    <a href="mailto:muhammadluqmanalhakim13@gmail.com" 
                                       className="btn btn-circle btn-ghost text-gray-300 hover:text-primary">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutPage;
