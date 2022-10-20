import React from 'react'
import "../styles/components/Navbar.css"
import LanguageButton from './subcomponents/LanguageButton'

function Navbar() {
  return (
    <nav>
        <h1>OtR</h1>
        <ul>
            <a href="#about-me" className='list'>
                <li>A propos de moi</li>
            </a>

            <a href="#skills" className='list'>
                <li>Mes compétences</li>
            </a>

            <a href="#my-projects" className='list'>
                <li>Mes projets</li>
            </a>

            <LanguageButton/>
        </ul>    
    </nav>
  )
}

export default Navbar