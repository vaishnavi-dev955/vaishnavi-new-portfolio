import React from 'react'

import './DesktopView.css'

const DesktopAboutView = () =>{
    return(
        <div className="Desktop-about-container">
            <img src="https://i.pinimg.com/736x/b1/46/25/b146250e47edb4875c26def596b1328b.jpg"
            alt="Profile pic2" className="Desktop-about-image"/>
            <div>
            <h1 className="about-me-heading">About Me</h1>
            <div classNAME="about-me-line"></div>
            <p className="about-para">
            I'm passionate about web development, implementing
            and launching new projects.Strong in design and 
            integration with intuitive problem-solving skills.
            Proficient in PYTHON, JAVASCRIPT, and SQL. Ability 
            to translate business requirements into technical 
            solutions.Looking to start the career as an entry-level 
            software engineer with a reputed firm driven 
            by technology.
            </p>
            </div>
        </div>
    )

}

export default DesktopAboutView