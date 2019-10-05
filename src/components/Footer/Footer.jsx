import React from 'react'
import { FaGlassWhiskey,FaHeart } from 'react-icons/fa'

function FooterComponent (){
        return (
            <div className = "Footer">
                <p>
                    <small>
                   Made with <FaHeart/> and Lots of <FaGlassWhiskey/>
                       </small>
                </p>
            </div>
        )
}

export default FooterComponent