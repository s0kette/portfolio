import React from 'react'
import "../../styles/components/Projects.css"

function Projects() {
  return (
    <section id='my-projects' className='my-projects'>
        <h2>My last projects</h2>
        <div className='website-thumbnail'>
            <div className='netflix'>
                <a className='link' href="https://netflix-nextjs-six.vercel.app/login" target="_blank" rel="noreferrer">
                    <img src="./img/Netflix.png" alt="" />
                    <p>Reproduction of Netflix, with a login/sign up feature</p>
                    <p className='stack'>Next.js - Typescript - TailwindCSS - Firebase</p>
                </a>
            </div>

            <div className='guessthequotes'>
                <a className='link' href="https://guessthequotes.vercel.app/" target="_blank" rel="noreferrer">
                    <img src="./img/GuesstheQuotes.png" alt="" />
                    <p>Prototype of a quiz game about cinema</p>
                    <p className='stack'>Next.js - Typescript - TailwindCSS - Firebase - Redux Toolkit</p>
                </a>
            </div>

            <div className='frenchcuts'>
                <a className='link' href="https://www.french-cuts.com" target="_blank" rel="noreferrer">
                    <img src="./img/FrenchCuts.png" alt="" />
                    <p>Chicago barber shop website</p>
                    <p className='stack'>ReactJS - Javascript - CSS</p>
                </a>
            </div>

            <div className='grandspirit'>
                <a className='link' href="https://grandspirit.vercel.app/" target="_blank" rel="noreferrer">
                    <img src="./img/GrandSpirit.png" alt="" />
                    <p>E-sport team website</p>
                    <p className='stack'>ReactJS - Javascript - CSS</p>
                </a>
            </div>

        </div>
    </section>
  )
}

export default Projects