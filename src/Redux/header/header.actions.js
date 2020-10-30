import { HeaderActionTypes } from './header.types';

export const handleSearchChange = (value) => ({
  type: HeaderActionTypes.SEARCH_CHANGE,
  payload: value,
});
