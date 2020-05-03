import React from 'react';
import {useSpring, animated} from 'react-spring';
import styles from './Card.module.css'


export default function CardInfo(props){
    const style = useSpring({
        opacity: 1, 
        from: {opacity: 0}});

    return(
      <animated.div className={styles.grabCard_info} style={style}>
          <p className={styles.grabCard_title}>{props.title}</p>
          <p className={styles.grabCard_subTitle}>{props.subTitle}</p>
          <a href={props.link} target="_blank" rel="noopener noreferrere" className={styles.view_link}>View</a>
      </animated.div>
    )
}