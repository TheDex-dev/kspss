'use client'

import React, { useState } from 'react'
import NewsCard from '@/components/NewsCard'
import { newsData } from '@/data/news-data'
import ParticleBackground from '@/components/ParticleBackground'

const NewsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const performSearch = (term) => {
        const searchableFields = ['title', 'description', 'category'];
        const normalizedTerm = term.toLowerCase().trim();

        if (!normalizedTerm) {
            return newsData.news.sort((a, b) => b.id - a.id);
        }

        return newsData.news
            .filter(item => 
                searchableFields.some(field => {
                    const fieldValue = item[field];
                    return fieldValue && 
                           typeof fieldValue === 'string' && 
                           fieldValue.toLowerCase().includes(normalizedTerm);
                })
            )
            .sort((a, b) => b.id - a.id);
    };

    const handleSearch = (e) => {
        setIsSearching(true);
        try {
            setSearchTerm(e.target.value);
        } catch (error) {
            console.error('Search error:', error);
        } finally {
            setIsSearching(false);
        }
    };

    const filteredNews = performSearch(searchTerm);

    return (
        <>
            <ParticleBackground />
            <div className="min-h-screen bg-gradient-to-b from-black via-[#130F40] to-black">
                <div className="container mx-auto px-4 pt-16 sm:pt-24">
                    <div className="text-center mb-12 motion-safe:animate-fade-up">
                        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Latest News
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                    </div>
                    
                    <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-250px)]">
                        {/* Left side - Latest news card */}
                        <div className="lg:w-1/2 motion-safe:animate-fade-up h-full">
                            <div className="h-full">
                                {filteredNews.length > 0 ? (
                                    <NewsCard {...filteredNews[0]} isLarge={true} />
                                ) : (
                                    <NewsCard {...newsData.news[0]} isLarge={true} />
                                )}
                            </div>
                        </div>

                        {/* Right side - Search and news list */}
                        <div className="lg:w-1/2 flex flex-col h-full">
                            {/* Search bar */}
                            <div className="mb-6 motion-safe:animate-fade-up sticky top-0">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search news..."
                                        className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-primary"
                                        value={searchTerm}
                                        onChange={handleSearch}
                                    />
                                    {isSearching && (
                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                            <div className="animate-spin h-5 w-5 border-2 border-primary rounded-full border-t-transparent"></div>
                                        </div>
                                    )}
                                </div>
                                {filteredNews.length === 0 && searchTerm && (
                                    <p className="text-white/70 text-sm mt-2">No results found for &quot;{searchTerm}&quot;</p>
                                )}
                            </div>

                            {/* News list */}
                            <div className="flex-1 overflow-y-auto pr-2 overflow-auto z-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {filteredNews.length > 1 ? 
                                        filteredNews.slice(1).map((item, index) => (
                                            <div key={item.id} 
                                                className="motion-safe:animate-fade-up"
                                                style={{ animationDelay: `${index * 0.1}s` }}>
                                                <NewsCard {...item} isLarge={false} />
                                            </div>
                                        )) : (
                                            <p className="text-white/70 col-span-2 text-center">
                                                No additional news items found
                                            </p>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsPage
