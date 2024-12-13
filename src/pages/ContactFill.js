import React from 'react'
import './Contact.css'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
const ContactFill = () => {
    return ( <div >
        < div className = 'formhandl' >
        < h3 > If you Have Any Questions </h3> <form >
        <label label > Email < FaMailBulk className = 'mail'
        size = { 20 } style = {{ color: "#000" } }/></label > < input type = 'text ' placeholder='
        email ' required/> <label> Name </label><input  type='text ' placeholder='
        name ' required/> <label> Message </label><textarea type="text" placeholder='your message hear...'/ ><input className = 'Submit'
        name = 'Submit'type = 'Submit'value = { "Submit" }/> </form>

        </div>

        </div>
    )
}

export default ContactFill