import React, { Component } from 'react';

class TodoHeader extends Component {
  handleKeyUp(event) {
    if (event.keyCode === 13) {
      let value = event.target.value;
      if (!value) {
        return false;
      }
      let newTodoItem = {
        text: value,
        isDone: false
      };
      event.target.value = '';
      this.props.addTodo(newTodoItem);
    }
  }

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp.bind(this)}
          type="text"
          placeholder="new task"
          style={{
            width: '100%',
            height: '40px',
            paddingLeft: '10px',
            marginBottom: '10px'
          }}
        />
      </div>
    );
  }
}

export default TodoHeader;
