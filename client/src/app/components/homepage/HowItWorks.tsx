import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3 } from '@fortawesome/free-solid-svg-icons';

export default function HowItWorks() {
    return (
        <>
            {/* container */}
            <div className="px-6 py-10">
                {/* Title */}
                <h5 className="text-lg md:text-xl text-brandHeading font-semibold text-center mb-2">HOW DOES GYMSKII WORK?</h5>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Three steps to smarter tracking</h2>

                {/* How it works Container */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
                    {/* How it works step 1 */}
                    <div className="flex flex-col items-center gap-5  max-w-lg p-8">
                        <FontAwesomeIcon icon={fa1} className="text-brand" style={{ width: '24px', height: '48px' }}  /> {/* Consistent size */}
                        <h3 className="text-2xl md:text-3xl font-medium text-brandHeading">Crush a Workout</h3>
                        <p className="text-center font-medium">Go hit your normal routine and keep track of whatever you want to improve (weight, reps, time, etc). Make sure to work harder than last time!</p>
                        <Image
                            src="/workout-ill.svg"
                            alt="Illustration of man lifting dumbbells"
                            width={192}
                            height={192}
                            layout="fixed" 
                            className="w-48 h-48 object-contain pt-4" 
                        />
                    </div>

                    {/* How it works step 2 */}
                    <div className="flex flex-col items-center gap-5 max-w-lg p-8">
                        <FontAwesomeIcon icon={fa2} className="text-5xl text-brand" /> {/* Consistent size */}
                        <h3 className="text-2xl md:text-3xl font-medium text-brandHeading">Enter your PRs</h3>
                        <p className="text-center font-medium">Login to your Gains Lab dashboard and enter your workout for the day. You can also add your macros for the day while you're at it.</p>
                        <Image
                            src="/pr-ill.svg"
                            alt="Illustration of man pointing at stats"
                            width={192}
                            height={192}
                            layout="fixed" 
                            className="w-48 h-48 object-contain pt-4" 
                        />
                    </div>

                    {/* How it works step 3 */}
                    <div className="flex flex-col items-center gap-5 max-w-lg p-8">
                        <FontAwesomeIcon icon={fa3} className="text-5xl text-brand" /> {/* Consistent size */}
                        <h3 className="text-2xl md:text-3xl font-medium text-brandHeading">View your visuals</h3>
                        <p className="text-center font-medium">Check out your progression through charts and graphs to make sure you are getting stronger every week, that's progressive overload!</p>
                        <Image
                            src="/stats-ill.svg"
                            alt="Man leaning on charts"
                            width={192}
                            height={192}
                            layout="fixed" 
                            className="w-48 h-48 object-contain pt-4" 
                        />
                    </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col items-center gap-6">
                    <h4 className="text-2xl md:text-3xl font-semibold text-brandHeading">Ready for some gains?</h4>
                    <Link 
                        href="/sign-up" 
                        className="bg-brand px-6 py-3 rounded-lg font-semibold text-white hover:bg-brandHover transition duration-300 ease-in-out mx-auto cursor-pointer"
                    >
                        Track your next workout now
                    </Link>
                </div>
            </div>
        </>
    );
}
