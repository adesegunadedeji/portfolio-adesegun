import React from 'react';
import './App.css';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import {Route, Switch, Redirect} from 'react-router-dom'
import NavbarComponent from './components/NavBar/Navbar'
import FooterComponent from './components/Footer/Footer'
import Projects from './components/Projects/Projects';
import Resume from './components/Resume';
import {Row,Col} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <main>
        <Switch>
       < Route path ='/about' component ={About}/>
       < Route path ='/projects' component ={Projects}/>
       < Route path ='/resume' component ={Resume}/>
       < Route path ='/contact' component ={Contact}/> 
        <Redirect to='/'/>
       </Switch>
       </main>
       <div className="LandingPage" style={{width:'100%',margin: 'auto'}}>
                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                <Row>
                <img className ="avatar-img" src="https://i.ibb.co/m4GPBy3/my-Avatar-1.png" alt="avatar"/>
    
                </Row>
            </div>
      <FooterComponent/>
    </div>
  );
}

export default App;
