import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Layout, Menu, Spin } from 'antd';
import Repo from './Repo';
const { Header, Content, Sider } = Layout;

class Repos extends Component {
  state = {
    repos: []
  };

  componentDidMount() {
    fetch('https://api.github.com/orgs/ant-design/repos?page=1&per_page=1000')
      .then(res => res.json())
      .then(repos => {
        this.setState({ repos: repos || [] });
      });
  }

  render() {
    const { repos } = this.state;
    return (
      <Layout style={{ background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          {repos ? null : <Spin />}
          <Menu
            mode="inline"
            defaultSelectedKeys={['0']}
            style={{ height: 'auto' }}
          >
            {repos.map
              ? repos.map((repo, index) =>
                  <Menu.Item key={index}>
                    <NavLink to={`/repos/${repo.owner.login}/${repo.name}`}>
                      {repo.name}
                    </NavLink>
                  </Menu.Item>
                )
              : null}
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Switch>
            <Route path="/repos/:userName/:repoName" component={Repo} />
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default Repos;
