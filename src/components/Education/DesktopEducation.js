import React from 'react'


import './DesktopEducation.css'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {RiGraduationCapFill} from 'react-icons/ri'


const colors = ['#fc2803','#34d8eb','#8cf089']


const DesktopEducation = (props) =>{
    const {EducationData} = props
    return(
            <React.Fragment>
                <h1 className='Desktop-eductaion-heading'>Education</h1>
                <div className="desktop-sub-container">
                <VerticalTimeline lineColor="brown">
                    {EducationData.map((item,index)=>(
                        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: colors[index], color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        iconStyle={{ background: colors[index], color: '#fff' }}
                        icon={<RiGraduationCapFill/>}
                    >
                        <h3 className="vertical-timeline-element-title">{item.name}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.degree}</h4>
                        <p>
                        {item.year}
                        </p>
    
                    </VerticalTimelineElement>

                    ))}
                    
                    </VerticalTimeline>
                    </div>
            </React.Fragment>
        
    )
}


export default DesktopEducation