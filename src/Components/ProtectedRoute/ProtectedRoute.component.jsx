import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

//Selectors
import { selectIsLoggedIn } from '../../Redux/user/user.selectors';

const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(isLoggedIn);
        if (localStorage.getItem('token')) return <Component {...props} />;
        else
          return (
            <Redirect
              to={{
                pathname: '/',
                state: {
                  from: props.location,
                },
              }}
            />
          );
      }}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  isLoggedIn: selectIsLoggedIn,
});

export default connect(mapStateToProps, null)(ProtectedRoute);
