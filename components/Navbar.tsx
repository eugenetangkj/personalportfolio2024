"use client"

import { BiLogoGithub } from "react-icons/bi";
import styles from './styles.module.css';
import Image from "next/image";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar/Sidebar";

function Navbar() {
    return (
        <nav className='bg-white w-full z-30 fixed' style={{ "height": "100px"}}>
            <Sidebar />
            <div className={`${ styles.wrapper }`}>
                <motion.span
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 1 }}
                >
                    <Image alt='Logo' src='/assets/logo.png' width={ 64 } height={ 64 } />
                </motion.span>
                <div className={`${ styles.social }`}>
                    <a href='#'><BiLogoGithub className='text-4xl'/></a>
                    <a href='#'><BiLogoGithub className='text-4xl' /></a>
                    <a href='#'><BiLogoGithub className='text-4xl' /></a>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;