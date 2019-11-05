import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsContainer from './NewsContainer';
import LoginContainer from './LoginContainer';
import PrivateLogin from '../components/PrivateLogin';
import PrivateNews from '../components/PrivateNews';
import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(246,246,246);
  }
`;

const App = ({ auth }) => (
  <Router>
    <GlobalStyle />
    <Switch>
      {/* <Route path="/login" component={LoginContainer} /> */}
      <PrivateLogin exact path="/" component={NewsContainer} auth={auth} />
      <PrivateNews exact path="/login" component={LoginContainer} auth={auth} />

      <Route component={() => <div>No such page!</div>} />
    </Switch>
  </Router>
);

const mapStateToProps = store => ({
  auth: store.auth,
});

export default connect(mapStateToProps)(App);
