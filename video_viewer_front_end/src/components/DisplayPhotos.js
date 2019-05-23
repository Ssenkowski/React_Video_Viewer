import React, { Component } from 'react';
import Previous from './PhotoGallery/Previous'
import Next from './PhotoGallery/Next'
import AddImage from './PhotoGallery/AddImage'
import Photos from './PhotoGallery/Photos'
import { BrowserRouter as Route } from "react-router-dom";

class DisplayPhotos extends Component {

  render() {
    debugger
    return (
      <div>
        <h1 className="photos">Your Photos's</h1>
{        /* Using a module component "Arrows"*/
        }        < Previous />
			{/* Insert Image's here */}
		< Photos photos={this.props.photos}/>
    <Route
      path="/photos/new"
      component={AddImage}
      />
		< AddImage />
        < Next />

      </div>
    );
  }
};

export default DisplayPhotos;