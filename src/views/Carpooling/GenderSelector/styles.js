import { StyleSheet } from 'react-native';
import colors from '../../../../assets/colors/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  GenderWrapper: {
    marginTop: hp('35%'),
  },
  heading: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 20,
    color: '#000000',
    alignSelf: 'center',
    margin: 10,
  },
  normalText: {
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    color: '#000000',
    paddingHorizontal: 10,
  },
  btnStyle: {
    elevation: 5,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: '60%',
  },
  icon: {
    color: '#000000',
  },
  rowStyle: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  btnConfirmWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginVertical: 20,
    // margin: 10,
  },
  btnConfirm: {
    backgroundColor: colors.yellow,
    paddingVertical: 10,
    paddingHorizontal: 100,
    marginHorizontal: 30,
    borderRadius: 30,
  },
  btnText: {
    color: colors.black,
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 18,
    alignSelf: 'center',
  },
});
