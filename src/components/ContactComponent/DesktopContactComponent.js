import React from 'react'


import './DesktopContactComponent.css'

import {BsFillTelephoneFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'


const DesktopContactComponent = () =>{
    return(
        <div className="DesktopContact-Home-first-container">
            <div className="DesktopContact-Home-mobilenumber-email-container">
                <div className="DesktopContact-Home-mobilenumber-container">
                    <BsFillTelephoneFill size={40} color="#03fcec" className='icons-style'/>
                    <h1 className="DesktopContact-home-heading">PHONE NUMBER</h1>
                    <p className="DesktopContact-home-para">+91-9032781955</p>
                </div>
                <div className="DesktopContact-Home-email-container">
                    <HiOutlineMail size={40} color="#03fcec" className='icons-style'/>
                    <h1 className="DesktopContact-home-heading">EMAIL</h1>
                    <p className="DesktopContact-home-para">vaishnavimandala1998@gmail.com</p>
                </div>
                <div className="DesktopContact-Home-Linkedin-container">
                    <a href="https://www.linkedin.com/in/vaishnavi-mandala-522060248/">
                    <BsLinkedin size={40} color="#03fcec" className='icons-style'/>
                    </a>
                    <h1 className="DesktopContact-home-heading">Linkedin</h1>
                    <p className="DesktopContact-home-para">vaishnavi mandala</p>
                </div>
                <div className="DesktopContact-Home-github-container">
                <a href="https://github.com/vaishnavi-dev955">
                    <AiFillGithub size={40} color="#03fcec" className='icons-style'/>
                    </a>
                    <h1 className="DesktopContact-home-heading">github</h1>
                    <p className="DesktopContact-home-para">vaishnavi-dev955</p>
                </div>
            </div>
            <div className="Desktop-Contact-form-container">
                <h1 className="Desktop-Contact-form-heading">Contact Me</h1>
                <input type="text" className="Desktop-Contact-form-FullName-Container" placeholder="Full Name"/>
                <input type="text" className="Desktop-Contact-form-Email-Container" placeholder="Email"/>
                <div>
                <button type="button" className="Desktop-Contact-send-Mail-button">SEND EMAIL</button>
                </div>
            </div>
        </div>

    )
}

export default DesktopContactComponent