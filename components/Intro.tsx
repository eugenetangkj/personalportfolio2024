"use client"
import styles from './styles.module.css';
import { sourceCodePro } from '@/app/fonts';
import { Typewriter } from 'nextjs-simple-typewriter';
import React from 'react';
import { motion } from "framer-motion";
import Bubble from './Bubble';

//Intro section
function Intro() {
    return (
        <div id="home" className='intro-div'>
            <Bubble bubbleIndex={ 0 } />
            <Bubble bubbleIndex={ 1 } />
            <Bubble bubbleIndex={ 2 } />
            <Bubble bubbleIndex={ 3 } />
            <div className='flex flex-col space-y-4 !mt-0'>
                <motion.h2 className='text-black font-bold text-4xl mx-auto z-10'
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 2 }}
                
                >Hello, I am</motion.h2>
                <motion.h1 className={`${styles.gradientText} font-bold text-8xl mx-auto z-10`}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 2, delay: 1 }}
                >Eugene Tang</motion.h1>

            </div>
           
            <motion.div className={`${ sourceCodePro.className } text-3xl z-10`}
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
            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
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
      </div>
        </div>
    ) 
}

export default Intro;