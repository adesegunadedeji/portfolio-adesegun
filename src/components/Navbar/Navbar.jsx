import React from 'react';
import {Link}  from  'react-router-dom';
import styles from './Navbar.module.css';

function Navbar(){
    return(
        <div className={styles.navbar}>
            <header className={styles.navHeader}>
                <h1>Adesegun</h1>
            <nav>
                <ul className={styles.nav_links}>
                    <li ><Link to="/about">about</Link></li>
                    <li><Link to="/skills">blog</Link></li>
                    <li><Link to="/work">projects</Link></li>
                </ul>
            </nav>
            {/* <Link to="/contact"><button className={styles.navButton}>contact me</button></Link> */}
            </header>
        </div>
    )
}

export default Navbar