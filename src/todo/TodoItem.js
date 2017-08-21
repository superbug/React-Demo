import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TodoItem extends Component {
  handlerChange() {
    let isDone = !this.props.isDone;
    this.props.changeTodoState(this.props.index, isDone);
  }

  handlerMouseOver() {
    ReactDOM.findDOMNode(this.refs.deleteBtn).style.display = 'inline';
  }

  handlerMouseOut() {
    ReactDOM.findDOMNode(this.refs.deleteBtn).style.display = 'none';
  }

  handlerDelete() {
    this.props.deleteTodo(this.props.index);
  }

  render() {
    let doneStyle = this.props.isDone
      ? { textDecoration: 'line-through' }
      : { textDecoration: 'none' };
    return (
      <li
        onMouseOver={this.handlerMouseOver.bind(this)}
        onMouseOut={this.handlerMouseOut.bind(this)}
        style={{ margin: '5px 0' }}
      >
        <input
          type="checkbox"
          checked={this.props.isDone}
          onChange={this.handlerChange.bind(this)}
          style={{ marginRight: '10px' }}
        />
        <span style={doneStyle}>
          {this.props.text}
        </span>
        <button
          style={{ display: 'none' }}
          ref="deleteBtn"
          onClick={this.handlerDelete.bind(this)}
        >
          删除
        </button>
      </li>
    );
  }
}

export default TodoItem;
