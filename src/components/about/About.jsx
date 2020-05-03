import React from 'react';
import mysvg from './myImage.svg';
import styles from './About.module.css'

export default function About(){
    return (
        <div className={styles.about} id="about">
            <h1>About</h1>
            <div className={styles.about_info}>
            <p>I'm a software developer based in Seattle Washington. </p>
            <p>I am passionate about technology and how its can shape our human experience </p>
            <p>Let's make something special!!!.</p>
            </div>
        </div>
    )
}