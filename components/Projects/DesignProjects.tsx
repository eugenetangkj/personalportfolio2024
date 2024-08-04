"use client"

import ProjectCard from "./ProjectCard";
import { designProjects } from "@/constants";

//Design projects with cards
function DesignProjects() {
    return (
        <div className='flex flex-col self-start space-y-8 w-full items-center'>
            <h2 className='font-semibold text-3xl 2xl:text-4xl text-design-purple'>Design Projects</h2>
                  
            {/* Design project cards */}
            <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-16 gap-y-8 place-items-center'>
                {/* Iterate through data */}
                {
                    designProjects.map((designProject) => {
                        return (
                            <ProjectCard
                                type='design'
                                title={ designProject.title }
                                award={ designProject.award }
                                imageUrl={ designProject.imageUrl }
                                description={ designProject.description }
                                techStack={ designProject.techStack }
                                links={ designProject.links }
                                key={ designProject.title }
                            />
                        )
                    })
                }
            </div>

        </div>
    ) 
}

export default DesignProjects;