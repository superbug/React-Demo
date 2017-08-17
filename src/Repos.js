import React from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Repos from './Repos';
import Repo from './Repo';

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li>
            <NavLink to="/repos/reactjs/react-router">React Router</NavLink>
          </li>
          <li>
            <NavLink to="/repos/facebook/react">React</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/repos/:userName/:repoName" component={Repo} />
        </Switch>
      </div>
    );
  }
});
