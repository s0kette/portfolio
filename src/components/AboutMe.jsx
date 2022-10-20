import React from 'react'
import "../styles/components/AboutMe.css"
import LeftSide from './subcomponents/LeftSide'
import RightSide from './subcomponents/RightSide'

function AboutMe() {
  return (
    <section id='about-me' className="about-me">
        <h2>A propos de moi</h2>
        <div className='both-sides'>
          <LeftSide/>
          <RightSide/>
        </div>
        <p className='quiz-link'>Pour en découvrir un petit peu plus sur moi, je vous propose un petit quiz <a href="#quiz">ici</a></p>
    </section>
  )
}

export default AboutMe