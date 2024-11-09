"use client"
import { useState } from "react";
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Faq() {
    return(
        <>
        <div className="px-6 py-10 bg-gray-100">
            <h5 className = "text-lg md:text-xl text-brandHeading font-semibold text-center mb-2">GOT QUESTIONS?</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">We've got answers </h2>  
            <div className="flex flex-col items-center px-10 md:px-0 pt-4">
                <FaqItem q = "What is gymskii?" a = "gymskii is a gym tracking platform focused on the idea of progressive overloading. Using visuals and charts, you can make sure you are getting stronger each week to ensure you're always becoming a better version of yourself. What are you waiting for? Create an account now!" 
                />
                <FaqItem q = "Is gymskii for beginners as well?" a = "Yes, anyone can use gymskii. Whether it's your first time working out or you have been lifting for years, anyone can benefit from progressive overloading." />
                <FaqItem q = "What is progressive overloading?" a = {
                    <>
                        Progressive overloading is a training principle where you gradually increase the weight, frequency, or intensity of your workouts to 
                        continually challenge your muscles. This helps ensure continuous improvement in strength, endurance, and muscle growth over time.
                        See our <Link href = "/blog/progressive-overload" className="text-brand font-semibold">blog post</Link> on the topic 
                    </>
                } />
                <FaqItem q = "Is it free?" a = "Yes, it is absolutely free for everyone!" />
            </div>
                
        </div>
            
        </>
    );
}


function FaqItem({ q, a }) {
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <div className="max-w-full md:max-w-[70%] w-full p-4 mb-4 border-b border-gray-300">
            <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800">{q}</h3>
                <FontAwesomeIcon 
                    icon={faCaretDown} 
                    size="lg" 
                    className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                />
            </div>
            <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen mt-2' : 'max-h-0'}`}
            >
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-2 mb-4">{a}</p>
                <div className="w-full h-0.5 bg-brand" />
            </div>
        </div>
    );
}