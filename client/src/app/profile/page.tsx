'use client'
import Image from 'next/image'
import ModeIcon from '@mui/icons-material/Mode';
import EditPopup from '../components/profile/EditPopup'
import { useState, useEffect } from 'react';
import axios from 'axios'



export default function Profile()  {

    const [isModalOpen, setModal] = useState(false)

    const toggleModal = () => setModal(prev => !prev);

    const [user, setUser] = useState(null)

    const hardcodedID = '6722a5d542cfa6e5634e169e'

    useEffect(() => {
        const fetchUser = async () => {
        try {
            const response = await axios.get(`http://localhost:5555/profile/${hardcodedID}`);
            setUser(response.data); // Set the user data
        } catch (error) {
            console.log(error);
        }
        };
        fetchUser()
    }, [hardcodedID])

    if (!user) return null;
    return(
        <>
        {/* Content */}
        <div className='p-4 sm:p-8 mt-24 ml-4 md:mt-0 md:ml-0'>
            <h4 className='text-2xl font-semibold'>My Profile</h4>  

            {/* Field Containers */}
            <div className='flex flex-col space-y-10 mt-10'>

                {/* Intro Container */}
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center border rounded-lg w-full sm:w-3/4 p-5'>

                    {/* left side */}
                    <div className='flex items-center space-x-6'>
                        {/* pfp */}
                        <div className="w-20 h-20 relative">
                            <Image 
                                src="/sam-pfp.jpg"
                                alt="user profile image"
                                layout='fill'
                                className="rounded-full object-cover"
                            />
                        </div>
                        {/* name, title, loc */}
                        <div>
                            <h3 className='text-xl font-semibold text-stats'> Sam Kotecha</h3>
                            <p className='text-[18px] font-bold text-gray-500'>Gym Rat</p>
                            <p className='text-[18px] text-gray-500'>Houston, Texas</p>
                        </div>
                    </div>
                </div>

                {/* Personal Information Container */}
                <div className='w-full sm:w-3/4 border rounded-lg p-5'>

                    {/* title container */}
                    <div className='flex justify-between'>
                        <h3 className='text-xl font-semibold text-stats'> Personal Information</h3>
                        <button 
                        className='border rounded-md px-4 py-2 flex items-center'
                        onClick={toggleModal}
                        >
                            <ModeIcon fontSize='small' className="mr-2" />
                            Edit
                        </button>
                    </div>

                    {/* Info Container */}
                    <div className='flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-32 mt-6'>

                        {/* First row */}
                        <div className='flex flex-col space-y-4'>
                            <div className="flex flex-col space-y-2">
                                <p className='text-gray-500'>First Name</p>
                                <p className='text-gray-500 font-medium'>{user.firstName}</p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <p className='text-gray-500'>Email Address</p>
                                <p className='text-gray-500 font-medium'>{user.emailAddress}</p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <p className='text-gray-500'>Quote</p>
                                <p className='text-gray-500 font-medium'>{user.quote}</p>
                            </div>
                        </div>

                        {/* Second row */}
                        <div className='flex flex-col space-y-4'>
                            <div className="flex flex-col space-y-2">
                                <p className='text-gray-500'>Last Name</p>
                                <p className='text-gray-500 font-medium'>{user.lastName}</p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <p className='text-gray-500'>Phone</p>
                                <p className='text-gray-500 font-medium'>{user.phoneNumber}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EditPopup isModalOpen = {isModalOpen} toggleModal = {toggleModal} />
            
        </div>
        </>
    )
}
