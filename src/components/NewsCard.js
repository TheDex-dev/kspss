'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NewsCard = ({ id, title, description, content, image, date, category }) => {
    return (
        <Link href={`/news/${id}`}>
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-48">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <span className="bg-primary px-3 py-1 rounded-full text-sm text-white">
                            {category}
                        </span>
                        <span className="text-gray-400 text-sm">{date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                    <p className="text-gray-400 mb-4">{description}</p>
                </div>
            </div>
        </Link>
    )
}

export default NewsCard
