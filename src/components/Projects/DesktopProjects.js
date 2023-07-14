import React from 'react'

import './DesktopProjects.css'

const DesktopProjects = (props) =>{
    const {ProjectsData} = props 
    return(
        <React.Fragment>
            <h1 className="Desktop-projects-heading">Projects</h1>
            <ul className="Desktop-projects-main--container">
                {ProjectsData.map(eachItem=>(
                    <li  key={eachItem.id} className="Desktop-projects-container">
                        <h1 className="desk-pro-con-heading">{eachItem.name}</h1>
                        <p className='desktop-pro-para1'>Techonologies Used</p>
                        <ul className="Desktop-sub-projects-container">
                            {eachItem.TechnologiesUsed.map(tech=>(
                                <li key={tech.techid}>
                                    <button type="button" className='Desktop-tech-button'>{tech.techname}</button>
                                </li>
                            ))}
                        </ul>
                        <button type="button" className="Desktop-live-demo-button"><a href={eachItem.Url} className="nav-desktop-link">Live demo</a></button>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    )
    
}

export default DesktopProjects