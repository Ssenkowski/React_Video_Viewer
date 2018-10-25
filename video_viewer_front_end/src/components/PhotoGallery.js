import React, { Component } from 'react';
import Previous from './PhotoGallery/Previous'
import Next from './PhotoGallery/Next'
import AddImage from './PhotoGallery/AddImage'
import Photos from './PhotoGallery/Photos'

class PhotoGallery extends Component {

  render() {
    return (
      <div>
        <h1 className="photos">Your Photos's</h1>
{        /* Using a module component "Arrows"*/
        }        < Previous />
			{/* Insert Image's here */}
		< Photos photos={this.props.photos}/>
		< AddImage />
        < Next />

      </div>
    );
  }
};

export default PhotoGallery;