import React, { Component } from 'react';

class Example extends Component {
  state = {
    count: 0,
  };

  handleAlertClick = () => {
    setTimeout(() => {
      alert('You clicked on: ' + this.state.count);
    }, 3000);
  };

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Click me
        </button>
        <button onClick={this.handleAlertClick}>Show alert</button>
      </div>
    );
  }
}

export default Example;
