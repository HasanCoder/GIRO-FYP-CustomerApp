const locationListReducer = (state = [], action) => {
    switch(action.type){
        case 'loadLocations':
            return action.payload;
        default:
            return state;
    }
};

export default locationListReducer;