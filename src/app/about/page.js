'use client'

import React from 'react'
import Image from 'next/image'
import { getImagePath } from '@/utils/imagePath'

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

    return (
        <>
            {/* Hero Section */}
            <div className="min-h-[60vh] relative bg-gradient-to-b from-gray-900 via-gray-800 to-black">
                <div className="absolute inset-0">
                    <Image
                        src={getImagePath('/images/about-hero.jpg')}
                        alt="About Us"
                        fill
                        className="object-cover brightness-[0.3]"
                        quality={100}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
                </div>

                <div className="relative z-10 container mx-auto px-4 py-32">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-5xl font-bold text-white mb-6">Tentang Kami</h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8" />
                        <p className="text-xl text-gray-300">
                            Membangun masa depan finansial yang lebih baik melalui prinsip keuangan syariah
                        </p>
                    </div>
                </div>
            </div>

            {/* History Section */}
            <div className="bg-gradient-to-b from-black via-gray-800 to-gray-900 py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Sejarah Kami
                        </h2>
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700">
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

            {/* Milestones Section */}
            <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black py-24">
                <div className="container mx-auto px-4">
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
            <div className="bg-gradient-to-b from-black via-gray-800 to-gray-900 py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Tim Kami
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div key={index} 
                                 className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl 
                                           border border-gray-700 overflow-hidden motion-safe:animate-fade-up"
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
            <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black py-24">
                <div className="container mx-auto px-4">
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
        </>
    );
}

export default AboutPage;
