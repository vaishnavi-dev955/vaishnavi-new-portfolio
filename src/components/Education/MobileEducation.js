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
                            <RiGraduationCapFill size={70}/>
                            <div className="eductaion-items">
                                <h1>{eachItem.degree}</h1>
                                <p>{eachItem.name}</p>
                                <p>{eachItem.year}</p>
                            </div>

                        </li>
                    ))}
                </ul>
            </React.Fragment>
        
    )
}


export default MobileEducation