const initialState = {
    authUser: true,
    user: {
        login: 'admin',
        password: '123123',
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOG_OUT':
            const user = Object.assign({}, state);
            user.authUser = false
            return { state, ...user};
        default:
            return state;
    }
}

export default reducer;