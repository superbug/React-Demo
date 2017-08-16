import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Nav bsStyle="pills">
        <li>
          <NavLink to="/repos">repos</NavLink>
        </li>
        <li>
          <NavLink to="/todo">todo</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
      </Nav>
    );
  }
}

export default App;
