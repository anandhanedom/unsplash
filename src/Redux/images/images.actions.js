import { ImagesActionTypes } from './images.types';
import axios from 'axios';

//Image fetching actions
export const fetchImagesRequest = () => {
  return {
    type: ImagesActionTypes.FETCH_IMAGES_REQUEST,
  };
};

export const fetchImagesSuccess = (images) => {
  return {
    type: ImagesActionTypes.FETCH_IMAGES_SUCCESS,
    payload: images,
  };
};

export const fetchImagesFailure = (error) => {
  return {
    type: ImagesActionTypes.FETCH_IMAGES_FAILURE,
    payload: error,
  };
};

//Add images
export const addImage = (img) => {
  return {
    type: ImagesActionTypes.ADD_IMAGE,
    payload: img,
  };
};

//Remove images
export const removeImage = (imgId) => {
  return {
    type: ImagesActionTypes.REMOVE_IMAGE,
    payload: imgId,
  };
};

//Set current image
export const setCurrentImage = (imgId) => {
  return {
    type: ImagesActionTypes.SET_CURRENT_IMAGE,
    payload: imgId,
  };
};

//Thunk handled functions
export const fetchImages = () => {
  return async function (dispatch) {
    dispatch(fetchImagesRequest());
    await axios
      .get('images')
      .then((res) => {
        const images = res.data;
        dispatch(fetchImagesSuccess(images));
      })
      .catch(() => {
        dispatch(fetchImagesFailure('Oops! Something went wrong.'));
      });
  };
};

export const deleteImage = () => {
  return async function () {
    await axios
      .delete(`images/${this.props.currentImgId}`)
      .then(() => {
        this.props.removeImage(this.props.currentImgId);
      })
      .then(() => {
        this.props.toggleModal();
      });
  };
};
