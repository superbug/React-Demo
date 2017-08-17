import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Repo from './Repo';

class Repos extends Component {
  state = {
    repos: null
  };

  componentDidMount() {
    fetch('https://api.github.com/orgs/ant-design/repos?page=1&per_page=100')
      .then(res => res.json())
      .then(repos => {
        this.setState({ repos });
      });
  }

  render() {
    const { repos } = this.state;
    return (
      <div>
        <ul>
          {repos
            ? repos.map((repo, index) =>
                <li key={index}>
                  <NavLink to={`/repos/${repo.name}`}>
                    {repo.name}
                  </NavLink>
                </li>
              )
            : <div>loading...</div>}
        </ul>
        <Switch>
          <Route path="/repos/:repoName" component={Repo} />
        </Switch>
      </div>
    );
  }
}

export default Repos;
