import React from "react";
import News from "../News/News";
import { connect } from "react-redux";
import { deleteNews, changeShowGuest } from "../../store/actions";

const NewsList = ({ newsList, deleteNews, changeShowGuest }) => {
  const removeNews = id => {
    deleteNews(id);
  };

  const showGuest = ({id, showGuets}) => {
    changeShowGuest({id, showGuets});
  };

  return (
    <div className="news-list">
      {newsList.map((news, index) => {
        return (
          <News
            news={news}
            key={index}
            deleteNews={removeNews}
            changeShowGuest={showGuest}
          />
        );
      })}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteNews: id => dispatch(deleteNews(id)),
  changeShowGuest: data => dispatch(changeShowGuest(data))
});

export default connect(null, mapDispatchToProps)(NewsList);
