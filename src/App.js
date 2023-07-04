import React from 'react'

import Sidebar from './components/Sidebar/sidebar'
import TechStack from './components/TechStack/TechStack'

import './App.css'

import About from './components/About/index'

const App = ()=>{
  return(
    <div className="main-container">
    <Sidebar/>
    <About/>
    <TechStack/>
    </div>
  )
}

export default App
