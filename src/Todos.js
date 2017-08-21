import React, { Component } from 'react';
import TodoFooter from './todo/TodoFooter';
import TodoMain from './todo/TodoMain';
import TodoHeader from './todo/TodoHeader';

const STORAGE_KEY = 'my_app_todos';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
      isAllChecked: false
    };
  }

  render() {
    var props = {
      todoCount: this.state.todos.length || 0,
      todoDoneCount:
        (this.state.todos && this.state.todos.filter(todo => todo.isDone))
          .length || 0
    };
    return (
      <div>
        <TodoHeader addTodo={this.addTodo.bind(this)} />
        <TodoMain
          deleteTodo={this.deleteTodo.bind(this)}
          todos={this.state.todos}
          changeTodoState={this.changeTodoState.bind(this)}
        />
        <TodoFooter
          isAllChecked={this.state.isAllChecked}
          clearDone={this.clearDone.bind(this)}
          {...props}
          changeTodoState={this.changeTodoState.bind(this)}
        />
      </div>
    );
  }

  allChecked() {
    let isAllChecked = false;
    if (this.state.todos.every(todo => todo.isDone)) {
      isAllChecked = true;
    }
    this.setState({ todos: this.state.todos, isAllChecked });
  }

  addTodo(todoItem) {
    this.state.todos.push(todoItem);
    this.allChecked();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.todos));
  }

  changeTodoState(index, isDone, isChangeAll) {
    if (isChangeAll) {
      this.setState({
        todos: this.state.todos.map(todo => {
          todo.isDone = isDone;
          return todo;
        }),
        isAllChecked: isDone
      });
    } else {
      this.state.todos[index].isDone = isDone;
      this.allChecked();
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.todos));
  }

  clearDone() {
    let todos = this.state.todos.filter(todo => !todo.isDone);
    this.setState({
      todos: todos,
      isAllChecked: false
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }

  deleteTodo(index) {
    this.state.todos.splice(index, 1);
    this.setState({ todos: this.state.todos });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.todos));
  }
}

export default Todos;
