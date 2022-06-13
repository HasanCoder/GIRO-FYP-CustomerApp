import { StyleSheet } from 'react-native';
import colors from '../../../../assets/colors/color';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {},
  headingText: {
    color: colors.black,
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 20,
  },
  chevron: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
    elevation: 10,
    width: '10.5%',
    //height: '9%',
    margin: 10,
    marginHorizontal: 15,
  },
  chevronicon: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Headingwrapper: {
    margin: 10,
    marginHorizontal: 20,
  },
  day: { backgroundColor: '#E2E2E2' },
  WeekdayPicker: {
    marginTop: hp('30%'),
  },
  btnConfirm: {
    backgroundColor: colors.yellow,
    paddingVertical: 10,
    paddingHorizontal: 100,
    marginBottom: 20,
    borderRadius: 30,
    marginHorizontal: 20,
  },
  btnText: {
    color: colors.black,
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 18,
    alignSelf: 'center',
  },
  Continue: {
    marginTop: hp('40%'),
  },
});
