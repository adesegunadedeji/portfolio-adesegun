import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Form, CardBody, CardImg, Button, CardTitle,CardSubtitle, CardText, Row, Col } from 'reactstrap';
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
                    <Button className="PortfolioButton" formaction="https://meowwoof-deployed-app.herokuapp.com/">VISIT</Button>
                    </CardBody>
                    </Card>
                    </Col> 
                    <Col sm ="3">
                <Card>
                <CardBody>
                    <CardImg src= {Afroleague} className = "PortfolioImage" alt="Card image cap" />
                    <CardTitle>AFRO LEAGUE</CardTitle>
                    <Button  className="PortfolioButton" formaction="https://afroleagueapp.herokuapp.com/">VISIT</Button>
                    </CardBody>
                    </Card>
                    </Col>
                    <Col sm ="3">
                <Card>
                <CardBody>
                    <CardImg src= {Vicinage} className = "PortfolioImage" alt="Card image cap" />
                    <CardTitle>VICINAGE</CardTitle>
                    <Button className="PortfolioButton" formaction="https://peaceful-hamlet-56854.herokuapp.com/">VISIT</Button>
                    </CardBody>
                    </Card>
                    </Col>
                    <Col sm ="3">
                <Card>
                <CardBody>
                    <CardImg src= {Xapa} className = "PortfolioImage" alt="Card image cap" />
                    <CardTitle>Xapa</CardTitle>
                    <Button className="PortfolioButton" formaction="https://peaceful-hamlet-56854.herokuapp.com/">VISIT</Button>
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
                    <Button className="PortfolioButton" formaction="https://meowwoof-deployed-app.herokuapp.com/">VISIT</Button>
                    </CardBody>
                    </Card>
                    </Col> 
          <Col sm ="3">
                <Card>
                <CardBody>
                    <CardImg src= {Afroleague} className = "PortfolioImage" alt="Card image cap" />
                    <CardTitle>VICINAGE</CardTitle>
                    <Button className="PortfolioButton" formaction="https://peaceful-hamlet-56854.herokuapp.com/">VISIT</Button>
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
                    <Button className="PortfolioButton" formaction="https://afroleagueapp.herokuapp.com/">VISIT</Button>
                    </CardBody>
                    </Card>
                    </Col>

                    <Col sm ="3">
                <Card>
                <CardBody>
                    <CardImg src= {Xapa} className = "PortfolioImage" alt="Card image cap" />
                    <CardTitle>XAPA</CardTitle>
                    <Button className="PortfolioButton" formaction="https://peaceful-hamlet-56854.herokuapp.com/">VISIT</Button>
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