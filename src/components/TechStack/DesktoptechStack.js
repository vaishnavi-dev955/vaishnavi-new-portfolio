import React from 'react'

import './DesktoptechStack.css'

const DesktoptechStack = (props) =>{
    const {Techdata} = props
    return(
        <div className="desktop-section-title">
            <h1 className="tech-stack-heading">Tech Stack</h1>
            <ul className='TechnologyItem-container'>
                {Techdata.map(eachItem=>(
                    <li key={eachItem.id} className="TechnologyItem">
                        <img src={eachItem.imgUrl} alt={eachItem.name} className="tech-image"/>
                        <p className='desktop-tech-stack-para'>{eachItem.name}</p>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default DesktoptechStack