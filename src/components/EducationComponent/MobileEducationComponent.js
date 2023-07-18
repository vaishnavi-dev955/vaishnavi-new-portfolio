import React from 'react'

import './MobileEducationComponent.css'

import {RiGraduationCapFill} from 'react-icons/ri'

const MobileEducationComponent = (props) =>{
    const {EducationData} = props
    return(
            <div className="Mobile-MainEducation-container">
                <h1 className='mobile-eductaion-main-heading'>Education</h1>
                <ul className="mobile-education-main-lists-container">
                    {EducationData.map(eachItem=>(
                        <li key={eachItem.id} className="mobile-eductaion-main-container">
                            <RiGraduationCapFill size={45} className='graduation-main-logo'/>
                            <div className='eductaion-main-items'>
                                <h1 className='ed-mobile-item-heading1-main'>{eachItem.degree}</h1>
                                <p className="ed-mobile-item-heading2-main">{eachItem.name}</p>
                                <p className="ed-mobile-item-para1-main">{eachItem.year}</p>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        
    )
}


export default MobileEducationComponent