import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import authUser from "../HOC/AuthUser";

const News = ({ news, auth, userInfo, deleteNews, changeShowGuest }) => {
  const { id, title, description, date, showGuets } = news;
  const hasAdmin = auth && userInfo.admin ? true : false;

  return (
    <div className="news">
      <h2 className="news__title">{title}</h2>
      <p className="news__description">{description}</p>
      <span className="news__date">{date}</span>
      <hr />
      {hasAdmin && (
        <div>
          <button onClick={() => deleteNews(id)}>Удалить новость</button>
          <div>
            <input
              type="checkbox"
              onChange={() => changeShowGuest({ id, showGuets })}
              id={id}
              checked={showGuets}
            />
            <label htmlFor={id}>Показывать новость для гостей</label>
          </div>
        </div>
      )}
    </div>
  );
};

const mapDispathToProps = state => ({
  userInfo: state.user
});

export default compose(connect(mapDispathToProps), authUser)(News);
