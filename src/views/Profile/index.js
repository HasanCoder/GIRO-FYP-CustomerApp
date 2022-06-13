import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isLogged } from '../../actions/isLogged';
import { useDispatch } from 'react-redux';
const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const clearstorage = async () => {
    await AsyncStorage.clear();
  };
  const logoutHandler = () => {
    clearstorage();
    dispatch(isLogged(0));
    navigation.navigate('Login');
  };
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="left"
            color="#000000"
            size={20}
            style={styles.chevronLeft}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('../../../images/user.jpg')}
          style={styles.userProfile}></Image>
      </View>
      <View style={styles.nameWrapper}>
        <Text style={styles.username}>Muhammad Hasan</Text>
      </View>
      <View style={styles.textWrapper}>
        <Feather name="mail" color="#989898" size={20} />
        <Text style={styles.text}>mhasanbvs@gmail.com</Text>
      </View>
      <View style={styles.textWrapper}>
        <Feather name="phone" color="#989898" size={20} />
        <Text style={styles.text}>0300-12345678</Text>
      </View>
      <View style={styles.textWrapper}>
        <Feather name="user" color="#989898" size={20} />
        <Text style={styles.text}>Male</Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: 30,
          marginHorizontal: 20,
        }}>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={logoutHandler}>
          <MaterialCommunityIcons
            name="exit-to-app"
            size={25}
            color="#FF0000"
            style={{
              transform: [{ rotateY: '180deg' }],
              paddingHorizontal: 10,
            }}
          />
          <Text style={[styles.text, styles.red]}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
