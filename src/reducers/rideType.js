const initialState = {
    rideNow: false,
    Delivery: false,
    monthlyContract: false,
    Carpooling: false
}

const rideTypeReducer = (state = initialState, action) => {
    switch(action.type){
        case 'setRideNow':
            return {rideNow: true, Delivery: false, monthlyContract: false, Carpooling: false};
        case 'setDelivery':
            return {rideNow: false, Delivery: true, monthlyContract: false, Carpooling: false};
        case 'setMonthlyContract':
            return {rideNow: false, Delivery: false, monthlyContract: true, Carpooling: false};
        case 'setCarpooling':
            return {rideNow: false, Delivery: false, monthlyContract: false, Carpooling: true};
        default:
            return state;
    }
};

export default rideTypeReducer;