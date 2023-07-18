import React from 'react'

import './MobileEducation.css'

import {RiGraduationCapFill} from 'react-icons/ri'

const MobileEducation = (props) =>{
    const {EducationData} = props
    return(
        <div className="Mobile-Home-MainEducation-container">
        <h1 className='mobile-Home-eductaion-main-heading'>Education</h1>
        <ul className="mobile-Home-education-main-lists-container">
            {EducationData.map(eachItem=>(
                <li key={eachItem.id} className="mobile-Home-eductaion-main-container">
                    <RiGraduationCapFill size={45} className='graduation-main-Home-ed-logo'/>
                    <div className='eductaion-Home-main-items'>
                        <h1 className='ed-mobile-Home-item-heading1-main'>{eachItem.degree}</h1>
                        <p className="ed-mobile-Home-item-heading2-main">{eachItem.name}</p>
                        <p className="ed-mobile-Home-item-para1-main">{eachItem.year}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
        
    )
}


export default MobileEducation