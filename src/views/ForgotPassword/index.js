import React from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


import Button from '../../components/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
const ForgotPassword = ({ navigation }) => {

    const signUpHandler = () => {
        navigation.navigate('SignUp');
    }
    const forgotPassHandler = () => {

    }
    const loginInHandler = () => {

    }
    return (

        <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>

            <View style={styles.flex_row}>
                <View style={styles.medium_title_box}>
                    <Text style={styles.medium_title} ellipsizeMode={'clip'}>
                        {'Forgot Password'}
                    </Text>
                </View>
            </View>

            <View style={[styles.textInputView, styles.viewShadow]}>
                <FontAwesomeIcon icon={faEnvelope} size={20} style={{ flex: 1 }} />

                <TextInput
                    placeholder="Enter Your Email Address"
                    style={styles.textInput}
                />
            </View>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
                <Text style={styles.text_body} ellipsizeMode={'clip'}>
                    {'We will send you a link to reset your password.'}
                </Text>

            </View>
            <View style={styles.footer}>
                <Button
                    label="Send Code"
                    styles={{ button: styles.primaryButton, label: styles.buttonWhiteText }}
                    onPress={loginInHandler} />
            </View>

        </ScrollView>

    );
};

export default ForgotPassword;
