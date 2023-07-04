import React from 'react'

import './index.css'

import MobileAboutView from './MobileAboutView'
import DesktopAboutView from './DesktopAboutView'

const About = () =>{
    return(
        <React.Fragment>
        <div className="mobile-about-main-section">
            <MobileAboutView/>
        </div>
        <div className="Desktop-about-main-section">
            <DesktopAboutView/>
        </div>
        </React.Fragment>
    )

}

export default About