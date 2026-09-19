import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h3 className={styles.logo}>Ahsan</h3>
        <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header

// The benefit of module css is to you can write every component every feature or every card different
// css and no css overlaping others 