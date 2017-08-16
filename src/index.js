import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './About';
import Todo from './Todo';
import Repos from './Repos';
import Repo from './Repo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route path="/repos" component={Repos} />
      <Route path="/repos/:userName/:repoName" component={Repo} />
      <Route path="/todo" component={Todo} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
