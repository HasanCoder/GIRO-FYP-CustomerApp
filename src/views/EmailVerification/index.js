import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'


import Button from '../../components/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

import api from '../../services/api'


const EmailVerification = ({ route, navigation }) => {

    const [email, setEmail] = useState(route?.params?.email);
    const [verificationCode, setVerificationCode] = useState('');
    const [userEntertedCode, setUserEntertedCode] = useState('');

    console.log(route?.params?.email);
    useEffect(() => {
        async function sendemail() {
            const result = await api.verifyEmail({ email: email });
            setVerificationCode(result.code);
        }

        sendemail();
    }, [])

    const otpverify = async () => {
        if (verificationCode == userEntertedCode) {
            Alert.alert("Success");
            const result = await api.confirmEmail({ email: email });
            console.log(result);
            navigation.navigate("EmailVerificationSuccess");
        }
        else {
            Alert.alert("Error");
        }
    }

    return (

        <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>

            <View style={styles.flex_row}>
                <View style={styles.medium_title_box}>
                    <Text style={styles.medium_title} ellipsizeMode={'clip'}>
                        {'Email Verification'}
                    </Text>
                </View>
            </View>

            <View style={[styles.textInputView, styles.viewShadow]}>
                {/* <FontAwesomeIcon icon={faClipboardCheck} size={20} style={{ flex: 1 }} /> */}

                <TextInput
                    placeholder="Enter OTP"
                    style={styles.textInput}
                    onChangeText={(value) => setUserEntertedCode(value)}
                />
            </View>
            <View style={[styles.text_body_box, styles.text_body_box_layout]}>
                <Text style={styles.text_body} ellipsizeMode={'clip'}>
                    {'A code has been sent to your registered email.'}
                </Text>

            </View>
            <View style={styles.footer}>
                <Button
                    label="Verify"
                    styles={{ button: styles.primaryButton, label: styles.buttonWhiteText }}
                    onPress={otpverify} />
            </View>

        </ScrollView>

    );
};

export default EmailVerification;
