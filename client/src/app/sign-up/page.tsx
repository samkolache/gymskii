 'use client';
import MinimalNav from '../components/navbar/MinimalNav';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from "@/app/config/firebase/firebase-config"

export default function SignUp() {

    // State for inputs
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

    const handleSignup = async(e) => {
        e.preventDefault();
        try{
            const res = await createUserWithEmailAndPassword(email, password)
            console.log({res})
            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('')
            setPasswordConfirm('')
        }catch(e) {
            console.error(e)
        }
    }

    
    
    return (
        <>
            <MinimalNav />
            {/* Container */}
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col items-center justify-center mt-4 lg:mt-0 px-4 py-4 lg:px-8">
                    <h1 className="text-3xl lg:text-4xl font-bold text-center">Sign up</h1>
                    <p className="mt-2 text-center">Let's get started!</p>

                    {/* Form */}
                    <form className="mt-4 w-full max-w-lg" onSubmit={handleSignup}>
                        {/* First Name and Last Name in a Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="first-name" className="block text-lg font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    id="first-name"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
                                    placeholder="First name"
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-lg font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    id="last-name"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
                                    placeholder="Last name"
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Email Address */}
                        <div className="gap-4 mt-4">
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
                        </div>

                        {/* Password and Confirm Password in a Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                            <div>
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
                            <div>
                                <label htmlFor="confirm-password" className="block text-lg font-medium text-gray-700">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
                                    placeholder="••••••••"
                                    required
                                    value={passwordConfirm}
                                    onChange={(e) => setPasswordConfirm(e.target.value)}
                                />
                            </div>
                        </div>
                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="w-full mt-6 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-50 transition duration-300"
                            // disabled={isRegistering}
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Continue with Google */}
                    <p className="text-gray-500 mt-4">OR CONTINUE WITH</p>
                    <button className="flex items-center justify-center gap-4 px-8 py-2 rounded-lg border mt-2">
                        <FontAwesomeIcon icon={faGoogle} className="text-stats" size='lg' />
                        <p>Google</p>
                    </button>
                </div>
            </div>
        </>
    );
}
