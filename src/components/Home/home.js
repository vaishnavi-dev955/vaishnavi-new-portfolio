import React from 'react'
import './home.css'


import Typewriter from 'typewriter-effect'


const Home = () =>{
    return(
        <React.Fragment>
            <div className="container-fluid home-content">
                <h1>Hi I'm an</h1>
                <h2>
                <Typewriter
                options={{
                    strings: ['Aspiring', 'Full-Stack Developer', 'MERN Stack Developer'],
                    autoStart: true,
                    loop: true,
                    }}
                />
                </h2>
                <div className="button for action">
                    <button type="button" className="hire-me-button">Hire Me</button>
                    <button type="button" className="get-resume-button">
                        <a href="https://drive.google.com/file/d/1xiNL7BriunzGm9MCnkJ3Z8yuMAEk2zm6/view?usp=sharing"
                        download="vaishnavi_cv">Get Resume</a>
                        </button>

                </div>
            </div>
        </React.Fragment>
    
    )
}

export default Home