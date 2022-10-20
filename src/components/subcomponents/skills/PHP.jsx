import React from 'react'
import "../../../styles/components/subcomponents/skills/PHP.css"

function PHP() {
  return (
    <div className='svg-box'>
        <svg><circle className='php' cx="70px" cy="70px" r="70px"></circle></svg>
        <div className='skill-name-percent'>
          <p>PHP</p>
          <p>60%</p>
        </div>
    </div>
  )
}

export default PHP