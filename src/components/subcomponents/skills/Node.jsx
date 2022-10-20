import React from 'react'
import "../../../styles/components/subcomponents/skills/Node.css"

function Node() {
  return (
    <div className='svg-box'>
        <svg><circle className='node' cx="70px" cy="70px" r="70px"></circle></svg>
        <div className='skill-name-percent'>
          <p>Node.js</p>
          <p>25%</p>
        </div>
    </div>
  )
}

export default Node