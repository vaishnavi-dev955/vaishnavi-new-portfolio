import React from 'react'

import './MobiletechStack.css'

const MobiletechStack = (props) =>{
    const {MobileTechdata} = props
    return(
        <div className="mobile-section-title">
            <h1 className="mobile-stack-heading">Tech Stack</h1>
            <ul className='mobile-TechnologyItem-container'>
                {MobileTechdata.map(eachItem=>(
                    <li key={eachItem.id}>
                        <button type="button" className="mobile-TechnologyItem-button">
                        <img src={eachItem.imgUrl} alt={eachItem.name} className="mobile-tech-image"/>
                        <p >{eachItem.name}</p>
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default MobiletechStack