import React from 'react';
import mysvg from './myImage.svg';
import styles from './About.module.css'

export default function About(){
    return (
        <div className={styles.about} id="about">
            <h1>About</h1>
            <div className={styles.about_info}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam soluta est illum doloremque velit rerum optio, commodi quasi. Nesciunt harum, dicta qui ipsam illum nulla praesentium ea tempore provident aperiam?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae eveniet maxime voluptatum ipsum cum ea vero quaerat laudantium, ex cumque ullam ducimus et sint. Repudiandae doloremque labore sit amet a?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae veniam eos atque molestiae non, explicabo fuga accusantium quisquam soluta mollitia aspernatur, praesentium cum ducimus suscipit doloribus dolorem, dicta sunt voluptate!</p>
            </div>
        </div>
    )
}