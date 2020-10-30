import { createSelector } from 'reselect';

const selectHeader = (state) => state.header;

export const selectSearchBoxValue = createSelector(
  [selectHeader],
  (header) => header.searchBoxValue
);
