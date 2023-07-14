import React from 'react'

import './Education.css'

import MobileEducation from './MobileEducation'
import DesktopEducation  from './DesktopEducation'


const Education = () =>{
    const EducationData = [
        {
            id:1,
            name:"Anurag Group of Institutions",
            degree:"B.tech in Civil Engineering",
            year:"2016-2020"
        },
        {
            id:2,
            name:"Sri Gayatri Junior College",
            degree:"Intermediate",
            year:"2014-2016"
        },
        {
            id:3,
            name:"Chaitanya Residential High School",
            degree:"SSC",
            year:"2013-2014"
        }



    ]
    return(
        <React.Fragment>
            <div className="Mobile-Education-main-container">
                <MobileEducation EducationData={EducationData}/>
            </div>
            <div className="Desktop-Education-main-container">
                <DesktopEducation EducationData={EducationData}/>

            </div>
        </React.Fragment>
    )
}


export default Education