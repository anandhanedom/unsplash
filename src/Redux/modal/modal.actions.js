import { ModalActionTypes } from './modal.types';
import axios from 'axios';

export const toggleModal = () => ({
  type: ModalActionTypes.TOGGLE_MODAL,
});

export const changeModalType = (type) => ({
  type: ModalActionTypes.CHANGE_MODAL_TYPE,
  payload: type,
});
