import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Layout, Menu } from 'antd';
import About from './About';
import Todo from './Todo';
import Repos from './Repos';
const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <Link to="/repos">repos</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/todo">todo</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/about">about</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Switch>
              <Route path="/repos" component={Repos} />
              <Route path="/todo" component={Todo} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Powered By Ant Design</Footer>
      </Layout>
    );
  }
}

export default App;
