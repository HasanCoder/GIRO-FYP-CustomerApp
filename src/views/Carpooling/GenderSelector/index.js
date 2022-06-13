import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';

const gender = ['Male', 'Female'];

function GenderSelector({ navigation }) {
  const confirmGender = () => {
    navigation.navigate('Dropoff');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.GenderWrapper}>
        <Text style={styles.heading}>Who is Travelling?</Text>
        <Text style={styles.normalText}>Gender</Text>
        <SelectDropdown
          data={gender}
          defaultButtonText="Select Gender"
          dropdownIconPosition="left"
          buttonStyle={styles.btnStyle}
          dropdownStyle={styles.rowStyle}
          onSelect={(selectedItem, index) => {}}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </View>
      <View style={styles.btnConfirmWrapper}>
        <TouchableOpacity style={styles.btnConfirm} onPress={confirmGender}>
          <Text style={styles.btnText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default GenderSelector;
