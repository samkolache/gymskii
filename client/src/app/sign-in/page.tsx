'use client';
import MinimalNav from '../components/navbar/MinimalNav';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from "@/app/config/firebase/firebase-config"
import {useRouter} from 'next/navigation'

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const router = useRouter();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try{
            const res = await signInWithEmailAndPassword(email,password)
            console.log({res})
            setEmail('')
            setPassword('')
            router.push('/')

        }catch(e) {
            console.error(e)
        }
    }

    return (
        <>
            <MinimalNav />
            {/* Container */}
            <div className='flex justify-center items-center min-h-screen'>
                <div className='w-full flex flex-col items-center justify-center p-6'>
                    <h1 className="text-3xl font-bold">Sign in</h1>
                    <p className='mt-2'>Enter them deets!</p>
                    
                    {/* Form */}
                    <form className='mt-4 w-full max-w-sm' onSubmit={handleSignUp}>
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email address</label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
                                placeholder="you@example.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Password Input */}
                        <div className='mt-4'>
                            <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
                                placeholder="••••••••"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {/* Remember me / Forgot Password */}
                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    className="h-5 w-5 text-brand focus:ring-brand border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <a href="#" className="text-sm text-brand hover:text-brand-dark">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full mt-4 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-50 transition duration-300"
                        >
                            Sign in
                        </button>
                    </form>

                    {/* Google */}
                    <p className='text-gray-500 mt-4'>OR CONTINUE WITH</p>
                    <button
                        className='flex items-center justify-center gap-4 px-8 py-2 rounded-lg border mt-2'
                    >
                        <FontAwesomeIcon icon={faGoogle} className="text-stats" size='lg' />
                        <p>Google</p>
                    </button>
                </div>
            </div>
        </>
    );
}
