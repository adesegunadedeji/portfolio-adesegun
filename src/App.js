import React from 'react';
import './App.css';
import About from './components/About/About'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Projects from './components/Projects/Projects';
import Resume from './components/Resume';
import FooterComponent from './components/Footer/Footer';
import Landing2 from './components/Landing copy';
function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
       <Route exact path ='/about' component ={About}/>
       <Route  exact path ='/projects' component ={Projects}/>
       <Route  exact path ='/resume' component ={Resume}/>
       <Route  exact path ='/' component ={Landing2}/> 
       </Switch>
       </Router>
       <FooterComponent/>
    </div>
  );
}

export default App;
