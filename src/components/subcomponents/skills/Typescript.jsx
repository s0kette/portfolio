import React from 'react'
import "../../../styles/components/subcomponents/skills/Typescript.css"

function Typescript() {
  return (
    <div className='svg-box'>
        <svg><circle className='typescript' cx="70px" cy="70px" r="70px"></circle></svg>
        <div className='skill-name-percent'>
          <p>Typescript</p>
          <p>50%</p>
        </div>
    </div>
  )
}

export default Typescript