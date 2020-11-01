import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectIsLoggedIn = createSelector(
  [selectUser],
  (user) => user.loggedIn
);
