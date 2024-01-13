"use client"

import styles from './styles.module.css';
import Image from 'next/image';
import { values } from '@/constants';
import { useInView } from "framer-motion";
import { useRef } from 'react';


//Hero section
function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="about" className='flex flex-col justify-center items-center space-y-16 mt-16'>
            <div className='flex flex-col justify-center items-center 2xl:w-3/4 space-y-16 text-center'>
                <div className='flex flex-col justify-center items-center space-y-4'>
                    <h6 className='title-label'>About Me</h6>
                    <h2 className='title-heading' ref={ref}>It&apos;s all about making an <span className={`${styles.gradientText}`}>impact.</span></h2>
                </div>
                <p className='text-base md:text-lg text-center text-dark-gray leading-relaxed w-4/5 mx-4 sm:mx-auto sm:w-3/4'>I am a penultimate Computer Science undergraduate at the National University of Singapore, passionate about leveraging technology to create user-centric digital products with a meaningful impact.</p>
            </div>

            {/* Three circle meaning */}
            <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 lg:w-4/5'>
                {
                    values.map((value) => {
                        return (
                            <div className='flex flex-col justify-center items-center space-y-6 md:space-y-12' key={ value.label }
                                style={{
                                    opacity: isInView ? 1 : 0,
                                    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${ value.delay }`
        
                                }}
                            >
                                <div className='flex flex-col justify-center items-center space-y-4'>
                                    <Image alt={ value.label } src={ value.imageSource } height={150} width={150} />
                                    <h3 className={`text-3xl 2xl:text-4xl font-semibold ${ value.label == 'Tech' ? 'text-tech-blue' : value.label == 'Design' ? 'text-design-purple' : 'text-community-orange'}`}>{ value.label }</h3>
                                </div>
                                
                                <p className='text-base md:text-sm lg:text-base text-center w-4/5 xl:w-3/4 text-dark-gray leading-relaxed' style={{ "height": "100px" }}>{ value.content }</p>
                    </div> 

                    )})
                }
                
            </div>
           
        </section>
    ) 
}

export default About;