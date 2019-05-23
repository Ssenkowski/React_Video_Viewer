let initialState = {
    all: []
}

export default function photosReducer(state = initialState, action) {
    let idx;
    switch (action.type) {
        case "FETCH_PHOTOS": 
            return { ...state, all: action.payload }

        case "ADD_PHOTO":
            return { ...state, all: [...state.all, action.photo] };

        case "REMOVE_PHOTO":
            idx = state.indexOf(action.id);
            return  { ...state, all: [...state.slice(0, idx), ...state.slice(idx + 1)] };

        default:
            return state;
    }
}