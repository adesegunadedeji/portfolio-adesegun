import React from 'react'
import {FaMapMarker,FaPhoneSquare, FaEnvelope,FaHome} from 'react-icons/fa'

function Contact (){
    return (
        <div className = "AboutSection">

            <div className="content">
            <img className ="contactLogo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUCKL3oCYQrsdy77tT-kin6B1bSC4kqViLwJRqFzMqaCWkEkM6&s" alt="contactLogo"/>
            </div>
            <h3> My Address</h3>
            <ul className="contact-info">
                <li className="ContactInfolist"><FaMapMarker/> Woodbridge, NJ</li>
                <li className="ContactInfolist"><FaPhoneSquare/>+1 443-799-9636</li>
                <li className="ContactInfolist"><FaEnvelope/>contact@adeadedeji.com</li>
                <li className="ContactInfolist"><FaHome/>
                <a href = "https://www.adeadedeji.com/">adeadedeji.com</a>
                </li>
            </ul>
        </div>
    )
}
export default Contact