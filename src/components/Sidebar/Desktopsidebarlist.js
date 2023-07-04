import React from 'react'

import './DesktopSidebarlist.css'

import { FcHome,FcContacts,FcNightPortrait,FcTodoList } from "react-icons/fc";

import {MdBiotech,MdCastForEducation} from "react-icons/md";

const DesktopSideBarList = (props) =>{
    const {expandSideBar} = props
    return(
        <React.Fragment>
            {expandSideBar ? (
                <div className="Nav-Bar-Items">
                <div className="sidebar-Profile-pic">
                    <img src="https://i.pinimg.com/736x/b1/46/25/b146250e47edb4875c26def596b1328b.jpg"
                    alt="profile-pic"/>
                </div>
                <ul className="Nav-items">
                    <li className="nav-item"> <FcHome size={25}/> Home</li>
                    <li className="nav-item"> <FcNightPortrait size={25}/> About</li>
                    <li className="nav-item"> <MdBiotech size={25} color="orange"/> Tech Stack</li>
                    <li className="nav-item"> <MdCastForEducation size={25}/> Education</li>
                    <li className="nav-item"> <FcTodoList size={25}/> Projects</li>
                    <li className="nav-item"> <FcContacts size={25}/> Contact</li>
                </ul>
                </div>
            ):(<div className="Nav-bar-items-only-icons">
                <ul className="Nav-items">
                    <li className="nav-item"> <FcHome size={25}/></li>
                    <li className="nav-item"> <FcNightPortrait size={25}/></li>
                    <li className="nav-item"> <MdBiotech size={25} color="orange"/></li>
                    <li className="nav-item"> <MdCastForEducation size={25} /></li>
                    <li className="nav-item"> <FcTodoList size={25} /></li>
                    <li className="nav-item"> <FcContacts size={25}/></li>
                </ul>

            </div>)}
            
        </React.Fragment>
    )
}

export default DesktopSideBarList