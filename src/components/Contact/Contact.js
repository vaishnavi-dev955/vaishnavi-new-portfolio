import React from 'react'


import MobileContact from './MobileContact'
import DesktopContact from './DesktopContact'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaGithubSquare} from 'react-icons/fa'

import './Contact.css'


const Contact = () =>{
    return(
         <React.Fragment>
            <div className="Mobile-Home-contact-container">
                <h1 className="Mobile-contact-me-heading">Contact Me</h1>
                <p  className="Mobile-contact-me-para">You will hear from me at the earliest!</p>
                <MobileContact/>
                <button type="button" className="mobile-email-button">
                     Send Email</button>
                <div className="Social-media-mobile-buttons-container">
                    <button type="button" className="Mobile-linkedin-button">
                        <a href="https://www.linkedin.com/in/vaishnavi-mandala-522060248/">
                        <AiFillLinkedin color="white" size={25}/>
                        </a>
                    </button>
                    <button type="button" className="Mobile-github-button">
                        <a href="https://github.com/vaishnavi-dev955">
                        <FaGithubSquare color="white" size={25}/>
                        </a>
                    </button>
                </div>
            </div>
            <div className="Desktop-Home-contact-container">
                <DesktopContact/>
            </div>
            </React.Fragment>

    )
}

export default Contact