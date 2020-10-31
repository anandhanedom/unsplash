import { ImagesActionTypes } from './images.types';

const INITIAL_STATE = {
  loading: false,
  images: [],
  fetchError: '',
  uploadSuccess: '',
  uploadError: '',
};

const imagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Fetching part
    case ImagesActionTypes.FETCH_IMAGES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ImagesActionTypes.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        images: action.payload,
        fetchError: '',
      };

    case ImagesActionTypes.FETCH_IMAGES_FAILURE:
      return {
        ...state,
        loading: false,
        images: [],
        fetchError: action.payload,
      };

    case ImagesActionTypes.ADD_IMAGE:
      return {
        ...state,
        images: [
          ...state.images,
          { id: state.images.length + 1, ...action.payload },
        ],
      };

    case ImagesActionTypes.REMOVE_IMAGE:
      return {
        ...state,
        images: state.images.filter((img) => img.id !== action.payload),
      };

    default:
      return state;
  }
};

export default imagesReducer;
