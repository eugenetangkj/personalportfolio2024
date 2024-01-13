"use client"

import Image from "next/image";
import TechProjectCard from "./TechProjectCard";
import { techProjects } from "@/constants";

//Experience section
function TechProjects() {
    return (
        <div className='flex flex-col self-start space-y-8 w-full items-center'>
            <h2 className='font-semibold text-3xl 2xl:text-4xl text-tech-blue'>Coding Projects</h2>
                  
            {/* Tech project cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-16 gap-y-8 place-items-center'>
                {/* Iterate through data */}
                {
                    techProjects.map((techProject) => {
                        return (
                            <TechProjectCard
                                title={ techProject.title }
                                award={ techProject.award }
                                imageUrl={ techProject.imageUrl }
                                description={ techProject.description }
                                techStack={ techProject.techStack }
                                links={ techProject.links }
                                key={ techProject. title }
                            />
                        )
                    })
                }




            </div>
            

        </div>
    ) 
}

export default TechProjects