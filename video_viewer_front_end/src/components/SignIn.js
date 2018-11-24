import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {isSigningIn: true}
		this.handleClick = this.handleClick.bind(this);
	}

		handleClick(e){
			e.preventDefault();
				 {return (< VideoPlayer />)}
		}


	  render() {
			return <button 
					className="button-sign-in" 
					onClick={this.handleClick}
	    		style= {this.styleButton}
	   		   > {this.state.isSigningIn ? 'Sign In' : 'Signing In...'} </button>;
  }
}

export default SignIn