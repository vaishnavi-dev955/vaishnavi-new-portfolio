import React from 'react'

import './AboutComponent.css'

import  DesktopAboutComponent  from './DesktopAboutComponent'
import MobileAboutComponent from './MobileAboutComponent'
import Sidebar from '../Sidebar/sidebar'

const AboutComponent = () =>{
    return(
        <React.Fragment>
        <div className="mobile-AboutMain-main-section">
            <Sidebar/>
            <div className="mobile-AboutMain-first-Container">
            <MobileAboutComponent/>
            </div>
        </div>
        <div className="Desktop-AboutMain-main-section">
            <Sidebar/>
            <div className="desktop-main-about-about-component">
            < DesktopAboutComponent/>
            </div>
        </div>
        </React.Fragment>
    )

}

export default AboutComponent