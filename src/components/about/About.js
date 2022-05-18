import React from 'react'
import styles from './About.module.css'

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.mainBlock}>
        <div className={styles.tabHeader}>
          <h2 className={styles.blockTitle}>About the app</h2>
        </div>
        <div className={styles.block}>
          <p>Main purpose of this application is to serve as a shopping list,
            but it can also be used for making other lists like a "To-do list"
            or any other list of item's or task's.<br />
            "The Cart+" is able to save items to browser local storage and load 
            saved items after the browser was closed and opened.</p>
          <p>Project made by me - Žygimantas Kairaitis.</p>
          <p>Find me on:
            <a href='https://www.linkedin.com/in/%C5%BEygimantas-kairaitis-018a86193/'> LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;