import React from 'react'

import Sidebar from '../Sidebar/sidebar'
import TechStack from '../TechStack/TechStack'
import Education from '../Education/Education'

import Projects from '../Projects/Projects'


import About from '../About/index'

const AllComponents = ()=>{
  return(
    <React.Fragment>
    <Sidebar/>
    <About/>
    <TechStack/>
    <Education/>
    <Projects/>
    </React.Fragment>
  )
}

export default AllComponents