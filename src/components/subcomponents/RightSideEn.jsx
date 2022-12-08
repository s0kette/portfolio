import React from 'react'
import "../../styles/components/subcomponents/RightSide.css"

function RightSideEn() {
  return (
    
        <article className="right-side">
            <div className="right-side-flex">
                <div className='projects'>
                    <h4>My current projects</h4>
                    <p>A quiz game for the web and mobile devices (iOS and Android)</p>
                    <p>A game library website</p>
                </div>

                <div className='diplomas'>
                    <h4>My last diplomas</h4>
                    <p>2022 : Web developer</p>
                    <p>2012 : Electrotechnical technician</p>
                </div>

                <div className='jobs'>
                    <h4>My last employers</h4>
                    <p>2016-2020 : Renault - Maintenance technician</p>
                    <p>2021 : Cofel - Maintenance technician</p>
                </div>
            </div>
        </article>
    )
}

export default RightSideEn