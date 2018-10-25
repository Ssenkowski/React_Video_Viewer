import React, { Component } from 'react';
import Videos from './Navbar/Videos'
import Photos from './Navbar/Photos'
import About from './Navbar/About'


class NavBar extends Component {
	/*constructor(props) {
		super(props);
			this.state.about = {ClickedAbout: false}
			this.state.videos = {ClickedVideos: false}
			this.state.photos = {ClickedPhotos: false}

			this.handleClick = this.handleClick.bind(this);
	}

	/*handleClickAbout() {
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
	} */

	  render() {	
	    return <div className="navbar clearfix">
	    		<span className="style">
	    			<Videos />
	    			< About />
	    			< Photos />
	   		   </span>
	   		   </div>
  }	
}

export default NavBar
