import React from 'react'
import './About.css'
import Imagpro from '../photo/pro.jpg';
const Aboutfil = () => {
  return (<div className='mainabout'>

 <div className='topp'><div className='marqu'><marquee><h1 style={{color:"black"}}>About Me</h1></marquee> </div></div>

<div className='AbouimgText'><div className='Abouimg'>


    <img className='profile'
    src={Imagpro} alt='profile'
    />
</div>
<div className='AbotText'>
 <h3>Im Front-End Web devloper who specializes in visual</h3>
<h3> and intractive aspect of website or web Application </h3>
 <h3>and also I Have some skills of graphics desisgner to </h3>
 <h3>contrbuting success and satisfaction </h3></div>
</div>

  </div>
   
  )
}

export default Aboutfil