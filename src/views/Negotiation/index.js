import {
  View,
  Text,
  FlatList,
  Pressable,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from 'react-redux';
import { setNegotiatedFare } from '../../actions/negotiatedFare';
import axios from 'axios';
import { parse } from 'react-native-svg';
import { setDriverData } from '../../actions/driverData';

const tempData = [
  {
    driver_name: 'Mustaali Hussain',
    make: 'Honda Civic',
    vehicleNumber: 'GJA424',
    driver_fare: 400,
  },
  {
    driver_name: 'Muhammad Hasan',
    make: 'Land Cruiser Prado',
    vehicleNumber: 'GJA424',
    driver_fare: 400,
  },
  {
    driver_name: 'Hussain',
    make: 'Honda City',
    vehicleNumber: 'GJA424',
    driver_fare: 400,
  },
];

const Negotiation = ({ navigation }) => {
  console.log('IN NEGOTIATION');
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [showView, setShowView] = useState(true);
  const [dData, setDData] = useState([]);
  const [refreshButton, setRefreshButton] = useState(false);
  const [initailFare, setInitialFare] = useState(
    useSelector((state) => state.rideNowRequest.fare),
  );
  const rideID = useSelector((state) => state.negotiatedFare.rideID);
  const rideType = useSelector((state) => state.rideType);
  const RIDEID = {
    ride_id: rideID,
  };
  const NEGOTIATEDFARE = {
    ride_id: rideID,
    user_fare: initailFare,
  };
  const offerAcceptHandler = (id, fare, item) => {
    const ACCEPTDRIVER = {
      ride_id: rideID,
      fare: fare,
      driver_id: id,
    };
    if (rideType.rideNow == true) {
      axios
        .post(
          'https://conveygo-microservice.herokuapp.com/v1/accept-ride-user',
          ACCEPTDRIVER,
        )
        .then((res) => {
          console.log(res.data);
        });
    } else if (rideType.Delivery == true) {
      axios
        .post(
          'https://conveygo-microservice.herokuapp.com/v1/accept-ride-user-delivery',
          ACCEPTDRIVER,
        )
        .then((res) => {
          console.log(res.data);
        });
    } else if (rideType.monthlyContract == true) {
      axios
        .post(
          'https://conveygo-microservice.herokuapp.com/v1/accept-ride-user-monthly',
          ACCEPTDRIVER,
        )
        .then((res) => {
          console.log(res.data);
        });
    }
    dispatch(setDriverData(item));
    console.log('This is redux driver data');
    console.log(item);
    navigation.navigate('Arriving');
  };
  const negativeHandler = () => {
    setInitialFare(parseInt(initailFare) - 10);
  };
  const positiveHandler = () => {
    setInitialFare(parseInt(initailFare) + 10);
  };
  const negotiateHandler = () => {
    setModalVisible(!modalVisible);
    dispatch(setNegotiatedFare(initailFare));
    if (rideType.rideNow == true) {
      axios
        .post(
          'https://conveygo-microservice.herokuapp.com/v1/user-fare',
          NEGOTIATEDFARE,
        )
        .then((res) => {
          console.log(res.data);
        });
    } else if (rideType.Delivery == true) {
      axios
        .post(
          'https://conveygo-microservice.herokuapp.com/v1/user-fare-delivery',
          NEGOTIATEDFARE,
        )
        .then((res) => {
          console.log(res.data);
        });
    } else if (rideType.monthlyContract == true) {
      axios
        .post(
          'https://conveygo-microservice.herokuapp.com/v1/user-fare-monthly',
          NEGOTIATEDFARE,
        )
        .then((res) => {
          console.log(res.data);
        });
    }
  };

  const refreshHandler = async () => {
    setRefreshButton(true);
    if (rideType.rideNow == true) {
      axios
        .post(
          'https://conveygo-microservice.herokuapp.com/v1/get-drivers',
          RIDEID,
        )
        .then((res) => {
          console.log(res.data.drivers);
          setDData(res.data.drivers);
        });
    } else if (rideType.Delivery == true) {
      axios
        .post(
          'https://conveygo-microservice.herokuapp.com/v1/get-drivers-delivery',
          RIDEID,
        )
        .then((res) => {
          console.log(res.data.drivers);
          setDData(res.data.drivers);
        });
    } else if (rideType.monthlyContract == true) {
      axios
        .post(
          'https://conveygo-microservice.herokuapp.com/v1/get-drivers-monthly',
          RIDEID,
        )
        .then((res) => {
          console.log(res.data.drivers);
          setDData(res.data.drivers);
        });
    }
    setTimeout(() => {
      setRefreshButton(false);
    }, 6000);
  };

  // useEffect(() => {
  //   setDData(useSelector((state) => state.driverData));
  // },[])

  const renderItem = ({ item }) => (
    <View style={styles.offersContainer}>
      <View style={styles.OfferWrapper}>
        <View style={styles.NameVehicleWrapper}>
          <View style={styles.Name}>
            <Text style={styles.NameText}>{item.driver_name}</Text>
          </View>
          <View style={styles.Vehicle}>
            <Text style={styles.VehicleText}>{item.make}</Text>
            <Text style={styles.VehicleText}>{item.vehicleNumber}</Text>
          </View>
        </View>

        <View style={styles.amountAndBtn}>
          <View style={styles.amount}>
            <Text style={styles.amountText}>{item.driver_fare}</Text>
            <Text style={styles.amountText}>PKR</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                offerAcceptHandler(item.driverID, item.driver_fare, item);
              }}>
              <Feather
                name="check"
                color={'#000000'}
                size={25}
                style={styles.AcceptButton}></Feather>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowView(!showView)}>
              <Feather
                name="x"
                color={'#FFFFFF'}
                size={25}
                style={styles.DeclineButton}></Feather>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        visible={modalVisible}
        transparent
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalBackground}>
          <View style={styles.modalcontainer}>
            <Text style={styles.modalheading}>Choose Your Fare</Text>
            <View style={styles.negotiationWrapper}>
              <View style={styles.negotiaionbtn}>
                <TouchableOpacity onPress={negativeHandler}>
                  <Text style={styles.negotiaionbtnText}>-10</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.negotiationAmount}>
                <Text style={styles.negotiationAmountText}>PKR</Text>
                <Text
                  style={[
                    styles.negotiationAmountText,
                    { fontSize: 22, marginTop: -7 },
                  ]}>
                  {initailFare}
                </Text>
              </View>
              <View style={styles.negotiaionbtn}>
                <TouchableOpacity onPress={positiveHandler}>
                  <Text style={styles.negotiaionbtnText}>+10</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={negotiateHandler} style={styles.Okbtn}>
                <Text style={styles.OkbtnText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.headingContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="left"
            color="#000000"
            size={20}
            style={styles.chevronLeft}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.heading}>Driver's Offers</Text>
      </View>
      {/* <View style={styles.offersContainer}>
          <View style={styles.OfferWrapper}>
            <View style={styles.userImg}>
              <Image
                source={require('../../../images/author-3.jpg')}
                style={styles.driverImg}></Image>
            </View>
            <View style={styles.NameVehicleWrapper}>
              <View style={styles.Name}>
                <Text style={styles.NameText}>Muhammad Asif</Text>
              </View>
              <View style={styles.rating}>
                <Image source={require('../../../images/rating.png')}></Image>
              </View>
              <View style={styles.Vehicle}>
                <Text style={styles.VehicleText}>White Suzuki Alto</Text>
              </View>
            </View>

            <View style={styles.amount}>
              <Text style={styles.amountText}>450</Text>
              <Text style={styles.amountText}>PKR</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={offerAcceptHandler}>
                <Feather
                  name="check"
                  color={'#000000'}
                  size={25}
                  style={styles.AcceptButton}></Feather>
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather
                  name="x"
                  color={'#FFFFFF'}
                  size={25}
                  style={styles.DeclineButton}></Feather>
              </TouchableOpacity>
            </View>
          </View>
          {showView && (
            <View style={styles.OfferWrapper}>
              <View style={styles.userImg}>
                <Image
                  source={require('../../../images/author-3.jpg')}
                  style={styles.driverImg}></Image>
              </View>
              <View style={styles.NameVehicleWrapper}>
                <View style={styles.Name}>
                  <Text style={styles.NameText}>Muhammad Asif</Text>
                </View>
                <View style={styles.rating}>
                  <Image source={require('../../../images/rating.png')}></Image>
                </View>
                <View style={styles.Vehicle}>
                  <Text style={styles.VehicleText}>White Suzuki Alto</Text>
                </View>
              </View>

              <View style={styles.amount}>
                <Text style={styles.amountText}>450</Text>
                <Text style={styles.amountText}>PKR</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={offerAcceptHandler}>
                  <Feather
                    name="check"
                    color={'#000000'}
                    size={25}
                    style={styles.AcceptButton}></Feather>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowView(!showView)}>
                  <Feather
                    name="x"
                    color={'#FFFFFF'}
                    size={25}
                    style={styles.DeclineButton}></Feather>
                </TouchableOpacity>
              </View>
            </View>
          )}
          <View style={styles.OfferWrapper}>
            <View style={styles.userImg}>
              <Image
                source={require('../../../images/author-3.jpg')}
                style={styles.driverImg}></Image>
            </View>
            <View style={styles.NameVehicleWrapper}>
              <View style={styles.Name}>
                <Text style={styles.NameText}>Muhammad Asif</Text>
              </View>
              <View style={styles.rating}>
                <Image source={require('../../../images/rating.png')}></Image>
              </View>
              <View style={styles.Vehicle}>
                <Text style={styles.VehicleText}>White Suzuki Alto</Text>
              </View>
            </View>

            <View style={styles.amount}>
              <Text style={styles.amountText}>450</Text>
              <Text style={styles.amountText}>PKR</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={offerAcceptHandler}>
                <Feather
                  name="check"
                  color={'#000000'}
                  size={25}
                  style={styles.AcceptButton}></Feather>
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather
                  name="x"
                  color={'#FFFFFF'}
                  size={25}
                  style={styles.DeclineButton}></Feather>
              </TouchableOpacity>
            </View>
          </View>
        </View> */}
      <FlatList
        data={tempData}
        renderItem={renderItem}
        keyExtractor={() => Math.random(10000)}
      />
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          disabled={refreshButton}
          style={[
            styles.btnRefresh,
            refreshButton
              ? { backgroundColor: '#EFEFEF' }
              : { backgroundColor: '#FFFFFF' },
          ]}
          onPress={refreshHandler}>
          <AntDesign
            name="reload1"
            size={30}
            color="#000000"
            style={[
              styles.reload,
              refreshButton ? { color: '#9F9F9F' } : { color: '#000000' },
            ]}></AntDesign>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnConfirm}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.btnText}>Negotiate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Negotiation;
