import React, { useState, useEffect } from "react";
import styles from "./todo.module.css";
import ListComponent from "../ListComponent/index-memo";

const Todo = ({ name }) => {
  const [inputValue, setInput] = useState();
  const setInputValue = value => setInput(value);
  const [list, setIListItems] = useState([]);

  const handleClick = e => {
    e.preventDefault();
    if (inputValue) {
      setIListItems(() => {
        setInputValue("");
        return [
          ...list,
          { status: false, description: inputValue, id: Date.now() }
        ];
      });
    }
  };

  const handleDone = id => {
    setIListItems(() => {
      return list.map(item => {
        if (item.id === id) {
          return { ...item, status: !item.status };
        } else {
          return item;
        }
      });
    });
  };

  return (
    <div className={styles.wrapper}>
      <h2> Welcome {name}</h2>
      <div className={styles.inputWrapper}>
        <input
          data-testid="inputBox"
          placeholder="Add Todo"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className={styles.inputItem}
        />
        <button onClick={handleClick} className={styles.inputButton}>
          Add Item
        </button>
      </div>
      {list.length > 0 && (
        <div data-testid="list-items">
          {list.map(item => <ListComponent data={item} done={handleDone} />)}
        </div>
      )}
    </div>
  );
};

export default Todo;
