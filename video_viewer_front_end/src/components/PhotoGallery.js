import React, { Component } from 'react';

class PhotoGallery extends Component {

  render() {
    return (
      <div>
        <h1>Your Photos's</h1>
        <button> Prev </button>
			{/* Insert Image's here */}
        <button> Next </button>

      </div>
    );
  }
};

export default PhotoGallery;