import React from 'react'
import NavbarComponent from '../NavBar/Navbar'
function Projects (){
    return (
       
        <div className = "portfolio">
             <NavbarComponent/>
            <div className="portfolio-content">
            <h1 className="portfolio-header">PROJECTS</h1>
                <div className="header-bar animated"></div>
            <div>
                <h4>MEOW WOOF RESCUE MISSION</h4>
                <p> Meow Woof was the second project I worked on as a cohort at GA. I collaborated with 2 Engineers within 40 hours  to build a FullStack App with multi-factor authentication that allows a user to add, modify and delete foster pet’s information from database. </p>
                <p>
                    <b>Year:</b>2019
                    <b>Link:</b><a href="https://peaceful-hamlet-56854.herokuapp.com/">MeowWoof</a>
                </p>
            </div>
            </div>

        </div>
    )
}
export default Projects