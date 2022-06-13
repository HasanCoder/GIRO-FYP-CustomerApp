const initialState = {
    'rideID': 0,
    'negotiatedFare': 0
}

const negotiatedFareReducer = (state = initialState, action) => {
    switch(action.type){
        case 'setRideId':
            return {...state, rideID:action.payload};
        case 'setNegotiatedFare':
            return {...state, negotiatedFare:action.payload};
        default:
            return state;
    }
};

export default negotiatedFareReducer;