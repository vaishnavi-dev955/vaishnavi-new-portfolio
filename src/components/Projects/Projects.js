import React from 'react'

import './Projects.css'

import MobileProjects from './MobileProjects'
import DesktopProjects from './DesktopProjects'



const Projects = () =>{
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
            <div className="Mobile-Projects-main-container">
                <MobileProjects ProjectsData={ProjectsData}/>
            </div>
            <div className="Desktop-Projects-main-container">
                <DesktopProjects ProjectsData={ProjectsData}/>
            </div>
        </React.Fragment>
    )
}


export default Projects