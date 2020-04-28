import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import MainInfo from './components/mainInfo';
import Projects from './components/projects'
import { About } from './components/about';
import { Skills } from './components/skills';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <MainInfo/>
   <About/>
   <Projects/>
   <Skills/>
   <Contact/>
   <footer>
     <hr></hr>
     <p>2020 Copryright. All Rights Reserved</p>
   </footer>
    </div>
  );
}

export default App;
