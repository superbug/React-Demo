import React, { Component } from 'react';
import { Spin } from 'antd';
import MarkdownRenderer from 'react-markdown-renderer';

class Repo extends Component {
  state = {
    repo: null
  };

  fetchData() {
    fetch(
      `https://api.github.com/repos/${this.props.match.params.userName}/${this
        .props.match.params.repoName}/readme`
    )
      .then(res => res.json())
      .then(repo => {
        this.setState({ repo: new Buffer(repo.content, 'base64').toString() });
      })
      .catch(error => {
        this.setState({ repo: '' });
      });
  }

  componentWillReceiveProps(newProps) {
    this.fetchData();
  }

  render() {
    const { repo } = this.state;
    return (
      <div>
        {repo
          ? <pre>
              <MarkdownRenderer markdown={repo} />
            </pre>
          : <Spin />}
      </div>
    );
  }
}

export default Repo;
