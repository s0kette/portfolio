import React from 'react'
import "../../styles/components/AboutMe.css"
import LeftSideEn from '../subcomponents/LeftSideEn'
import RightSideEn from '../subcomponents/RightSideEn'

function AboutMeEn() {
  return (
    <section id='about-me' className="about-me">
        <h2>About Me</h2>
        <div className='both-sides'>
          <LeftSideEn/>
          <RightSideEn/>
        </div>
        {/* <p className='quiz-link'>To know a bit more about me, you can play to a quiz game <a href="#quiz">here</a></p> */}
    </section>
  )
}

export default AboutMeEn