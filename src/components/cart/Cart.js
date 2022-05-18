import React, { useState, useEffect } from 'react'
import styles from './Cart.module.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Cart() {

  const [itemValue, setItemValue] = useState('');
  const [items, setItems] = useState([]);


  const submitForm = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now().toString(),
      name: itemValue,
      checked: false
    }
    setItems([...items, newItem]);
    setItemValue('');
  }

  const deleteItem = (id) => {
    // const clearedItems = [...items].filter((item) => item.id !== id);
    const clearedItems = items.filter((item) => item.id !== id);
    setItems(clearedItems);
  }

  const checkItem = (id) => {
    const filteredItems = items.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setItems(filteredItems);
  }

  return (
    <div className={styles.container}>
      <div className={styles.itemsFull}>
        <ul className={styles.itemList}>

          {items.map((item) => (
            <div key={item.id} className={styles.item}>
              <input
                type="checkbox"
                id={item.id}
                checked={item.checked}
                onChange={() => checkItem(item.id)} />
              <label htmlFor={item.id}>
                <span className={styles.customCheckbox}></span>
                {item.name}
              </label>
              <div>
                <button
                  className={styles.itemBtn}
                  onClick={(e) => {
                    console.log(e.target);
                  }} >
                  <EditIcon />
                </button>
                <button
                  className={styles.itemBtn}
                  onClick={() => deleteItem(item.id)}>
                  <DeleteForeverIcon />
                </button>
              </div>
            </div>
          )
          )}

        </ul>

        <form onSubmit={submitForm}>
          <input
            type="text"
            className={styles.newList}
            placeholder="New item"
            onChange={(e) => { setItemValue(e.target.value) }}
            value={itemValue}
          />
          <button className={styles.btn}>+</button>
        </form>
      </div>
    </div>
  )
}

export default Cart;