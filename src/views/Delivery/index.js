import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import styles from '../Delivery/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { setFare } from '../../actions/rideNowRequest';
import { setRideId } from '../../actions/negotiatedFare';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Delivery = ({ navigation }) => {
  const locList = useSelector((state) => state.locationList);
  const toLoc = useSelector((state) => state.rideNowRequest.dropoff_id);
  const fromLoc = useSelector((state) => state.rideNowRequest.pickup_id);
  let dropoff, pickup;
  for (let i = 0; i < locList.length; i++) {
    if (toLoc == i + 1) {
      dropoff = locList[i].address;
    }
    if (fromLoc == i + 1) {
      pickup = locList[i].address;
    }
  }

  const dispatch = useDispatch();
  const { user_id, dropoff_id, pickup_id, fare } = useSelector(
    (state) => state.rideNowRequest,
  );
  const rideReq = {
    user_id: user_id,
    from_location: pickup_id,
    to_location: dropoff_id,
    fare: fare,
    vehicle_type: 5,
  };
  const [fareValue, setFareValue] = useState('');
  const PlaceOrder = async () => {
    axios
      .post(
        'https://conveygo-microservice.herokuapp.com/v1/deliver-now',
        rideReq,
      )
      .then((res) => {
        dispatch(setRideId(res.data?.rideId));
        console.log(res.data?.rideId);
        navigation.navigate('Negotiation');
      });
  };

  const fareHandler = (value) => {
    setFareValue(value);
    dispatch(setFare(value));
  };
  return (
    <ScrollView
      style={styles.container}
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
        <Text style={styles.headerText}>Order Confirmation</Text>
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
      </View>
      <View style={styles.FareWrapper}>
        <Text style={styles.LocationHeading}>Choose Your Fare</Text>
        <View style={styles.recommendedFare}>
          <Text style={styles.NormalText}>Enter Your Fare</Text>
          <TextInput
            placeholder=" Fare "
            value={fareValue}
            placeholderTextColor="#000000"
            keyboardType="number-pad"
            style={styles.FareInput}
            onChangeText={(value) => {
              fareHandler(value);
            }}></TextInput>
        </View>
      </View>
      <View style={styles.instructions}>
        <View style={styles.pencilIcon}>
          <MaterialCommunityIcons
            name="pencil"
            color="#666666"
            size={25}></MaterialCommunityIcons>
        </View>
        <View style={styles.addInstruction}>
          <Text style={[styles.LocationHeading, { fontSize: 16 }]}>
            Instructions
          </Text>
          <TextInput
            placeholder="Add Instructions"
            placeholderTextColor="#B0B0B0"
            style={styles.placeholder}></TextInput>
        </View>
      </View>
      <View style={styles.warning}>
        <AntDesign
          name="exclamationcircleo"
          size={24}
          color="#000000"></AntDesign>
        <Text style={styles.warningText}>
          Rider must be paid in cash at drop off location for the total value
        </Text>
      </View>
      <View style={styles.btnConfirmWrapper}>
        <TouchableOpacity style={styles.btnConfirm} onPress={PlaceOrder}>
          <Text style={styles.btnText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Delivery;
