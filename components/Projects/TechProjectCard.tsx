"use client";

import { FaAward } from "react-icons/fa";
import { sourceCodePro } from "@/app/fonts";

import { IoDocumentOutline } from 'react-icons/io5';
import { FaFigma } from 'react-icons/fa';
import { VscGame } from "react-icons/vsc";
import { GoVideo } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { IoEarthSharp } from "react-icons/io5";

import { useRef } from "react";
import { useInView } from "framer-motion";


interface Link {
    type: string;
    url: string;
}

interface TechProjectCardProps {
    title: string;
    award: string;
    imageUrl: string;
    description: string;
    techStack: string;
    links: Link[],
}


function TechProjectCard({
    title,
    award,
    imageUrl,
    description,
    techStack,
    links,
}: TechProjectCardProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    return (
        <div className='max-w-lg lg:max-w-md bg-white border border-gray-200 rounded-lg shadow-lg md:fixedCardHeight' ref={ ref } style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}
>
            <img className="rounded-t-lg w-full" src={ imageUrl } alt={ title } style={{ "height": "200px" }} />
            
            <div className="p-5 space-y-4">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight">{ title }</h5>
                {
                    (award != 'No Award')
                    ? <div className='flex flex-row space-x-2 items-center'>
                        <FaAward className='text-yellow-400 text-2xl' />
                        <h5 className='text-sm'>{ award }</h5>
                      </div>
                    : <></>
                }
                
                
                <p className="mb-3 font-normal text-dark-gray leading-relaxed text-sm md:text-base" style={{ "height": "180px" }}>{ description }</p>

                <h6 className={`text-label-pink ${ sourceCodePro.className } text-sm md:text-sm`}  style={{ "height": "40px" }}>{ techStack }</h6>

                <div className='grid grid-cols-3 place-items-stretch gap-x-1 gap-y-2'>
                    {
                        links.map((link) => {
                            return (
                                <a href={ link.url } target="_blank" key={ link.type } className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 duration-300">
                                    { link.type }
                                    {
                                        (link.type == 'Game')
                                        ? <VscGame className='text-xl ml-2' /> 
                                        : (link.type == 'Report')
                                        ? <IoDocumentOutline className='text-xl ml-2' /> 
                                        : (link.type == 'Figma')
                                        ? <FaFigma className='text-xl ml-2' /> 
                                        : (link.type == 'GitHub')
                                        ? <FiGithub className='text-xl ml-2' /> 
                                        : (link.type == 'Video')
                                        ? <GoVideo className='text-xl ml-2' />
                                        : <IoEarthSharp className='text-xl ml-2' /> 
                                    }
                                </a>
                            );
                        })
                    }
                </div>  
            </div>
        </div>
    );
}

export default TechProjectCard;