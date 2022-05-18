import React, { useState, useEffect } from 'react'
import styles from './Cart.module.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Cart() {
  return (
    <div className={styles.container}>
      <div className={styles.itemsFull}>
        <ul className={styles.itemList}>
          <div>

            <div className={styles.item}>
              <input type="checkbox" id="task-1" />
              <label htmlFor="task-1">
                <span className={styles.customCheckbox}></span>
                Item 1
              </label>
              <div>
                <button
                  className={styles.itemBtn}>
                  <EditIcon />
                </button>
                <button
                  className={styles.itemBtn}>
                  <DeleteForeverIcon />
                </button>
              </div>
            </div>

            <div className={styles.item}>
              <input type="checkbox" id="task-1" />
              <label htmlFor="task-1">
                <span className={styles.customCheckbox}></span>
                Item 2
              </label>
              <div>
                <button
                  className={styles.itemBtn}>
                  <EditIcon />
                </button>
                <button
                  className={styles.itemBtn}>
                  <DeleteForeverIcon />
                </button>
              </div>
            </div>

          </div>
        </ul>

        <form onSubmit={(e) => (e.preventDefault())}>
          <input
            type="text"
            className={styles.newList}
            placeholder="New item"
          />
          <button className={styles.btn}>+</button>
        </form>
      </div>
    </div>
  )
}

export default Cart;