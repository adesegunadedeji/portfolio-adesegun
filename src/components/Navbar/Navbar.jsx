import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
class NavbarComponent extends Component {
    render(){ 
    return (
<div className="demo-big-content">
    <Nav className="header-color">
        {/* <Navbar>
        <Navbar.Brand>
        <Navbar.Toggle>
                <Nav.Link href="/about/">About</Nav.Link>
                <Nav.Link href="/projects/">Projects</Nav.Link>
                <Nav.Link href="https://github.com/reactstrap/reactstrap">GitHub</Nav.Link>
                <Nav.Link href="https://medium.com/@adesegunadedeji">Blog</Nav.Link>
                <Nav.Link href="/contact/">Contact</Nav.Link>
            </Navbar.Toggle>
        </Navbar.Brand>
        </Navbar> */}
            <Navbar>
                <Nav.Link href="/about/">About</Nav.Link>
                <Nav.Link href="/projects/">Projects</Nav.Link>
                <Nav.Link href="/resume/">Resume</Nav.Link>
                <Nav.Link href="https://github.com/reactstrap/reactstrap">GitHub</Nav.Link>
                <Nav.Link href="https://medium.com/@adesegunadedeji">Blog</Nav.Link>
                <Nav.Link href="/contact/">Contact</Nav.Link>
            </Navbar>
            </Nav>
</div>
    )}
}
export default NavbarComponent
