"use client"

import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { menuLinks } from '@/constants';


//Navbar
function Navbar() {
    return (
        <nav className='bg-white w-full z-30 h-small-10 fixed'>
            <div className='mx-5 md:container md:mx-auto md:w-large-90 py-5 flex items-center justify-between'>
            
            {/* Logo */}
            <a href='#home'>
                <Image src='/assets/logo.png' alt="Logo" width={50} height={50} />
            </a>

            {/* Desktop main menu */}
            <ul className="hidden md:flex md:justify-center text-black dark:text-white font-semi-bold text-base">
                {
                    menuLinks.map((link) => {
                        return (
                            <li
                                className="hover:text-gray-500 dark:hover:text-gray-300 mx-5 duration-300"
                                key={ link.label }
                            >
                                <a href={ link.route }>{ link.label }</a>
                            </li> 
                        )
                    })
                }   
            </ul>


            {/* Hamburger Menu */}
            <div id="hamburger-icon" className="mx-auto space-y-1 mr-5 md:mr-0 md:hidden cursor-pointer z-30 text-[40px] text-black">
                <CiMenuBurger name="menu"/>
            </div>

            {/* Items within hamburger menu */}
            <div id="hamburger-menu-items" className="flex flex-col justify-center items-center bg-slate-200 dark:bg-black absolute left-0 top-0 w-0 h-[100vh] text-black dark:text-white font-semibold z-30 text-2xl duration-500 text-center overflow-hidden">
                <ul id="hamburger-menu-ul" className="space-y-10">
                {
                    menuLinks.map((link) => {
                        return (
                            <li key={ link.label }>
                                <a href={ link.route } className="hover:text-blue-600 dark:hover:text-blue-400 duration-500">{ link.label }</a>
                            </li> 
                        )
                    })
                }   
                </ul>

            </div>

            {/* Close button  */}
            <div id="close-icon" className="hidden space-y-1 mr-5 md:mr-0 md:hidden cursor-pointer z-30 text-[40px] text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 duration-500">
                <IoCloseOutline name="close" />
            </div>
           




            </div>


          
        </nav>
    );
}

export default Navbar;