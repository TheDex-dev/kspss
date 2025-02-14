'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import { newsData } from '@/data/news-data'

const NewsContent = () => {
    const { id } = useParams()
    const article = newsData.news.find(item => item.id === id)

    if (!article) {
        return (
            <>
                <Navbar />
                <div className="container mx-auto px-4 pt-24">
                    <h1 className="text-4xl font-bold text-center">Article not found</h1>
                </div>
            </>
        )
    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 pt-24">
                <div className="max-w-3xl mx-auto">
                    <div className="relative w-full h-[400px] mb-8">
                        <Image
                            src={article.image} 
                            alt={article.title} 
                            fill
                            className="object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <span className="badge badge-primary">{article.category}</span>
                        <span className="text-gray-500">{article.date}</span>
                    </div>
                    <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
                    <div className="prose max-w-none">
                        {article.content}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsContent
