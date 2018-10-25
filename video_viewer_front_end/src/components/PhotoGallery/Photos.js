import React, { Component } from 'react';

export const Photos = (props) =>  (
 <div>
		{props.photos.map((photo) =>
	 		 <li key={photo.id}> 
	  			<h3 className="photo">{photo.name}</h3>
	  			<img src={photo.url} alt={photo.name} key={photo.id} className="photos"/>
	  		</li>
	)};
 </div>
);

export default Photos;