import React from 'react'
import Navbar from '../NavigationBar/Navbar'
import Bgimag from '../NavigationBar/Bgimag'
import Foter from '../NavigationBar/Foter'

import Aboutfil from '../NavigationBar/Aboutfil'

import SkillFil from '../NavigationBar/SkillFil'
import ContactFill from '../NavigationBar/ContactFill'
const Home = () => {
  return (
    <div>
     <Navbar/>
     <Bgimag/>
     {/* <About/> */}
     <Aboutfil/>
     {/* <Skill/> */}
     <SkillFil/>
   <ContactFill/>
    <Foter/>
    </div>
  )
}

export default Home
