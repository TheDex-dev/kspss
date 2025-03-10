'use client'

import { useState } from 'react'
import { auth } from '@/lib/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import AccountBackground from '@/components/AccountBackground'

export default function AccountPage() {
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password)
            } else {
                await createUserWithEmailAndPassword(auth, email, password)
            }
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="relative min-h-screen pt-20 flex items-center justify-center bg-gradient-to-b from-base-300/50 to-base-300/70">
            <AccountBackground />
            <div className="card w-full max-w-md bg-base-100/80 backdrop-blur-sm shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center text-2xl font-bold mb-6">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {!isLogin && (
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input 
                                    type="text" 
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="Enter your name" 
                                    className="input input-bordered" 
                                />
                            </div>
                        )}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email" 
                                className="input input-bordered w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-base-200/50" 
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input 
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password" 
                                className="input input-bordered w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-base-200/50" 
                            />
                        </div>

                        {error && (
                            <div className="text-error text-sm">{error}</div>
                        )}

                        <button 
                            type="submit" 
                            className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
                            disabled={loading}
                        >
                            {isLogin ? 'Login' : 'Sign Up'}
                        </button>
                    </form>

                    <div className="divider">OR</div>

                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="btn btn-ghost btn-sm"
                    >
                        {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
                    </button>
                </div>
            </div>
        </div>
    )
}
