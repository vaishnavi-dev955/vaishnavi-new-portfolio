import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/home'
import AboutComponent from './components/AboutComponent/AboutComponent'
import EducationComponent  from './components/EducationComponent/EductaionComponent'

import './App.css'

const MainHome = () =>{
  return(
    <div className="main-container">
      <Home/>
    </div>

  )
}

const MainAbout = () =>{
  return(
    <div className="main-container">
      <AboutComponent/>
    </div>
  )
}

const MainEducation = () =>{
  return(
    <div className="main-container">
      <EducationComponent/>
    </div>
  )
}


const App = ()=>{
  return(
      <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<MainHome/>} />
        <Route exact path="/about" element={<MainAbout/>}/>
        <Route exact path='/education' element={<MainEducation/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App


