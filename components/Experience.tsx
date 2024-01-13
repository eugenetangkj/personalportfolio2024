"use client"

import TimelineVertical from "./TimelineVertical";

//Experience section
function Experience() {
    return (
        <section id="experience" className='flex flex-col justify-center items-center space-y-16 mt-28 p-8'>
            {/* Title */}
            <div className='flex flex-col justify-center items-center 2xl:w-3/4 space-y-16 text-center'>
                <div className='flex flex-col justify-center items-center space-y-4'>
                    <h6 className='title-label '>Experience</h6>
                    <h2 className='title-heading '>I put my skills into practice.</h2>
                </div>
            </div>

            {/* Timeline */}
            <TimelineVertical />

            
           
        </section>
    ) 
}

export default Experience;