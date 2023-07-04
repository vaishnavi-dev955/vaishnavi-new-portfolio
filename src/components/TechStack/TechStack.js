import React from 'react'

import './TechStack.css'

import DesktoptechStack from './DesktoptechStack'

const TechStack = () =>{
    const Techdata = [
        {
            id:1,
            name:"HTML",
            imgUrl:"https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
        },
        {
            id:2,
            name:"CSS",
            imgUrl:"https://logospng.org/wp-content/uploads/css-3.png"
        },
        {
            id:3,
            name:"Bootstrap",
            imgUrl:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
        },
        {
            id:4,
            name:"Javascript",
            imgUrl:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        },
        {
            id:5,
            name:"Node js",
            imgUrl:"https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
        },
        {
            id:6,
            name:"Express js",
            imgUrl:"https://blog.eduonix.com/wp-content/uploads/2015/11/Express-JS-101.png"
        },
        {
            id:7,
            name:"React js",
            imgUrl:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        },
        {
            id:8,
            name:"Python",
            imgUrl:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
        },
        {
            id:9,
            name:"Mongo DB",
            imgUrl:"https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png"
        },
        {
            id:10,
            name:"SQLite",
            imgUrl:"https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg"
        }
    ]
    return(
        <div className="Teschstack-Desktop-container">
            <DesktoptechStack Techdata={Techdata}/>
        </div>
    )
}

export default TechStack