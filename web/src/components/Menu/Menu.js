import {Link} from 'gatsby'
import React from 'react'
import Icon from '../icon'
import {cn} from '../../lib/helpers'

import styles from './menu.module.css'

const Menu = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
        <Link to='/'>Home</Link>
        <Link to='/illustrations'>Illustrations</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/about'>About</Link>
    </div>
  </div>
)

export default Menu
