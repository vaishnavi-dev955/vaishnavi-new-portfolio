import React from 'react'

import './MobileProjectsComponent.css'

const MobileProjectsComponent = (props) =>{
    const {ProjectsData} = props 
    return(
        <div className="Mobile-ProjectsComponent-second-container">
            <h1 className="mobile-projectsComponent-heading">Projects</h1>
            <ul className='mobile-projectsComponent-lists-container'>
                {ProjectsData.map(eachItem=>(
                    <li  key={eachItem.id} className="mobile-projectsComponent-container">
                        <h1>{eachItem.name}</h1>
                        <ul className="mobile-sub-projectsComponent-container">
                            {eachItem.TechnologiesUsed.map(tech=>(
                                <li key={tech.techid}>
                                    <button type="button" className='mobile-tech-Component-button'>{tech.techname}</button>
                                </li>
                            ))}
                        </ul>
                        <button type="button" className="mobile-live-demo-Component-button"><a href={eachItem.Url} className="nav-mob-Component-link">Live demo</a></button>
                    </li>
                ))}
            </ul>
        </div>
    )
    
}

export default MobileProjectsComponent