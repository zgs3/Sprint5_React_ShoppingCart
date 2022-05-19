import React, { useState, useEffect } from 'react';
import styles from './Cart.module.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DoneIcon from '@material-ui/icons/Done';

function Cart() {

  const [itemValue, setItemValue] = useState('');
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [inputMsg, setInputMsg] = useState('Add new item');
  const [editInputMsg, setEditInputMsg] = useState('New item name');
  
  useEffect(() => {
    const itemList = JSON.parse(localStorage.getItem('shopList'));
    if (itemList !== []) {
      setItems(itemList || []);
    }
  }, [])

  const submitForm = (e) => {
    e.preventDefault();
    if (itemValue === '') {
      setInputMsg('Please enter item name first');
    } else {
      setInputMsg('New item');
      const newItem = {
        id: Date.now().toString(),
        name: itemValue,
        checked: false
      }
      setItems([...items, newItem]);
      localStorage.setItem('shopList', JSON.stringify(items));
      setItemValue('');
    }
  }

  const deleteItem = (id) => {
    const clearedItems = items.filter((item) => item.id !== id);
    localStorage.setItem('shopList', JSON.stringify(clearedItems));
    setItems(clearedItems);
  }

  const checkItem = (id) => {
    const filteredItems = items.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    localStorage.setItem('shopList', JSON.stringify(filteredItems));
    setItems(filteredItems);
  }

  const itemEditor = (id) => {
    if (editValue === '') {
      setEditInputMsg('Enter item name first')
    } else {
      setEditInputMsg('New item name')
      const updatedItems = items.map((item) => {
        if (item.id === id) {
          item.name = editValue;
        }
        return item;
      })
      setItems(updatedItems);
      localStorage.setItem('shopList', JSON.stringify(updatedItems));
      setEditItem(null);
      setEditValue('');
    }
  }

  const deleteAll = () => {
    localStorage.setItem('shopList', JSON.stringify([]));
    setItems([]);
    setItemValue('');
  }

  return (
    <div className={styles.container}>
      <div className={styles.itemsFull}>
        <div className={styles.upperBlock}>
          <form onSubmit={submitForm}>
            <input
              type="text"
              className={styles.newList}
              placeholder={inputMsg}
              onChange={(e) => { setItemValue(e.target.value) }}
              value={itemValue}
              maxLength='25'
            />
            <button className={styles.btn}>+</button>
          </form>
          <div>
            <button onClick={deleteAll} className={styles.deleteAllBtn}>
              DELETE ITEMS
            </button>
          </div>
        </div>
        <ul className={styles.itemList}>

          {items.map((item) => (
            <div key={item.id} className={styles.item}>
              <input
                type="checkbox"
                id={item.id}
                checked={item.checked}
                onChange={() => checkItem(item.id)}
              />

              {editItem === item.id &&
                (<div>
                  <form
                    className={styles.editForm}
                    onSubmit={(e) => {
                      e.preventDefault();
                      itemEditor(item.id)
                    }}>
                    <input
                      className={styles.editInput}
                      type='text'
                      onChange={(e) => setEditValue(e.target.value)}
                      value={editValue}
                      onSubmit={() => itemEditor(item.id)}
                      placeholder={editInputMsg}
                      maxLength='25'
                    >
                    </input>
                    <button type='submit' className={styles.itemBtn}>
                      <DoneIcon />
                    </button>
                  </form>
                </div>)
                ||
                (<label htmlFor={item.id}>
                  <span className={styles.customCheckbox}></span>
                  {item.name}
                </label>)
              }

              <div className={styles.btnBlock}>
                <button
                  className={styles.itemBtn}
                  onClick={(e) => {
                    setEditItem(item.id);
                  }}
                >
                  <EditIcon />
                </button>
                <button
                  className={styles.itemBtn}
                  onClick={() => deleteItem(item.id)}
                >
                  <DeleteForeverIcon />
                </button>
              </div>
            </div>
          ))}

        </ul>
      </div>
    </div>
  )
}

export default Cart;