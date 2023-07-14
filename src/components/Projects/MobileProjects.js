import React from 'react'

import './MobileProjects.css'

const MobileProjects = (props) =>{
    const {ProjectsData} = props 
    return(
        <React.Fragment>
            <h1 className="mobile-projects-heading">Projects</h1>
            <ul>
                {ProjectsData.map(eachItem=>(
                    <li  key={eachItem.id} className="mobile-projects-container">
                        <h1>{eachItem.name}</h1>
                        <ul className="mobile-sub-projects-container">
                            {eachItem.TechnologiesUsed.map(tech=>(
                                <li key={tech.techid}>
                                    <button type="button" className='mobile-tech-button'>{tech.techname}</button>
                                </li>
                            ))}
                        </ul>
                        <button type="button" className="mobile-live-demo-button"><a href={eachItem.Url} className="nav-mob-link">Live demo</a></button>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    )
    
}

export default MobileProjects