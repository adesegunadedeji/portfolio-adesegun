import React from 'react'
import {FaMapMarker,FaPhoneSquare, FaEnvelope,FaHome} from 'react-icons/fa'
import NavbarComponent from '../NavBar/Navbar'
function Contact (){
    return (
        <div className = "ContactSection">
             <NavbarComponent/>
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