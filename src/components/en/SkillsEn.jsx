import React from 'react'
import "../../styles/components/Skills.css"
import HTML from '../subcomponents/skills/HTML'
import CSS from '../subcomponents/skills/CSS'
import Javascript from '../subcomponents/skills/Javascript'
import Reactjs from '../subcomponents/skills/Reactjs'
import PHP from '../subcomponents/skills/PHP'
import Typescript from '../subcomponents/skills/Typescript'
import Laravel from '../subcomponents/skills/Laravel'
import SQL from '../subcomponents/skills/SQL'
import Firebase from '../subcomponents/skills/Firebase'

function Skills() {
  return (
    <section id='skills' className='skills'>
        <h2>My Skills</h2>
        <div className='skills-circles'>
          <HTML/>
          <CSS/>
          <Javascript/>
          <Reactjs/>
          <PHP/>
          <Typescript/>
          <Laravel/>
          <SQL/>
          <Firebase/>
        </div>
    </section>
  )
}

export default Skills