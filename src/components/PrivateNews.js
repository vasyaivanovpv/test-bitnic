import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateNews = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth.isLoggedIn ? (
          <Redirect to={{ pathname: '/' }} />
        ) : (
          <Component auth={auth} {...props} />
        )
      }
    />
  );
};

export default PrivateNews;
