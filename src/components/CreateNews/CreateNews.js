import React, { useState } from "react";
import { generateDate } from "../../helpers/generateDate";

const CreateNews = ({ createNews }) => {
  const [title, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const changeName = ({ target }) => {
    setName(target.value);
  };

  const changeDescription = ({ target }) => {
    setDescription(target.value);
  };

  const createNewNews = () => {
    if (title.length === 0 || description.length === 0) {
      setError(true);
    } else {
      const news = {
        id: Math.floor(Math.random() * (100 - 1) + 1),
        title,
        description,
        date: generateDate(),
        showGuets: false
      };
      setError(false);
      createNews(news);
      setName("");
      setDescription("");
    }
  };

  return (
    <div className="create-news">
      {error && <h5>Проверте заполнение всех полей</h5>}
      <input
        type="text"
        value={title}
        onChange={changeName}
        placeholder="Введите имя новости"
      />
      <br />
      <br />
      <textarea
        value={description}
        onChange={changeDescription}
        placeholder="Введите имя новости"
      ></textarea>
      <br />
      <button onClick={createNewNews}>Добавить новость</button>
    </div>
  );
};

export default CreateNews;
