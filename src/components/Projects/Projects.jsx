import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, CardText, NavLink, Card,CardBody, CardImg, CardTitle, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import MeowWoofImage from './MeowWoof.jpg'
import Afroleague from './Afroleague.jpg'
import Vicinage from './Vicinage.jpg'
import Xapa from './Xapa.jpg'

const Projects = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            ALL
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
           NODE.JS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
           RUBY/RAILS
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
        <Row>
        <Col sm ="3">
                <Card>
                <CardBody>
                    <CardImg src= {MeowWoofImage}  className = "PortfolioImage" alt="Card image cap" />
                    <CardTitle>MEOWWOOF RESCUE</CardTitle>
                    <CardText>FullStack App with multi-factor authentication that allows a user to add, modify and delete foster pet’s information from database. This was built using Express.js  and MongoDB.</CardText>
                    <a className = "aTagLinksabout"href="https://meowwoof-deployed-app.herokuapp.com/">VISIT</a>
                    </CardBody>
                    </Card>
                    </Col> 
                    <Col sm ="3">
                <Card>
                <CardBody>
                    <CardImg src= {Afroleague} className = "PortfolioImage" alt="Card image cap" />
                    <CardTitle>AFRO LEAGUE</CardTitle>
                    <CardText> A Responsive Afrocentric fantasy league app with that gives users access to their favorite players and team’s statistics. This was built using technologies like React and Ruby on Rails.
                    </CardText>
                    <a  className = "aTagLinksabout" href="https://afroleagueapp.herokuapp.com/">VISIT</a>
                    </CardBody>
                    </Card>
                    </Col>
                    <Col sm ="3">
                <Card>
                <CardBody>
                    <CardImg src= {Vicinage} className = "PortfolioImage" alt="Card image cap" />
                    <CardTitle>VICINAGE</CardTitle>
                    <CardText> Online real-estate application with multi-factor authentication  that allows property owners and renters manage their electronic records and digital assets using React and MongoDB.</CardText>
                    <a  className = "aTagLinksabout" href="https://peaceful-hamlet-56854.herokuapp.com/">VISIT</a>
                    </CardBody>
                    </Card>
                    </Col>
                    <Col sm ="3">
                <Card>
                <CardBody>
                    <CardImg src= {Xapa} className = "PortfolioImage" alt="Card image cap" />
                    <CardTitle>Xapa</CardTitle>
                    <CardText> Business directory application that allows  small businesses promote their businesses to their target audience using their location as a parameter. 
This was built using React-Redux and Ruby on Rails.</CardText>
                    <a  className = "aTagLinksabout" href="https://peaceful-hamlet-56854.herokuapp.com/">VISIT</a>
                    </CardBody>
                    </Card>
                    </Col>
        </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>

          <Col sm ="3">
                <Card>
                <CardBody>
                    <CardImg src= {MeowWoofImage}  className = "PortfolioImage" alt="Card image cap" />
                    <CardTitle>MEOWWOOF RESCUE</CardTitle>
                    <CardText>FullStack App with multi-factor authentication that allows a user to add, modify and delete foster pet’s information from database. This was built using Express.js  and MongoDB.</CardText>
                 <a  className = "aTagLinksabout" href ="https://meowwoof-deployed-app.herokuapp.com/">VISIT</a>
                    </CardBody>
                    </Card>
                    </Col> 
          <Col sm ="3">
                <Card>
                <CardBody>
                    <CardImg src= {Vicinage} className = "PortfolioImage" alt="Card image cap" />
                    <CardTitle>VICINAGE</CardTitle>
                    <CardText> Online real-estate application with multi-factor authentication  that allows property owners and renters manage their electronic records and digital assets using React and MongoDB.</CardText>
                    <a className = "aTagLinksabout" href="https://peaceful-hamlet-56854.herokuapp.com/">VISIT</a>
                    </CardBody>
                    </Card>
                    </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
        <Row>
        <Col sm ="3">
                <Card>
                <CardBody>
                    <CardImg src= {Afroleague} className = "PortfolioImage" alt="Card image cap" />
                    <CardTitle>AFRO LEAGUE</CardTitle>
                    <CardText> A Responsive Afrocentric fantasy league app with that gives users access to their favorite players and team’s statistics. This was built using technologies like React and Ruby on Rails.
                    </CardText>
                    <a  className = "aTagLinksabout" href= "https://afroleagueapp.herokuapp.com/">VISIT</a>
                    </CardBody>
                    </Card>
                    </Col>

                    <Col sm ="3">
                <Card>
                <CardBody>
                    <CardImg src= {Xapa} className = "PortfolioImage" alt="Card image cap" />
                    <CardTitle>XAPA</CardTitle>
                    <CardText> Business directory application that allows  small businesses promote their businesses to their target audience using their location as a parameter. 
This was built using React-Redux and Ruby on Rails.</CardText>
                    <a  className = "aTagLinksabout"  href="https://peaceful-hamlet-56854.herokuapp.com/">VISIT</a>
                    </CardBody>
                    </Card>
                    </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Projects;