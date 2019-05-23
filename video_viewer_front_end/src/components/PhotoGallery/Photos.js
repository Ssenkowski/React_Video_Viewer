import React from 'react';
import Gallery from 'react-photo-gallery';

class Photos extends React.Component {
    render() {
        console.log(this.props)

        const photos = this.props.photos
        const PHOTO_SET = [
            photos.map(photo =>
            <p key={photo.id}>{photo.name}</p>
        )
        ]    
        return (
        <Gallery photos={PHOTO_SET} />
    );
   }
}

export default Photos;