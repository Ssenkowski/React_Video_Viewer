import React, { Component } from 'react';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {isSigningIn: true}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(state => ({
			isSigningIn: !state.isSigningIn
		}));
	}

	  render() {
	    return <button onClick={this.props.handleClick}> {this.state.isSigningIn ? 'Sign In' : 'Signing In...'} </button>;
  }
}

export default SignIn