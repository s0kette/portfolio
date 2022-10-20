import React from 'react'
import "../../../styles/components/subcomponents/skills/SQL.css"

function SQL() {
  return (
    <div className='svg-box'>
        <svg><circle className='sql' cx="70px" cy="70px" r="70px"></circle></svg>
        <div className='skill-name-percent'>
          <p>SQL</p>
          <p>60%</p>
        </div>
    </div>
  )
}

export default SQL