export default function photoApp(state = {
  videos: [],
  photos: []
}, action) {
  let idx
  switch (action.type) {

    case "ADD_PHOTO":
      return {
        ...state,
        photos: [...state.photos, action.photo]
      };

    case "REMOVE_PHOTO":
      idx = state.photos.indexOf(action.id);
      return {
        ...state,
        photos: [
          state.photos.slice(0, idx),
          state.photos.slice(idx + 1),
        ]
      };

      /*Add video functionality later */

    case "ADD_VIDEO":
        return {
          ...state,
          videos: [...state.videos, action.video]
        };

    case "REMOVE_VIDEO":
      idx = state.videos.indexOf(action.id);
      return {
        ...state,
        videos: [
          state.videos.slice(0, idx),
          state.videos.slice(idx + 1)
        ]
      };

    default:
      return state;
    }
};