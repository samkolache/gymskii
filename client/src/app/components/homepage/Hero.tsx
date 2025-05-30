import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <>
            {/* Section Container */}
            <div className='px-20 py-20 flex flex-col lg:flex-row items-center justify-center gap-20'>

                {/* Left side container */}
                <div className='flex flex-col space-y-5 max-w-3xl'>

                    {/* Opening Container */}
                    <div>
                        <p className='text-sm md:text-base font-medium text-brandHeading'>A progressive overloading solution</p>
                        <h1 className='text-4xl md:text-5xl font-bold'>Track Smarter, Train Harder with gym<span className='text-brand'>skii</span></h1>
                    </div>
                    
                    <p className=' text-base md:text-lg font-light'>Take your fitness goals to new heights with gymskii, the perfect way to track your progression in everything workout related.</p>

                    {/* Button Container */}
                    <div className='flex gap-5'>
                        <Link href = "/sign-up" className='px-6 py-3 md:px-6 md:py-4  bg-brand text-white font-semibold rounded-md' >Track your first workout</Link>
                        <Link href = "/about" className='px-6 py-3 md:px-6 md:py-4 hidden md:block border border-brand text-brand font-semibold rounded-md' >Learn more</Link>
                    </div>
                    
                </div>
                
                <Image 
                  src = '/macbook-mock.svg'
                  alt='Screenshot of gymskii dashboard'
                  width={700}
                  height={700}
                  className='shadow-lg rounded-lg border border-gray-200 hidden lg:block'
                />
            </div>
        </>
    )
}
