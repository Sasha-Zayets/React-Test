const initialState = {
  authUser: true,
  user: {
    login: "admin",
    password: "123123",
    admin: true
  },
  newsList: [
    {
      id: 0,
      title: "News",
      description: "lorem text",
			date: "16.10.2020",
			showGuets: true,
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOG_OUT":
      const user = Object.assign({}, state);
      user.authUser = false;
      return { state, ...user };
    case "ADD_NEWS":
      let news = state.newsList.map(item => item);
      news.unshift(action.payload);

      return {
        ...state,
        newsList: news
      };
    case "DELETE_NEWS":
      const id = action.payload;
      const newNews = state.newsList.filter(item => item.id !== id);
      return {
        ...state,
        newsList: newNews
			};
		case "CHANGE_GUEST":
			{
				const { id, showGuets } = action.payload;
				const newNews = state.newsList.map(item => {
					if (item.id === id) {
						item.showGuets = !showGuets;
						return item;
					}
					return item;
				});
				return {
					...state,
					newsList: newNews
				}
			}
    default:
      return state;
  }
};

export default reducer;
