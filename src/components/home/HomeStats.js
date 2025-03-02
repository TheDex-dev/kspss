'use client'

import { memo } from 'react';
import { useInView } from 'react-intersection-observer';

const companyStats = [
    { number: "13+", label: "Anggota Aktif" },
    { number: "5+", label: "Tahun Pengalaman" },
    { number: "100%", label: "Pembiayaan Terjamin" },
    { number: "24/7", label: "Layanan Konsultasi" }
];

const HomeStats = memo(() => {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <div ref={ref} className={`container mx-auto px-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
    );
});

HomeStats.displayName = 'HomeStats';
export default HomeStats;
