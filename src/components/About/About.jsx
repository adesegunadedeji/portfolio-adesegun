import React from 'react'
import PictureAdesegun from './PictureAdesegun.jpg'
import ResumeDownload from '../About/ResumeAdesegun_GA.pdf';
import {FaMapMarker, FaEnvelope, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaFileDownload} from 'react-icons/fa'
function About (){
    return (
        <div className = "AboutSection">
       <img src = {PictureAdesegun} className="AboutImage" alt ="ProfileImage"/>
        <hr class="style18"></hr>
        <p className="contacttext">I'm a Mission-Driven Full Stack Developer currently based in the NJ/NYC Area. I love programming, travelling, playing soccer and cooking. I always seeking out opportunities and challenges that are meaningful to me and help solve problems.
            I enjoy using my attention to detail and love for creating thoughtful ideas into products that can literally change the world. I'm very excited to start this journey. </p>
            <div className = "ContactSection">
            <hr class="style18"></hr>
                <h2 className="contactheading">Contact</h2>
                
            <ul className="contact-info">
                <li className="ContactInfolist"><FaMapMarker/> Woodbridge, NJ</li>
                <li className="ContactInfolist"><a  className="aTagLinks"  href ="https://twitter.com/ade_segun/"><FaTwitter />Twitter</a></li>
                <li className="ContactInfolist"><a  className="aTagLinksInstagram"  href ="https://www.instagram.com/de_segun/"><FaInstagram alt="Instagram"/>Instagram</a></li>
                <li className="ContactInfolist"><a  className="aTagLinks"  href ="https://www.linkedin.com/in/adesegunadedeji/" ><FaLinkedin alt="Linkedin"/>Linkedin</a></li>
                <li className="ContactInfolist"><a  className="aTagLinks"  href ="https://github.com/adesegunadedeji" ><FaGithub alt="Github"/>Github</a></li>
                <li className="ContactInfolist"> <a  className="aTagLinks" href={ResumeDownload} download="AdesegunAdedeji.pdf"> <FaFileDownload alt="Download"/>Download Resume</a></li>
                <li className="ContactInfolist"><FaEnvelope/>adesegunadedeji@gmail.com</li>
            </ul>

        </div>
        </div>
    )
}
export default About