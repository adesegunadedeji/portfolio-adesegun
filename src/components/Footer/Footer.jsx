import React from 'react'
import {Link} from 'react-router-dom'
function FooterComponent (){
        return (
            <div className = "Footerdiv">
              <nav className="w-100 centerNav textNav w-50-ns">
                <div className="third">
                <Link className="f6" to = "/">home</Link>
                </div>
                <div className="third">
                <Link className="f6" to = "/projects">portfolio</Link>
                </div>
                <div className="third">
                <Link className="f6" to = "/about">about</Link>
                </div>
               
                </nav>
            </div>
        )
}
export default FooterComponent