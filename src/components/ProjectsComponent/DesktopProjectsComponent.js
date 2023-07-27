import React from 'react'

import './DesktopProjectsComponent.css'

const DesktopProjectsComponent = (props) =>{
    const {ProjectsData} = props 
    return(
        <div className="Desktop-ProjectsComponent-main-container">
            <h1 className="Desktop-ProjectsComponent-heading">Projects</h1>
            <ul className="Desktop-Projects-Component-main-container">
                {ProjectsData.map(eachItem=>(
                    <li  key={eachItem.id} className="Desktop-Projects-Component-lists-container">
                        <h1 className="desk-ProjectsComponent-con-heading">{eachItem.name}</h1>
                        <p className='desktop-ProjectsComponent-para1'>Techonologies Used</p>
                        <ul className="Desktop-sub-Projects-Component-container">
                            {eachItem.TechnologiesUsed.map(tech=>(
                                <li key={tech.techid}>
                                    <button type="button" className='Desktop-ProjectsComponent-tech-button'>{tech.techname}</button>
                                </li>
                            ))}
                        </ul>
                        <button type="button" className="Desktop-ProjectsComponent-live-demo-button"><a href={eachItem.Url} className="nav-ProjectsComponent-desktop-link">Live demo</a></button>
                    </li>
                ))}
            </ul>
            </div>
    )
    
}

export default DesktopProjectsComponent