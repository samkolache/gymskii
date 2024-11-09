// src/app/layout.tsx
'use client';
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import LoggedInNav from "./components/navbar/logged-in/LoggedInNav";
import "./globals.css";
import { Montserrat, Roboto } from 'next/font/google';
import { useSession } from "next-auth/react";
import { SessionProvider } from 'next-auth/react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"]
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${roboto.className}`}>
        <SessionProvider>
          <ContentWrapper>{children}</ContentWrapper>
        </SessionProvider>
      </body>
    </html>
  );
}

// Separate component to use useSession safely within SessionProvider
function ContentWrapper({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();

  return (
    <>
      {session ? <LoggedInNav /> : <Navbar />}
      {children}
      <Footer />
    </>
  );
}
