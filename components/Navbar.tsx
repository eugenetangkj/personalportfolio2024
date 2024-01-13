"use client"

import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { menuLinks } from '@/constants';
import { useEffect } from "react";


//Navbar
function Navbar() {

    //Opens hamburger menu
    const openMenu = ()  => {
        //Make hamburger menu interactive
        const hamburgerIcon = document.querySelector("#hamburger-icon");
        const closeIcon = document.querySelector("#close-icon");
        const hamburgerMenuItems = document.querySelector("#hamburger-menu-items");
        const bodyElement = document.getElementsByTagName("BODY")[0];
        const introHeader = document.getElementById("intro-header");
        const introSubHeader = document.getElementById("intro-subheader");


        if (! hamburgerIcon?.classList.contains('hidden')) {
            hamburgerIcon?.classList.add('hidden');
        }

        if (closeIcon?.classList.contains('hidden')) {
            closeIcon?.classList.remove('hidden');
        }

        hamburgerMenuItems?.classList.add('w-[100%]');
        bodyElement.classList.add('overflow-hidden');
        introHeader?.classList.remove('z-10');
        introSubHeader?.classList.remove('z-10');
    }

    //Closes hamburger menu
    const closeMenu = () => {
        const hamburgerIcon = document.querySelector("#hamburger-icon");
        const closeIcon = document.querySelector("#close-icon");
        const hamburgerMenuItems = document.querySelector("#hamburger-menu-items");
        const bodyElement = document.getElementsByTagName("BODY")[0];
        const introHeader = document.getElementById("intro-header");
        const introSubHeader = document.getElementById("intro-subheader");

        if (hamburgerIcon?.classList.contains('hidden')) {
            hamburgerIcon?.classList.remove('hidden');
        }

        if (! closeIcon?.classList.contains('hidden')) {
            closeIcon?.classList.add('hidden');
        }

        hamburgerMenuItems?.classList.remove('w-[100%]');
        bodyElement.classList.remove('overflow-hidden');
        introHeader?.classList.add('z-10');
        introSubHeader?.classList.add('z-10');
    }

    //Close menu if window width exceeds md resolution
    useEffect(() => {
        const mdWidth = 768;
        const handleResize = () => {
          // Check if window width is greater than md
          if (window.innerWidth > mdWidth) {
            closeMenu();
          }
        };
    
        // Initial check
        handleResize();
    
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener when component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


    //Account for header during transitioning
    const scrollToSection = (sectionId: string) => {
        closeMenu();
        const sectionElement = document.getElementById(sectionId);

        const offset = (sectionId == 'about') ? 150 : (sectionId == 'experience') ? 100 : 150;


        if (sectionElement) {
            const sectionTop = sectionElement.offsetTop - offset;

            window.scrollTo({
            top: sectionTop,
            behavior: 'smooth',
            });
        }
    };

  


    return (
        <nav className='bg-white w-full z-30 h-small-10 fixed'>
            <div className='mx-5 md:container md:mx-auto md:w-large-90 py-5 flex items-center justify-between'>
            
            {/* Logo */}
            <a href='hero' onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
                }}
            >
                <Image src='/assets/logo.png' alt="Logo" width={50} height={50} />
            </a>

            {/* Desktop main menu */}
            <ul className="hidden md:flex md:justify-center text-black font-semi-bold text-base">
                {
                    menuLinks.map((link) => {
                        return (
                            <li
                                className="hover:text-gray-500 mx-5 duration-300"
                                key={ link.label }
                            >
                                <a href={ link.route }
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(`${link.id }`);
                                      }}
                                >{ link.label }</a>
                            </li> 
                        )
                    })
                }   
            </ul>


            {/* Hamburger Menu */}
            <div id="hamburger-icon" className="mx-auto space-y-1 mr-5 md:mr-0 md:hidden cursor-pointer z-30 text-[40px] text-black">
                <CiMenuBurger name="menu" onClick= { openMenu }/>
            </div>

            {/* Items within hamburger menu */}
            <div id="hamburger-menu-items" className="flex flex-col justify-center items-center bg-slate-200 absolute left-0 top-0 w-0 h-[100vh] text-black z-30 text-xl duration-500 text-center overflow-hidden">
                <ul id="hamburger-menu-ul" className="space-y-10">
                {
                    menuLinks.map((link) => {
                        return (
                            <li key={ link.label }>
                                <a href={ link.route } className="hover:text-gray-500 duration-300" onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(`${link.id }`);
                                    }}>
                                { link.label }</a>
                            </li> 
                        )
                    })
                }   
                </ul>

            </div>

            {/* Close button  */}
            <div id="close-icon" className="hidden space-y-1 mr-5 md:mr-0 md:hidden cursor-pointer z-30 text-[50px] text-black hover:text-gray-500 duration-300">
                <IoCloseOutline name="close" onClick = { closeMenu } />
            </div>
           




            </div>


          
        </nav>
    );
}

export default Navbar;