'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NewsCard = ({ id, title, description, content, image, date, category, isLarge }) => {
    return (
        <Link 
            href={`/news/${id}`}
            className="block group h-full"
        >
            <div className="relative bg-base-200 rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl h-full flex flex-col">
                {/* Image Container with Gradient Overlay */}
                <div className={`relative ${isLarge ? 'h-52 sm:h-80' : 'h-36 sm:h-32'} overflow-hidden`}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes={isLarge ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, 25vw"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base-200 via-transparent to-transparent opacity-90" />
                </div>

                {/* Content Container */}
                <div className="relative p-3 sm:p-4 flex flex-col flex-grow">
                    {/* Category & Date */}
                    <div className="flex justify-between items-center mb-2">
                        <span className="bg-primary/90 px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-primary-content 
                            shadow-lg shadow-primary/20">
                            {category}
                        </span>
                        <time className="text-base-content/70 text-xs font-medium">{date}</time>
                    </div>

                    {/* Title & Description */}
                    <h3 className={`${isLarge ? 'text-lg sm:text-xl' : 'text-base'} font-bold text-base-content mb-1.5 line-clamp-2 group-hover:text-primary transition-colors`}>
                        {title}
                    </h3>
                    <p className={`text-base-content/70 ${isLarge ? 'line-clamp-3 text-sm sm:text-base' : 'line-clamp-2 text-xs sm:text-sm'}`}>
                        {description}
                    </p>

                    {/* Push Read More to bottom for large cards */}
                    {isLarge && <div className="flex-grow" />}

                    {/* Read More Link - Only show on large card */}
                    {isLarge && (
                        <div className="flex items-center text-primary font-medium mt-2">
                            <span className="text-sm mr-2">Read More</span>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-5 w-5 transform transition-transform group-hover:translate-x-1" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    )
}

export default NewsCard
