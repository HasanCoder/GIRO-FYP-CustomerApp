import loggedReducer from './isLogged'
import loadingReducer from './isLoading';
import locationListReducer from './locationList'
import rideTypeReducer from './rideType';
import { combineReducers } from 'redux'
import rideNowRequestReducer from './rideNowRequest';
import driverDataReducer from './driverData';
import negotiatedFareReducer from './negotiatedFare';

const rootReducers = combineReducers({
    isLogged: loggedReducer,
    isLoading: loadingReducer,
    locationList: locationListReducer,
    rideType: rideTypeReducer,
    rideNowRequest: rideNowRequestReducer,
    driverData: driverDataReducer,
    negotiatedFare: negotiatedFareReducer
});

export default rootReducers;