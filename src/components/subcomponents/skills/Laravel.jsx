import React from 'react'
import "../../../styles/components/subcomponents/skills/Laravel.css"

function Laravel() {
  return (
    <div className='svg-box'>
        <svg><circle className='laravel' cx="70px" cy="70px" r="70px"></circle></svg>
        <div className='skill-name-percent'>
          <p>Laravel</p>
          <p>50%</p>
        </div>
    </div>
  )
}

export default Laravel