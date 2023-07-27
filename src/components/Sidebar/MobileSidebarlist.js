import React,{useState}from 'react'

import './MobileSidebarlist.css'

import { useNavigate } from 'react-router-dom';




import {RiMenuUnfoldFill} from 'react-icons/ri'

import { FcHome,FcContacts,FcNightPortrait,FcTodoList } from "react-icons/fc";

import {MdBiotech,MdCastForEducation} from "react-icons/md";

import {AiOutlineCloseSquare} from 'react-icons/ai'

const MobileSidebarlist = () =>{
    const navigate = useNavigate()
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
                    <img src="https://i.pinimg.com/736x/b1/46/25/b146250e47edb4875c26def596b1328b.jpg"
                    alt="mobile profile pic" className='profile-pic-style' onClick={()=>navigate("/")}/>
                <button type="button" className="menu-button" onClick={onClickMenuButton}><RiMenuUnfoldFill size={30}/></button>
            {clickMenu ? <div className="nav-items-container">
                <div className="close-button-container">
                <button type="button" className="close-button" onClick={onClickCloseButton}>
                <AiOutlineCloseSquare color="white" size={35}/>
                </button>
                </div>
                <ul className="mobile-nav-items">
                <li className="nav-item-mobile" onClick={()=>navigate("/")}>
                    <FcHome size={25}/>
                    <p className="para">Home</p>
                </li>
                <li className="nav-item-mobile" onClick={()=>navigate("/about")}>
                    <FcNightPortrait size={25}/> 
                    <p className="para">About</p>
                </li>
                <li className="nav-item-mobile" onClick={()=>navigate("/techstack")}>
                    <MdBiotech size={25} color="orange"/>
                    <p className="para">Tech Stack</p>
                </li>
                <li className="nav-item-mobile" onClick={()=>navigate("/education")}>
                    <MdCastForEducation size={25}/>
                    <p className="para">Education</p>
                </li>
                <li className="nav-item-mobile" onClick={()=>navigate("/projects")}>
                    <FcTodoList size={25}/>
                    <p className="para">Projects</p>
                </li>
                <li className="nav-item-mobile1" onClick={()=>navigate("/contact")}>
                    <FcContacts size={25}/>
                    <p className="para">Contact</p>
                </li>
            </ul></div> : null}
        </div>
        </div>
    </React.Fragment>)
}

export default MobileSidebarlist