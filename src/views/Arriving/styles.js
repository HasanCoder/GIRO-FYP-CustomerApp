import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headingContainer: {
    marginTop: '3%',
  },
  headingText: {
    fontFamily: 'NotoSans-SemiBold',
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    padding: 8,
  },
  mapContainer: {
    height: hp('60%'),
  },
  driverImageContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 70,
    width: '30%',
    zIndex: 1,
    marginTop: '-18%',
  },
  driverImageWrapper: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  driverImage: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  driverContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  driverDetails: {
    marginLeft: 20,
  },
  driverName: {},
  NameText: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 20,
    color: 'black',
  },
  driverRatingWrapper: {
    width: '100%',
    marginTop: 5,
  },
  driverRating: {},
  vehicleDetails: {
    marginRight: 20,
    marginTop: 8,
  },
  vehicleno: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#3E4958',
    alignSelf: 'flex-end',
  },
  vehicleName: {
    fontFamily: 'Inter-Regular',
    color: colors.black,
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 20,
    position: 'absolute',
    bottom: 5,
  },
  ContactButton: {
    backgroundColor: colors.yellow,
    padding: 20,
    width: '75%',
    borderRadius: 15,
    elevation: 2,
  },
  ContactButtonText: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 18,
    color: colors.black,
    alignSelf: 'center',
  },
  DeclineButtonWrapper: {
    width: '20%',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    borderRadius: 15,
    flexDirection: 'row',
    elevation: 2,
  },
  CrossIcon: {},
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalcontainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: hp('40%'),
    marginTop: hp('30%'),
    marginHorizontal: 20,
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CancelmodalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  Cancelmodalcontainer: {
    backgroundColor: '#FFFFFF',
    height: hp('20%'),
    marginTop: hp('40%'),
    marginHorizontal: 20,
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  cancelbtns: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 20,
    marginRight: 25,
  },
  cancelbtn: {
    margin: 10,
  },
  modalbuttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Okbtn: {
    backgroundColor: colors.yellow,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 25,
    marginHorizontal: 10,
    elevation: 5,
  },
  OkbtnText: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 15,
    color: colors.black,
  },
  carTopImage: {
    width: 100,
  },
  text: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 18,
    color: colors.lightBlack,
  },
  Callbtn: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 25,
    marginHorizontal: 10,
    backgroundColor: '#FFFFFF',
    elevation: 5,
  },
});
