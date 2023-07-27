import React from 'react'

import './EducationComponent.css'

import MobileEducationComponent from  './MobileEducationComponent'
import DesktopEducationComponent  from './DesktopEducationComponent'
import Sidebar from '../Sidebar/sidebar'


const EducationComponent = () =>{
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
            <div className="Mobile-MainEducation-main-container">
                <Sidebar/>
                <div>
                <MobileEducationComponent EducationData={EducationData}/>
                </div>
            </div>
            <div className="Desktop-MainEducation-main-container">
                <Sidebar/>
                <div className="Desktop-MainEducation-first-container">
                <div className='Desktop-MainEductaion-container'>
                <DesktopEducationComponent EducationData={EducationData}/>
                </div>
                </div>

            </div>
        </React.Fragment>
    )
}


export default EducationComponent