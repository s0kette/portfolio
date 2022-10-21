import React from 'react'
import "../../styles/components/Navbar.css"

function NavbarEn() {
  return (
    <nav>
        <a href="#header">
            <h1>OtR</h1>
        </a>
        
        <ul>
            <a href="#about-me" className='list'>
                <li>About Me</li>
            </a>

            <a href="#skills" className='list'>
                <li>My Skills</li>
            </a>

            <a href="#my-projects" className='list'>
                <li>My Projects</li>
            </a>

            <a href="/">
                <img src="./img/french-flag.png" alt="" />
            </a>
        </ul>    
    </nav>
  )
}

export default NavbarEn