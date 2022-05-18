import React from 'react'
import styles from './MainTitle.module.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';

function MainTitle() {
  return (
    <div className={styles.container}>
      <h1>The Cart</h1>
      <div className={styles.icon}>
        <AddCircleIcon />
      </div>
    </div>
  )
}

export default MainTitle;