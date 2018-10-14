import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hey {this.props.name}! Welcome to your video viewing app.</h1>;
  }
}

export default Welcome