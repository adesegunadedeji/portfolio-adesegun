import React, {Component} from 'react'
import {Row,Col} from 'react-bootstrap'
class Landing extends Component{
    render(){
        return (
            <div className="LandingPage" style={{width:'100%',margin: 'auto'}}>
                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                <Row>
                <Col xs={6} md={4}>xs=6 md=4</Col>
                <img className ="avatar-image" src="https://ibb.co/njbK01F" alt="avatar"/>
                <Col xs={6} md={4}>xs=6 md=4</Col>
                <Col xs={6} md={4}>xs=6 md=4</Col>
                </Row>
            </div>
        )
    }
}
export default Landing