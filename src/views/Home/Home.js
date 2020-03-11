import React, { Fragment } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import authUser from "../../components/HOC/AuthUser";

const Home = ({ auth, user }) => {
  return (
    <Fragment>
      {auth ? <h1>Привет, {user.login}</h1> : <h1>Привет, Гость</h1>}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default compose(connect(mapStateToProps), authUser)(Home);
