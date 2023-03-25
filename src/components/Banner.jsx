import React from 'react'

import wave from '../assets/waving.png'
import htmlsvg from '../assets/html.svg'
import csssvg from '../assets/css3.svg'
import reactsvg from '../assets/react.svg'
import tailwindsvg from '../assets/tailwind.svg'
import javascriptsvg from '../assets/javascript.svg'
import './Banner.css'
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import{SiLeetcode} from 'react-icons/si';
export default function Banner() {
  return (
    
        <div className='p-6 font-sans bg-[#F9F9F9] md:py-16 lg:py-20  w-full' id='home' >
            <div className=' w-full'>
                <div className='md:block lg:flex justify-center  items-center'>
                    <div className='md:w-full lg:w-1/3  space-y-4 '>
                            <div className='text-5xl font-bold flex-wrap inline-flex'>
                                        <div className=''>
                                            Front-End React Developer <img className=' w-14 h-14 inline-block' src={wave}></img>
                                        </div>
                                        
                                       
                                    </div>
                            <div className='flex-wrap text-lg text-gray-500'>
                                        Hi, I'm Rajat Kumar. A passionate Front-end React Developer based in Chandigarh, India.📍
                                    </div>
                            <div className='inline-flex space-x-3'>
                                        <a href='https://github.com/rajat1366' target="_blank">
                                            <FaGithub className='w-8 h-8 hover:fill-slate-500'></FaGithub>
                                        </a>
                                        <a href='https://www.linkedin.com/in/rajat-kumar-447a88b4/' target="_blank">
                                            <FaLinkedin className='w-8 h-8 hover:fill-blue-500'></FaLinkedin>
                                        </a>
                                        <a href='https://leetcode.com/rajat1366/' target="_blank">
                                            <SiLeetcode className='w-8 h-8 hover:fill-orange-500'></SiLeetcode>
                                        </a>
                                        
                            </div>

                    </div>
                    <div className='md:w-full lg:w-1/3 flex lg:px-10 md:justify-center  '>
                            <div className='imageAnimation'></div>
                    </div> 
                </div>
                <div className='flex justify-center '>
                    <div className='md:w-full lg:w-2/3 py-6' >
                            <div className='inline-flex items-center space-x-4'> 
                                <div className='font-semibold  text-lg'>Tech Stack  </div>
                                <div className='flex flex-wrap pl-10'>
                                    <div className='p-3 rounded-full bg-white shadow-xl m-1'><img className='stackImage' src={htmlsvg}  /></div>
                                    <div className='p-3 rounded-full bg-white shadow-xl m-1'><img className='stackImage' src={csssvg}  /></div>
                                    <div className='p-3 rounded-full bg-white shadow-xl m-1'><img className='stackImage' src={javascriptsvg}  /></div>
                                    <div className='p-3 rounded-full bg-white shadow-xl m-1'><img className='stackImage' src={reactsvg}  /></div>
                                    <div className='p-3 rounded-full bg-white shadow-xl m-1'><img className='stackImage' src={tailwindsvg}  /></div>
                                </div>
                                
                            </div>
                    </div>
                </div>
            </div>
            
        </div>
    
  )
}
