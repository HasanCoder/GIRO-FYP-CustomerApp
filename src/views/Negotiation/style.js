import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    fontFamily: 'NotoSans-SemiBold',
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    padding: 8,
    flex: 1,
    marginLeft: -10,
  },
  headingContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  chevronLeft: {
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  offersContainer: {},
  OfferWrapper: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: colors.lightBlack,
    borderRadius: 10,
    paddingBottom: 10,
  },
  NameVehicleWrapper: {
    flexDirection: 'column',
    marginLeft: 11,
    marginTop: 10,
    width: '55%',
    // paddingRight: 40,
  },
  Name: {},
  NameText: {
    color: '#FFFFFF',
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 16,
    paddingRight: 10,
  },
  VehicleText: {
    color: '#FFFFFF',
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 12,
  },
  Vehicle: {
    marginTop: 5,
  },
  rating: {},
  amountAndBtn: {
    flexDirection: 'row',
    position: 'absolute',
    right: 1,
    alignSelf: 'center',
    borderLeftWidth: 2,
    borderColor: '#877FAE',
    paddingBottom: 10,
  },
  amount: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  amountText: {
    fontSize: 18,
    fontFamily: 'NotoSans-SemiBold',
    color: '#FFFFFF',
    marginBottom: -5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // width: '30%',
    marginHorizontal: 10,
  },
  AcceptButton: {
    backgroundColor: '#FFFFFF',
    marginRight: 15,
    padding: 5,
    borderRadius: 20,
  },
  DeclineButton: {
    backgroundColor: '#000000',
    padding: 5,
    borderRadius: 20,
  },
  userImg: {
    marginLeft: 8,
    marginTop: 10,
  },
  driverImg: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  btnConfirm: {
    backgroundColor: colors.yellow,
    paddingVertical: 10,
    paddingHorizontal: wp('25%'),
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 5
  },
  btnText: {
    color: colors.black,
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 18,
    alignSelf: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalcontainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: hp('33%'),
    marginTop: hp('33%'),
    marginHorizontal: 20,
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  negotiaionbtn: {
    backgroundColor: '#C4C4C4',
    borderRadius: 30,
    marginHorizontal: 10,
  },
  negotiaionbtnText: {
    padding: 10,
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 18,
    color: colors.black,
  },
  negotiationAmount: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 7,
  },
  negotiationAmountText: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 18,
    color: colors.black,
    marginHorizontal: 3,
  },
  modalheading: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: '5%',
    color: colors.black,
  },
  negotiationWrapper: {
    flexDirection: 'row',
    marginTop: '10%',
    justifyContent: 'center',
  },
  Okbtn: {
    alignSelf: 'center',
    margin: 25,
    backgroundColor: colors.yellow,
    paddingHorizontal: 40,
    paddingVertical: 5,
    borderRadius: 20,
  },
  OkbtnText: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 18,
    color: colors.black,
  },
  btnRefresh: {
    width: '15%',
    marginBottom: 20,
    marginHorizontal: 5,
    marginLeft: 10,
    borderRadius: 10,
    elevation: 5,
  },
  reload: {
    // justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  btnWrapper: {
    flexDirection: 'row',
  },
});
