import React,{useState} from 'react'

import './sidebar.css'

import {BsChevronLeft, BsChevronRight} from "react-icons/bs"; 
import Home from '../Home/home'
import DesktopSideBarList from './Desktopsidebarlist'
import MobileSidebarlist from './MobileSidebarlist'

const Sidebar = () =>{
    const [expandSideBar,setExpandSidebar] = useState(true)
    const handleExpandClick = () =>{
        setExpandSidebar(!expandSideBar)
        
    }
    console.log(expandSideBar)
    return (
        <React.Fragment>
        <div className="Mobile-SideBar-container">
            <MobileSidebarlist/>
            <Home/>
        </div>
        <div className="container-fluid Desktop-SideBar-container">
            <div className={expandSideBar ? "side-bar-expand sidebar" : "sidebar"}>
                <div className="icon-for-side-bar-expand-and-collapse">
                    <p onClick={handleExpandClick}>
                        {expandSideBar ? (<BsChevronLeft size={30}/>) : (<BsChevronRight size={30}/>)}
                    </p>
                    </div>
            <DesktopSideBarList  expandSideBar={expandSideBar}/>
            </div>
            <div className="container">
                <Home/>
            </div>
        </div>
        </React.Fragment>
    )
}


export default Sidebar