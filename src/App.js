import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Layout, Menu } from 'antd';
import About from './About';
import Todos from './Todos';
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
            defaultSelectedKeys={[
              `/${this.props.location.pathname.split('/')[1]}`
            ]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="/repos">
              <Link to="/repos">repos</Link>
            </Menu.Item>
            <Menu.Item key="/todos">
              <Link to="/todos">todos</Link>
            </Menu.Item>
            <Menu.Item key="/about">
              <Link to="/about">about</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Switch>
              <Route path="/repos" component={Repos} />
              <Route path="/todos" component={Todos} />
              <Route path="/about" component={About} />
              <Route component={About} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Powered By Ant Design</Footer>
      </Layout>
    );
  }
}

export default App;
