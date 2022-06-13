import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import Map from '../../components/Map';
import { useSelector } from 'react-redux';

const OnTrip = ({ navigation }) => {
  const driverData = useSelector((state) => state.driverData)
  const feedbackHandler = () => {
    navigation.navigate('Feedback');
  };
  return (
    <View style={styles.conatiner}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>On Trip</Text>
      </View>
      <View style={styles.mapContainer}>
        <Map />
      </View>
      <View style={styles.driverImageContainer}>
        <View style={styles.driverImageWrapper}>
          <Image
            style={styles.driverImage}
            source={require('../../../images/user_placeholder.jpg')}></Image>
        </View>
      </View>
      <View style={styles.driverContainer}>
        <View style={styles.driverDetails}>
          <View style={styles.driverName}>
            <Text style={styles.NameText}>{driverData.driver_name}</Text>
          </View>
          <View style={styles.driverRatingWrapper}>
            <Image
              style={styles.driverRating}
              source={require('../../../images/rating.png')}></Image>
          </View>
        </View>
        <View style={styles.vehicleDetails}>
          <Text style={styles.vehicleno}>{driverData.vehicleNumber}</Text>
          <Text style={styles.vehicleName}>{driverData.make}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.RateButton} onPress={feedbackHandler}>
          <Text style={styles.ContactButtonText}>Rate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default OnTrip;
