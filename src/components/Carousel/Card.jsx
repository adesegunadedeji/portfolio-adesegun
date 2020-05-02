import React from 'react';
import CardInfo from './CardInfo';
import styles from './Card.module.css';
import cx from 'classnames';

function Card(props){
    return(
            // <p style={{color: 'white'}}>Card Works!!!s</p>
            <div className={cx("d-inline-block", styles.grabCard)} onClick = {(e)=> props.handleClick(props.item)}>
                <img className={styles.grabCard_img} src={props.item.imgSrc} alt={props.item.imgSrc}/>
                {props.item.selected && <CardInfo title={props.item.title} subTitle = {props.item.subTitle} link={props.item.link}/>}
            </div>
    )
}
export default Card;