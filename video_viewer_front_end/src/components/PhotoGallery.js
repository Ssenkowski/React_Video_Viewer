import React, { Component } from 'react';
import LeftArrow from './PhotoGallery/LeftArrow'
import RightArrow from './PhotoGallery/RightArrow'

class PhotoGallery extends Component {

  render() {
    return (
      <div>
        <h1>Your Photos's</h1>
        /* Using a module component "Arrows"*/
        < LeftArrow />
			{/* Insert Image's here */}
        < RightArrow />

      </div>
    );
  }
};

export default PhotoGallery;