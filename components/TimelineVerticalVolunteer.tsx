import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineGames } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { volunteeringExperiences } from "@/constants";

function TimelineVerticalVolunteer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return ( 
        <ol className="relative border-s border-gray-200" ref={ ref }> 
            {
                volunteeringExperiences.map((experience) => {
                    return (
                        <li className="mb-10 ms-6" key={ experience.title } style={{
                            opacity: isInView ? 1 : 0,
                            transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${ experience.delay }`
                        }}>            
                            <span className="absolute flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full -start-3 ring-8 ring-white">
                                {
                                    (experience.type == 'teach')
                                    ? <FaChalkboardTeacher className='text-xl text-community-orange' />
                                    : (experience.type == 'organise')
                                    ? <MdOutlineGames className='text-xl text-community-orange' />
                                    : <RiComputerLine className='text-xl text-community-orange' />

                                }
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ml-4">{ experience.title } 
                            {
                                (experience.isOngoing)
                                ? <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">Ongoing</span>
                                : <></>
                            }
                            </h3>
   
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ml-4">{ experience.date }</time>
                            <ul className="mb-4 text-base font-normal text-dark-gray list-disc ml-8">
                                {
                                    experience.content.map((point) => {
                                        return (
                                            <li key={ point }>{ point }</li>
                                        );
                                    })
                                }
                            </ul>
                            
                        </li>
                    )

                })

            }



            
        </ol>

   
    



    );

}

export default TimelineVerticalVolunteer;