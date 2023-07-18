import React from 'react'
import { useNavigate } from 'react-router-dom'
import './DesktopSidebarlist.css'

import {AiOutlineHome} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'
import {RiContactsBook2Line} from 'react-icons/ri'

import {MdBiotech,MdCastForEducation} from "react-icons/md";

const DesktopSideBarList = (props) =>{
    const navigate = useNavigate()
    const onClickAbout = () => {
        navigate("/about")
    }
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
                    <li className="nav-item" onClick={() => navigate("/")}> <AiOutlineHome size={25} color="white"/> Home</li>
                    <li className="nav-item" onClick={onClickAbout}> <BsFillPersonFill size={25} color="white"/> About</li>
                    <li className="nav-item"> <MdBiotech size={25} color="white"/> Tech Stack</li>
                    <li className="nav-item" onClick={()=> navigate("/education")}> <MdCastForEducation size={25}/> Education</li>
                    <li className="nav-item"> <GrProjects size={25} color="white"/> Projects</li>
                    <li className="nav-item"> <RiContactsBook2Line size={25} color="white"/> Contact</li>
                </ul>
                </div>
            ):(<div className="Nav-bar-items-only-icons">
                <ul className="Nav-items">
                    <li className="nav-item"> <AiOutlineHome size={25}  color="white"/></li>
                    <li className="nav-item"> <BsFillPersonFill size={25} color="white"/></li>
                    <li className="nav-item"> <MdBiotech size={25} color="white"/></li>
                    <li className="nav-item"> <MdCastForEducation size={25}/></li>
                    <li className="nav-item"> <GrProjects size={25} color="white"/></li>
                    <li className="nav-item"> <RiContactsBook2Line size={25} color="white"/></li>
                </ul>

            </div>)}
            
        </React.Fragment>
    )
}

export default DesktopSideBarList