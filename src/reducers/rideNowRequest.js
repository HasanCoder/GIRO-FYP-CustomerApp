const initialState = {
    user_id: 0,
    dropoff_id: 0,
    pickup_id: 0,
    fare: 0,
    vehicle_typeID: 1,
    start_date: '',
    end_date: '',
    time: '',
    days: []
}

const rideNowRequestReducer = (state = initialState, action) => {
    switch(action.type){
        case 'setUserId':
            return {...state, user_id: action.payload};
        case 'setDropoffId':
            return {...state, dropoff_id: action.payload};
        case 'setPickupId':
            return {...state, pickup_id: action.payload};
        case 'setFare':
            return {...state, fare: action.payload};
        case 'setVehicleId':
            return {...state, vehicle_typeID: action.payload};
        case 'setStartDate':
            return {...state, start_date: action.payload};
        case 'setEndDate':
            return {...state, end_date: action.payload};
        case 'setTime':
            return {...state, time: action.payload};
        case 'setDays':
            return {...state, days: action.payload};
        default:
            return state;
    }
};

export default rideNowRequestReducer;