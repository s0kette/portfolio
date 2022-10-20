import React from 'react'
import "../../../styles/components/subcomponents/skills/Reactjs.css"

function Reactjs() {
  return (
    <div className='svg-box'>
        <svg><circle className='react' cx="70px" cy="70px" r="70px"></circle></svg>
        <div className='skill-name-percent'>
          <p>React.js</p>
          <p>60%</p>
        </div>
    </div>
  )
}

export default Reactjs