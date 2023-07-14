import React from 'react'

import './MobileEducation.css'

import {RiGraduationCapFill} from 'react-icons/ri'

const MobileEducation = (props) =>{
    const {EducationData} = props
    return(
            <React.Fragment>
                <h1 className='mobile-eductaion-heading'>Education</h1>
                <ul>
                    {EducationData.map(eachItem=>(
                        <li key={eachItem.id} className="mobile-eductaion-container">
                            <RiGraduationCapFill size={45} className='graduation-logo'/>
                            <div className='eductaion-items'>
                                <h1 className="mobile-ed-heading">{eachItem.degree}</h1>
                                <p className="mobile-ed-para1">{eachItem.name}</p>
                                <p className="mobile-ed-para1">{eachItem.year}</p>
                            </div>

                        </li>
                    ))}
                </ul>
            </React.Fragment>
        
    )
}


export default MobileEducation