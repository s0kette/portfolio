import React from 'react'
import "../../styles/components/subcomponents/RightSide.css"

function RightSideFr() {
  return (
    
        <article className="right-side">
            <div className="right-side-flex">
                <div className='projects'>
                    <h4>Mes projets actuels - en cours</h4>
                    <p>Un jeu (quiz) pour le web et le mobile (iOS et Android)</p>
                    <p>Un site de ludothèque</p>
                </div>

                <div className='diplomas'>
                    <h4>Mes derniers diplômes</h4>
                    <p>2022 : Titre Professionnel (Bac +2) - Développeur Web/ Web Mobile</p>
                    <p>2012 : BTS Electrotechnique</p>
                </div>

                <div className='jobs'>
                    <h4>Mes derniers employeurs</h4>
                    <p>2016-2020 : Renault - Technicien de maintenance</p>
                    <p>2021 : Cofel - Technicien de maintenance</p>
                </div>
            </div>
        </article>
    )
}

export default RightSideFr