import React from 'react'

import './ProjectsComponent.css'

import MobileProjectsComponent from './MobileProjectsComponent'
import DesktopProjectsComponent from './DesktopProjectsComponent'
import Sidebar from '../Sidebar/sidebar'



const ProjectsComponent = () =>{
    const ProjectsData = [
        {
            id:1,
            name:"Nxt Trendz",
            TechnologiesUsed:[{
                techid:1,
                techname:'React JS',
            },
            {
                techid:2,
                techname:'JS',
            },
            {
                techid:3,
                techname:'CSS',
            },
            {
                techid:4,
                techname:'Bootstrap',
            },
            {
                techid:5,
                techname:'JS',
            }],
            Url:"https://nxttrendz955.ccbp.tech"
        },
        {
            id:2,
            name:"Insta Share",
            TechnologiesUsed:[{
                techid:1,
                techname:'HTML',
            },
            {
                techid:2,
                techname:'CSS',
            },
            {
                techid:3,
                techname:'React Js',
            },
            {
                techid:4,
                techname:'Bootstrap',
            },
            {
                techid:5,
                techname:'JS',
            },
            {
                techid:6,
                techname:"React Slick"
            },
            {
                techid:7,
                techname:"Figma"
            }

        ],
            Url:"https://instashare1955.ccbp.tech"
        },


        



    ]
    return(
        <React.Fragment>
            <div className="Mobile-ProjectsComponent-first-container">
                <Sidebar/>
                <div>
                <MobileProjectsComponent  ProjectsData={ProjectsData}/>
                </div>
            </div>
            <div className="Desktop-ProjectsComponent-first-container">
                <Sidebar/>
                <div className='Desktop-ProjectsComponent-second-Container'>
                <div className="Desktop-ProjectsComponent-third-container">
                <DesktopProjectsComponent ProjectsData={ProjectsData}/>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default ProjectsComponent