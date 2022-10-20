import React from 'react'
import "../../../styles/components/subcomponents/skills/HTML.css"

function HTML() {
  return (
    <div className='svg-box'>
        <svg><circle className='html' cx="70px" cy="70px" r="70px"></circle></svg>
        <div className='skill-name-percent'>
          <p>HTML</p>
          <p>90%</p>
        </div>
    </div>
  )
}

export default HTML