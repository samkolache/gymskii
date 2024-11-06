"use client"
import Image from "next/image"
import Link from "next/link"
import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import MobileNav from "./MobileNav";

export default function Navbar() {
    
    const [isOpen, setOpen] = useState(false)

    const toggleMenu = () => setOpen(prev => !prev);



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