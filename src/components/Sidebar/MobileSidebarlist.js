import React,{useState}from 'react'

import './MobileSidebarlist.css'


import {RiMenuUnfoldFill} from 'react-icons/ri'

import { FcHome,FcContacts,FcNightPortrait,FcTodoList } from "react-icons/fc";

import {MdBiotech,MdCastForEducation} from "react-icons/md";

import {AiOutlineCloseSquare} from 'react-icons/ai'

const MobileSidebarlist = () =>{
    const [clickMenu,settingMenu] = useState(false)
    const onClickMenuButton = () =>{
        settingMenu(!clickMenu)
    }
    const onClickCloseButton = () =>{
        settingMenu(!clickMenu)
    }
    return(
        <React.Fragment>
        <div className="mobile-main-container">
        <div className="mobile-sub-container">
                <div className="profile-pic-style">
                    <img src="https://i.pinimg.com/736x/b1/46/25/b146250e47edb4875c26def596b1328b.jpg"
                    alt="mobile profile pic"/>
                </div>
                <button type="button" className="menu-button" onClick={onClickMenuButton}><RiMenuUnfoldFill size={30}/></button>
            {clickMenu ? <div className="nav-items-container">
                <div className="close-button-container">
                <button type="button" className="close-button" onClick={onClickCloseButton}>
                <AiOutlineCloseSquare color="white" size={35}/>
                </button>
                </div>
                <ul className="mobile-nav-items">
                <li className="nav-item-mobile">
                    <FcHome size={25}/>
                    <p className="para">Home</p>
                </li>
                <li className="nav-item-mobile">
                    <FcNightPortrait size={25}/> 
                    <p className="para">About</p>
                </li>
                <li className="nav-item-mobile">
                    <MdBiotech size={25} color="orange"/>
                    <p className="para">Tech Stack</p>
                </li>
                <li className="nav-item-mobile">
                    <MdCastForEducation size={25}/>
                    <p className="para">Education</p>
                </li>
                <li className="nav-item-mobile">
                    <FcTodoList size={25}/>
                    <p className="para">Projects</p>
                </li>
                <li className="nav-item-mobile1">
                    <FcContacts size={25}/>
                    <p className="para">Contact</p>
                </li>
            </ul></div> : null}
        </div>
        </div>
    </React.Fragment>)
}

export default MobileSidebarlist