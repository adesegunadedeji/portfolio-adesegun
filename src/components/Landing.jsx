import React, {Component} from 'react'
import { Container, Row, Col } from 'reactstrap';
class Landing extends Component{
    render(){
        return (
        <Container>
            <div className="LandingPage" style={{width:'100%',margin: 'auto'}}>
            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <Row>
                <Col>
            <img className ="avatar-img" src="https://i.ibb.co/m4GPBy3/my-Avatar-1.png" alt="avatar"/>
            </Col>
            </Row>
        </div>
        <br></br>
        <div className="banner-text">
            <h1>Full Stack Developer</h1>
            <hr></hr>
            <p>HTML/CSS|Bootstrap|JavaScript|React|React Native MongoDB|Express|Ruby|Rails</p>
        </div>
        </Container>
        )
    }
}
export default Landing