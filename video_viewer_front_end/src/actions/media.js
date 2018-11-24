export const addPhoto = photo => {
    return {
        type: 'ADD_PHOTO',
        photo
    };
};

export const removePhoto = id => {
    return {
        type: 'REMOVE_PHOTO',
        id
    };
};

/*Add this functionality later */
export const addVideo = video => {
    return {
        type: 'ADD_VIDEO',
        video
    };
};

export const removeVideo = id => {
    return {
        type: 'REMOVE_VIDEO',
        id
    };
};