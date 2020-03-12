import React, { Fragment } from "react";
import "./App.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";
import Router from "./router";
import authUser from "./components/HOC/AuthUser";
import { logOutUser } from "./store/actions";

const App = ({ auth, logOut }) => {
  return (
    <Fragment>
      <header className="header">
        <div className="header__logo">Logo</div>
        <nav className="navigation header__navigation">
          {auth ? (
            <Fragment>
              <NavLink
                to="/"
                className="navigation__link"
                activeClassName="navigation__link--active"
              >
                Главная
              </NavLink>
              <NavLink
                to="/news"
                className="navigation__link"
                activeClassName="navigation__link--active"
              >
                Новости
              </NavLink>
              <button to="/" className="navigation__button" onClick={() => logOut()}>
                Выход
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <button to="/" className="navigation__button">
                Вход
              </button>
            </Fragment>
          )}
        </nav>
      </header>
      <main className="main">
        <Router></Router>
      </main>
      <footer className="footer">@2020</footer>
    </Fragment>
  );
};

const mapDispathToProps = dispatch => ({
  logOut: () => dispatch(logOutUser())
});

export default compose(connect(null, mapDispathToProps), authUser)(App);
