import { combineReducers } from "redux";
import uuid from "uuid";

import photosReducer from './photosReducer'

const rootReducer = combineReducers({
  videos: videosReducer,
  photos: photosReducer
});
/*Add video functionality later */

export default rootReducer;

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