"use client"

import { PiGithubLogoFill } from "react-icons/pi";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialDribbble } from "react-icons/ti";

//Contact section
function Contact() {
    return (
        <section id="contact" className='flex flex-col justify-center items-center space-y-16 mt-16 md:mt-28 py-8 px-8 xl:px-8 2xl:px-12'>
            {/* Title */}
            <div className='flex flex-col justify-center items-center 2xl:w-3/4 space-y-16 text-center'>
                <div className='flex flex-col justify-center items-center space-y-4'>
                    <h6 className='title-label'>Contact</h6>
                    <h2 className='title-heading'>Let&apos;s get in touch.</h2>
                </div>

                <div className='flex flex-col space-y-6 justify-center items-center'>
                    <p className='main-paragraph'>I am constantly looking for opportunities to design and build impactful products. Whether you wish to collaborate with me or simply to say hello, feel free to leave me a message.</p>
                    <a href="mailto:eugenetangkangjie@gmail.com">
                        <button type="button" onClick={ () => window.open('mailto:eugenetangkangjie@gmail.com','_blank') } className="text-white bg-violet-500 hover:bg-violet-900 font-medium rounded-2xl text-xl px-5 py-2.5 text-center me-2 mb-2 duration-300">Say Hello</button>
                    </a>
                </div>
            </div>

            {/* Social media icons */}
            <div className="flex items-center gap-x-10">
                <a href="https://github.com/eugenetangkj" target="_blank"><PiGithubLogoFill name="logo-github" className="social-link" /></a>
                <a href="https://www.linkedin.com/in/eugenetangkj" target="_blank"><TiSocialLinkedin name="logo-linkedin" className="social-link" /></a>
                <a href="https://dribbble.com/eugenetangkj" target="_blank"><TiSocialDribbble name="logo-dribbble" className="social-link" /></a>
            </div>
       

            

          

        </section>
    ) 
}

export default Contact;