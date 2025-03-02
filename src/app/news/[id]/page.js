import Image from 'next/image'
import Link from 'next/link'
import { newsData } from '@/data/news-data'
import RecentNewsCard from '@/components/RecentNewsCard'

export async function generateStaticParams() {
    return newsData.news.map((article) => ({
        id: article.id,
    }))
}

export default async function NewsContent({ params }) {
    const { id } = await params
    const article = newsData.news.find(item => item.id === id)
    const recentArticles = newsData.news
        .filter(item => item.id !== id)
        .sort((a, b) => b.id - a.id)
        .slice(0, 3)

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
            <div className="relative h-[50vh] md:h-[70vh] w-full">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent">
                    <div className="container mx-auto px-4 h-full flex items-end pb-8 md:pb-16">
                        <div className="max-w-4xl motion-safe:animate-fade-up">
                            <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-3 md:mb-4">
                                <span className="badge badge-primary badge-md md:badge-lg font-poppins">{article.category}</span>
                                <span className="text-white/80 text-xs md:text-sm font-poppins">{article.date}</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-poppins font-bold mb-4 leading-tight
                                         bg-gradient-to-br from-white via-white/90 to-primary/90
                                         text-transparent bg-clip-text">
                                {article.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section with Sidebar */}
            <div className="container mx-auto px-4 py-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-gradient-to-b from-white/85 to-white/75 backdrop-blur-sm 
                                      p-5 md:p-10 rounded-xl md:rounded-2xl shadow-2xl border border-white/10 
                                      motion-safe:animate-fade-up">
                            <div className="prose prose-base md:prose-lg max-w-none font-['Times_New_Roman']
                                          prose-headings:font-poppins prose-headings:font-bold
                                          prose-h2:text-2xl md:prose-h2:text-3xl 
                                          prose-h3:text-xl md:prose-h3:text-2xl
                                          prose-p:text-gray-800 prose-p:leading-relaxed
                                          prose-a:text-blue-700 hover:prose-a:text-blue-900
                                          prose-blockquote:border-l-4 prose-blockquote:border-primary/70
                                          prose-blockquote:pl-4 md:prose-blockquote:pl-6 prose-blockquote:italic
                                          prose-strong:text-gray-900 prose-ul:text-gray-800
                                          prose-img:rounded-lg">
                                <div className="flex flex-wrap items-center gap-4 mb-6 md:mb-8 text-xs md:text-sm text-gray-600 font-sans">
                                    <div className="flex items-center gap-2 hover:text-primary transition-colors">
                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{article.length}</span>
                                    </div>
                                </div>
                                <article className="news-content space-y-4 md:space-y-6" 
                                        dangerouslySetInnerHTML={{ 
                                            __html: article.content.replace(/&lt;/g, '<').replace(/&gt;/g, '>') 
                                        }} 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sidebar with Recent Posts */}
                    <div className="space-y-6 motion-safe:animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        <div className="bg-gradient-to-b from-white/85 to-white/75 backdrop-blur-sm 
                                      p-5 rounded-xl shadow-2xl border border-white/10">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Recent Posts</h3>
                            <div className="space-y-4">
                                {recentArticles.map((recentArticle) => (
                                    <RecentNewsCard 
                                        key={recentArticle.id}
                                        {...recentArticle}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Share Section moved to sidebar */}
                        <div className="bg-gradient-to-b from-white/85 to-white/75 backdrop-blur-sm 
                                      p-5 rounded-xl shadow-2xl border border-white/10">
                            <h3 className="text-lg font-bold mb-3 text-gray-800">Share this article</h3>
                            <div className="flex flex-wrap gap-2 text-xs text-black font-sans">
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
        </div>
    )
}
