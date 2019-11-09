import React from 'react'
import {Link} from 'react-router-dom'
function FooterComponent (){
        return (
            <div className = "Footerdiv">
              <nav className="w-100 centerNav textNav w-50-ns">
                <div className="third">
                   <Link  className="f6"  to="/">porfolio</Link>
                </div>
                <div className="third">
                <Link   className="f6" to="/contact">contact</Link>
                </div>
                <div className="third">
                <Link  className="f6" to="/projects">projects</Link>
                </div>
                </nav>
            </div>
        )
}

export default FooterComponent