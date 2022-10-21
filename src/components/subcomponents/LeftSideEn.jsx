import React from 'react'
import "../../styles/components/subcomponents/LeftSide.css"

function LeftSideEn() {
  return (
    <article className='left-side'>
      <img className='photo' src="./img/Photo.jpg" alt="" />
      <h3>Timothy Perkins</h3>

      <h4>Web Developer</h4>

      <a href="mailto:otter.tp@gmail.com"><p>otter.tp@gmail.com</p></a>

      <p>After 10 years as a maintenance technician, I have done a professional retraining as a developer </p>

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

export default LeftSideEn