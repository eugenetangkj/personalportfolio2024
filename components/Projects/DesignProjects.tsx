"use client"

import ProjectCard from "./ProjectCard";
import { techProjects } from "@/constants";

//Design projects with cards
function DesignProjects() {
    return (
        <div className='flex flex-col self-start space-y-8 w-full items-center'>
            <h2 className='font-semibold text-3xl 2xl:text-4xl text-design-purple'>Design Projects</h2>
                  
            {/* Design project cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-16 gap-y-8 place-items-center'>
                {/* Iterate through data */}
                {
                    techProjects.map((techProject) => {
                        return (
                            <ProjectCard
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

export default DesignProjects;