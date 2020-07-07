/* eslint-disable no-underscore-dangle */
import React from 'react';
import { authHasError } from '../redux/models/auth/authActions';

class AdminLoginController extends React.Component {
  componentDidMount() {
    const { auth, history } = this.props;
    if (auth.hasAccess || auth.isLoggedIn) {
      history.push('/');
    }
  }

  componentDidUpdate() {
    const { auth } = this.props;
    const { hasError } = auth;
    if (hasError) {
      alert('ACCESS DEINED');
      authHasError(false);
    }
  }

  adminLogin(data) {
    const { adminLogin } = this.props;
    // Failed details
    if (!data.email || !data.password) {
      alert('Fill Details');
    } else {
      adminLogin(data);
    }
  }

  callbacks() {
    return {
      adminLogin: this.adminLogin.bind(this),
    };
  }

  render() {
    const { View } = this.props;
    return (
      <View
        {...this.props}
        {...this.state}
        {...this.callbacks()}
      />
    );
  }
}

export default AdminLoginController;
