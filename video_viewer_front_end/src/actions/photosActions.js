const baseUrl = 'http://localhost:3000'

export const fetchPhotos = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  
  return dispatch => {
    fetch(`${ baseUrl }/photos`, data)
      .then(response => response.json())
      .then(photos => dispatch({
          type: 'FETCH_PHOTOS',
          payload: photos
      }))
      .catch(err => err)
  }
}