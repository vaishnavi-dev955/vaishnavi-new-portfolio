import React from 'react'

import './MobileTechStackComponent.css'

const MobileTechStackComponent = (props) =>{
    const {MobileTechdata} = props
    return(
        <div className="mobile-section-main-techstack-title">
            <h1 className="mobile-main-tech-stack-heading">Tech Stack</h1>
            <ul className='mobile-main-tech-stack-TechnologyItem-container'>
                {MobileTechdata.map(eachItem=>(
                    <li key={eachItem.id}>
                        <button type="button" className="mobile-main-tech-stack-TechnologyItem-button">
                        <img src={eachItem.imgUrl} alt={eachItem.name} className="mobile-main-tech-stack-image"/>
                        <p >{eachItem.name}</p>
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default MobileTechStackComponent