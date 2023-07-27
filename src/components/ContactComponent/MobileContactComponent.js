import React from 'react'

import './MobileContactComponent.css'

import {AiFillLinkedin} from 'react-icons/ai'
import {FaGithubSquare} from 'react-icons/fa'

import {BsPersonFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

const MobileContactComponent = () =>{
    return(
        <div className="Mobile-contactComponent-first-container">
            <div className="Mobile-contactComponent-Full-Name-container">
                <BsPersonFill color="grey" size={45} className="person-style"/>
                <input type="text" placeholder='Full Name' className="input-mobile-ContactComponent-full-name-container"/>
            </div>
            <div className="Mobile-contactComponent-Email-container">
                <MdEmail color="grey" size={45} className='email-style'/>
                <input type="text" placeholder='Email' className="input-mobile-ContactComponent-email-container"/>
            </div>
            <button type="button" className="mobile-email-contactComponent-button">Send Email</button>
            <div className="Social-media-mobile-ContactComponent-buttons-container">
                    <button type="button" className="Mobile-ContactComponent-linkedin-button">
                        <a href="https://www.linkedin.com/in/vaishnavi-mandala-522060248/">
                        <AiFillLinkedin color="black" size={25}/>
                        </a>
                    </button>
                    <button type="button" className="Mobile-ContactComponent-github-button">
                        <a href="https://github.com/vaishnavi-dev955">
                        <FaGithubSquare color="black" size={25}/>
                        </a>
                    </button>
                </div>
        </div>


    )
}

export default MobileContactComponent