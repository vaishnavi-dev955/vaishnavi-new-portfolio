import React from 'react'


import './DesktopContact.css'

import {BsFillTelephoneFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'


const DesktopContact = () =>{
    return(
        <div className="DesktopContact-Home-first-container">
            <div className="DesktopContact-Home-mobilenumber-email-container">
                <div className="DesktopContact-Home-mobilenumber-container">
                    <BsFillTelephoneFill size={30} color="#03fcec"/>
                    <h1 className="DesktopContact-home-heading">PHONE NUMBER</h1>
                    <p className="DesktopContact-home-para">+91-9032781955</p>
                </div>
                <div className="DesktopContact-Home-email-container">
                    <HiOutlineMail size={30} color="#03fcec"/>
                    <h1 className="DesktopContact-home-heading">EMAIL</h1>
                    <p className="DesktopContact-home-para">vaishnavimandala19998@gmail.com</p>
                </div>
                <div className="DesktopContact-Home-Linkedin-container">
                    <a href="https://www.linkedin.com/in/vaishnavi-mandala-522060248/">
                    <BsLinkedin size={30} color="#03fcec"/>
                    </a>
                    <h1 className="DesktopContact-home-heading">Linkedin</h1>
                    <p className="DesktopContact-home-para">vaishnavi mandala</p>
                </div>
                <div className="DesktopContact-Home-github-container">
                <a href="https://github.com/vaishnavi-dev955">
                    <AiFillGithub size={30} color="#03fcec"/>
                    </a>
                    <h1 className="DesktopContact-home-heading">github</h1>
                    <p className="DesktopContact-home-para">vaishnavi-dev955</p>
                </div>
            </div>

        </div>

    )
}

export default DesktopContact