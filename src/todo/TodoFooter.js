import React, { Component } from 'react';
import { Row, Col } from 'antd';

class TodoFooter extends Component {
  handleAllState(event) {
    this.props.changeTodoState(null, event.target.checked, true);
  }

  handleClear() {
    this.props.clearDone();
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={8}>
            <input
              checked={this.props.isAllChecked}
              onChange={this.handleAllState.bind(this)}
              type="checkbox"
            />
          </Col>
          <Col span={8}>
            <div>
              {this.props.todoDoneCount}已完成 / {this.props.todoCount}总数}
            </div>
          </Col>
          <Col span={8}>
            <button onClick={this.handleClear.bind(this)}>清除已完成</button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TodoFooter;
