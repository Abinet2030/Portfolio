import React from 'react'
import Navbar from '../NavigationBar/Navbar'
import Foter from '../NavigationBar/Foter'
import Bg2 from '../NavigationBar/Bg2'
import ContactFill from '../NavigationBar/ContactFill'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Bg2 heading="Contact." text="Lets Have Chat." />
       <ContactFill/>
      {/* <Foter/> */}
     
    </div>
  )
}

export default Contact
