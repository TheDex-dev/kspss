'use client'

import React from 'react'
import NewsCard from '@/components/NewsCard'
import { newsData } from '@/data/news-data'

const NewsPage = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-black via-[#130F40] to-black">
                <div className="container mx-auto px-4 pt-16 sm:pt-24">
                    <div className="text-center mb-12 motion-safe:animate-fade-up">
                        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Latest News
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-16 auto-rows-[280px] sm:auto-rows-[250px]">
                        {newsData.news
                            .sort((a, b) => b.id - a.id)
                            .map((item, index) => (
                                <div key={item.id} 
                                     className={`motion-safe:animate-fade-up 
                                        ${index === 0 ? 'sm:col-span-2 sm:row-span-2' : 'col-span-1'}`}
                                     style={{ animationDelay: `${index * 0.1}s` }}>
                                    <NewsCard {...item} isLarge={index === 0} />
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsPage
