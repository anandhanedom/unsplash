import { combineReducers } from 'redux';

//Reducers
import imagesReducer from './images/images.reducer';
import headerReducer from './header/header.reducer';
import modalReducer from './modal/modal.reducer';

export default combineReducers({
  images: imagesReducer,
  header: headerReducer,
  modal: modalReducer,
});
