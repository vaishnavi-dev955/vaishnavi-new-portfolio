import React from 'react'

import './DesktoptechStack.css'

const DesktoptechStack = (props) =>{
    const {Techdata} = props
    return(
        <div className="desktop-section-title">
            <h1 className="tech-stack-heading">Tech Stack</h1>
            <ul className='TechnologyItem-container'>
                {Techdata.map(eachItem=>(
                    <li key={eachItem.id}>
                        <button type="button" className="TechnologyItem-button">
                        <img src={eachItem.imgUrl} alt={eachItem.name} className="tech-image"/>
                        <p >{eachItem.name}</p>
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default DesktoptechStack