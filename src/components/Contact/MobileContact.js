import React from 'react'

import './MobileContact.css'

import {BsPersonFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

const MobileContact = () =>{
    return(
        <div className="Mobile-contact-first-container">
            <div className="Mobile-contact-Full-Name-container">
                <BsPersonFill color="grey" size={25}/>
                <input type="text" placeholder='Full Name' className="input-mobile-Contact-full-name-container"/>
            </div>
            <div className="Mobile-contact-Email-container">
                <MdEmail color="grey" size={25}/>
                <input type="text" placeholder='Email' className="input-mobile-Contact-email-container"/>
            </div>
        </div>


    )
}

export default MobileContact