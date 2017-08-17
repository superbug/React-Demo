import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <h2>
          {this.props.match.params.repoName}
        </h2>
      </div>
    );
  }
});
