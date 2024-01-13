"use client"

import TechProjects from "./Projects/TechProjects";

//Projects section
function Projects() {
    return (
        <section id="projects" className='flex flex-col justify-center items-center space-y-16 mt-28 py-8 px-8 md:px-32'>
            {/* Title */}
            <div className='flex flex-col justify-center items-center 2xl:w-3/4 space-y-16 text-center'>
                <div className='flex flex-col justify-center items-center space-y-4'>
                    <h6 className='title-label'>Projects</h6>
                    <h2 className='title-heading'>Designed with perfection in mind.</h2>
                </div>
            </div>

            {/* Tech section */}
            <TechProjects />
 
           
            {/* Design section */}

            {/* Community section */}

        
            
           
        </section>
    ) 
}

export default Projects;