import React from 'react';
import Login from '../components/Login';
import { connect } from 'react-redux';
import { doLogin, doLogout } from '../actions/LoginActionCreators';
import { PropTypes } from 'prop-types';

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

LoginContainer.propTypes = {
  auth: PropTypes.object.isRequired,
  doLogin: PropTypes.func.isRequired,
  doLogout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(
  null,
  { doLogin, doLogout }
)(LoginContainer);
