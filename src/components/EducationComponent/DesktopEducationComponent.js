import React from 'react'


import './DesktopEducationComponent.css'

import {RiGraduationCapFill} from 'react-icons/ri'


const DesktopEducationComponent = (props) =>{
    const {EducationData} = props
    return(
            <div className="desk-ed-main-container">
                <h1 className='Desktop-eductaion-main-heading'>Education</h1>
                <ul className='Desktop-ed-list-main-container'>
                    {EducationData.map((item)=>(
                        <li className="Desktop-Education-Item-main-container" key={item.id}>
                        <RiGraduationCapFill size={50} className='desktop-graduation-main-icon'/>
                        <div className='desktop-list-items-ed-main-container'>
                        <h3 className="ed-item-heading1-main">{item.name}</h3>
                        <h4 className="ed-item-heading2-main">{item.degree}</h4>
                        <p className="ed-item-para1-main">
                        {item.year}
                        </p>
                        </div>
                        </li>

                    ))}
                    </ul>
            </div>
        
    )
}


export default DesktopEducationComponent