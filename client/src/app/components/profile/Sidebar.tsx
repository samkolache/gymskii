'use client'

import Link from "next/link"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import clsx from 'clsx';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';





export default function Sidebar() {

    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        await signOut({redirect: false});
        router.push("/")
    }

    return (
            <aside className='w-56 mx-12 px-4 hidden md:block'>
                <ul className='pt-8 flex flex-col space-y-3'>
                    <li className = {clsx(
                        'p-2 cursor-pointer font-medium rounded-lg flex gap-2',
                        {
                            'bg-brand text-white': pathname === "/profile"
                        }
                    )}>
                        <AccountCircleIcon />
                        <Link 
                        href = "/profile"
                        className="w-full">
                            My Profile
                        </Link>
                    </li>
                    <li className = {clsx(
                        'p-2 cursor-pointer font-medium rounded-lg flex gap-2',
                        {
                            "bg-brand text-white": pathname === '/profile/dash-results'
                        }
                    )}>
                        <DashboardIcon />
                        <Link 
                        href = "/profile/dash-results"
                        className="w-full">
                            Gains Lab Results
                        </Link>
                    </li>
                    <li className='p-2 cursor-pointer font-medium flex gap-2'>
                        <LogoutIcon />
                        <button 
                        onClick={handleLogout}>
                            Logout
                        </button>
                    </li>
                </ul>
            </aside>
    )
}