import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import { setTime } from '../../../actions/rideNowRequest';

export default TimePicker = ({ navigation }) => {
  const [isSelected, setisSelected] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  var ContinuebtnDisable = true;
  const onChange = (event, SelectedDate) => {
    const currentDate = SelectedDate || date;
    function addZero(i) {
      if (i < 10) {
        i = '0' + i;
      }
      return i;
    }
    // setDate(currentDate);
    let tempDate = new Date(currentDate);

    // let fDate =
    //   tempDate.getDate() +
    //   '/' +
    //   (tempDate.getMonth() + 1) +
    //   '/' +
    //   tempDate.getFullYear();
    let fTime =
      addZero(tempDate.getHours()) + ' : ' + addZero(tempDate.getMinutes());
    setShow(false);
    setText(fTime);
    dispatch(setTime(fTime));
    setTime(text);
    setisSelected(false);

    console.log('Time:' + fTime);
  };
  const TimeConfirm = () => {
    navigation.navigate('Dropoff');
  };
  return (
    <View style={styles.container}>
      <View style={styles.chevron}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather
            name="chevron-left"
            size={20}
            color="#000000"
            style={styles.chevronicon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.Headingwrapper}>
        <Text style={styles.headingText}>Select Pickup Time</Text>
      </View>
      <View style={styles.center}>
        <View>
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={[styles.DateCard, isSelected ? styles.SelectedCard : null]}>
            <Text
              style={[
                styles.number,
                isSelected ? styles.SelectedNumber : null,
              ]}>
              1
            </Text>
            <View
              style={{
                flexDirection: 'column',
              }}>
              {text === '' ? (
                <Text style={styles.normalText}>Select Pickup Time</Text>
              ) : (
                <Text
                  style={[
                    styles.normalText,
                    {
                      alignSelf: 'flex-start',
                    },
                  ]}>
                  Pickup Time
                </Text>
              )}
              <Text style={{ color: '#757575' }}>{text}</Text>
            </View>
            {/* <Text style={styles.normalText}>Select Start Date</Text> */}

            <Feather
              name="chevron-right"
              size={20}
              color="#757575"
              style={styles.chevronright}
            />
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            testID="datetimepicker1"
            value={date}
            mode="time"
            is24Hour={true}
            display="spinner"
            onChange={onChange}
          />
        )}
      </View>
      {(ContinuebtnDisable = text === '' ? true : false)}
      <View style={styles.Continue}>
        <TouchableOpacity
          style={styles.btnConfirm}
          onPress={TimeConfirm}
          disabled={ContinuebtnDisable}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
