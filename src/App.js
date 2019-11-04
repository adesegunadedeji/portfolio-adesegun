import React from 'react';
import './App.css';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import {Route, Switch, Redirect} from 'react-router-dom'
import Projects from './components/Projects/Projects';
import Landing from './components/Landing'
import Resume from './components/Resume';
function App() {
  return (
    <div className="App">
      <main>
        <Switch>
       < Route path ='/about' component ={About}/>
       < Route path ='/projects' component ={Projects}/>
       < Route path ='/resume' component ={Resume}/>
       < Route path ='/contact' component ={Contact}/> 
       < Route path ='/' component ={Landing}/> 
        <Redirect to='/'/>
       </Switch>
       </main>
    </div>
  );
}

export default App;
