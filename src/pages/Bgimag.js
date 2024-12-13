import React from 'react'
import './Bgimag.css'
import Imagpic from '../photo/bck.jpg';
import { Link } from 'react-router-dom';
const Bgimag = () => {
    return ( <div className='bgimg'>
<div className="mask">

    <img className='bg-img'
    src={Imagpic} alt='profile'
    />
</div>
<div className="content">
    <h1>I'M PROGRAMER.</h1>
     <h1>REACT DEVLOPER</h1>
      <div className='btpading'>
<Link to='./Skill' className='buton'>Skill</Link>
<Link to='./Contact' className='buton-tra'>Contact</Link>

</div>


</div>

    </div>
    )
}

export default Bgimag