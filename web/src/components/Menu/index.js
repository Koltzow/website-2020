import {Link} from 'gatsby'
import React from 'react'

import styles from './menu.module.css'

const Menu = ({siteTitle}) => (
  <div className={styles.main}>
    <div className={styles.wrapper}>
      <Link to='/'>{siteTitle}</Link>
      <Link to='/illustrations'>Illustrations</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/about'>About</Link>
    </div>
  </div>
)

export default Menu
