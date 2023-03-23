import React from 'react'
import workspace from '../assets/workspace.jpg'
export default function AboutMe() {
  return (
    <div className='p-10 font-sans bg-white py-24' id='about'>
       
            <div className='flex justify-center items-center  w-full'>
                <div className='md:w-full lg:w-2/3 lg:flex md:block'>
                    <div className='md:w-full lg:w-1/2  p-6'>
                        <img className='rounded-3xl h-full min-w-full' src={workspace}></img>
                    </div>
                    <div className='md:w-full lg:w-1/2 space-y-2 lg:px-10'>
                            <div className='font-bold text-lg text-blue-500'>ABOUT ME</div>
                            <div className='font-bold text-2xl'>
                            A dedicated Front-end Developer based in Chandigarh, India 📍
                            </div>
                            <div className='text-slate-500 text-lg text-justify' >
                            Hello! My name is Rajat Kumar, and I am a frontend developer with a passion for building dynamic and responsive web applications. I hold an M.Tech degree in Computer Science and Engineering from IIIT Bangalore.
                            I am constantly seeking to improve my knowledge and stay up-to-date with the latest trends and technologies in the field of frontend development. 
                            I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                            </div>
                    </div>
                </div>
            </div>
        
    </div>
  )
}
