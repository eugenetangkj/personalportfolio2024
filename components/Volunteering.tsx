"use client"

import TimelineVerticalVolunteer from "./TimelineVerticalVolunteer";

//Volunteering section
function Volunteering() {
    return (
        <section id="projects" className='flex flex-col justify-center items-center space-y-16 mt-28 py-8 px-12'>
            {/* Title */}
            <div className='flex flex-col justify-center items-center 2xl:w-3/4 space-y-16 text-center'>
                <div className='flex flex-col justify-center items-center space-y-4'>
                    <h6 className='title-label'>Volunteering</h6>
                    <h2 className='title-heading'>A snapshot of my journey.</h2>
                </div>
            </div>

            {/* Timeline */}
            <TimelineVerticalVolunteer />


        </section>
    ) 
}

export default Volunteering;