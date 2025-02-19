'use client'

import React from 'react'
import NewsCard from '@/components/NewsCard'
import { newsData } from '@/data/news-data'

const NewsPage = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-black via-[#130F40] to-black">
                <div className="container mx-auto px-4 pt-24">
                    <div className="text-center mb-12 motion-safe:animate-fade-up">
                        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Latest News
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
                        {newsData.news
                            .sort((a, b) => b.id - a.id)
                            .map((item, index) => (
                                <div key={item.id} 
                                     className="motion-safe:animate-fade-up"
                                     style={{ animationDelay: `${index * 0.1}s` }}>
                                    <NewsCard {...item} />
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsPage
