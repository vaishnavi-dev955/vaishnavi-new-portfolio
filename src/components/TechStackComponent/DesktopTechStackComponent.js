import React from 'react'

import './DesktopTechStackComponent.css'

const DesktopTechStackComponent = (props) =>{
    const {Techdata} = props
    return(
        <div className="desktop-section-tech-stack-title">
            <h1 className="desktop-tech-stack-main-heading">Tech Stack</h1>
            <ul className='desktop-TechnologyItem-container'>
                {Techdata.map(eachItem=>(
                    <li key={eachItem.id}>
                        <button type="button" className="desktop-TechnologyItem-button">
                        <img src={eachItem.imgUrl} alt={eachItem.name} className="desktop-tech-stack-image"/>
                        <p >{eachItem.name}</p>
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default DesktopTechStackComponent