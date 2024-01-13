"use client"

import { sourceCodePro } from '@/app/fonts';
import { FaAward } from 'react-icons/fa';
import { experiences } from '@/constants';

import { IoDocumentOutline } from 'react-icons/io5';
import { FaFigma } from 'react-icons/fa';

import { useRef } from "react";
import { useInView } from "framer-motion";

//Timeline component for experience
function TimelineVertical() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <ol className="relative border-s border-gray-200" ref={ ref }>  
            {
                // Map through each experience
                experiences.map((experience) => {
                    return (
                        <li className="mb-10 ms-4" key={ experience.title }
                        style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${ experience.delay }`
                        }}

                        >
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                            <div className='flex flex-col space-y-8'>
                                {/* Experience overview */}
                                <div className='space-y-2'>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-500">{ experience.date }</time>
                                    <h3 className="text-xl md:text-2xl 2xl:text-3xl font-semibold text-gray-900 ">{ experience.title }</h3>
                                    {
                                        experience.award !== 'No Award'
                                        ? <div className='flex flex-row space-x-2 items-center'>
                                            <FaAward className='text-yellow-400 text-3xl' />
                                            <h5 className=''>{ experience.award }</h5>
                                        </div>
                                        :<></>
                                    }
                                    <h6 className={`text-label-pink ${ sourceCodePro.className } text-sm md:text-base`}>{ experience.techStack }</h6>  
                                </div>

                                {/* Experience details */}
                                <div className='space-y-6'>
                                    <ul className='list-disc ml-4 leading-relaxed space-y-2 text-dark-gray text-sm md:text-base'>
                                        {
                                            experience.content.map((point) => {
                                                return (
                                                    <li key={ point }>{ point }</li>
                                                )
                                            })
                                        }
                                    </ul>
                
                                    <div className='space-x-4'>
                                        {
                                            experience.links.map((link) => {
                                                return (
                                                    <a href={ link.url } target="_blank" key= { link.type } className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 duration-300">
                                                        { link.type }
                                                        {
                                                            (link.type == 'Report')
                                                            ? <IoDocumentOutline className='text-xl ml-2' />
                                                            : <FaFigma className='text-xl ml-2' />
                                                        }
                                                    </a>
                                                )
                                            })
                                        }
                                    </div>
                                    
                                </div>
                
                            </div>
                    
                    
                        </li>

                    );




                })
            }
        </ol>


    );
}

export default TimelineVertical;