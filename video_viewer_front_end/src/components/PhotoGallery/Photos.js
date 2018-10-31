import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

class Photos extends React.Component {
    render() {
    return (
        <Gallery photos={this.props.photos} />
    );
   }
}

export default Photos;