"use client"
import Image from "next/image"
import Link from "next/link"
import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import MobileNav from "./MobileNav";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Navbar() {
    
    const [isOpen, setOpen] = useState(false)

    const toggleMenu = () => setOpen(prev => !prev);

    const pathname = usePathname();


    return(
        
        <>
            <nav className="flex justify-between items-center px-12 py-4 fixed top-0 left-0 w-full bg-white md:static md:bg-none">
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
                <div className="flex gap-6">
                    <Link
                        href = "/sign-in"
                        className="border border-brand px-4 py-2 rounded-lg font-medium hover:shadow-[0_0_0_2px_rgba(52,152,219,1)] text-brand transition-shadow duration-300"
                    >
                        Sign in
                    </Link> 
                    <Link
                    href = "/sign-up" 
                    className="bg-brand px-4 py-2 rounded-lg font-medium text-white hover:bg-brandHover transition duration-300 ease-in-out"
                    >
                        Sign up
                    </Link> 
                </div>
                </div>
                <span 
                className="cursor-pointer lg:hidden"
                onClick = {toggleMenu}
                >
                    <MenuIcon />
                </span>
            </nav>   
            <MobileNav isMenuOpen = {isOpen} toggleMenu = {toggleMenu} />     
        </>
    )
}