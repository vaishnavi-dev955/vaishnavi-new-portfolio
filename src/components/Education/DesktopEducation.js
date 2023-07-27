import React from 'react'


import './DesktopEducation.css'

import {RiGraduationCapFill} from 'react-icons/ri'


const DesktopEducation = (props) =>{
    const {EducationData} = props
    return(
            <div className="desk-ed-container">
                <h1 className='Desktop-eductaion-heading'>Education</h1>
                <ul className='Desktop-ed-list-container'>
                    {EducationData.map((item)=>(
                        <li className="Desktop-Education-Item-container" key={item.id}>
                        <RiGraduationCapFill size={50} className='desktop-graduation-icon'/>
                        <div className='desktop-list-items-ed-container'>
                        <h3 className="ed-item-heading1">{item.name}</h3>
                        <h4 className="ed-item-heading2">{item.degree}</h4>
                        <p className="ed-item-para1">
                        {item.year}
                        </p>
                        </div>
                        </li>

                    ))}
                    </ul>
            </div>
        
    )
}


export default DesktopEducation