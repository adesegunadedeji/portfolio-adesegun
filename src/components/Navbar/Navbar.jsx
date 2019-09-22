import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap'
function Navbar () {
    return (
    <div className = "Navbar_Container">
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img alt="" src="/logo.svg" width="30"height="30" className="d-inline-block align-top"/>
                {' Ade Adedeji'}
            </Navbar.Brand>
        </Navbar>
    </div>
    
    )}

export default Navbar