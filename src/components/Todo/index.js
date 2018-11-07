import React, { Component } from "react";
import styles from "./todo.module.css";
import ListComponent from "../ListComponent";

class Todo extends Component {
  state = { items: [], value: "" };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    if (this.state.value.length > 0) {
      this.setState({
        items: [
          ...this.state.items,
          {
            status: false,
            description: this.state.value,
            id: Date.now()
          }
        ]
      });
    }
  };

  handleDone = id => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          const newObj = {
            description: item.description,
            status: !item.status,
            id: item.id
          };
          return newObj;
        } else {
          return item;
        }
      })
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <h2> Welcome {this.props.name}</h2>
        <div className={styles.inputWrapper}>
          <input
            data-testid="inputBox"
            placeholder="Add Todo"
            onChange={e => this.handleChange(e)}
            value={this.state.value}
            className={styles.inputItem}
          />
          <button className={styles.inputButton} onClick={this.handleClick}>
            Add Item
          </button>
        </div>
        {this.state.items.length > 0 && (
          <div data-testid="list-items">
            {this.state.items.map(item => (
              <ListComponent data={item} done={this.handleDone} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Todo;
