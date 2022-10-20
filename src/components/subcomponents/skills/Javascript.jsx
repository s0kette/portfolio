import React from 'react'
import "../../../styles/components/subcomponents/skills/Javascript.css"

function Javascript() {
  return (
    <div className='svg-box'>
        <svg><circle className='javascript' cx="70px" cy="70px" r="70px"></circle></svg>
        <div className='skill-name-percent'>
          <p>Javascript</p>
          <p>75%</p>
        </div>
    </div>
  )
}

export default Javascript