import React from 'react'
import "../../styles/components/subcomponents/LeftSide.css"

function LeftSide() {
  return (
    <article className='left-side'>
      <img className='photo' src="./img/Photo.jpg" alt="" />
      <h3>Timothy Perkins</h3>

      <h4>Développeur web</h4>

      <a href="mailto:otter.tp@gmail.com"><p>otter.tp@gmail.com</p></a>

      <p>Après 10 ans en maintenance industrielle, je me suis reconverti comme développeur web</p>

      <div className='social-medias-centered'>
        <div className='social-medias'>
          <a href="https://github.com/s0kette" target="_blank" rel="noreferrer">
            <img className='github' src="./img/github.png" alt="" />
          </a>

          <a href="https://www.linkedin.com/in/timothy-perkins-0873a1143/" target="_blank" rel="noreferrer">
            <img className='linkedin' src="./img/linkedin.png" alt="" />
          </a>

          <a href="https://www.malt.fr/profile/timothyperkins" target="_blank" rel="noreferrer">
            <img className='malt' src="./img/malt.png" alt="" />
          </a>

          <a href="https://www.facebook.com/timothy.perkins.71/" target="_blank" rel="noreferrer">
            <img className='facebook' src="./img/facebook.png" alt="" />
          </a>
        </div>
      </div>
    </article>

  )
}

export default LeftSide