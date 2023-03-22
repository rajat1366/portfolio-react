import React from 'react'

function NavBar() {
  return (
    <div className="flex justify-center font-sans p-8 text-xl shadow-xl top-0 z-50 fixed w-full bg-white">
        <div className='font-bold'>Rajat.dev</div>
        <div className='flex-1 '></div>
        <div className='inline-flex font-semibold space-x-7 text-lg'>
            <div><a href='#home'>Home</a></div>
            <div><a href='#about'>About</a></div>
            <div><a href='#projects'>Projects</a></div>
            <div><a href='#contact'>Contact</a></div>
        </div>
    </div>
  )
}

export default NavBar