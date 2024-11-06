"use client"
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import LoggedInNav from "./components/navbar/logged-in/LoggedInNav";
import "./globals.css";
import {Montserrat, Roboto} from 'next/font/google'
import {usePathname} from 'next/navigation'

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

import {useAuthState,} from 'react-firebase-hooks/auth'
import {auth} from '@/app/config/firebase/firebase-config'



config.autoAddCss = false;

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"]
})

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700","900"],
  subsets: ["latin"]
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const minimalNavbarPages = ["/sign-in", "/sign-up", "/profile/dash-results"]
  const pathname = usePathname()

  const [user] = useAuthState(auth)
  console.log({user})


  return (
    <html lang="en">
      <body className={`${montserrat.className} ${roboto.className}`}>
        {user ? (
          <LoggedInNav />
        ): (
          !minimalNavbarPages.includes(pathname) && <Navbar />
        )}
          {children}
          {!minimalNavbarPages.includes(pathname) && <Footer />}
      </body>
    </html>
  );
}
