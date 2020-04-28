import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(){

    return(
        <div className="container navbar">
            <header>
            <div class="lgo">
                <h1>Adesegun</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/about">about me</Link></li>
                    <li><Link to="/skills">skills</Link></li>
                    <li><Link to="/work">my work</Link></li>
                </ul>
            </nav>
            </header>
        </div>
    )

}