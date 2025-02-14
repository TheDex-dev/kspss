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
            <div className="min-h-screen bg-gradient-to-b from-base-200/50 to-transparent pt-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-lg mx-auto text-center space-y-4 motion-safe:animate-fade-up">
                        <h1 className="text-4xl font-bold text-gray-800">Article not found</h1>
                        <p className="text-gray-600">The article you're looking for doesn't exist or has been removed.</p>
                        <a href="/news" className="btn btn-primary glass inline-block mt-4">Back to News</a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-base-200/50 to-transparent">
            {/* Hero Section with Image */}
            <div className="relative h-[70vh] w-full">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent">
                    <div className="container mx-auto px-4 h-full flex items-end pb-16">
                        <div className="max-w-3xl motion-safe:animate-fade-up">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="badge badge-primary badge-lg">{article.category}</span>
                                <span className="text-white/80 text-sm">{article.date}</span>
                            </div>
                            <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
                                {article.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-xl 
                              motion-safe:animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    <div className="prose prose-lg max-w-none">
                        <div className="flex items-center gap-4 mb-8 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>5 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                                <span>Save for later</span>
                            </div>
                        </div>
                        {article.content}
                    </div>

                    {/* Share Section */}
                    <div className="border-t border-gray-200 mt-12 pt-8">
                        <h3 className="text-lg font-semibold mb-4">Share this article</h3>
                        <div className="flex gap-4">
                            {['Twitter', 'Facebook', 'LinkedIn'].map(platform => (
                                <button key={platform} 
                                        className="btn btn-ghost btn-sm hover:bg-base-200 transition-colors">
                                    {platform}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsContent
