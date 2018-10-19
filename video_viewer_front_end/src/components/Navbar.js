mport React, { Component } from 'react';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state.about = {ClickedAbout: false}
		this.state.videos = {ClickedVideos: false}
		this.state.photos = {ClickedPhotos: false}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClickAbout() {
		this.setState(state => ({
			ClickedAbout: !state.about
		}));
		console.log(this.state)
	}


	handleClickVideos() {
		this.setState(state => ({
			ClickedVideos: !state.videos
		}));
		console.log(this.state)
	}


	handleClickPhotos() {
		this.setState(state => ({
			ClickedPhotos: !state.photos
		}));
		console.log(this.state)
	}

	  render() {
	    return <button 
	    			className="button-navbar" 
	    			id="about" 
	    			onClick={this.props.handleClick} 
	    			style= {this.styleNavbar}
	   		   > About </button>;

	   		   <button 
	    			className="button-navbar" 
	    			id="videos" 
	    			onClick={this.props.handleClick} 
	    			style= {this.styleNavbar}
	   		   > Videos </button>;

	   		   <button 
	    			className="button-navbar" 
	    			id="photos" 
	    			onClick={this.props.handleClick} 
	    			style= {this.styleNavbar}
	   		   > Photos </button>;
  }
}

export default NavBar
