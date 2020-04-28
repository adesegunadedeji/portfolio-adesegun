import React from 'react';
export default function Projects(){
    return (
        <div className="container work" id="work">
            <h1>Work</h1>
            <div className="work-category">
                <button id="react-project" class="active">React Projects</button>
                <button id="animation">Animation</button>
                <button id="java-project" class="active">Java Projects</button>
            </div>
            <div className="category-react showCategory">
                <a href=""><img src=""></img></a>
                <a href=""><img src=""></img></a>
                <a href=""><img src=""></img></a>
                <a href=""><img src=""></img></a>
                <a href=""><img src=""></img></a>
            </div>
        </div>
    )
}