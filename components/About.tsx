"use client"

import styles from './styles.module.css';
import Image from 'next/image';
import { values } from '@/constants';
import { sourceCodePro } from '@/app/fonts';
import { Typewriter } from 'nextjs-simple-typewriter';

import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

//Hero section
function About() {

    return (
        <section id="about" className='flex flex-col justify-center items-center h-screen space-y-16'>
            <div className='flex flex-col justify-center items-center w-1/2 space-y-16'>
                <div className='flex flex-col justify-center items-center space-y-4'>
                    <h6 className='font-semibold text-lg uppercase tracking-wide'>About Me</h6>
                    <h2 className='font-bold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl mx-auto'>It&apos;s all about making an <span className={`${styles.gradientText}`}>impact.</span></h2>
                </div>
                <p className='text-lg text-center text-dark-gray leading-relaxed'>I am a penultimate Computer Science undergraduate at the National University of Singapore, passionate about leveraging technology to create user-centric digital products with a meaningful impact.</p>
            </div>

            {/* Three circle meaning */}
            <div className='flex flex-row justify-center items-center w-4/5'>
                {
                    values.map((value) => {
                        return (
                            <div className='flex flex-col justify-center items-center space-y-12'>
                                <div className='flex flex-col justify-center items-center space-y-4'>
                                    <Image alt={ value.label } src={ value.imageSource } height={150} width={150} />
                                    <h3 className='text-4xl font-bold'>{ value.label }</h3>
                                </div>
                                
                                <p className='text-base text-center w-3/4 text-dark-gray leading-relaxed'>{ value.content }</p>
                    </div> 

                    )})
                }
                
            </div>
           
        </section>
    ) 
}

export default About;