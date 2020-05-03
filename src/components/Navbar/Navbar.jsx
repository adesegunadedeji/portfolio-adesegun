import React from 'react';
import styles from './Navbar.module.css';

function Navbar(){
    return(
        <div className={styles.navbar}>
            <header className={styles.navHeader}>
                <h1>Adesegun</h1>
            <nav>
                <ul className={styles.nav_links}>
                    <li ><a href="#about">about</a></li>
                    <li><a href="https://medium.com/@adesegunadedeji">blog</a></li>
                    <li><a href="#work">projects</a></li>
                    <li><a href="#contact">contact</a></li>
                    {/* <li><a href="mailto:adesegunadedeji@gmail.com">contact</a></li> */}
                </ul>
            </nav>
            {/* <Link to="/contact"><button className={styles.navButton}>contact me</button></Link> */}
            </header>
        </div>
    )
}

export default Navbar