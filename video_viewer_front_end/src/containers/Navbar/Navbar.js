import React, { Component } from 'react';
import Videos from './Videos'
import Photos from './Photos'
import About from './About'
import { BrowserRouter as Route } from "react-router-dom";


class NavBar extends Component {

	  render() {	
	    return <div className="navbar clearfix">
	    		<span className="style">
	    			<Route path="/videos" 
	    			component={Videos} />
	    			<Videos />
	    			<Route path="/about" 
	    			component={About} />
	    			< About />
	    			<Route path="/photos" 
	    			component={Photos} />
	    			< Photos />
	   		   </span>
	   		   </div>
  }	
}

export default NavBar
