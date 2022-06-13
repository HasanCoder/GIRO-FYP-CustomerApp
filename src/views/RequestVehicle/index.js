import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import Map from '../../components/Map';
import RBSheet from 'react-native-raw-bottom-sheet';
import styles from './styles';
import { faBorderStyle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setFare, setVehicleId } from '../../actions/rideNowRequest';
import { setRideId } from '../../actions/negotiatedFare';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../../assets/colors/color';
import { color } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
export default function RequestVehicle({ navigation }) {
  const locList = useSelector((state) => state.locationList);
  const toLoc = useSelector((state) => state.rideNowRequest.dropoff_id);
  const fromLoc = useSelector((state) => state.rideNowRequest.pickup_id);
  let dropoff, pickup;
  for (let i = 0; i < locList.length; i++){
    if (toLoc == i+1){
      dropoff = locList[i].address;
    }
    if (fromLoc == i+1){
      pickup = locList[i].address;
    }
  }
  if (dropoff.length > 50) dropoff = dropoff.slice(0, 50) + '...';
  if (pickup.length > 50) pickup = pickup.slice(0, 50) + '...';
  const {user_id ,dropoff_id, pickup_id, fare, vehicle_typeID} = useSelector((state) => state.rideNowRequest);
  const rideReq = {
    user_id: user_id,
    from_location: pickup_id,
    to_location: dropoff_id,
    fare: fare,
    vehicle_type: vehicle_typeID,
  };
  const [fareValue, setFareValue] = useState('');
  const [vehiclebtn, setVehiclebtn] = useState(1);
  const [isloader, setisloader] = useState(false);
  const [ShowOptionsbtnVisible, setShowOptionsbtnVisible] = useState(true);
  const dispatch = useDispatch();
  const refRBSheet = useRef();
  useEffect(() => {
    refRBSheet.current.open();
  });
  const vehicleTypeHandler = (typeID) => {
    setVehiclebtn(typeID);
    dispatch(setVehicleId(typeID));
  };
  const confirmRideHandler = async () => {
    setisloader(true);
    axios
      .post('https://conveygo-microservice.herokuapp.com/v1/ride-now', rideReq)
      .then((res) => {
        dispatch(setRideId(res.data?.rideId));
        setisloader(false);
        console.log(res.data?.rideId);
        navigation.navigate('Negotiation');
      });
  };
  const fareHandler = (value) => {
    setFareValue(value);
    dispatch(setFare(value));
  };
  return (
    <View
      style={{
        height: '100%',
      }}>
      <Map />
      <Text style={styles.requestvehicle}>Request Vehicle</Text>
      {ShowOptionsbtnVisible && (
        <View style={styles.showOptions}>
          <TouchableOpacity
            style={styles.ShowOptionsbtn}
            onPress={() => {
              refRBSheet.current.open();
              setShowOptionsbtnVisible(true);
            }}>
            <Feather name="chevrons-up" color="#000000" size={30}></Feather>
          </TouchableOpacity>
        </View>
      )}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnPressMask={false}
        closeOnPressBack={true}
        height={400}
        customStyles={styles.RBsheet}>
        <Text style={styles.selectVehicle}>Select Vehicle</Text>
        <View style={{ height: 85 }}>
          <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.vehicleContainer}>
              <TouchableOpacity
                style={[
                  styles.vehicleCard,
                  {
                    backgroundColor:
                    vehiclebtn != 1 ? '#F5E9A6' : colors.yellow,
                  },
                ]}
                onPress={() => {
                  vehicleTypeHandler(1);
                }}>
                <Image
                  source={require('../../../images/EcoCar.png')}
                  style={[styles.vehicleCardImg, styles.EcoImg]}></Image>
                <Text style={styles.vehicleCardText}>Eco</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.vehicleCard,
                  {
                    backgroundColor:
                      vehiclebtn === 2 ? colors.yellow : '#F5E9A6',
                  },
                ]}
                onPress={() => {
                  vehicleTypeHandler(2);
                }}>
                <Image
                  source={require('../../../images/StandardCar.png')}
                  style={styles.vehicleCardImg}></Image>
                <Text style={styles.vehicleCardText}>Standard</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.vehicleCard,
                  {
                    backgroundColor:
                      vehiclebtn === 3 ? colors.yellow : '#F5E9A6',
                  },
                ]}
                onPress={() => {
                  vehicleTypeHandler(3);
                }}>
                <Image
                  source={require('../../../images/PremiumCar.png')}
                  style={styles.vehicleCardImg}></Image>
                <Text style={styles.vehicleCardText}>Premium</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.vehicleCard,
                  {
                    backgroundColor:
                      vehiclebtn === 5 ? colors.yellow : '#F5E9A6',
                  },
                ]}
                onPress={() => {
                  vehicleTypeHandler(5);
                }}>
                <Image
                  source={require('../../../images/Bike.png')}
                  style={[styles.vehicleCardImg, styles.BikeImg]}></Image>
                <Text style={styles.vehicleCardText}>Bike</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.vehicleCard,
                  {
                    backgroundColor:
                      vehiclebtn === 4 ? colors.yellow : '#F5E9A6',
                  },
                ]}
                onPress={() => {
                  vehicleTypeHandler(4);
                }}>
                <Image
                  source={require('../../../images/Auto.png')}
                  style={[styles.vehicleCardImg, styles.AutoImg]}></Image>
                <Text style={styles.vehicleCardText}>Auto</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={styles.hr} />
        <Text style={styles.selectVehicle}>Choose your Fare</Text>
        <View style={{ paddingLeft: '5%' }}>
          <TextInput
            style={styles.fareInput}
            value={fareValue}
            placeholder="Enter Your Fare"
            placeholderTextColor="#9F9F9F"
            placeholderStyle={styles.placeholder}
            onChangeText={(value) => {
              fareHandler(value);
            }}
            keyboardType="numeric"></TextInput>
        </View>
        <View style={styles.hr} />
        <View style={styles.pickndropContainer}>
          <Image
            source={require('../../../images/pickupPointer.png')}
            style={styles.pointers}
          />
          <View style={styles.pickndropWrapper}>
            <View style={styles.pickupWrapper}>
              <Text style={styles.pickndropText}>Pickup</Text>
              <Text style={styles.location}>
                {pickup}
              </Text>
            </View>
            <View style={styles.DropoffWrapper}>
              <Text style={styles.pickndropText}>Dropoff</Text>
              <Text style={styles.location}>
                {dropoff}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.ConfirmVehicle}>
          <TouchableOpacity
            style={styles.btnConfirm}
            onPress={confirmRideHandler}>
            <Text style={styles.btnText}>
              {isloader ? (
                <ActivityIndicator
                  size="large"
                  color="#000000"
                  style={styles.btnText}
                />
              ) : (
                'Confirm Your Ride'
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
}
