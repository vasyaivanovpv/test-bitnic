import React from 'react';
import Login from '../components/Login';
import { connect } from 'react-redux';
import { doLogin, doLogout } from '../actions/LoginActionCreators';

class LoginContainer extends React.Component {
  render() {
    const { doLogin, doLogout, history, auth } = this.props;
    return (
      <Login
        doLogin={doLogin}
        doLogout={doLogout}
        history={history}
        auth={auth}
      />
    );
  }
}

export default connect(
  null,
  { doLogin, doLogout }
)(LoginContainer);
