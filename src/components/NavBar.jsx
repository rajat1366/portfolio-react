import React from 'react'
import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import './NavBar.css'

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    console.log("inhere");
    setShowNavbar(!showNavbar)
  }

  return (
    <div className="flex justify-center font-sans p-8 text-xl shadow-xl top-0 z-50 fixed w-full bg-white">
        <div className='font-bold'>Rajat.dev</div>
        <div className='flex-1 '></div>
        <div className='inline-flex font-semibold space-x-7 text-lg items-center'>
            <div className="menu-icon" onClick={handleShowNavbar}>
              <GiHamburgerMenu />
            </div>
            <div className={`nav-elements ${showNavbar && 'active'}`}>
                <ul className='flex'>
                    <li className='p-2'><a href='#home'>Home</a></li>
                    <li className='p-2'><a href='#about'>About</a></li>
                    <li className='p-2'><a href='#projects'>Projects</a></li>
                    <li className='p-2'><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar