import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import { setStartDate, setEndDate } from '../../../actions/rideNowRequest';

const DatePick = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  // const [mode, setMode] = useState('date');
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  var ContinuebtnDisable = true;
  const dispatch = useDispatch();

  const onChange1 = (event, SelectedDate) => {
    const currentDate = SelectedDate || date;
    // setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    // let fTime =
    //   'Hours: ' + tempDate.getHours() + '| Minutes: ' + tempDate.getMinutes();
    setShow1(false);
    setText1(fDate);
    dispatch(setStartDate(fDate));
    setisSelected1(false);
    setisSelected2(true);
    console.log('Start Date: ' + fDate);
  };
  const onChange2 = (event, SelectedDate) => {
    const currentDate = SelectedDate || date;
    // setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    // let fTime =
    //   'Hours: ' + tempDate.getHours() + '| Minutes: ' + tempDate.getMinutes();
    setShow2(false);
    setText2(fDate);
    dispatch(setEndDate(fDate));
    console.log('End Date:' + fDate);
  };

  const [isSelected1, setisSelected1] = useState(true);
  const [isSelected2, setisSelected2] = useState(false);

  const DateConfirm = () => {
    navigation.navigate('DaysOfWeek');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.HeadingText}>Monthly Contract Booking</Text>
        <Text style={styles.captionText}>
          Book your ride for your commute to work on monthly basis
        </Text>
      </View>
      <View style={styles.center}>
        <View>
          <TouchableOpacity
            onPress={() => setShow1(true)}
            style={[styles.DateCard, isSelected1 ? styles.SelectedCard : null]}>
            <Text
              style={[
                styles.number,
                isSelected1 ? styles.SelectedNumber : null,
              ]}>
              1
            </Text>
            <View
              style={{
                flexDirection: 'column',
              }}>
              {text1 === '' ? (
                <Text style={styles.normalText}>Select Start Date</Text>
              ) : (
                <Text
                  style={[
                    styles.normalText,
                    {
                      alignSelf: 'flex-start',
                    },
                  ]}>
                  Start Date
                </Text>
              )}
              <Text style={{ color: '#757575' }}>{text1}</Text>
            </View>
            {/* <Text style={styles.normalText}>Select Start Date</Text> */}

            <Feather
              name="chevron-right"
              size={20}
              color="#757575"
              style={styles.chevron}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => setShow2(true)}
            style={[styles.DateCard, isSelected2 ? styles.SelectedCard : null]}>
            <Text
              style={[
                styles.number,
                isSelected2 ? styles.SelectedNumber : null,
              ]}>
              2
            </Text>
            <View
              style={{
                flexDirection: 'column',
              }}>
              {text2 === '' ? (
                <Text style={styles.normalText}>Select End Date</Text>
              ) : (
                <Text
                  style={[
                    styles.normalText,
                    {
                      alignSelf: 'flex-start',
                    },
                  ]}>
                  End Date
                </Text>
              )}
              <Text style={{ color: '#757575' }}>{text2}</Text>
            </View>
            <Feather
              name="chevron-right"
              size={20}
              color="#757575"
              style={styles.chevron}
            />
          </TouchableOpacity>
        </View>
        {show1 && (
          <DateTimePicker
            testID="datetimepicker1"
            value={date}
            mode="date"
            //is24Hour={true}
            display="default"
            onChange={onChange1}
            minimumDate={new Date()}
          />
        )}
        {show2 && (
          <DateTimePicker
            testID="datetimepicker2"
            value={date}
            mode="date"
            //is24Hour={true}
            display="default"
            onChange={onChange2}
            minimumDate={new Date()}
          />
        )}
      </View>
      {(ContinuebtnDisable = text1 === '' || text2 === '' ? true : false)}
      <View style={styles.Continue}>
        <TouchableOpacity
          style={styles.btnConfirm}
          onPress={DateConfirm}
          disabled={ContinuebtnDisable}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DatePick;
