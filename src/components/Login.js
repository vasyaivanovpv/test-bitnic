import React from 'react';
import styled from 'styled-components';

const LoginFormWrap = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 12px;
  background-color: white;
`;

export default class Login extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = e => {
    const { id, value } = e.currentTarget;
    this.setState({
      [id]: value,
    });
  };

  fakeLogin = e => {
    e.preventDefault();
    const { doLogin, history } = this.props;
    const user = {
      username: this.state.username,
      password: this.state.password,
    };

    if (!user.username || !user.password) {
      this.setState({
        isUnknownUser: true,
      });
    }

    doLogin(user, history);

    this.setState({
      username: '',
      password: '',
    });
  };

  render() {
    const { username, password } = this.state;
    const { auth } = this.props;
    return (
      <LoginFormWrap>
        <form onSubmit={this.fakeLogin}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={this.handleChange}
          />
          <label htmlFor="password">password</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={this.handleChange}
          />
          <button>Login</button>
        </form>
        {auth.error && <p>Введены неверные данные</p>}
      </LoginFormWrap>
    );
  }
}
