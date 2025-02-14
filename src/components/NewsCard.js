'use client'

import React from 'react'
import Image from 'next/image'

const NewsCard = ({ title, description, image, date, category }) => {
    return (
        <div className="card bg-base-100 shadow-xl h-full ">
            <figure className="relative h-48">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{category}</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="text-sm text-gray-500">{date}</div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
