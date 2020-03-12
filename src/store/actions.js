export const logOutUser = () => ({
  type: "USER_LOG_OUT"
});

export const addNewNews = payload => ({
  type: "ADD_NEWS",
  payload
});

export const deleteNews = payload => ({
  type: "DELETE_NEWS",
  payload
});

export const changeShowGuest = payload => ({
  type: "CHANGE_GUEST",
  payload
});
