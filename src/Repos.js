import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Layout, Menu, Spin } from 'antd';
import Repo from './Repo';
const { Header, Content, Sider } = Layout;

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
      <Layout style={{ background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          {repos ? null : <Spin />}
          <Menu
            mode="inline"
            defaultSelectedKeys={['0']}
            style={{ height: '100%' }}
          >
            {repos
              ? repos.map((repo, index) =>
                  <Menu.Item key={index}>
                    <NavLink to={`/repos/${repo.name}`}>
                      {repo.name}
                    </NavLink>
                  </Menu.Item>
                )
              : null}
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Switch>
            <Route path="/repos/:repoName" component={Repo} />
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default Repos;
