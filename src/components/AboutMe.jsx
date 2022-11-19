import React from 'react'
import "../styles/components/AboutMe.css"
import LeftSideFr from './subcomponents/LeftSideFr'
import RightSideFr from './subcomponents/RightSideFr'

function AboutMe() {
  return (
    <section id='about-me' className="about-me">
        <h2>A propos de moi</h2>
        <div className='both-sides'>
          <LeftSideFr/>
          <RightSideFr/>
        </div>
        {/* <p className='quiz-link'>Pour en découvrir un petit peu plus sur moi, je vous propose un petit quiz <a href="" onClick={  }>ici</a></p> */}
    </section>
  )
}

export default AboutMe