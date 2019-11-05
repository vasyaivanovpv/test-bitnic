import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateLogin = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth.isLoggedIn ? (
          <Component auth={auth} {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};

export default PrivateLogin;
