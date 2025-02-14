'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NewsCard = ({ id, title, description, image, date, category }) => {
    return (
        <Link href={`/news/${id}`}>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 
                          hover:scale-[1.02] hover:-translate-y-1 backdrop-blur-sm bg-white/90">
                <figure className="relative h-48 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </figure>
                <div className="card-body">
                    <div className="flex justify-between items-center mb-2">
                        <span className="badge badge-primary badge-outline font-medium">{category}</span>
                        <span className="text-sm text-gray-500 font-medium">{date}</span>
                    </div>
                    <h2 className="card-title font-bold hover:text-primary transition-colors">{title}</h2>
                    <p className="text-gray-600 line-clamp-2">{description}</p>
                </div>
            </div>
        </Link>
    )
}

export default NewsCard
