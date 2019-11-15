import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardBody, CardImg, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

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
            Tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Tab3
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Tab 1 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
          <Col sm ="4">
                <Card>
                <CardBody>
                    <CardImg top width = "100"  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1367&q=80" alt="Card image cap" />
                    <CardTitle>Card title</CardTitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Button</Button>
                    </CardBody>
                    </Card>
                    </Col>  
                    <Col sm ="4">
                    <Card>
                <CardBody>
                    <CardImg top width = "100"  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1367&q=80" alt="Card image cap" />
                    <CardTitle>Card title</CardTitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Button</Button>
                    </CardBody>
                    </Card>
                    </Col> 
                    <Col sm ="4">
                    <Card>
                <CardBody>
                    <CardImg top width = "100"  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1367&q=80" alt="Card image cap" />
                    <CardTitle>Card title</CardTitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Button</Button>
                    </CardBody>
                    </Card>
                    </Col> 
                    <Col sm ="4">
                    <Card>
                <CardBody>
                    <CardImg top width = "100"  src="http://www.michael-weinstein.com/wp-content/uploads/2015/04/nba_africa-logo1.png" alt="Card image cap" />
                    <CardTitle>Card title</CardTitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <a href="https://afroleagueapp.herokuapp.com/">Check me out</a>
                    </CardBody>
                    </Card>
                    </Col> 
          </Row>
        </TabPane>
        <TabPane tabId="3">
        <Row>
            <Col sm="12">
              <h4>Fantasy Football</h4>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Projects;