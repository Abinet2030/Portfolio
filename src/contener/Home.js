import React from 'react'
import Navbar from '../pages/Navbar'
import Bgimag from '../pages/Bgimag'
import Foter from '../pages/Foter'

import Aboutfil from '../pages/Aboutfil'

import SkillFil from './SkillFil'

const Home = () => {
  return (
    <div>
     <Navbar/>
     <Bgimag/>
     <Aboutfil/>
     <SkillFil/>
   
    <Foter/>
    </div>
  )
}

export default Home
