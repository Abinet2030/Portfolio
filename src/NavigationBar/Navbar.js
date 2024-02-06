import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyle.css'
import {FaBars,FaTimes} from "react-icons/fa"
const Navbar = () => {
const [click,setClick]=useState(false);
const handleClike=()=>setClick(!click);

const [color,setColor]=useState(false);
const changeColor=()=> {
    if (window.scrollY >=100) {
        setColor(true);
    }
    else {
        setColor(false);
    }
}
window.addEventListener("scroll", changeColor);
    return ( 
    <div div className = {color ?'header hea der-bg':"header"} >
<Link to='/'>Abinet</Link>
<ul className={click ?"nav_ul active":'nav_ul'}>
<li>
    <Link to ="/">Home</Link>
</li>
<li>
    <Link to ="/About">About</Link>
</li>
<li>
    <Link to ="/Skill">Skill</Link>
</li>

<li>
    <Link to ="/Contact">Contact</Link>
</li>




</ul>

<div className="navhamber" onClick={handleClike}>
    {click? (<FaTimes size={23} style={{color:'#fff'}}/>)
 :(<FaBars size={23} style={{color:'#fff'}}/>)

    }
 
</div>

       </div>
    )
}

export default Navbar;