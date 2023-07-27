import React from 'react'


import Sidebar  from '../Sidebar/sidebar'
import MobileContactComponent  from './MobileContactComponent'
import DesktopContactComponent from  './DesktopContactComponent'

import './ContactComponent.css'

const ContactComponent = () =>{
    return(
         <React.Fragment>
           <div className="Mobile-ContactComponent-first-container">
            <Sidebar/>
            <div className="Mobile-ContactComponent-second-container">
                <h1 className="Mobile-contactComponent-me-heading">Contact Me</h1>
                <p  className="Mobile-contactComponent-me-para">You will hear from me at the earliest!</p>
                <MobileContactComponent/>
            </div>
           </div>
           <div className="Desktop-ContactComponent-first-container">
            <Sidebar/>
            <div className="Desktop-ContactComponent-second-container">
            <DesktopContactComponent/>
            </div>
            </div>
           </React.Fragment>
            

    )
}

export default ContactComponent