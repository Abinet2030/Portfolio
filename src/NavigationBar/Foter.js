import './foter.css'
import React from 'react'
import {FaFacebook, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter} from "react-icons/fa";
const Foter = () => {
  return (
    <div className='footer'>
        <div className="foter-contener">
       <div className="left">
        
            <div className="location">
                  <FaHome size={20} style={{color:"#fff",margin:"2rem"}}/>
<div>
    <p> :Adiss Abeba </p>
    
</div>

            </div>
            <div className='phone'><FaPhone size={20} style={{color:"#fff",margin:"2rem"}}/>
             <div><p>:+251 955 45 72 ** </p></div>
                
            </div>

            <div className='Email'>
                <FaMailBulk size={20} style={{color:"#fff",margin:"2rem"}}/>
           <div><p>:mabinet22@gmail.com</p></div>
                
            </div>
        </div>
        <div className="right">
          <h4>About Me</h4>  
          <p>I'm Front-End Web Developer and Responsible for Creating the Visual and Intractive Element of a Website. </p>
       
       <div className="social">

         <FaFacebook size={30} style={{color:"#fff",margin:"1rem"}}/>
         <FaLinkedin size={30} style={{color:"#fff",margin:"1rem"}}/>
       <FaTwitter size={30} style={{color:"#fff",margin:"1rem"}}/>
       </div>
       </div>

        </div>
      
    </div>
  )
}

export default Foter
