import React from 'react'

import './DesktopAboutComponent.css'

import Typewriter from 'typewriter-effect'

const DesktopAboutComponent = () =>{
    return(
        <div className="Desktop-AboutMain-container">
            <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149375793.jpg"
            alt="Profile pic2" className="Desktop-aboutMain-image"/>
            <h1 className="aboutMain-me-heading">About Me</h1>
            <p className="aboutMain-para">
            <Typewriter
                options={{
                    strings: ['passionate about web development, implementing and launching new projects Strong in design and integration with intuitive problem-solving skills.Proficient in PYTHON, JAVASCRIPT, and SQL. Ability to translate business requirements into technical solutions.Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.'],
                    autoStart: true,
                    loop: true,
                    }}
                />
            </p>
        </div>
    )

}

export default DesktopAboutComponent