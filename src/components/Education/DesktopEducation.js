import React from 'react'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import './DesktopEducation.css'

import {RiGraduationCapFill} from 'react-icons/ri'


const DesktopEducation = (props) =>{
    const {EducationData} = props
    return(
            <React.Fragment>
                <h1 className='Desktop-eductaion-heading'>Education</h1>
                <ul>
                    {EducationData.map(eachItem=>(
                        <li key={eachItem.id} >
                            <RiGraduationCapFill size={25}/>
                            <div>
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


export default DesktopEducation