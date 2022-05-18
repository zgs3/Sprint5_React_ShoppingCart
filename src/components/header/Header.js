import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.container}>
      <NavLink to='/thecart' className={styles.navLink}>THE CART+</NavLink>
      <NavLink to='/about' className={styles.navLink}>ABOUT</NavLink>
    </div>
  )
}

export default Header;