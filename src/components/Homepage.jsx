import React from 'react'
import AboutMe from './AboutMe'
import Banner from './Banner'
import Contact from './Contact'
import Footer from './Footer'
import NavBar from './NavBar'
import Projects from './Projects'

function Homepage() {
  return (
    <>  
      <div className='scroll-smooth'>
        <NavBar />
        <div className='mt-24 z-0'>
            <Banner></Banner>
        </div>
        <div className='z-0'>
          <AboutMe></AboutMe>
        </div>
        <div>
          <Projects></Projects>
        </div>
        <div>
          <Contact></Contact>
        </div>
        <div>
          <Footer></Footer>
        </div>
        
    </div>
    </>
    
  )
}

export default Homepage