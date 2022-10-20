import React from 'react'
import "../../../styles/components/subcomponents/skills/Tailwind.css"

function Tailwind() {
  return (
    <div className='svg-box'>
        <svg><circle className='tailwind' cx="70px" cy="70px" r="70px"></circle></svg>
        <div className='skill-name-percent'>
          <p>Tailwind</p>
          <p>90%</p>
        </div>
    </div>
  )
}

export default Tailwind