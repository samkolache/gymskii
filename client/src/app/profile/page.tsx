'use client';
import Image from 'next/image';
import ModeIcon from '@mui/icons-material/Mode';
import EditPopup from '../components/profile/EditPopup';
import { useState, useEffect } from 'react';

export default function Profile() {
    const [isModalOpen, setModal] = useState(false);
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        quote: '',
    });

    const toggleModal = () => setModal(prev => !prev);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/register');
                if (response.ok) {
                    const data = await response.json();
                    setUserData(data); // Set the user data from the response
                } else {
                    console.error('Failed to fetch user data:', response.status);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
    
        fetchUserData();
    }, []);
    


    return (
        <>
            <div className='p-4 sm:p-8 mt-24 ml-4 md:mt-0 md:ml-0'>
                <h4 className='text-2xl font-semibold'>My Profile</h4>
                <div className='flex flex-col space-y-10 mt-10'>
                    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center border rounded-lg w-full sm:w-3/4 p-5'>
                        <div className='flex items-center space-x-6'>
                            <div className="w-20 h-20 relative">
                                <Image
                                    src="/sam-pfp.jpg"
                                    alt="user profile image"
                                    layout='fill'
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className='text-xl font-semibold text-stats'> {userData.firstName} {userData.lastName}</h3>
                                <p className='text-[18px] font-bold text-gray-500'>Gym Rat</p>
                                <p className='text-[18px] text-gray-500'>Houston, Texas</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full sm:w-3/4 border rounded-lg p-5'>
                        <div className='flex justify-between'>
                            <h3 className='text-xl font-semibold text-stats'>Personal Information</h3>
                            <button
                                className='border rounded-md px-4 py-2 flex items-center'
                                onClick={toggleModal}
                            >
                                <ModeIcon fontSize='small' className="mr-2" />
                                Edit
                            </button>
                        </div>

                        <div className='flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-32 mt-6'>
                            <div className='flex flex-col space-y-4'>
                                <div className="flex flex-col space-y-2">
                                    <p className='text-gray-500'>First Name</p>
                                    <p className='text-gray-500 font-medium'>{userData.firstName}</p>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <p className='text-gray-500'>Email Address</p>
                                    <p className='text-gray-500 font-medium'>{userData.email}</p>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <p className='text-gray-500'>Quote</p>
                                    <p className='text-gray-500 font-medium'></p>
                                </div>
                            </div>

                            <div className='flex flex-col space-y-4'>
                                <div className="flex flex-col space-y-2">
                                    <p className='text-gray-500'>Last Name</p>
                                    <p className='text-gray-500 font-medium'>{userData.lastName}</p>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <p className='text-gray-500'>Phone</p>
                                    <p className='text-gray-500 font-medium'></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <EditPopup
                    isModalOpen={isModalOpen}
                    toggleModal={toggleModal}
                    userData={userData}
                    setUserData={setUserData}
                />
            </div>
        </>
    );
}
