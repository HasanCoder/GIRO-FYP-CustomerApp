import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import WeekdayPicker from 'react-native-weekday-picker';
import { useDispatch } from 'react-redux';
import { setDays } from '../../../actions/rideNowRequest';

export default function DaysofWeek({ navigation }) {
  //let days = { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0, 0: 0 };
  const dispatch = useDispatch();
  const [weekdays, setWeekdays] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    0: 0,
  });
  let DAYS = [];
  const [state, setState] = useState(false);
  const [Days, setDayss] = useState([]);
  const handleChange = (days) => {
    setState(true);
    setWeekdays(days);
    console.log(days)
    if (weekdays['0'] == 1){
      DAYS = [...DAYS, 'Sunday'];
      setDayss(DAYS);
    }
    if (weekdays['0'] == 0){
      var myIndex = Days.indexOf('Sunday');
      Days.splice(myIndex, 1)
    }
    if (weekdays['1'] == 1){
      DAYS = [...DAYS, 'Monday'];
      setDayss(DAYS);
    }
    if (weekdays['1'] == 0){
      var myIndex = Days.indexOf('Monday');
      Days.splice(myIndex, 1)
    }
    if (weekdays['2'] == 1){
      DAYS = [...DAYS, 'Tuesday'];
      setDayss(DAYS);
    }
    if (weekdays['2'] == 0){
      var myIndex = Days.indexOf('Tuesday');
      Days.splice(myIndex, 1)
    }
    if (weekdays['3'] == 1){
      DAYS = [...DAYS, 'Wednesday'];
      setDayss(DAYS);
    }
    if (weekdays['3'] == 0){
      var myIndex = Days.indexOf('Wednesday');
      Days.splice(myIndex, 1)
    }
    if (weekdays['4'] == 1){
      DAYS = [...DAYS, 'Thursday'];
      setDayss(DAYS);
    }
    if (weekdays['4'] == 0){
      var myIndex = Days.indexOf('Thursday');
      Days.splice(myIndex, 1)
    }
    if (weekdays['5'] == 1){
      DAYS = [...DAYS, 'Friday'];
      setDayss(DAYS);
    }
    if (weekdays['5'] == 0){
      var myIndex = Days.indexOf('Friday');
      Days.splice(myIndex, 1)
    }
    if (weekdays['6'] == 1){
      DAYS = [...DAYS, 'Saturday'];
      setDayss(DAYS);
    }
    if (weekdays['6'] == 0){
      var myIndex = Days.indexOf('Saturday');
      Days.splice(myIndex, 1)
    }
    dispatch(setDays(DAYS));
    console.log(DAYS);
  };
  const DaysConfirm = () => {
    navigation.navigate('TimePicker');
  };
  useEffect(() => {
    setState(false);
  });
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
        <Text style={styles.headingText}>Select Days of Week</Text>
      </View>
      <View style={styles.WeekdayPicker}>
        <WeekdayPicker
          days={weekdays}
          onChange={handleChange}
          style={styles.picker}
          dayStyle={styles.day}
        />
      </View>
      <View style={styles.Continue}>
        <TouchableOpacity style={styles.btnConfirm} onPress={DaysConfirm}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
