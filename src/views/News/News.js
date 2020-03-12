import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import NewsList from "../../components/NewsList/NewsList";
import CreateNews from "../../components/CreateNews/CreateNews";
import { addNewNews } from "../../store/actions";
import authUser from "../../components/HOC/AuthUser";

const News = ({ newsList, addNews, auth }) => {
  const createNews = data => {
    addNews(data);
  };
  return (
    <div className="news-page">
      {auth && <CreateNews createNews={createNews} />}
      {newsList.length > 0 ? (
        <NewsList newsList={newsList} />
      ) : (
        <h1>К сожалению новостей нет</h1>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  newsList: state.newsList,
  authUser: state.authUser
});

const mapDispathToProps = dispatch => ({
  addNews: data => dispatch(addNewNews(data))
});

export default compose(
  connect(mapStateToProps, mapDispathToProps),
  authUser
)(News);
