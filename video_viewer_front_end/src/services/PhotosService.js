const API_URL = process.env.REACT_APP_API_URL;

const PhotosService = {
    fetchPhotos() {
        return fetch(`${API_URL}/photos`)
        .then(response => response.json())
    }
}

export default PhotosService