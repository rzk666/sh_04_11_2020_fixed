import React from 'react';
// Utils
import { connect } from 'react-redux';
// Redux Actions
import {
  signOut,
  refreshAuth,
} from '../redux/models/auth/authActions';

// ----- Misc ----- //
const FAKE_HOME_LOADER_TIME = 6500;

// ----- Help Functions ----- //
const enforceAuth = (controllerProps) => {
  const {
    auth, history, signOut,
  } = controllerProps;
  const { adminToken } = auth;
  // Handle logout
  // if (!isLoggedIn) {
  //   signOut();
  //   cookies.set('auth', '');
  //   history.push('/login');
  //   return;
  // }
  if (!adminToken) {
    history.push('/adminLogIn');
  }
  // TODO: Add future screens that must have isLoggedIn
};

export default (ComposedComponent) => {
  class WithAuth extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showSplash: false,
      };
    }

    componentDidMount() {
      const { auth, cookies } = this.props;
      if (!auth.adminToken) {
        const cookie = cookies.get('auth');
        const token = cookie && cookie.adminToken;
        if (token) {
          refreshAuth(cookie);
        } else {
          enforceAuth(this.props);
        }
      }
    }

    componentDidUpdate(prevProps) {
      const { auth, history, cookies } = this.props;
      const { isLoggedIn, hasAccess } = auth;
      if (isLoggedIn !== prevProps.auth.isLoggedIn) {
        enforceAuth(this.props);
      }
      // Admin login
      if (hasAccess && !prevProps.auth.hasAccess) {
        cookies.set('auth', auth);
        this.setState({ showSplash: true });
        setTimeout(() => history.push('/'), FAKE_HOME_LOADER_TIME);
      }
    }

    render() {
      return (
        <>
          <ComposedComponent {...this.props} {...this.state} />
        </>
      );
    }
  }

  const mapStateToProps = (state) => ({
    auth: state.auth,
  });

  const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOut()),
    refreshAuth: (cookie) => dispatch(refreshAuth(cookie)),
  });

  return connect(mapStateToProps, mapDispatchToProps)((WithAuth));
};
