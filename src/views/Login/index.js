import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { showMessage, hideMessage } from 'react-native-flash-message';
import { isLogged } from '../../actions/isLogged';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import { setUserId } from '../../actions/rideNowRequest';

import api from '../../services/api';
import Logo from '../../components/Logo';
// import { getStateFromPath } from '@react-navigation/native';

const Login = ({ navigation }) => {
  const user = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoader, setSplashLoader] = useState(true);
  const userDATA = useSelector((state) => state.isLogged);
  const clearstorage = async () => {
    await AsyncStorage.clear();
  };

  useEffect(() => {
    const checkUser = async () => {
      try {
        let value = await AsyncStorage.getItem('userData');
        //   yaha pe !== ayega next line mai
        const userD = JSON.parse(value);
        if (value != null) {
          dispatch(isLogged(userD));
          dispatch(setUserId(userD.userID));
          console.log(userD.firstName);
          navigation.navigate('Home');
        } else {
          console.log('splash off');
          setSplashLoader(false);
        }
      } catch (e) {
        console.log(e);
      }
    };
    setTimeout(() => {
      checkUser();
    }, 1000);
    setEmail('');
    setPassword('');
  }, []);

  //   useEffect(() => {
  //     if (isLoading === true){
  //         return(
  //             <ActivityIndicator size='large' style={{flex:1, alignItems: 'center', justifyContent: 'center'}}/>);
  //     }
  //   },[isLoading])

  const signUpHandler = () => {
    navigation.navigate('SignUp');
  };

  const forgotPassHandler = () => {
    // navigation.navigate('OnTrip');
  };

  const loginInHandler = async () => {
    setIsLoading(true);
    if (email) {
      if (password) {
        const data = {
          email: email,
          password: password,
        };
        try {
          // setIsLoading(true);
          var results = await api.loginUser(data);
          console.log(results.Message);
          if (results) {
            // setIsLoading(false);
            if (results?.Message == 'Not Verified') {
              navigation.navigate('EmailVerification', { email: email });
            } else {
              try {
                await AsyncStorage.setItem(
                  'userData',
                  JSON.stringify(results.userInfo),
                );
              } catch (e) {
                console.log(e);
              }
              dispatch(isLogged(results.userInfo));
              dispatch(setUserId(results.userInfo.userID));
              setIsLoading(false);
              console.log('This is user data from redux ' + user);
              console.log(user);
              setEmail('');
              setPassword('');
              navigation.navigate('Home');
            }
          }
        } catch (err) {
          console.log(err);
          setIsLoading(false);
          showMessage({
            message: 'Incorrect Email or Password',
            type: 'danger',
          });
        }
      } else {
        setIsLoading(false);
        showMessage({
          message: 'Password Required !!',
          type: 'danger',
        });
      }
    } else {
      setIsLoading(false);
      showMessage({
        message: 'Username Required !!',
        type: 'danger',
      });
    }
    // if(!email && !password){
    //     showMessage({
    //         message: 'Enter Username and Password',
    //         type: 'danger'
    //     })
    // }
    // else{
    //     navigation.navigate('Home');
    // }
  };
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
      <View>
        {splashLoader ? (
          <Logo />
        ) : (
          <View>
            <View style={styles.flex_row}>
              <View style={styles.medium_title_box}>
                <Text style={styles.medium_title} ellipsizeMode={'clip'}>
                  {'Welcome back!'}
                </Text>
              </View>
            </View>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
              <Text style={styles.text_body} ellipsizeMode={'clip'}>
                {'Login to your existing account of Giro'}
              </Text>
            </View>
            <View style={[styles.textInputView, styles.viewShadow]}>
              <FontAwesomeIcon icon={faUser} size={20} style={{ flex: 1 }} />

              <TextInput
                value={email}
                placeholder="Username"
                placeholderTextColor="#4f4f4f"
                style={styles.textInput}
                onChangeText={(value) => setEmail(value)}
              />
            </View>
            <View style={[styles.textInputView, styles.viewShadow]}>
              <FontAwesomeIcon icon={faLock} size={20} style={{ flex: 1 }} />

              <TextInput
                value={password}
                placeholder="Password"
                placeholderTextColor="#4f4f4f"
                secureTextEntry={true}
                style={styles.textInput}
                onChangeText={(value) => setPassword(value)}
              />
            </View>
            <View>
              <Text onPress={forgotPassHandler} style={styles.forgotPassText}>
                Forgot Password?
              </Text>
            </View>
            <View style={styles.footer}>
              <Button
                label={
                  isLoading ? (
                    <ActivityIndicator size="small" color="#000000" />
                  ) : (
                    'LOG IN'
                  )
                }
                styles={{
                  button: styles.primaryButton,
                  label: styles.buttonWhiteText,
                }}
                onPress={loginInHandler}
              />
            </View>
            <View style={styles.signUpView}>
              <Text style={styles.signUpText}>
                Don’t have an account?
                <Text onPress={signUpHandler} style={styles.signUpText}>
                  {' '}
                  Sign Up
                </Text>
              </Text>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Login;
