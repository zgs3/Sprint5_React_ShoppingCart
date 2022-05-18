import React from 'react'
import ErrorGif from '../../assets/page404.gif'
import styles from './ErrorPage.module.css'

function ErrorPage() {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <img src={ErrorGif} alt='Cat on laptop'/>
      </div>
    </div>
  )
}

export default ErrorPage;