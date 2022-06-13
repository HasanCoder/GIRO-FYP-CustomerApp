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
  RateButton: {
    backgroundColor: colors.yellow,
    padding: 20,
    flex: 1,
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
});
