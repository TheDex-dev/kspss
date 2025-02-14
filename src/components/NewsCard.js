'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NewsCard = ({ id, title, description, image, date, category }) => {
    return (
        <Link href={`/news/${id}`}>
            <div className="card bg-base-100 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow">
                <figure className="relative h-48">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </figure>
                <div className="card-body">
                    <div className="flex justify-between items-center mb-2">
                        <span className="badge badge-primary">{category}</span>
                        <span className="text-sm text-gray-500">{date}</span>
                    </div>
                    <h2 className="card-title">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
        </Link>
    )
}

export default NewsCard
