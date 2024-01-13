"use client";

import { FaAward } from "react-icons/fa";
import { sourceCodePro } from "@/app/fonts";

import { IoDocumentOutline } from 'react-icons/io5';
import { FaFigma } from 'react-icons/fa';
import { IoEarthOutline } from 'react-icons/io5';

function TechProjectCard() {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg" style={{ "height": "600px" }}>
            <img className="rounded-t-lg" src="/assets/projects/tech/shooting-portals.png" alt="" />
            
            <div className="p-5 space-y-4">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight ">Noteworthy technology acquisitions 2021</h5>
                <div className='flex flex-row space-x-2 items-center'>
                    <FaAward className='text-yellow-400 text-2xl' />
                    <h5 className='text-sm'>Awarded with the Judge's Choice award</h5>
                </div>
                
                <p className="mb-3 font-normal text-dark-gray leading-relaxed">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                <h6 className={`text-label-pink ${ sourceCodePro.className } text-sm md:text-sm`}>Unity, Microsoft Azure PlayFab</h6>

                <div className='grid grid-cols-3 place-items-start'>
                    <a href='#' target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 duration-300">
                        Report<IoDocumentOutline className='text-xl ml-2' />  
                    </a>

                    <a href='#' target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 duration-300">
                        Report<IoDocumentOutline className='text-xl ml-2' />  
                    </a>

                    <a href='#' target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 duration-300">
                        Report<IoDocumentOutline className='text-xl ml-2' />  
                    </a>
                </div>  
            </div>
        </div>
    );
}

export default TechProjectCard;