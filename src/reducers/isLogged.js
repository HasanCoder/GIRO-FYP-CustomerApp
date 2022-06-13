const loggedReducer = (state = 0, action) => {
    switch(action.type){
        case 'loggedIn':
            return action.payload;
        default:
            return state;
    }
};

export default loggedReducer;