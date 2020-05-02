import React from 'react';
import styles from './Projects.module.css';
import cx from 'classnames';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Carousel from '../Carousel/Carousel'

 const tileData = [
       {
         img: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         title: 'Drake',
        author: 'author',
         cols: 2,
      },
      {
        img: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Drake',
       author: 'author',
        cols: 2,
     },
     {
        img: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Drake',
       author: 'author',
        cols: 2,
     }
     ];

export default function Projects(){
    return (
        <div className={cx(styles.container, styles.work)} id="work">
            <h1>Work</h1>
              <Carousel/>
        </div>
    )
}

