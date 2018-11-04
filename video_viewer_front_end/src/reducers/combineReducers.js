import { combineReducers } from "redux";
import uuid from "uuid";

const rootReducer = combineReducers({
  videos: videosReducer,
  photos: photosReducer
});
/*Add video functionality later */

export default rootReducer;

function photosReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_PHOTO":
      return [...state, action.photo];

    case "REMOVE_PHOTO":
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}
/*Add video functionality later */


function videosReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_VIDEO":
      return [...state, action.video];

    case "REMOVE_VIDEO":
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "ADD_VIDEO":
      let existingvideo = state.filter(
        video => video.videoName === action.video.videoName
      );
      if (existingvideo.length > 0) {
        return state;
      } else {
        return [...state, { videoName: action.video.videoName, id: uuid() }];
      }

    default:
      return state;
  }
}