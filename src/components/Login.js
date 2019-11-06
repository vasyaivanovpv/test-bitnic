import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const LoginForm = styled.form`
  max-width: 460px;
  margin: 90px auto;
  padding: 44px 65px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(97, 127, 152, 0.2), 1px 0 0 rgba(97, 127, 152, 0.1),
    -1px 0 0 rgba(97, 127, 152, 0.1);
`;
const Label = styled.label`
  display: block;
  font-size: 1.4rem;
`;
const InputWrap = styled.div`
  position: relative;
  :hover {
    ::before {
      border-bottom: 2px solid rgba(0, 0, 0, 0.8);
    }
  }
  :focus-within {
    ::after {
      transform: scaleX(1);
    }
  }
  ::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    border-bottom: 2px solid #1976d2;
    pointer-events: none;
  }
  ::before {
    content: '\\00a0';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    pointer-events: none;
  }
`;
const Input = styled.input`
  display: block;
  width: 100%;
  min-width: 0;
  height: 42px;
  margin-bottom: 20px;
  padding: 0 12px;
  border: none;
  background-color: none;
  font-size: 2.2rem;
  :focus {
    outline: none;
  }
`;
const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  width: 120px;
  min-width: 60px;
  margin: 26px auto 0;
  padding: 8px 6px;
  border: none;
  outline: none;
  background-color: transparent;
  vertical-align: middle;
  text-align: center;
  font-size: 1.6rem;
  text-transform: uppercase;
  cursor: pointer;

  :hover {
    background-color: rgba(33, 150, 243, 0.08);
  }
`;
const ButtonText = styled.span`
  color: rgb(33, 150, 243);
`;

const ErrorMessage = styled.p`
  min-height: 1em;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 1.3rem;
  color: rgb(244, 67, 54);
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
      <div>
        <LoginForm onSubmit={this.fakeLogin}>
          <Label htmlFor="username">username</Label>
          <InputWrap>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={this.handleChange}
            />
          </InputWrap>
          <Label htmlFor="password">password</Label>
          <InputWrap>
            <Input
              type="text"
              id="password"
              value={password}
              onChange={this.handleChange}
            />
          </InputWrap>
          <ErrorMessage>{auth.error && 'Введены неверные данные'}</ErrorMessage>
          <Button>
            <ButtonText>Login</ButtonText>
          </Button>
        </LoginForm>
      </div>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  doLogin: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};
