import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import styles from '../Summary/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { setFare } from '../../../actions/rideNowRequest';
import { useDispatch, useSelector } from 'react-redux';
import { setRideId } from '../../../actions/negotiatedFare';
import axios from 'axios';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Summary = ({ navigation }) => {

  const locList = useSelector((state) => state.locationList);
  const toLoc = useSelector((state) => state.rideNowRequest.dropoff_id);
  const fromLoc = useSelector((state) => state.rideNowRequest.pickup_id);
  const startDate = useSelector((state) => state.rideNowRequest.start_date);
  const endDate = useSelector((state) => state.rideNowRequest.end_date);
  const Time = useSelector((state) => state.rideNowRequest.time);
  const Days = useSelector((state) => state.rideNowRequest.days);
  const userId = useSelector((state) => state.rideNowRequest.user_id);
  const [userFare, setUserFare] = useState('');
  const dispatch = useDispatch();
  let dropoff, pickup;
  for (let i = 0; i < locList.length; i++){
    if (toLoc == i+1){
      dropoff = locList[i].address;
    }
    if (fromLoc == i+1){
      pickup = locList[i].address;
    }
  }
  const confirmHandler = () => {
    const monthlyData = {
      'user_id': userId,
      'to_location': toLoc,
      'from_location': fromLoc,
      'fare': userFare,
      'vehicle_type': 1,
      'start_date': startDate,
      'end_date': endDate,
      'time': Time
    }
    axios
      .post(
        'https://conveygo-microservice.herokuapp.com/v1/monthly-booking',
        monthlyData,
      )
      .then((res) => {
        dispatch(setRideId(res.data?.rideId));
        console.log(res.data?.rideId);
        navigation.navigate('Negotiation');
      });
  }
  const fareHandler = (value) => {
    setUserFare(value);
    dispatch(setFare(value));
  }
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              name="left"
              color="#000000"
              size={20}
              style={styles.chevronLeft}></AntDesign>
          </TouchableOpacity>
          <Text style={styles.headerText}>Monthly Booking Confirmation</Text>
        </View>

        <View style={styles.Contractdetails}>
          <Text style={styles.LocationHeading}>Monthly Contract</Text>
          <View style={styles.dates}>
            <Entypo
              name="calendar"
              size={20}
              color="#858585"
              style={styles.calendarIcon}></Entypo>
            {/* Start DATE END DATE YAHAN LAGADO */}
            <Text style={styles.greyText}>{startDate} - {endDate}</Text>
          </View>
          <View style={styles.DaysOfWeek}>
            <MaterialCommunityIcons
              name="view-week"
              size={20}
              color="#858585"
              style={styles.calendarIcon}
            />
            {/* DAYS OF WEEK YAHAN DAAL  */}
            <Text style={styles.greyText}>{Days}</Text>
          </View>
        </View>
        <View style={styles.LocationsWrapper}>
          <Text style={styles.LocationHeading}>Location</Text>
          <View style={styles.pickup}>
            <Text style={[styles.LocationHeading, { fontSize: 16 }]}>
              {pickup}
            </Text>
          </View>
          <AntDesign
            name="arrowdown"
            color="#ABABAB"
            size={30}
            style={styles.arrowdown}></AntDesign>
          <View style={styles.dropoff}>
            <Text style={[styles.LocationHeading, { fontSize: 16 }]}>
              {dropoff}
            </Text>
          </View>
          <View style={styles.pickupTime}>
            <Feather
              name="clock"
              size={20}
              color="#858585"
              style={styles.calendarIcon}
            />
            {/* PICKUP TIME YAHAN DAAL  */}
            <Text style={styles.greyText}>Pickup Time: {Time}</Text>
          </View>
        </View>
        <View style={styles.FareWrapper}>
          <Text style={styles.LocationHeading}>Choose Your Fare</Text>
          <View style={styles.recommendedFare}>
            <Text style={styles.NormalText}>Enter Your Fare</Text>
            <TextInput
              value={userFare}
              placeholder=" PKR "
              placeholderTextColor="#000000"
              keyboardType="number-pad"
              onChangeText={(value) => {
                fareHandler(value);
              }}
              style={styles.FareInput}></TextInput>
          </View>
        </View>

        <View style={styles.btnConfirmWrapper}>
          <TouchableOpacity style={styles.btnConfirm} onPress={confirmHandler}>
            <Text style={styles.btnText}>Confirm Booking</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Summary;
