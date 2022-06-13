import React, { useEffect } from 'react';
import { ScrollView, View, Image } from 'react-native';

import styles from './styles';


const Startup = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 2000);
    })

    return (

        <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>

            <View style={styles.flex_row}>
                <View style={styles.medium_title_box}>
                    <Image source={require('../../assets/images/girologo.png')} />
                </View>
            </View>

        </ScrollView>

    );
};

export default Startup;
