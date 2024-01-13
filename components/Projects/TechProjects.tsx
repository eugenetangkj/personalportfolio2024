"use client"

import Image from "next/image";
import TechProjectCard from "./TechProjectCard";

//Experience section
function TechProjects() {
    return (
        <div className='flex flex-col self-start space-y-8 w-full items-center'>
            <h2 className='font-semibold text-4xl text-tech-blue'>Coding Projects</h2>
                  
             

            {/* Tech project cards */}
            <div className='grid grid-cols-3 gap-x-16 gap-y-8 place-items-center'>
                <TechProjectCard />
                <TechProjectCard />
                <TechProjectCard />
                <TechProjectCard />




            </div>
            

        </div>
    ) 
}

export default TechProjects