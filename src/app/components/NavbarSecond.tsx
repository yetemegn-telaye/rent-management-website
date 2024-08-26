import React, { useState } from 'react';
import Link from 'next/link';


export default function NavbarSecond() {
    const [isOpen, setIsOpen] = useState(false); // State to manage menu toggle

    return (
        <div className="relative top-4 mx-2 p-3 px-12 flex justify-between items-center bg-secondary rounded-full text-white">
            <div className="font-semibold lg:text-lg">
                <h1 className='text-sm'>Ambassador Mall</h1>
                <p className="text-gray-400 font-light text-xs">XP Property Management</p>
            </div>
            <div className={`${isOpen ? 'flex' : 'hidden'} flex-col rounded-half text-sm lg:flex lg:items-center lg:justify-center absolute lg:relative top-full lg:top-0 right-0 lg:right-auto bg-primary lg:bg-transparent z-20 w-full lg:w-auto`}>
                <ul className="flex flex-col lg:flex-row lg:items-center gap-4 p-4 lg:p-0 ">
                    <li className="hover:bg-white hover:px-2 hover:rounded-xl hover:text-dark cursor-pointer">
                        <Link href="/">Home</Link>
                    </li>
                    <li className=" hover:bg-white hover:px-2 hover:rounded-xl hover:text-dark   cursor-pointer">
                        <Link href="/listings">Listings</Link>
                    </li>
                    <li className="hover:bg-white hover:px-2 hover:rounded-xl hover:text-dark  cursor-pointer">
                        <Link href="/#servicesSection">Services</Link>
                    </li>
                    <li className="hover:bg-white hover:px-2 hover:rounded-xl hover:text-dark  cursor-pointer">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="hover:text-gray-400   cursor-pointer">
                        <Link href="#footerSection">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="flex gap-4 p-4 lg:p-0 text-sm text-white">
                <p className='lg:flex hidden'>
                    <span className="mr-2">📞</span>+25193423112
                </p>
                <p className="font-light">sign in</p>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
    );
}
