import React from 'react'
import "../../styles/components/subcomponents/LeftSide.css"

function LeftSide() {
  return (
    <article className='left-side'>
        <img src="./img/Photo.jpg" alt="" />
        <h3>Timothy Perkins</h3>
        <h4>Développeur web</h4>
        <a href="mailto:otter.tp@gmail.com"><p>otter.tp@gmail.com</p></a>
        <p>Après 10 ans en maintenance industrielle, je me suis reconverti comme développeur web</p>
    </article>

  )
}

export default LeftSide