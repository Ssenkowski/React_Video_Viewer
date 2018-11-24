import React from 'react';

function videos(e) {
	e.preventDefault();
	console.log('The link was clicked')
}

export const Videos = () =>  (
  <div> 
	<button 
		onClick={videos}
	 	className="button-navbar" 
	 	id="videos" 
	> Videos </button>  
  </div>
);

export default Videos;