import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa';
export default function Footer() {
  return (
    <div className='py-12 font-sans bg-[#2D2E32] '>
        <div className='flex justify-center items-center  w-full'>
        <div className='w-2/3 flex'>
            <div className='text-white font-bold text-lg'>Copyright © 2023. All rights are reserved</div>
            <div className='flex-1'></div>
            <div className='inline-flex space-x-3'>
                                        <a href='https://github.com/rajat1366' target="_blank">
                                            <FaGithub className='w-8 h-8 hover:fill-white fill-white'></FaGithub>
                                        </a>
                                        <a href='https://www.linkedin.com/in/rajat-kumar-447a88b4/' target="_blank">
                                            <FaLinkedin className='w-8 h-8 hover:fill-white fill-white'></FaLinkedin>
                                        </a>
                                        
                                        
                            </div>
        </div>
           
        </div>
    </div>
  )
}
