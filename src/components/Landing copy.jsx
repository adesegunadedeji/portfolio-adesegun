import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagram, FaMedium, FaGithub, FaReact,} from 'react-icons/fa'
import { DiRuby, DiRor,DiPostgresql, DiMongodb, DiNodejs} from "react-icons/di";

import {Link} from 'react-router-dom'
import { Jumbotron, Container } from 'reactstrap';
const Landing2 = (props) =>{
        return (
            <div className ="landingPage">
        <Jumbotron fluid>
        <Container fluid>
                <div className="header">
      
                <h1 className="headerLanding">
                <span>Adesegun Adedeji</span>
                </h1>
            </div>
            
            <div className="Menu">
                    <ul> 
                        <li><Link className="aTagLinks" to="/resume">resume</Link></li>
                        <li><Link className="aTagLinks" to="/about">about me</Link></li>
                        <li><Link className="aTagLinks" to="/projects">projects</Link></li>
                        {/* <a href="https://twitter.com/intent/tweet?screen_name=ade_segun&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">Tweet to @ade_segun</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
                    </ul>
                </div>
                <div className ="icons">
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
            
                </Container>
              </Jumbotron>

              <hr class="style18"></hr>
              <h2 className = "skills">Skills</h2>
              <div className="skillSection">
              <hr class="style18"></hr>
              <DiNodejs className="skillSectionicons"/>
              <FaReact className="skillSectionicons"/>
              <DiMongodb className="skillSectionicons"/>
              <DiRuby className="skillSectionicons"/>
              <DiRor className="skillSectionicons"/>
              <DiPostgresql className="skillSectionicons"/>
              </div>
                </div>
        );

};
export default Landing2