import React, { useState } from 'react';
import { ScrollView, Text, View, TextInput, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faLock,
  faEnvelope,
  faMobile,
} from '@fortawesome/free-solid-svg-icons';

import styles from './styles';
import Button from '../../components/Button';
import api from '../../services/api';

const Signup = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [type, setType] = useState(1);
  const [creationDate, setCreationDate] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(0);

  const goBackHandler = () => {
    navigation.goBack();
  };

  const signUpHandler = async () => {
    const data = {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      email: email,
      mobile: mobile,
      password: password,
      type: type,
      creationDate: new Date(),
      isEmailVerified: isEmailVerified,
    };

    if (password != confirmPassword) {
      Alert.alert('Error', "Passwords don't match");
    } else {
      const result = await api.signUpUser(data);
      if (result) {
        Alert.alert('Success', result.userID);
        navigation.navigate('Login');
      }
    }
  };
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.flex_row}>
        <View style={styles.medium_title_box}>
          <Text style={styles.medium_title} ellipsizeMode={'clip'}>
            {"Let's Get Started"}
          </Text>
        </View>
      </View>
      <View style={[styles.text_body_box, styles.text_body_box_layout]}>
        <Text style={styles.text_body} ellipsizeMode={'clip'}>
          {'Create an account of Giro to get all features'}
        </Text>
      </View>
      <View style={[styles.textInputView, styles.viewShadow]}>
        <FontAwesomeIcon icon={faUser} size={20} style={{ flex: 1 }} />
        <TextInput
          placeholder="First Name"
          placeholderTextColor="#4f4f4f"
          style={styles.textInput}
          onChangeText={(value) => setFirstName(value)}
        />
      </View>
      <View style={[styles.textInputView, styles.viewShadow]}>
        <FontAwesomeIcon icon={faUser} size={20} style={{ flex: 1 }} />
        <TextInput
          placeholder="Middle Name"
          placeholderTextColor="#4f4f4f"
          style={styles.textInput}
          onChangeText={(value) => setMiddleName(value)}
        />
      </View>
      <View style={[styles.textInputView, styles.viewShadow]}>
        <FontAwesomeIcon icon={faUser} size={20} style={{ flex: 1 }} />
        <TextInput
          placeholder="Last Name"
          placeholderTextColor="#4f4f4f"
          style={styles.textInput}
          onChangeText={(value) => setLastName(value)}
        />
      </View>
      <View style={[styles.textInputView, styles.viewShadow]}>
        <FontAwesomeIcon icon={faEnvelope} size={20} style={{ flex: 1 }} />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#4f4f4f"
          style={styles.textInput}
          onChangeText={(value) => setEmail(value)}
        />
      </View>
      <View style={[styles.textInputView, styles.viewShadow]}>
        <FontAwesomeIcon icon={faMobile} size={20} style={{ flex: 1 }} />
        <TextInput
          placeholder="Phone"
          placeholderTextColor="#4f4f4f"
          style={styles.textInput}
          onChangeText={(value) => setMobile(value)}
        />
      </View>
      <View style={[styles.textInputView, styles.viewShadow]}>
        <FontAwesomeIcon icon={faLock} size={20} style={{ flex: 1 }} />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#4f4f4f"
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <View style={[styles.textInputView, styles.viewShadow]}>
        <FontAwesomeIcon icon={faLock} size={20} style={{ flex: 1 }} />

        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#4f4f4f"
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={(value) => setConfirmPassword(value)}
        />
      </View>
      <View style={styles.footer}>
        <Button
          label="SIGN UP"
          styles={{
            button: styles.primaryButton,
            label: styles.buttonWhiteText,
          }}
          onPress={signUpHandler}
        />
      </View>
      <View style={styles.signUpView}>
        <Text style={styles.signUpText}>
          Already have an account?{' '}
          <Text onPress={goBackHandler} style={styles.signUpText}>
            {' '}
            Log In
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;
