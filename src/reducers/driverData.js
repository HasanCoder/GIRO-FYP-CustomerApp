const driverDataReducer = (state = 0, action) => {
    switch(action.type){
        case 'setDriverData':
            return action.payload;
        default:
            return state;
    }
};

export default driverDataReducer;