import React from 'react';
// React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import Login from './pages/Login';
import Profile from './pages/Profile';
import JoinLeague from './pages/JoinLeague';
// Universal
import pages from './universal/pages';
// Global Styles
import './global.scss';

const {
  HOME, ADMIN_LOGIN, LOGIN, PROFILE, JOIN_LEAGUE,
} = pages;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={(props) => (<Home {...props} page={HOME} />)} />
        <Route path={`/${LOGIN}/`} exact render={(props) => (<Login {...props} page={LOGIN} />)} />
        <Route path={`/${ADMIN_LOGIN}/`} exact render={(props) => (<AdminLogin {...props} page={ADMIN_LOGIN} />)} />
        <Route path={`/${PROFILE}/`} exact render={(props) => (<Profile {...props} page={PROFILE} />)} />
        <Route path={`/${JOIN_LEAGUE}/`} exact render={(props) => (<JoinLeague {...props} page={JOIN_LEAGUE} />)} />
      </Switch>
    </Router>
  );
}

export default App;