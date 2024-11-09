'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {useSession} from 'next-auth/react';

export default function SignUp() {
    const { data: session } = useSession();
    const router = useRouter();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    

    async function handleSubmit(event) {

        

        event.preventDefault();

        try {
            const formData = new FormData(event.currentTarget)

            const fname = formData.get('fname')
            const lname = formData.get('lname')
            const email = formData.get('email')
            const password = formData.get('password')

            const response = await fetch(`/api/register`, {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    fname,
                    lname,
                    email,
                    password
                })
            })

            response.status === 201 && router.push('/')

        }catch(e) {
            console.log(e.message)
        }
    }


    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col items-center justify-center mt-4 lg:mt-0 px-4 py-4 lg:px-8">
                    <h1 className="text-3xl lg:text-4xl font-bold text-center">Sign up</h1>
                    <p className="mt-2 text-center">Let's get started!</p>

                    <form 
                    onSubmit={handleSubmit} 
                    className="mt-4 w-full max-w-lg">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="first-name" className="block text-lg font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    id="first-name"
                                    name='fname'
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
                                    name='lname'
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
                                    placeholder="Last name"
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="gap-4 mt-4">
                            <div>
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name='email'
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
                                    placeholder="you@example.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name='password'
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

                        <button
                            type="submit"
                            className="w-full mt-6 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-50 transition duration-300"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
