'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RecentNewsCard = ({ id, title, image, date, category }) => {
    return (
        <Link 
            href={`/news/${id}`}
            className="group flex gap-4 items-start hover:bg-black/5 p-2 rounded-lg transition-colors"
        >
            {/* Thumbnail */}
            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="80px"
                />
            </div>

            {/* Content */}
            <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    <span className="bg-primary/90 px-2 py-0.5 rounded-full text-xs font-medium text-black">
                        {category}
                    </span>
                    <time className="text-gray-500 text-xs">{date}</time>
                </div>
                <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-primary transition-colors">
                    {title}
                </h4>
            </div>
        </Link>
    )
}

export default RecentNewsCard
