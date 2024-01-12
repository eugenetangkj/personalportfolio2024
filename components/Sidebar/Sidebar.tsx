"use client"

import { motion } from "framer-motion";
import styles from './styles.module.css';
import ToggleButton from "./toggleButton/toggleButton";
import Links from "./links/Links";
import { useState } from "react";

function Sidebar() {


    //At first is closed
    const [open, setOpen] = useState(false);
    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        }
    }


    return (
        <motion.div className='flex flex-col items-center justify-center bg-blue-400 text-black'
        animate={ open ? "open" : "closed"} variants={ variants }>
            <motion.div className='fixed top-0 left-0 bottom-0 bg-blue-400' style={{ "width": "400px" }}>
                <Links />
            </motion.div>
            <ToggleButton setOpen={ setOpen } />

        </motion.div>

    )

}

export default Sidebar;