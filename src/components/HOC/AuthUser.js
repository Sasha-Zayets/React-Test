import React from "react";
import { connect } from "react-redux";

export default function authUser(Component) {
  class AuthUserComponent extends React.Component {
    render() {
      return <Component {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    auth: state.authUser
  });

  return connect(mapStateToProps)(AuthUserComponent);
}
