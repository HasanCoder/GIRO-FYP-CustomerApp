import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../views/Login';
import Signup from '../views/Signup';
import ForgotPassword from '../views/ForgotPassword';
import EmailVerification from '../views/EmailVerification';
import Home from '../views/Home';
import EmailVerificationSuccess from '../views/EmailVerificationSuccess';
import Startup from '../views/Startup';
import DropoffLocation from '../views/DropoffLocation/index.';
import PickupLocation from '../views/PickupLocation';
import RequestVehicle from '../views/RequestVehicle';
import Negotiation from '../views/Negotiation';
import Arriving from '../views/Arriving';
import OnTrip from '../views/OnTrip';
import Feedback from '../views/Feedback';
import Delivery from '../views/Delivery';
import DatePick from '../views/MonthlyCotractBooking/DatePick';
import DaysofWeek from '../views/MonthlyCotractBooking/DaysOfWeek';
import TimePicker from '../views/MonthlyCotractBooking/TimePicker';
import Summary from '../views/MonthlyCotractBooking/Summary';
import GenderSelector from '../views/Carpooling/GenderSelector';
import Profile from '../views/Profile';

const AuthStack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ header: () => null }}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ header: () => null }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={Signup}
        options={{ header: () => null }}
      />
      <AuthStack.Screen
        name="EmailVerification"
        component={EmailVerification}
        options={{ header: () => null }}
      />
      <AuthStack.Screen
        name="EmailVerificationSuccess"
        component={EmailVerificationSuccess}
        options={{ header: () => null }}
      />
      <AuthStack.Screen
        name="Home"
        component={Home}
        options={{ header: () => null }}
      />
      <AuthStack.Screen
        name="Dropoff"
        component={DropoffLocation}
        options={{ header: () => null }}
      />
      <AuthStack.Screen
        name="Pickup"
        component={PickupLocation}
        options={{ header: () => null }}
      />
      <AuthStack.Screen
        name="RequestVehicle"
        component={RequestVehicle}
        options={{ header: () => null }}
      />
      <AuthStack.Screen
        name="Negotiation"
        component={Negotiation}
        options={{ header: () => null }}
      />
      <AuthStack.Screen
        name="Arriving"
        component={Arriving}
        options={{ header: () => null }}
      />
      <AuthStack.Screen
        name="OnTrip"
        component={OnTrip}
        options={{ header: () => null }}
      />
      <AuthStack.Screen
        name="Feedback"
        component={Feedback}
        options={{ header: () => null }}
      />
      <AuthStack.Screen
        name="Delivery"
        component={Delivery}
        options={{ header: () => null }}></AuthStack.Screen>
      <AuthStack.Screen
        name="DatePick"
        component={DatePick}
        options={{ header: () => null }}></AuthStack.Screen>
      <AuthStack.Screen
        name="DaysOfWeek"
        component={DaysofWeek}
        options={{ header: () => null }}></AuthStack.Screen>
      <AuthStack.Screen
        name="TimePicker"
        component={TimePicker}
        options={{ header: () => null }}></AuthStack.Screen>
      <AuthStack.Screen
        name="Summary"
        component={Summary}
        options={{ header: () => null }}></AuthStack.Screen>
      <AuthStack.Screen
        name="GenderSelector"
        component={GenderSelector}
        options={{ header: () => null }}></AuthStack.Screen>
      <AuthStack.Screen
        name="Profile"
        component={Profile}
        options={{ header: () => null }}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
