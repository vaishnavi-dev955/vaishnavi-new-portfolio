import React from 'react'

import './MobileView.css'

const MobileAboutView = () =>{
    return(
        <React.Fragment>
            <img src="https://i.pinimg.com/736x/b1/46/25/b146250e47edb4875c26def596b1328b.jpg"
            alt="Profile pic1" className="mobile-about-image"/>
            <h1 className="about-me-mobile-heading">About Me</h1>
            <p className="mobile-about-para">
            I'm passionate about web development, <br/>
            implementing and launching new projects.<br/>
            Strong in design and integration with <br/>
            intuitive problem-solving skills. <br/>
            Proficient in PYTHON, JAVASCRIPT, and <br/>
            SQL. Ability to translate business <br/>
            requirements into technical solutions. <br/>
            Looking to start the career as an <br/>
            entry-level software engineer with <br/>
            a reputed firm driven by technology. <br/>
            </p>
        </React.Fragment>
    )

}

export default MobileAboutView