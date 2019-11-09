import React from 'react';
import './App.css';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Projects from './components/Projects/Projects';
import Landing from './components/Landing'
import Resume from './components/Resume';
import FooterComponent from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
       <Route exact path ='/about' component ={About}/>
       <Route  exact path ='/projects' component ={Projects}/>
       <Route  exact path ='/resume' component ={Resume}/>
       <Route  exact path ='/contact' component ={Contact}/> 
       <Route  exact path ='/' component ={Landing}/> 
       </Switch>
       </Router>
       <FooterComponent/>
    </div>
  );
}

export default App;
