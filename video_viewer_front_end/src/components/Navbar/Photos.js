import React from 'react';

function photos(e) {
	e.preventDefault();
	console.log('The link was clicked')
}
export const Photos = () =>  (
  <div> 
	<button 
		onClick={photos}
		className="button-navbar" 
		id="photos" 
	> Photos </button>  
  </div>
);

export default Photos;