import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <>
            {/* Footer Container */}
            <div className=" border-t pt-3">
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full max-w-screen-lg mx-auto">  {/* Center on desktop */}
                    
                    {/* logo and socials */}
                    <div className="flex flex-col gap-5 w-full md:w-1/3 py-5 items-center md:items-start">  {/* Adjust width for desktop */}
                        <div className="flex flex-col items-center md:items-start">
                            <Link href = "/"><h1 className="text-xl font-bold">gym<span className="text-brand">skii</span></h1></Link>
                            <p className="font-semibold text-center md:text-left">Track <span className="text-brand">Smarter</span>, Train <span className="text-brand">Harder</span></p>
                        </div>
                        <div className="flex justify-center md:justify-start items-center gap-6">
                            <a href = "https://www.instagram.com/gymskii/"><FontAwesomeIcon icon={faInstagram} className="text-stats" size='2xl'/> </a>
                            <a href = "https://x.com/gymskii_app"> <FontAwesomeIcon icon={faXTwitter} className="text-stats" size='2xl'/> </a>
                            <a href='https://www.linkedin.com/company/gymskii/about/'><FontAwesomeIcon icon={faLinkedin} className="text-stats" size='2xl'/></a>
                        </div>
                    </div>

                    {/* quick links */}
                    <div className="flex flex-col w-full md:w-1/3 py-5 items-center md:items-start">
                        <h6 className="font-bold text-lg text-brandHeading">Quick Links</h6>
                        <ul className="text-center  md:text-left">
                            <li>
                                <Link href = "/about">About</Link>
                            </li>
                            <li>
                            <Link href = "/features">Features</Link>
                            </li>
                            <li>
                                <Link href = "/blog">Blog</Link>
                            </li>
                            <li>
                                <Link href = "/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* account */}
                    <div className="flex flex-col w-full md:w-1/3 py-5 items-center md:items-start">
                        <h6 className="font-bold text-lg text-brandHeading">Account Links</h6>
                        <ul className="text-center md:text-left">
                            <li>
                                <Link href = "/sign-in">Sign in</Link>
                            </li>
                            <li>
                                <Link href = "/sign-up">Sign up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </>
    );
}
