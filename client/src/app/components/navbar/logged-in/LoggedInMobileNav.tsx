"use client"
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import '../navbar.css';

export default function LoggedInMobileNav({ isMenuOpen, toggleMenu }) {


    return (
        <div 
            className={`lg:hidden z-50 flex flex-col items-center gap-5 min-h-screen w-1/2 bg-gray-100 fixed top-0 right-0 pt-10 shadow-md 
                        transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
        >
            {/* Site Nav */}
            <ul className="flex flex-col gap-10 mt-16 w-full ">
                <li className="w-full flex justify-between items-center cursor-pointer px-4 scale-hover">
                    <Link 
                        href="/about" 
                        className="text-3xl w-full block px-4 py-2 "
                        onClick={toggleMenu}
                    >
                        About
                    </Link>
                    <ArrowForwardIcon className='text-brand' />
                </li>
                <li className="w-full flex justify-between items-center cursor-pointer px-4 scale-hover">
                    <Link 
                        href="/features" 
                        className="text-3xl w-full block px-4 py-2"
                        onClick={toggleMenu}
                    >
                        Features
                    </Link>
                    <ArrowForwardIcon className='text-brand' />
                </li>
                <li className="w-full flex justify-between items-center cursor-pointer px-4 scale-hover">
                    <Link 
                        href="/blog" 
                        className="text-3xl w-full block px-4 py-2"
                        onClick={toggleMenu}
                    >
                        Blog
                    </Link>
                    <ArrowForwardIcon className='text-brand' />
                </li>
            </ul>

            {/* Profile Nav */}
            <ul className="flex flex-col gap-10 mt-8 w-full">
                <li className=" flex justify-between items-center cursor-pointer px-4 scale-hover">
                    <Link 
                        href="/profile" 
                        className="text-2xl w-full block px-4 py-2"
                        onClick={toggleMenu}
                    >
                        My Profile
                    </Link>
                    <AccountCircleIcon fontSize='large' className="text-brand" />
                </li>
                <li className="w-full flex justify-between items-center cursor-pointer px-4 scale-hover">
                    <Link 
                        href="/profile/dash-results" 
                        className="text-2xl w-full block px-4 py-2"
                        onClick={toggleMenu}
                    >
                        Gains Lab
                    </Link>
                    <DashboardIcon fontSize='large' className="text-brand " />
                </li>
                <li className="w-full flex justify-between items-center cursor-pointer px-4 scale-hover">
                    <Link 
                        href="/logout" 
                        className="text-2xl w-full block px-4 py-2"
                        onClick={toggleMenu}
                    >
                        Log out
                    </Link>
                    <LogoutIcon fontSize='large' className="text-brand " />
                </li>
            </ul>

            
            
            <span 
                className=" cursor-pointer absolute top-4 right-4"
                onClick={toggleMenu}
            >
                <CloseIcon />
            </span>
        </div>
    );
}