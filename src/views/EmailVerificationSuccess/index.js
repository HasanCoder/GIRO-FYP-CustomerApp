import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
const EmailVerificationSuccess = ({ navigation }) => {

    const continueHandler = () => {
        navigation.navigate('Login');
    }
    return (
        <View>
            <View style={styles.flex_row}>
                <View style={styles.medium_title_box}>
                    <Text style={styles.medium_title} ellipsizeMode={'clip'}>
                        {'Email Verification Successfull'}
                    </Text>
                </View>
            </View>

            <View style={styles.footer}>
                <Button
                    label="Continue"
                    styles={{ button: styles.primaryButton, label: styles.buttonWhiteText }}
                    onPress={continueHandler} />
            </View>
        </View>
    )
}

export default EmailVerificationSuccess;