import React from 'react'
import "../../../styles/components/subcomponents/skills/Next.css"

function Next() {
  return (
    <div className='svg-box'>
        <svg><circle className='next' cx="70px" cy="70px" r="70px"></circle></svg>
        <div className='skill-name-percent'>
          <p>Next.js</p>
          <p>50%</p>
        </div>
    </div>
  )
}

export default Next