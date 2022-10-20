import React from 'react'
import "../styles/components/Projects.css"

function Projects() {
  return (
    <section id='my-projects' className='my-projects'>
        <h2>Mes derniers projets</h2>
        <div className='website-thumbnail'>
            <div className='netflix'>
                <a className='link' href="https://netflix-nextjs-six.vercel.app/login">
                    <img src="./img/Netflix.png" alt="" />
                    <p>Reproduction de Netflix, avec une inscription/connexion</p>
                </a>
            </div>

            <div className='guessthequotes'>
                <a className='link' href="https://guessthequotes.vercel.app/">
                    <img src="./img/GuesstheQuotes.png" alt="" />
                    <p>Prototype d'un quiz sur le cinéma</p>
                </a>
            </div>

            <div className='frenchcuts'>
                <a className='link' href="https://www.french-cuts.com">
                    <img src="./img/FrenchCuts.png" alt="" />
                    <p>Site vitrine d'un barbier à Chicago</p>
                </a>
            </div>

            <div className='grandspirit'>
                <a className='link' href="https://grandspirit.vercel.app/">
                    <img src="./img/GrandSpirit.png" alt="" />
                    <p>Site vitrine d'une équipe e-sportive</p>
                </a>
            </div>

        </div>
    </section>
  )
}

export default Projects