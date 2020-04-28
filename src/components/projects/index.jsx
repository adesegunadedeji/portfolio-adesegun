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
            <div className="container contact" id="contact">
                <h1>Contact</h1>
                <form>
                    <input type="text" name="name" placeholder="Full Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="email" placeholder="personemail@example.com" disabled/>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}