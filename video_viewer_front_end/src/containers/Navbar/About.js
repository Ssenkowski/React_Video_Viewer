import React from 'react';

function about(e) {
	e.preventDefault();
	console.log('The link was clicked')
}

export const About = () =>  (
  <div> 
		<button 
		 onClick={about}
	   	className="button-navbar" 
	   	id="about" 
		> About </button>
  </div>
);

export default About;