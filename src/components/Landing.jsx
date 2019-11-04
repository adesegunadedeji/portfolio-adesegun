import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagram, FaMedium, FaGithub} from 'react-icons/fa'
 function Landing(){
        return (
            <div className ="landingPage">
            <div className ="header">
                <h1>
                <span>Adesegun Adedeji</span>
                </h1>
            </div>
            <div className="Menu">
                <nav>
                    <ul>
                        <li><a className="aTagLinks" href ="/resume">technology Leader</a></li>
                        <li><a  className="aTagLinks" href ="/writer">writer</a></li>
                        <li><a  className="aTagLinks" href ="/about">football Fan</a></li>
                        <li><a  className="aTagLinks" href ="/projects">projects</a></li>
                        <li><a  className="aTagLinks" href ="/contact">contact</a></li>
                        {/* <a href="https://twitter.com/intent/tweet?screen_name=ade_segun&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">Tweet to @ade_segun</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
                    </ul>
                </nav>
                <div className="icons">
                    <span className = "myButton">
                        <a className ="outbound" rel ="me" itemProp ="url" href ="https://twitter.com/Ade_Segun" >
                         <FaTwitter alt ="Twitter"/>
                        </a>
                    </span>
                    <span className = "myButton">
                        <a className ="outbound" rel ="me" itemProp ="url" href ="https://www.instagram.com/de_segun/" >
                           <FaInstagram alt="Instagram"/>
                        </a>
                    </span>
                    <span className = "myButton">
                        <a className ="outbound" rel ="me" itemProp ="url" href ="https://www.linkedin.com/in/adesegunadedeji/" >
                           <FaLinkedin alt="Linkedin"/>
                        </a>
                    </span>
                    <span className = "myButton">
                        <a className ="outbound" rel ="me" itemProp ="url" href ="https://medium.com/@adesegunadedeji" >
                           <FaMedium alt="Medium"/>
                        </a>
                    </span>
                    <span className = "myButton">
                        <a className ="outbound" rel ="me" itemProp ="url" href ="https://github.com/adesegunadedeji" >
                           <FaGithub alt="Github"/>
                        </a>
                    </span>
                </div>
            </div>
                  </div>
        )
}
export default Landing