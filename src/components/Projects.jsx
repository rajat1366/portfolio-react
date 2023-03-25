import React from 'react'
import carrental from '../assets/car-rental-demo.webp'
import './Project.css'
import {FaGithub,FaExternalLinkAlt} from 'react-icons/fa';

export default function Projects() {
  return (
    <div className='p-10 font-sans bg-[#F9F9F9] py-24' id='projects'>
        <div className='flex justify-center items-center  w-full'>
                <div className='md:w-full lg:w-2/3 space-y-4 '>
                    <div className='font-bold text-lg text-blue-500'>PORTFOLIO</div>
                    <div className='font-bold text-2xl pb-8'>
                            Each project is a unique piece of development
                    </div>
                    
                    {/* Tile 1 */}
                    <div className='rounded-xl bg-white p-4 shadow-2xl lg:flex md:block'>
                        <div className='overflow-hidden md:w-full  lg:w-3/5 h-96 rounded-xl shadow-xl pulseEffect'>
                            <a target="_blank" href="" rel="noreferrer">
                                <img className='scrollAnimation'  src={carrental}></img>
                            </a>
                           
                        </div>

                        <div className='md:w-full lg:w-2/5 justify-center'>
                            
                            <div className='flex   justify-center p-2 font-bold text-slate-800 text-lg'>CAR RENTAL</div>
                            <div className='flex   justify-between flex-wrap p-4 text-slate-500 font-semibold text-center text-lg'>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</div>
                            <div className='flex   justify-center space-x-4 p-4'>
                                <div className='shadow-2xl p-2 font-bold text-lg'>
                                    React
                                </div>
                                <div className='shadow-2xl p-2 font-bold text-lg' >
                                    Tailwindcss
                                </div>
                            </div>
                            <div className='flex justify-center items-center p-4 space-x-4'>
                                <div className='inline-flex space-x-2 hover:text-blue-500'>
                                    <div>Code</div>
                                     <a href='https://github.com/rajat1366' target="_blank">
                                            <FaGithub className='w-6 h-6 '></FaGithub>
                                        </a>
                                </div>
                                <div className='inline-flex space-x-2 hover:text-blue-500'>
                                    <div>Live Demo </div>
                                    <a href='https://github.com/rajat1366' target="_blank">
                                            <FaExternalLinkAlt className='w-6 h-6 '></FaExternalLinkAlt>
                                        </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
        
    </div>
  )
}
