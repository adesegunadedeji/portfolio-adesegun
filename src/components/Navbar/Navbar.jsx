import React from 'react'
function NavbarComponent (){
        return (
            <div className = "Navbardiv">
              <nav className="w-100 centerNav textNav w-50-ns">
                <div className="third">
                <a  className="f6" href = "/">home</a>
                </div>
                <div className="third">
                <a  className="f6" href = "/projects">portfolio</a>
                </div>
                <div className="third">
                <a  className="f6" href = "/contact">contact</a>
                </div>
                </nav>
            </div>
        )
}
export default NavbarComponent