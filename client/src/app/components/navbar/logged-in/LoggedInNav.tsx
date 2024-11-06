'use client'
"use client"
import Image from "next/image"
import Link from "next/link"
import '../navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import LoggedInMobileNav from "./LoggedInMobileNav";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';

import {signOut} from 'firebase/auth'
import {auth} from '@/app/config/firebase/firebase-config'
import {useRouter} from 'next/navigation'

export default function Navbar() {
    
    // State for Mobile
    const [isOpen, setOpen] = useState(false)

    const toggleMenu = () => setOpen(prev => !prev);

    // State for Profile
    const [isProfOpen, setProfToggle] = useState(false)
    const toggleProf = () => setProfToggle(prev => !prev);
    

    const pathname = usePathname();


    return(
        
        <>
            <nav className="flex justify-between items-center px-12 py-4 fixed top-0 left-0 w-full md:static md:bg-none">
                {/* Logo */}
                <Link href = "/">
                    <Image 
                        src = "/logo.png"
                        alt="gymskii logo"
                        width = {112}
                        height={36}
                    />
                </Link>
               
                
                {/* Nav Links and CTAs */}
                <div className="lg:flex hidden justify-center items-center gap-6 ">
                    <ul className="flex gap-10">
                        <li>
                            <Link 
                            href = "/about"
                            className = {clsx(
                                "font-medium text-xl lg:text-base hover:text-navHover nav-link",
                                {
                                    "text-brand": pathname === "/about"
                                }
                            )}
                            >
                            About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href = "/features"
                                className = {clsx(
                                    "font-medium text-xl lg:text-base hover:text-navHover nav-link",
                                    {
                                        "text-brand": pathname === "/features"
                                    }
                                )}
                                >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href = "/blog"
                                className = {clsx(
                                    "font-medium text-xl lg:text-base hover:text-navHover nav-link",
                                    {
                                        "text-brand": pathname === "/blog"
                                    }
                                )}
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                {/* Profile Picture */}
                <div className="hidden lg:flex items-center gap-3 cursor-pointer relative" onClick={toggleProf}>
                    <div className="w-12 h-12 relative">
                        <Image 
                            src="/sam-pfp.jpg" 
                            alt="user profile image"
                            layout='fill'
                            className="rounded-full object-cover"
                        />
    
                    </div>
                    <FontAwesomeIcon 
                    icon={faCaretDown} 
                    size = "md" 
                    className={clsx(
                        "text-brand",
                        {
                            "rotate-180": isProfOpen
                        }
                    )}  /> 
                    
                    <div className="absolute top-16 right-[-19px]">
                        <ProfileDropdown isProfOpen={isProfOpen} />   
                    </div>
                    
                </div>


                </div>
                <span 
                className="cursor-pointer lg:hidden"
                onClick = {toggleMenu}
                >
                    <MenuIcon />
                </span>
            </nav>   
            <LoggedInMobileNav isMenuOpen = {isOpen} toggleMenu = {toggleMenu} />
        </>
    )
}

function ProfileDropdown({isProfOpen}) {
    const router = useRouter()

    const handleLogOut = async() => {
        await signOut(auth)
        router.push("/logout")
    }

    return(
        <>
            <div className = {clsx(
                "dropdown",
                {
                    "open": isProfOpen
                }
            )}>
                <ul className="flex flex-col space-y-4">
                    <li className="flex gap-4 hover:bg-linkHover p-2 rounded-lg cursor-pointer">
                        <AccountCircleIcon className="text-brand" />
                        <Link href = "/profile" className="font-medium">My Profile</Link>
                    </li>
                    <li className="flex gap-4 hover:bg-linkHover p-2 rounded-lg cursor-pointer" >
                    <DashboardIcon className="text-brand " />
                        <Link href = "/profile/dash-results" className="font-medium">Gains Lab</Link>
                    </li>
                    <li className="flex gap-4 hover:bg-linkHover p-2 rounded-lg cursor-pointer" onClick={handleLogOut}>
                        <LogoutIcon className="text-brand" />
                        <span className="font-medium">Logout</span>
                    </li>
                </ul>
            </div>
        </>
    )
}