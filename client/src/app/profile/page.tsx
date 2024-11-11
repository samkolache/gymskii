'use client';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';






export default function Profile() {
    const { data: session } = useSession();

    const router = useRouter();

    // useEffect(() => {
    //   if (!session) {
    //     router.push('/sign-in');
    //   }
    // }, [session, router]);
 



    return (
        <>
            <div className='p-4 sm:p-8 mt-24 ml-4 md:mt-0 md:ml-0'>
                <h4 className='text-2xl font-semibold'>My Profile</h4>
                <div className='flex flex-col space-y-10 mt-10'>
                    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center border rounded-lg w-full sm:w-3/4 p-5'>
                        <div className='flex items-center space-x-6'>
                            <div className="w-20 h-20 relative">
                                <Image
                                    src="/pfp.jpg"
                                    alt="user profile image"
                                    layout='fill'
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className='text-xl font-semibold text-stats'>{session?.user?.fname || 'First Name'}</h3>
                                <p className='text-[18px] font-bold text-gray-500'>Gym Rat</p>
                                <p className='text-[18px] text-gray-500'>Houston, Texas</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full sm:w-3/4 border rounded-lg p-5'>
                        <div className='flex justify-between'>
                            <h3 className='text-xl font-semibold text-stats'>Personal Information</h3>
                        </div>

                        <div className='flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-32 mt-6'>
                            <div className='flex flex-col space-y-4'>
                                <div className="flex flex-col space-y-2">
                                    <p className='text-gray-500'>First Name</p>
                                    <p className='text-gray-500 font-medium'>{session?.user?.fname || 'First Name'}</p>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <p className='text-gray-500'>Email Address</p>
                                    <p className='text-gray-500 font-medium'>{session?.user?.email || 'Email'}</p>
                                </div>
                            </div>

                            <div className='flex flex-col space-y-4'>
                                <div className="flex flex-col space-y-2">
                                    <p className='text-gray-500'>Last Name</p>
                                    <p className='text-gray-500 font-medium'>{}{session?.user?.lname || 'Last Name'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}