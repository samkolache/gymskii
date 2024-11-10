'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter} from 'next/navigation';


export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const router = useRouter();
   



    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const message = urlParams.get('successMessage');
        if (message) {
            setSuccessMessage(message);
            setTimeout(() => setSuccessMessage(''), 3000);
        }
    }, []);

    async function handleLogin(event) {
        event.preventDefault(); // Prevent page refresh

        const validationRules = [
            {check: !email && !password, message: "Please enter your email and password"},
            {check: !email, message: "Please enter your email"},
            {check: !password, message: "Please enter your password"}
        ]
    
        for(const rule of validationRules) {
            if(rule.check) {
                setError(rule.message)
                return;
            }
        }

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (res?.error) {
            setError('Incorrect email or password');
        } else {
            router.push("/profile");
        }
    }

    return (
        <>
        {successMessage && (
                <div className="p-4 bg-green-500 text-white text-center max-w-[400px] mx-auto rounded-md">
                    {successMessage}
                </div>
             )}
            
            {/* Container */}
            <div className='flex justify-center items-center min-h-screen'>
                <div className='w-full flex flex-col items-center justify-center p-6'>
                    <h1 className="text-3xl font-bold">Sign in</h1>
                    <p className='mt-2'>Enter them deets!</p>
                    <div className={!error ? "hidden" : "bg-red-100 p-3 mt-2 rounded-md"}>
                        <p className='text-red-800'>{error}</p>
                    </div>
                    
                    {/* Form */}
                    <form onSubmit={handleLogin} className='mt-4 w-full max-w-sm' noValidate>
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
                </div>
            </div>
        </>
    );
}
