import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  KeyboardAwareScrollView,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { Rating } from 'react-native-ratings';
import styles from './styles';
import Map from '../../components/Map';
import { colors } from 'react-native-elements';
import { useSelector } from 'react-redux';

const Feedback = ({ navigation }) => {
  const driverData = useSelector((state) => state.driverData);
  const HomePage = () => {
    navigation.navigate('Home');
  };
  const ratingCompleted = (rating) => {
    console.log('Rating is ' + rating);
  };
  return (
    <ScrollView contentContainerStyle={styles.conatiner}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Feedback</Text>
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
        </View>
      </View>
      <View style={styles.driverRatingWrapper}>
        <Rating
          ratingCount={5}
          imageSize={30}
          startingValue={4}
          showRating
          onFinishRating={ratingCompleted}
        />
        {/* <Image
          style={styles.driverRating}
          source={require('../../../images/ratingbig.png')}></Image>
        <Text
          style={{
            color: colors.black,
            fontSize: 15,
            fontFamily: 'Inter-Regular',
            marginTop: '4%',
          }}>
          Excellent
        </Text> */}
      </View>
      <View>
        <TextInput
          placeholder="Message"
          placeholderTextColor="#8D8D8D"
          style={styles.message}></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.RateButton} onPress={HomePage}>
          <Text style={styles.ContactButtonText}>Rate</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Feedback;
