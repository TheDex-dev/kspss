'use client'

import React from 'react'
import Navbar from '@/components/navbar'
import NewsCard from '@/components/NewsCard'
import { newsData } from '@/data/news-data'  // Update import path

const NewsPage = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 pt-24">
                <h1 className="text-4xl font-bold mb-8 text-center">Latest News</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newsData.news.map((item) => (
                        <NewsCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            date={item.date}
                            category={item.category}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default NewsPage
