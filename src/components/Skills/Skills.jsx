import React from 'react';

export function Skills(){
    return (
        <div className="container skills" id="skills">
            <h1>Skills</h1>
            <p className="skills-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vitae, delectus alias, blanditiis illum placeat dolor maiores enim fugit, nihil dolore voluptate nemo id quos cum nulla voluptas inventore nesciunt!</p>
            <div className="html">
                <div className="tag-html">
                    <p>HTML</p>
                </div>
                <div className="progressbar">
                    <div className="bar-html"></div>
                </div>
            </div>
            <div className="html">
                <div className="tag-css">
                    <p>HTML</p>
                </div>
                <div className="progressbar">
                    <div className="bar-css"></div>
                </div>
            </div>
            <div className="html">
                <div className="tag-javaScript">
                    <p>HTML</p>
                </div>
                <div className="progressbar">
                    <div className="bar-javaScript"></div>
                </div>
            </div>
            <div className="html">
                <div className="tag-react">
                    <p>HTML</p>
                </div>
                <div className="progressbar">
                    <div className="bar-react"></div>
                </div>
            </div>
        </div>
    )
}