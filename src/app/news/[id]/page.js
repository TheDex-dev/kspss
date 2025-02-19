import Image from 'next/image'
import Link from 'next/link'
import { newsData } from '@/data/news-data'

export async function generateStaticParams() {
    return newsData.news.map((article) => ({
        id: article.id,
    }))
}

export default async function NewsContent({ params }) {
    const { id } = await params
    const article = newsData.news.find(item => item.id === id)

    if (!article) {
        return (
            <div className="min-h-screen pt-2 bg-gradient-to-b from-[#2C3E50] via-[#1a2530] to-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-lg mx-auto text-center space-y-4 motion-safe:animate-fade-up">
                        <h1 className="text-4xl font-bold text-gray-800">Article not found</h1>
                        <p className="text-gray-600">The article you&apos;re looking for doesn&apos;t exist or has been removed.</p>
                        <Link href="/news" className="btn btn-primary glass inline-block mt-4">
                            Back to News
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#2C3E50] via-[#1a2530] to-black">
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
                        <div className="max-w-4xl motion-safe:animate-fade-up">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="badge badge-primary badge-lg font-sans">{article.category}</span>
                                <span className="text-white/80 text-sm font-light">{article.date}</span>
                            </div>
                            <h1 className="text-5xl font-playfair font-bold text-white mb-4 leading-tight">
                                {article.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto bg-gradient-to-b from-white/85 to-white/75 backdrop-blur-sm 
                              p-10 rounded-2xl shadow-2xl border border-white/10 
                              motion-safe:animate-fade-up">
                    <div className="prose prose-lg max-w-none font-merriweather
                                  prose-headings:font-playfair prose-headings:font-bold
                                  prose-h2:text-3xl prose-h3:text-2xl
                                  prose-p:text-gray-800 prose-p:leading-relaxed
                                  prose-a:text-blue-700 hover:prose-a:text-blue-900
                                  prose-blockquote:border-l-4 prose-blockquote:border-primary/70
                                  prose-blockquote:pl-6 prose-blockquote:italic
                                  prose-strong:text-gray-900 prose-ul:text-gray-800">
                        <div className="flex items-center gap-6 mb-8 text-sm text-gray-600 font-sans">
                            <div className="flex items-center gap-2 hover:text-primary transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{article.length}</span>
                            </div>
                            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                                <span>Save for later</span>
                            </div>
                        </div>
                        <article className="news-content space-y-6" 
                                dangerouslySetInnerHTML={{ 
                                    __html: article.content.replace(/&lt;/g, '<').replace(/&gt;/g, '>') 
                                }} 
                        />
                    </div>

                    {/* Share Section */}
                    <div className="border-t border-gray-200 mt-12 pt-8">
                        <h3 className="text-xl font-playfair font-semibold mb-4 text-gray-800">Share this article</h3>
                        <div className="flex gap-4">
                            {['Twitter', 'Facebook', 'LinkedIn'].map(platform => (
                                <button key={platform} 
                                        className="btn btn-ghost btn-sm hover:bg-primary/10 
                                                 transition-colors font-sans">
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
