"use client"
import styles from './styles.module.css';
import { sourceCodePro } from '@/app/fonts';
import { Typewriter } from 'nextjs-simple-typewriter';
import React from 'react';
import { motion } from "framer-motion";
import Bubble from './Bubble';
import { useState, useEffect } from 'react';

//Hero section
function Hero() {
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        // Update window height on resize
        const handleResize = () => {
          setWindowHeight(window.innerHeight);
        };
    
        // Initial setup
        setWindowHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
    
        // Cleanup
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    


    return (
        <section id="hero" className='hero-section'>
            {/* Bubbles */}
            <Bubble bubbleIndex={ 0 } />
            <Bubble bubbleIndex={ 1 } />
            <Bubble bubbleIndex={ 2 } />
            <Bubble bubbleIndex={ 3 } />

            {/* Main header */}
            <div className='flex flex-col space-y-4 !mt-0'>
                <motion.h2 className='text-black font-bold mx-auto text-2xl xs:text-3xl lg:text-4xl z-10'
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 2 }}>
                    Hello, I am
                </motion.h2>
                <motion.h1 className={`${styles.gradientText} font-bold text-5xl xs:text-6xl sm:text-7xl lg:text-8xl mx-auto z-10`}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 2, delay: 1 }}
                >Eugene Tang</motion.h1>

            </div>
           

           {/* Animated text */}
            <motion.div className={`${ sourceCodePro.className } text-xl xs:text-2xl lg:text-3xl z-10`}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 2, delay: 2 }}
            >
                <h6>An aspiring
                    <span>
                        <Typewriter
                            words={[' software engineer', ' UX designer', ' change-maker']}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            loop={0}  
                        />
                </span>
                </h6>
            </motion.div>

            {/* Animated Button */}
            <motion.div className={`absolute w-full flex justify-center items-center z-10
                ${windowHeight < 700 ? 'bottom-10': 'bottom-32'}`}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 2 }}
             >
                <a href='#about'>
                <div className='w-[35px] h-[64px] rounded-3xl border-4 border-light-gray flex justify-center items-start p-2'>
                    <motion.div
                    animate={{
                        y: [0, 24, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className='w-3 h-3 rounded-full bg-light-gray mb-1'
                    />
                </div>
                </a>
            </motion.div>
        </section>
    ) 
}

export default Hero;